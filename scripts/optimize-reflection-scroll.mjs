import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const masters = path.join(root, 'output/imagegen/antique-scroll');
const destination = path.join(root, 'public/images/reflections/antique-scroll');
const ends = ['top', 'bottom'];
const pieces = ['left', 'center', 'right'];

// Prepare the image tool's white-matte exports for transparent, three-piece CSS
// composition. Only border-connected neutral matte is removed; highlights inside
// the walnut, metal, and parchment are retained.
async function prepare(end) {
  const input = path.join(masters, `${end}-master.png`);
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const count = width * height;
  const outside = new Uint8Array(count);
  const queue = new Int32Array(count);
  let head = 0;
  let tail = 0;
  function visit(pixel) {
    if (outside[pixel]) return;
    const i = pixel * 3;
    const low = Math.min(data[i], data[i + 1], data[i + 2]);
    const high = Math.max(data[i], data[i + 1], data[i + 2]);
    if (low < 175 || high - low > 22) return;
    outside[pixel] = 1;
    queue[tail++] = pixel;
  }
  for (let x = 0; x < width; x++) { visit(x); visit((height - 1) * width + x); }
  for (let y = 0; y < height; y++) { visit(y * width); visit(y * width + width - 1); }
  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    if (x) visit(pixel - 1);
    if (x < width - 1) visit(pixel + 1);
    if (pixel >= width) visit(pixel - width);
    if (pixel < count - width) visit(pixel + width);
  }
  const rgba = Buffer.alloc(count * 4);
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let pixel = 0; pixel < count; pixel++) {
    const from = pixel * 3, to = pixel * 4;
    rgba[to] = data[from]; rgba[to + 1] = data[from + 1]; rgba[to + 2] = data[from + 2];
    rgba[to + 3] = outside[pixel] ? 0 : 255;
    if (!outside[pixel]) {
      const x = pixel % width, y = Math.floor(pixel / width);
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
  }
  const border = 4;
  const left = Math.max(0, minX - border), top = Math.max(0, minY - border);
  const crop = { left, top, width: Math.min(width - left, maxX - left + border + 1), height: Math.min(height - top, maxY - top + border + 1) };
  assert(crop.height >= 224, 'Do not upscale a small master.');
  const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .extract(crop).resize({ height: 224, withoutEnlargement: true }).png().toBuffer();
  await fs.writeFile(path.join(masters, `${end}-cutout.png`), cutout);
  const meta = await sharp(cutout).metadata();
  const endWidth = 256;
  assert(meta.width > endWidth * 2);
  const bounds = [
    { left: 0, width: endWidth },
    { left: endWidth, width: meta.width - endWidth * 2 },
    { left: meta.width - endWidth, width: endWidth },
  ];
  const assets = [];
  for (let i = 0; i < pieces.length; i++) {
    const file = `${end}-${pieces[i]}.webp`;
    await sharp(cutout).extract({ ...bounds[i], top: 0, height: 224 })
      .webp({ quality: 88, alphaQuality: 100, effort: 6 }).toFile(path.join(destination, file));
    assets.push({ file, bytes: (await fs.stat(path.join(destination, file))).size, width: bounds[i].width, height: 224 });
  }
  return { end, masterBytes: (await fs.stat(input)).size, assets };
}

async function validate() {
  const assets = [];
  for (const end of ends) for (const piece of pieces) {
    const file = `${end}-${piece}.webp`;
    const absolute = path.join(destination, file);
    const metadata = await sharp(absolute).metadata();
    assert.equal(metadata.format, 'webp', `${file}: WebP required`);
    assert.equal(metadata.hasAlpha, true, `${file}: true alpha required`);
    assert.equal(metadata.height, 224, `${file}: shared height required`);
    if (piece !== 'center') assert.equal(metadata.width, 256);
    const stats = await sharp(absolute).stats();
    assert.equal(stats.channels[3].min, 0, `${file}: transparent pixels required`);
    assert.equal(stats.channels[3].max, 255, `${file}: opaque artwork required`);
    assets.push({ file, bytes: (await fs.stat(absolute)).size });
  }
  console.log(JSON.stringify({ result: 'PASS', transparentWebPAssets: assets.length, totalBytes: assets.reduce((sum, asset) => sum + asset.bytes, 0), assets }, null, 2));
}

if (process.argv.includes('--check')) {
  await validate();
} else {
  await fs.mkdir(destination, { recursive: true });
  const report = [];
  for (const end of ends) report.push(await prepare(end));
  const originalBytes = report.reduce((sum, item) => sum + item.masterBytes, 0);
  const optimizedBytes = report.flatMap(item => item.assets).reduce((sum, item) => sum + item.bytes, 0);
  const summary = { originalBytes, optimizedBytes, savedBytes: originalBytes - optimizedBytes, savedPercent: +((1 - optimizedBytes / originalBytes) * 100).toFixed(2), report };
  await fs.writeFile(path.join(masters, 'optimization-report.json'), JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary, null, 2));
  await validate();
}
