const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const OUT_DIRS = [
  path.join(ROOT_DIR, 'dist'),
  path.join(ROOT_DIR, 'public-demo')
];

console.log('Building HarvestIQ Public Demo Version for Production/Vercel...');

OUT_DIRS.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1. Process index.html for Public Demo
let html = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

// Title & Meta
html = html.replace(
  /<title>.*?<\/title>/i,
  '<title>HarvestIQ • Solar-Powered Smart Cold Storage (SIH 2026)</title>'
);

// Tagline Bar
html = html.replace(
  /<span>☀️ <b>COLDCARE<\/b> • Smart Solar Cold Storage: <i>"Protect your harvest\. Store smarter\. Sell at the right time\."<\/i><\/span>/,
  '<span>☀️ <b>HARVESTIQ</b> • Smart Solar Cold Storage: <i>"Intelligent last-mile preservation for fresh produce"</i></span>'
);

// Header Brand Title & Demo Mode Tag
html = html.replace(
  /<div class="brand-title">\s*<span>ColdCare<\/span>\s*<span class="brand-tag">SIH 2026 Prototype<\/span>\s*<\/div>/,
  `<div class="brand-title">
        <span>HarvestIQ</span>
        <span class="brand-tag" style="background:#087443;color:#fff;display:inline-flex;align-items:center;gap:4px">
          <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#4ade80;animation:cardAlertPulse 1.8s infinite"></span>
          DEMO MODE
        </span>
      </div>`
);

// Remove offline localhost references
html = html.replace(
  '<td>802.11 b/g/n (Offline Localhost Hotspot)</td>',
  '<td>802.11 b/g/n (Wi-Fi Edge Hotspot / Cloud Telemetry)</td>'
);

html = html.replace(
  'This website functions as a fully interactive localhost prototype for the Smart India Hackathon (SIH 2026).',
  'This website functions as a fully interactive public prototype demonstration for the Smart India Hackathon (SIH 2026).'
);

OUT_DIRS.forEach(dir => {
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
});
console.log('✓ index.html processed and written to build output directories');

// 2. Process script.js for Public Demo
let script = fs.readFileSync(path.join(ROOT_DIR, 'script.js'), 'utf8');
script = script.replace(
  'const STORAGE_KEY = "coldcare_sih2026_localhost_state";',
  'const STORAGE_KEY = "harvestiq_sih2026_public_demo_state";'
);
OUT_DIRS.forEach(dir => {
  fs.writeFileSync(path.join(dir, 'script.js'), script, 'utf8');
});
console.log('✓ script.js processed and written to build output directories');

// 3. Copy Static Assets
const staticFiles = [
  'style.css',
  'coldcare-enhancements.css',
  'coldcare-enhancements.js',
  'hero_cold_storage.jpg',
  'harvestiq_qr_code.png'
];

staticFiles.forEach(file => {
  const src = path.join(ROOT_DIR, file);
  if (fs.existsSync(src)) {
    OUT_DIRS.forEach(dir => {
      fs.copyFileSync(src, path.join(dir, file));
    });
    console.log(`✓ Copied ${file}`);
  }
});

// 4. Netlify _redirects for SPA routing
OUT_DIRS.forEach(dir => {
  fs.writeFileSync(path.join(dir, '_redirects'), '/*  /index.html  200\n', 'utf8');
});
console.log('✓ Created _redirects');

// 5. Vercel vercel.json in build outputs
const vercelPublicConfig = {
  version: 2,
  rewrites: [
    { source: "/(.*)", destination: "/index.html" }
  ]
};
OUT_DIRS.forEach(dir => {
  fs.writeFileSync(path.join(dir, 'vercel.json'), JSON.stringify(vercelPublicConfig, null, 2), 'utf8');
});
console.log('✓ Created output vercel.json');

console.log('\nHarvestIQ Public Demo Build Completed Successfully for Vercel & Production!');
