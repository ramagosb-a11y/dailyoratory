import { access, mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const root = process.cwd();
const outputIndex = process.argv.indexOf('--output');
const output = outputIndex === -1 ? null : path.resolve(root, process.argv[outputIndex + 1] || '');
const rasterExtensions = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif']);
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.jsx', '.md', '.mdx', '.mjs', '.ts', '.tsx', '.txt', '.yml', '.yaml']);
const excludedDirectories = new Set(['.git', '.next', 'node_modules', 'output', '.playwright-cli', '.tmp-edge-profile', 'qa']);
const textRoots = ['src', 'app', 'components', 'content', 'public', 'docs'];

async function walk(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(fullPath, predicate));
    else if (entry.isFile() && predicate(fullPath)) result.push(fullPath);
  }
  return result;
}

function portable(file) {
  return path.relative(root, file).replaceAll(path.sep, '/');
}

function publicUrl(file) {
  const relative = portable(file);
  return relative.startsWith('public/') ? `/${relative.slice('public/'.length)}` : null;
}

function referencesFor(file, textFiles) {
  const relative = portable(file);
  const needles = [relative, publicUrl(file), path.basename(file)].filter(Boolean);
  const references = [];
  for (const { file: textFile, content } of textFiles) {
    if (needles.some((needle) => content.includes(needle))) references.push(portable(textFile));
  }
  return references;
}

const rasterFiles = await walk(root, (file) => rasterExtensions.has(path.extname(file).toLowerCase()));
const textFiles = [];
const textCandidates = [];
for (const name of textRoots) {
  const directory = path.join(root, name);
  try {
    await access(directory);
    textCandidates.push(...await walk(directory, (file) => textExtensions.has(path.extname(file).toLowerCase())));
  } catch {
    // This repository may not use every conventional source directory.
  }
}
for (const entry of await readdir(root, { withFileTypes: true })) {
  const file = path.join(root, entry.name);
  if (entry.isFile() && textExtensions.has(path.extname(file).toLowerCase())) textCandidates.push(file);
}
for (const file of textCandidates) {
  textFiles.push({ file, content: await readFile(file, 'utf8') });
}
const images = [];

for (const file of rasterFiles) {
  const [fileStat, metadata, references] = await Promise.all([
    stat(file),
    sharp(file, { animated: true }).metadata(),
    referencesFor(file, textFiles),
  ]);
  const sha256 = createHash('sha256').update(await readFile(file)).digest('hex');
  images.push({
    path: portable(file),
    publicUrl: publicUrl(file),
    format: metadata.format || path.extname(file).slice(1).toLowerCase(),
    width: metadata.width ?? null,
    height: metadata.height ?? null,
    bytes: fileStat.size,
    hasAlpha: Boolean(metadata.hasAlpha),
    pages: metadata.pages ?? 1,
    animated: (metadata.pages ?? 1) > 1,
    orientation: metadata.orientation ?? null,
    sha256,
    references,
    productionAsset: portable(file).startsWith('public/'),
    oversized: fileStat.size >= 1024 * 1024,
  });
}

images.sort((a, b) => a.path.localeCompare(b.path));
const report = {
  generatedAt: new Date().toISOString(),
  excludes: [...excludedDirectories],
  totals: {
    files: images.length,
    bytes: images.reduce((sum, image) => sum + image.bytes, 0),
    productionFiles: images.filter((image) => image.productionAsset).length,
    productionBytes: images.filter((image) => image.productionAsset).reduce((sum, image) => sum + image.bytes, 0),
    oversizedFiles: images.filter((image) => image.oversized).length,
  },
  images,
};

const serialized = `${JSON.stringify(report, null, 2)}\n`;
if (output) {
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, serialized);
  console.log(`Wrote ${portable(output)}`);
} else {
  console.log(serialized);
}
