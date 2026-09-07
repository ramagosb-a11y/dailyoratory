import { readdir, stat, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
const root = process.cwd(),
  target = path.join(root, "public/images/fasting-retreat");
const source = path.resolve(root, "../output/fasting-retreat/artwork");
const content = JSON.parse(
  await readFile("src/content/fasting-retreat.json", "utf8"),
);
const refs = [
  ...new Set([...content.chapters, ...content.steps].map((x) => x.image)),
];
await mkdir(target, { recursive: true });
if (process.argv.includes("--check")) {
  for (const ref of refs) {
    const meta = await sharp(path.join(root, "public", ref)).metadata();
    if (meta.format !== "webp") throw Error("Unoptimized asset " + ref);
  }
  for (const name of await readdir(target)) {
    if (/\.(png|jpe?g)$/i.test(name))
      throw Error("Redundant original: " + name);
  }
  async function scan(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) await scan(p);
      else if (
        /\.(tsx?|css|json|mdx?)$/.test(p) &&
        /\/images\/fasting-retreat\/[^"'()\s]+\.(png|jpe?g)/i.test(
          await readFile(p, "utf8"),
        )
      )
        throw Error("Stale image reference " + p);
    }
  }
  await scan("src");
  console.log(
    "Validated " +
      refs.length +
      " optimized retreat assets and source references.",
  );
  process.exit(0);
}
const rows = [];
for (const name of await readdir(source)) {
  if (!/\.(png|jpe?g)$/i.test(name)) continue;
  const input = path.join(source, name),
    outputName = name.replace(/\.(png|jpe?g)$/i, ".webp"),
    output = path.join(target, outputName);
  const before = await sharp(input).metadata();
  await sharp(input)
    .webp({ quality: 88, alphaQuality: 100, effort: 6 })
    .toFile(output);
  const after = await sharp(output).metadata();
  if (
    before.width !== after.width ||
    before.height !== after.height ||
    before.hasAlpha !== after.hasAlpha
  )
    throw Error("Image geometry/transparency changed: " + name);
  const original = (await stat(input)).size,
    optimized = (await stat(output)).size;
  rows.push({
    file: outputName,
    width: before.width,
    height: before.height,
    original,
    optimized,
    saved: original - optimized,
    percent: Math.round((1 - optimized / original) * 10000) / 100,
  });
}
await mkdir("docs/fasting-retreat", { recursive: true });
const totals = rows.reduce(
  (a, r) => ({
    original: a.original + r.original,
    optimized: a.optimized + r.optimized,
    saved: a.saved + r.saved,
  }),
  { original: 0, optimized: 0, saved: 0 },
);
await writeFile(
  "docs/fasting-retreat/image-optimization.json",
  JSON.stringify({ quality: 88, format: "webp", totals, files: rows }, null, 2),
);
const lines = [
  "# Retreat image optimization",
  "",
  "25 original generated artworks converted to WebP at quality 88; no resizing, upscaling, cropping, or flattening. PNG masters remain in ../output/fasting-retreat/artwork, outside the deployment path.",
  "",
  "| File | Original bytes | WebP bytes | Bytes saved | Saved |",
  "|---|---:|---:|---:|---:|",
  ...rows.map(
    (r) =>
      "| " +
      r.file +
      " | " +
      r.original +
      " | " +
      r.optimized +
      " | " +
      r.saved +
      " | " +
      r.percent +
      "% |",
  ),
  "",
  "Total: " +
    totals.original +
    " → " +
    totals.optimized +
    " bytes; " +
    totals.saved +
    " bytes saved.",
  "",
  "The feature uses these 25 images. Existing companion application assets are unchanged: those applications are linked, not embedded. Existing WebP/AVIF, shared logos, favicons and tiny UI icons are intentionally unchanged. Mockup PNGs and editable artwork remain outside public/src and are not deployed.",
];
await writeFile("docs/fasting-retreat/image-optimization.md", lines.join("\n"));
console.log(JSON.stringify(totals));
