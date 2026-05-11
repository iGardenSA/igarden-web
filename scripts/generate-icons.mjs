// scripts/generate-icons.mjs
// Generates all PWA icon sizes from a single source image.
// Usage: node scripts/generate-icons.mjs

import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const SOURCE = 'public/logo/icon-master-original.png';
const OUT = 'public/favicons';

if (!existsSync(OUT)) {
  await mkdir(OUT, { recursive: true });
}

// Standard resize — source is already circular on white bg
async function resized(size) {
  return sharp(SOURCE)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
    .png();
}

// Maskable — safe zone is 80% centred, rest is white padding
async function maskable(size) {
  const safe = Math.round(size * 0.80);
  const offset = Math.round((size - safe) / 2);
  const inner = await resized(safe).then(s => s.toBuffer());
  return sharp({
    create: { width: size, height: size, channels: 3, background: { r: 255, g: 255, b: 255 } }
  })
    .composite([{ input: inner, top: offset, left: offset }])
    .png();
}

const TASKS = [
  { file: 'favicon-16.png',            size: 16,   fn: resized },
  { file: 'favicon-32.png',            size: 32,   fn: resized },
  { file: 'favicon-48.png',            size: 48,   fn: resized },
  { file: 'favicon-96.png',            size: 96,   fn: resized },
  { file: 'favicon-180.png',           size: 180,  fn: resized },
  { file: 'favicon-192.png',           size: 192,  fn: resized },
  { file: 'favicon-256.png',           size: 256,  fn: resized },
  { file: 'favicon-512.png',           size: 512,  fn: resized },
  { file: 'apple-touch-icon.png',      size: 180,  fn: resized },
  { file: 'android-chrome-192x192.png',size: 192,  fn: resized },
  { file: 'android-chrome-512x512.png',size: 512,  fn: resized },
  { file: 'maskable-192.png',          size: 192,  fn: maskable },
  { file: 'maskable-512.png',          size: 512,  fn: maskable },
];

console.log('🎨 Generating iGarden PWA icons from', SOURCE, '\n');

for (const { file, size, fn } of TASKS) {
  const img = await fn(size);
  await img.toFile(path.join(OUT, file));
  console.log(`  ✅  ${file.padEnd(32)} ${size}×${size}`);
}

// favicon.ico from 32px version
const buf32 = await resized(32).then(s => s.toBuffer());
await sharp(buf32).toFile(path.join(OUT, 'favicon.ico'));
console.log(`  ✅  favicon.ico                      32×32  (ICO)`);

console.log('\n🎉 Done — all icons in /' + OUT + '/\n');
