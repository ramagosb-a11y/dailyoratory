import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const root = process.cwd();
const publicDirectory = path.join(root, 'public');
const write = process.argv.includes('--write');
const check = process.argv.includes('--check');
const reportIndex = process.argv.indexOf('--report');
const reportPath = path.resolve(root, reportIndex === -1
  ? 'docs/features/sitewide-raster-image-optimization/CONVERSION-REPORT.json'
  : process.argv[reportIndex + 1]);
const sourceExtensions = new Set(['.png', '.jpg', '.jpeg']);
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.jsx', '.md', '.mdx', '.mjs', '.ts', '.tsx', '.txt', '.yml', '.yaml']);
const textRoots = ['src', 'app', 'components', 'content', 'public', 'docs'];
const excludedDirectories = new Set(['.git', '.next', 'node_modules', 'output']);
const oversizedBytes = 1024 * 1024;

async function walk(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(file, predicate));
    else if (entry.isFile() && predicate(file)) result.push(file);
  }
  return result;
}

function relative(file) {
  return path.relative(root, file).replaceAll(path.sep, '/');
}

async function textFiles() {
  const files = [];
  for (const name of textRoots) {
    const directory = path.join(root, name);
    try {
      files.push(...await walk(directory, (file) => textExtensions.has(path.extname(file).toLowerCase())));
    } catch { /* Conventional directory is optional. */ }
  }
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const file = path.join(root, entry.name);
    if (entry.isFile() && textExtensions.has(path.extname(file).toLowerCase())) files.push(file);
  }
  return [...new Set(files)];
}

async function candidates() {
  const files = await walk(publicDirectory, (file) => sourceExtensions.has(path.extname(file).toLowerCase()));
  const result = [];
  for (const file of files) {
    const [fileStat, metadata] = await Promise.all([stat(file), sharp(file, { animated: true }).metadata()]);
    if (fileStat.size >= oversizedBytes && (metadata.pages ?? 1) === 1) {
      result.push({ file, sourceBytes: fileStat.size, metadata });
    }
  }
  return result.sort((a, b) => a.file.localeCompare(b.file));
}

if (check) {
  const remaining = await candidates();
  if (remaining.length) {
    console.error(`Found ${remaining.length} oversized public PNG/JPEG file(s) that still need optimization:`);
    for (const candidate of remaining) console.error(`- ${relative(candidate.file)}`);
    process.exitCode = 1;
  } else {
    console.log('No oversized public PNG/JPEG files remain.');
  }
  process.exit();
}

const plan = await candidates();
if (!write) {
  console.log(JSON.stringify(plan.map(({ file, sourceBytes, metadata }) => ({
    source: relative(file),
    output: relative(file).replace(/\.(png|jpe?g)$/i, '.webp'),
    sourceBytes,
    width: metadata.width,
    height: metadata.height,
    hasAlpha: Boolean(metadata.hasAlpha),
  })), null, 2));
  process.exit();
}

const conversions = [];
for (const candidate of plan) {
  const destination = candidate.file.replace(/\.(png|jpe?g)$/i, '.webp');
  const sourceMetadata = candidate.metadata;
  const outputBuffer = await sharp(candidate.file, { animated: false })
    .webp({ quality: 85, effort: 6, smartSubsample: true })
    .withMetadata({ orientation: sourceMetadata.orientation })
    .toBuffer();
  const outputMetadata = await sharp(outputBuffer).metadata();
  const sameDimensions = outputMetadata.width === sourceMetadata.width && outputMetadata.height === sourceMetadata.height;
  const alphaPreserved = !sourceMetadata.hasAlpha || outputMetadata.hasAlpha;
  if (!sameDimensions || !alphaPreserved || outputBuffer.length >= candidate.sourceBytes) {
    throw new Error(`Rejected ${relative(candidate.file)}: dimensions/alpha changed or WebP was not smaller.`);
  }
  await writeFile(destination, outputBuffer);
  conversions.push({
    source: relative(candidate.file),
    output: relative(destination),
    sourceBytes: candidate.sourceBytes,
    outputBytes: outputBuffer.length,
    width: outputMetadata.width,
    height: outputMetadata.height,
    hasAlpha: Boolean(outputMetadata.hasAlpha),
  });
}

const changedReferences = [];
for (const file of await textFiles()) {
  let content = await readFile(file, 'utf8');
  const original = content;
  for (const conversion of conversions) {
    const sourceUrl = `/${conversion.source.slice('public/'.length)}`;
    const outputUrl = `/${conversion.output.slice('public/'.length)}`;
    content = content
      .replaceAll(sourceUrl, outputUrl)
      .replaceAll(conversion.source, conversion.output)
      .replaceAll(path.basename(conversion.source), path.basename(conversion.output));
  }
  if (content !== original) {
    await writeFile(file, content);
    changedReferences.push(relative(file));
  }
}

for (const conversion of conversions) await rm(path.join(root, conversion.source));

const totals = conversions.reduce((summary, conversion) => ({
  sourceBytes: summary.sourceBytes + conversion.sourceBytes,
  outputBytes: summary.outputBytes + conversion.outputBytes,
}), { sourceBytes: 0, outputBytes: 0 });
const report = {
  generatedAt: new Date().toISOString(),
  format: 'webp',
  quality: 85,
  conversions,
  changedReferences,
  totals: {
    ...totals,
    bytesSaved: totals.sourceBytes - totals.outputBytes,
    percentSaved: totals.sourceBytes === 0 ? 0 : Number((((totals.sourceBytes - totals.outputBytes) / totals.sourceBytes) * 100).toFixed(2)),
  },
};
await mkdir(path.dirname(reportPath), { recursive: true });
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Converted ${conversions.length} image(s); saved ${report.totals.bytesSaved} bytes. Wrote ${relative(reportPath)}.`);
