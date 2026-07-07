const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 45678;

// Import data for route generation
const glossary = require('../src/data/glossary.js').default || require('../src/data/glossary.js');
const integrations = require('../src/data/integrations.js').default || require('../src/data/integrations.js');
const useCases = require('../src/data/useCases.js').default || require('../src/data/useCases.js');
const alternatives = require('../src/data/alternatives.js').default || require('../src/data/alternatives.js');
const industries = require('../src/data/industries.js').default || require('../src/data/industries.js');
const competitors = require('../src/data/competitors.js').default || require('../src/data/competitors.js');
const countries = require('../src/data/countries.js').default || require('../src/data/countries.js');

// Parse blog post slugs from both blog data files
const blogSlugs = [];
['../src/data/blogPosts.js', '../src/data/blogPostsSEO.js'].forEach(file => {
  try {
    const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    const matches = content.matchAll(/slug:\s*'([^']+)'/g);
    for (const m of matches) blogSlugs.push(m[1]);
  } catch(e) {}
});

const allRoutes = [
  '/',
  '/blog', '/docs', '/slack-app', '/glossary', '/support',
  '/privacy', '/terms', '/refund', '/shipping',
  '/slack-ticketing-system', '/slack-request-tracking', '/slack-help-desk',
  '/compare/halp-alternative', '/compare/pingdesk-vs-others',
  '/tools/meeting-cost-calculator',
  ...glossary.map(x => `/glossary/${x.slug}`),
  ...integrations.map(x => `/integrations/${x.slug}`),
  ...useCases.map(x => `/use-cases/${x.slug}`),
  ...alternatives.map(x => `/alternative-to/${x.slug}`),
  ...industries.map(x => `/slack-ticketing-for-${x.slug}`),
  ...competitors.map(x => `/compare/${x.slug}`),
  ...countries.map(x => `/slack-ticketing-in/${x.slug}`),
  ...blogSlugs.map(x => `/blog/${x}`),
];

// Simple static file server for the build directory
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(BUILD_DIR, req.url === '/' ? 'index.html' : req.url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(BUILD_DIR, 'index.html');
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html', '.js': 'application/javascript',
        '.css': 'text/css', '.json': 'application/json',
        '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
      };

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404);
          res.end();
          return;
        }
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
        res.end(content);
      });
    });

    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log(`Pre-rendering ${allRoutes.length} routes...`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let rendered = 0;
  let failed = 0;
  const CONCURRENCY = 5;

  // Process routes in batches
  for (let i = 0; i < allRoutes.length; i += CONCURRENCY) {
    const batch = allRoutes.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(async (route) => {
      const page = await browser.newPage();
      try {
        // Block external requests (analytics, fonts) for faster rendering
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          const url = req.url();
          if (url.includes('googletagmanager') || url.includes('google-analytics') || url.includes('fonts.googleapis')) {
            req.abort();
          } else {
            req.continue();
          }
        });

        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: 'networkidle0',
          timeout: 15000,
        });

        // Wait for React to render
        await page.waitForSelector('#root > *', { timeout: 10000 });

        const html = await page.content();

        // Write the pre-rendered HTML
        const filePath = route === '/'
          ? path.join(BUILD_DIR, 'index.html')
          : path.join(BUILD_DIR, route, 'index.html');

        const dir = path.dirname(filePath);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(filePath, html);

        rendered++;
        if (rendered % 50 === 0) {
          console.log(`  ${rendered}/${allRoutes.length} done...`);
        }
      } catch (err) {
        failed++;
        console.error(`  ✗ ${route}: ${err.message}`);
      } finally {
        await page.close();
      }
    }));
  }

  await browser.close();
  server.close();

  console.log(`\n✅ Pre-rendered ${rendered} pages (${failed} failed)`);
}

prerender().catch(console.error);
