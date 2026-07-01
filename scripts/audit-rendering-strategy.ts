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
const minimumRevalidateSeconds = 60 * 60 * 24;
const quotaSensitiveRevalidateFiles = [
  "src/app/dashboard/page.tsx",
  "src/app/homilies/page.tsx",
  "src/app/indulgences/page.tsx",
  "src/app/library/page.tsx",
  "src/app/liturgical-living/calendar/page.tsx",
  "src/app/liturgical-living/family/page.tsx",
  "src/app/liturgical-living/page.tsx",
  "src/app/media/page.tsx",
  "src/app/page.tsx",
  "src/app/pray/page.tsx",
  "src/app/pray/today/page.tsx",
  "src/app/reflections/mass-readings/page.tsx",
  "src/app/saints/saint-of-the-day/page.tsx",
  "src/app/search/page.tsx",
  "src/app/sitemap.ts",
  "src/app/today/page.tsx",
];
const quotaSensitiveFetchCacheFiles = [
  "src/lib/googleLiturgicalCalendar.ts",
  "src/lib/media.ts",
  "src/lib/massReadingsGoogleSheets.ts",
  "src/lib/saintOfTheDay.ts",
];
const generatedDynamicRouteFiles = [
  "src/app/adoration/[slug]/page.tsx",
  "src/app/community/events/[slug]/page.tsx",
  "src/app/devotions/[slug]/page.tsx",
  "src/app/devotions/holy-rosary/[group]/[mystery]/page.tsx",
  "src/app/devotions/holy-rosary/[group]/page.tsx",
  "src/app/library/[slug]/page.tsx",
  "src/app/media/[slug]/page.tsx",
  "src/app/pathways/[slug]/page.tsx",
  "src/app/pathways/[slug]/steps/[stepSlug]/page.tsx",
  "src/app/prayer-intentions/[slug]/page.tsx",
  "src/app/prayers/[slug]/page.tsx",
  "src/app/reflections/[slug]/page.tsx",
  "src/app/reflections/mass-readings/[slug]/page.tsx",
  "src/app/resources/[slug]/page.tsx",
  "src/app/sacraments/[slug]/page.tsx",
  "src/app/saints/[slug]/page.tsx",
];
const shortManifestRevalidateRoutes = requiredPrerenderedRoutes.filter((route) => {
  const initialRevalidateSeconds = manifest.routes?.[route]?.initialRevalidateSeconds;
  return typeof initialRevalidateSeconds === "number" && initialRevalidateSeconds < minimumRevalidateSeconds;
});

const shortRevalidateFiles = quotaSensitiveRevalidateFiles.filter((file) => {
  const source = readFileSync(join(root, file), "utf8");
  const match = source.match(/export const revalidate = (\d+)/);
  return match && Number(match[1]) < minimumRevalidateSeconds;
});
const shortFetchCacheFiles = quotaSensitiveFetchCacheFiles.filter((file) => {
  const source = readFileSync(join(root, file), "utf8");
  const match = source.match(/const REVALIDATE_SECONDS = ([^;]+)/);
  if (!match) return false;
  const seconds = Function(`"use strict"; return (${match[1]});`)();
  return Number(seconds) < minimumRevalidateSeconds;
});
const missingDynamicParamGuards = generatedDynamicRouteFiles.filter((file) => {
  const source = readFileSync(join(root, file), "utf8");
  return !/export const dynamicParams = false;/.test(source);
});

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

if (
  shortManifestRevalidateRoutes.length ||
  shortRevalidateFiles.length ||
  shortFetchCacheFiles.length ||
  missingDynamicParamGuards.length
) {
  console.error("Rendering strategy audit failed:\n");

  if (shortManifestRevalidateRoutes.length) {
    console.error("These built routes revalidate more often than once per day:");
    for (const route of shortManifestRevalidateRoutes) {
      const seconds = manifest.routes?.[route]?.initialRevalidateSeconds;
      console.error(`- ${route} (${seconds}s)`);
    }
  }

  if (shortRevalidateFiles.length) {
    console.error("\nThese quota-sensitive pages revalidate more often than once per day:");
    for (const file of shortRevalidateFiles) console.error(`- ${file}`);
  }

  if (shortFetchCacheFiles.length) {
    console.error("\nThese shared data fetch caches revalidate more often than once per day:");
    for (const file of shortFetchCacheFiles) console.error(`- ${file}`);
  }

  if (missingDynamicParamGuards.length) {
    console.error("\nThese generated dynamic routes allow unknown params to generate cache entries:");
    for (const file of missingDynamicParamGuards) console.error(`- ${file}`);
  }

  console.error(
    [
      "",
      "This guard protects the Vercel Hobby ISR Writes and Fluid Active CPU budgets.",
      "Keep broad public pages daily-or-longer and set dynamicParams=false on generated dynamic routes.",
    ].join("\n"),
  );
  process.exit(1);
}

console.log("Rendering strategy audit passed.");
}
