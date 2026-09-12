import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import { massJourneySteps } from "../src/data/massJourney.ts";
// Generated PNG masters live outside deployment assets. See docs/mass-journey-review.md.
await mkdir("public/images/mass/journey", { recursive: true });
let original = 0, optimized = 0;
for (const step of massJourneySteps) {
  const master = "output/imagegen/mass/" + step.id + ".png";
  const target = "public" + step.artwork.src;
  if (!process.argv.includes("--check")) await sharp(master).webp({ quality: 88, effort: 6 }).toFile(target);
  const meta = await sharp(target).metadata();
  if (meta.format !== "webp" || meta.width !== step.artwork.width || meta.height !== step.artwork.height) throw Error("Invalid image: " + step.id);
  original += (await stat(master)).size; optimized += (await stat(target)).size;
}
console.log(JSON.stringify({ assets: 24, original, optimized, savingsPercent: (100 * (1 - optimized / original)).toFixed(1) }));
