{
const { existsSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

const root = process.cwd();
const manifestPath = join(root, ".next", "prerender-manifest.json");
const requiredPrerenderedRoutes = [
  "/",
  "/dashboard",
  "/homilies",
  "/indulgences",
  "/library",
  "/liturgical-living",
  "/liturgical-living/calendar",
  "/liturgical-living/family",
  "/media",
  "/pray",
  "/pray/today",
  "/reflections/mass-readings",
  "/saints/saint-of-the-day",
  "/search",
  "/sitemap.xml",
  "/today",
  "/confession/examination",
];

if (!existsSync(manifestPath)) {
  console.error("Rendering strategy audit failed: .next/prerender-manifest.json was not found.");
  console.error("Run this audit after `next build`.");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const prerenderedRoutes = new Set(Object.keys(manifest.routes ?? {}));
const missingRoutes = requiredPrerenderedRoutes.filter((route) => !prerenderedRoutes.has(route));

if (missingRoutes.length) {
  console.error("Rendering strategy audit failed:\n");
  console.error("These high-traffic routes are not prerendered/ISR in .next/prerender-manifest.json:");
  for (const route of missingRoutes) console.error(`- ${route}`);
  console.error(
    [
      "",
      "This guard protects the Vercel Hobby Fluid Active CPU budget.",
      "Merge the static/ISR route fixes before deploying from the Git repo.",
    ].join("\n"),
  );
  process.exit(1);
}

console.log("Rendering strategy audit passed.");
}
