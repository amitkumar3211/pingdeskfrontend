const fs = require('fs');
const path = require('path');

// Import data files
const glossary = require('../src/data/glossary.js').default || require('../src/data/glossary.js');
const integrations = require('../src/data/integrations.js').default || require('../src/data/integrations.js');
const useCases = require('../src/data/useCases.js').default || require('../src/data/useCases.js');
const alternatives = require('../src/data/alternatives.js').default || require('../src/data/alternatives.js');
const industries = require('../src/data/industries.js').default || require('../src/data/industries.js');
const competitors = require('../src/data/competitors.js').default || require('../src/data/competitors.js');

const BASE = 'https://www.getpingdesk.com';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/docs', priority: '0.8', changefreq: 'monthly' },
  { path: '/slack-app', priority: '0.8', changefreq: 'monthly' },
  { path: '/glossary', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/meeting-cost-calculator', priority: '0.7', changefreq: 'monthly' },
  { path: '/slack-ticketing-system', priority: '0.8', changefreq: 'monthly' },
  { path: '/slack-request-tracking', priority: '0.8', changefreq: 'monthly' },
  { path: '/slack-help-desk', priority: '0.8', changefreq: 'monthly' },
  { path: '/compare/halp-alternative', priority: '0.7', changefreq: 'monthly' },
  { path: '/compare/pingdesk-vs-others', priority: '0.7', changefreq: 'monthly' },
  { path: '/support', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/refund', priority: '0.3', changefreq: 'yearly' },
  { path: '/shipping', priority: '0.3', changefreq: 'yearly' },
];

const dynamicRoutes = [
  ...glossary.map(x => ({ path: `/glossary/${x.slug}`, priority: '0.5', changefreq: 'monthly' })),
  ...integrations.map(x => ({ path: `/integrations/${x.slug}`, priority: '0.6', changefreq: 'monthly' })),
  ...useCases.map(x => ({ path: `/use-cases/${x.slug}`, priority: '0.6', changefreq: 'monthly' })),
  ...alternatives.map(x => ({ path: `/alternative-to/${x.slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...industries.map(x => ({ path: `/slack-ticketing-for-${x.slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...competitors.map(x => ({ path: `/compare/${x.slug}`, priority: '0.7', changefreq: 'monthly' })),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${BASE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const buildDir = path.join(__dirname, '..', 'build');
const publicDir = path.join(__dirname, '..', 'public');

// Write to both build (for current deploy) and public (for future builds)
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
if (fs.existsSync(buildDir)) {
  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
}

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
if (fs.existsSync(buildDir)) {
  fs.writeFileSync(path.join(buildDir, 'robots.txt'), robots);
}

console.log(`Generated sitemap.xml with ${allRoutes.length} URLs`);
console.log(`Generated robots.txt`);
