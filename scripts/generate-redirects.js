/**
 * Regenerates the 301 redirects in vercel.json for pruned programmatic pages.
 *
 * Run this manually after editing src/data/curated.js, then commit vercel.json.
 * It cannot run as part of the build: Vercel reads vercel.json before the build
 * command executes, so a redirect written during the build would never apply.
 *
 *   node scripts/generate-redirects.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function readCurated(name) {
  const src = fs.readFileSync(path.join(ROOT, 'src/data/curated.js'), 'utf8');
  const block = src.match(new RegExp(`${name} = \\[([\\s\\S]*?)\\];`));
  if (!block) throw new Error(`Could not find ${name} in curated.js`);
  return (block[1].match(/'[^']+'/g) || []).map((s) => s.slice(1, -1));
}

function readAll(file) {
  // The data files are ES modules; pull the slugs out textually rather than
  // dragging in a transpiler just to enumerate them.
  const src = fs.readFileSync(path.join(ROOT, 'src/data', file), 'utf8');
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
}

const sections = [
  {
    file: 'integrations.js',
    prefix: '/integrations',
    curated: readCurated('CURATED_INTEGRATIONS'),
    // Dropped integrations are all "connect X to Slack" intent.
    destination: '/slack-ticketing-system',
  },
  {
    file: 'alternatives.js',
    prefix: '/alternative-to',
    curated: readCurated('CURATED_ALTERNATIVES'),
    // Dropped alternatives are all comparison intent.
    destination: '/compare/pingdesk-vs-others',
  },
];

const redirects = [];
for (const s of sections) {
  const keep = new Set(s.curated);
  const dropped = readAll(s.file).filter((slug) => !keep.has(slug));
  for (const slug of dropped) {
    redirects.push({
      source: `${s.prefix}/${slug}`,
      destination: s.destination,
      permanent: true,
    });
  }
  console.log(`${s.prefix}: keeping ${keep.size}, redirecting ${dropped.length}`);
}

const vercelPath = path.join(ROOT, 'vercel.json');
const config = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
config.redirects = redirects;

// `redirects` must be evaluated before the SPA catch-all rewrite, which Vercel
// already does (redirects run ahead of rewrites), so ordering here is cosmetic.
fs.writeFileSync(vercelPath, `${JSON.stringify(config, null, 2)}\n`);
console.log(`\nWrote ${redirects.length} redirects to vercel.json`);
