#!/usr/bin/env node
/**
 * Export iGarden Pitch Deck → PDF
 * Usage: node scripts/export-pitch-pdf.js
 * Requires: npm install puppeteer (run once)
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SLIDES = [
  'pitch-deck-cover.html',
  'pitch-deck-why-now.html',
  'pitch-deck-challenge.html',
  'pitch-deck-regulatory-bridge.html',
  'pitch-deck-integrated-solution.html',
  'pitch-deck-smart-os.html',
  'pitch-deck-roadmap.html',
  'pitch-deck-live-demo.html',
  'pitch-deck-lab-to-market.html',
  'pitch-deck-achievements.html',
  'pitch-deck-market-size.html',
  'pitch-deck-revenue-model.html',
  'pitch-deck-competitive-analysis.html',
  'pitch-deck-team.html',
  'pitch-deck-why-sunbolah.html',
];

const BASE_URL = 'http://localhost:3000';
const OUTPUT = path.join(__dirname, '..', 'iGarden-Pitch-Sunbolah-2026.pdf');
const SLIDE_WIDTH  = 1280;
const SLIDE_HEIGHT = 720;

async function run() {
  console.log('🚀 Starting Puppeteer...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const pdfBuffers = [];

  for (let i = 0; i < SLIDES.length; i++) {
    const slide = SLIDES[i];
    const url = `${BASE_URL}/${slide}`;
    console.log(`  [${i + 1}/${SLIDES.length}] ${slide}`);

    const page = await browser.newPage();
    await page.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

    // Wait for fonts & icons to render
    await new Promise(r => setTimeout(r, 800));

    const pdf = await page.pdf({
      width:  `${SLIDE_WIDTH}px`,
      height: `${SLIDE_HEIGHT}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    pdfBuffers.push(pdf);
    await page.close();
  }

  await browser.close();

  // Merge: write the last buffer and insert all page streams
  // Simple merge using pdf-lib if available, otherwise save slides separately
  try {
    const { PDFDocument } = require('pdf-lib');

    console.log('\n📄 Merging into single PDF...');
    const merged = await PDFDocument.create();

    for (const buf of pdfBuffers) {
      const doc = await PDFDocument.load(buf);
      const pages = await merged.copyPages(doc, doc.getPageIndices());
      pages.forEach(p => merged.addPage(p));
    }

    const bytes = await merged.save();
    fs.writeFileSync(OUTPUT, bytes);
    console.log(`\n✅ Done! PDF saved to:\n   ${OUTPUT}`);

  } catch (e) {
    // pdf-lib not installed — save individual slide PDFs
    console.log('\n⚠️  pdf-lib not found — saving individual slide PDFs...');
    const dir = path.join(__dirname, '..', 'pitch-pdf-slides');
    fs.mkdirSync(dir, { recursive: true });
    SLIDES.forEach((s, i) => {
      const name = `slide-${String(i + 1).padStart(2, '0')}.pdf`;
      fs.writeFileSync(path.join(dir, name), pdfBuffers[i]);
    });
    console.log(`✅ 15 PDFs saved in: ${dir}`);
    console.log('   Merge them manually or run: npm install pdf-lib && node scripts/export-pitch-pdf.js');
  }
}

run().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
