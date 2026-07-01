// @ts-nocheck
{
const { existsSync, readFileSync, readdirSync, statSync } = require("node:fs");
const { join, relative } = require("node:path");

const root = process.cwd();
const outDir = join(root, "out");
const requiredStaticRoutes = [
  "/",
  "/library",
  "/rosary",
  "/confession",
  "/reflections/mass-readings",
  "/liturgical-living",
  "/community",
  "/confession/examination",
  "/sitemap.xml",
  "/robots.txt",
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
const sourceRoots = ["src/app", "src/components", "src/lib", "next.config.ts"];
const disallowedRuntimePatterns = [
  { pattern: /export const revalidate\s*=/, label: "ISR route revalidate" },
  { pattern: /next\s*:\s*\{[\s\S]*?revalidate/, label: "ISR fetch revalidate" },
  { pattern: /\brevalidatePath\s*\(/, label: "on-demand path revalidation" },
  { pattern: /\brevalidateTag\s*\(/, label: "on-demand tag revalidation" },
  { pattern: /dynamic\s*=\s*["']force-dynamic["']/, label: "force dynamic route" },
  { pattern: /\bNextRequest\b/, label: "request-bound NextRequest" },
  { pattern: /\bcookies\s*\(/, label: "request-time cookies" },
  { pattern: /\bheaders\s*\(/, label: "request-time headers" },
  { pattern: /\bdraftMode\s*\(/, label: "draft mode" },
  { pattern: /\bredirect\s*\(/, label: "Next runtime redirect" },
  { pattern: /\bpermanentRedirect\s*\(/, label: "Next runtime permanent redirect" },
];

const failures = [];

if (!existsSync(outDir)) {
  failures.push("Static export output directory `out` was not found.");
} else {
  for (const route of requiredStaticRoutes) {
    if (!hasStaticRoute(route)) {
      failures.push(`Missing static export for ${route}.`);
    }
  }
}

if (existsSync(join(root, "src", "proxy.ts"))) {
  failures.push("src/proxy.ts is present, but Next proxy is unsupported by static export.");
}

const apiRouteFiles = listFiles(join(root, "src", "app", "api")).filter((file) => file.endsWith("route.ts"));
if (apiRouteFiles.length) {
  failures.push(`API route handlers remain under src/app/api: ${apiRouteFiles.map(toProjectPath).join(", ")}`);
}

for (const file of generatedDynamicRouteFiles) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath)) continue;
  const source = readFileSync(fullPath, "utf8");
  if (!/export const dynamicParams = false;/.test(source)) {
    failures.push(`${file} is missing dynamicParams=false.`);
  }
  if (!/generateStaticParams/.test(source)) {
    failures.push(`${file} is missing generateStaticParams().`);
  }
}

for (const file of sourceRoots.flatMap((sourceRoot) => listFiles(join(root, sourceRoot)))) {
  if (!/\.(ts|tsx)$/.test(file)) continue;
  const source = readFileSync(file, "utf8");
  for (const check of disallowedRuntimePatterns) {
    if (check.pattern.test(source)) {
      failures.push(`${toProjectPath(file)} contains ${check.label}.`);
    }
  }
}

if (failures.length) {
  console.error("Static export audit failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Static export audit passed.");

function hasStaticRoute(route) {
  if (route === "/") return existsSync(join(outDir, "index.html"));
  if (route.endsWith(".xml") || route.endsWith(".txt")) return existsSync(join(outDir, route.slice(1)));

  const cleanRoute = route.replace(/^\/|\/$/g, "");
  return existsSync(join(outDir, `${cleanRoute}.html`)) || existsSync(join(outDir, cleanRoute, "index.html"));
}

function listFiles(target) {
  if (!existsSync(target)) return [];
  const stats = statSync(target);
  if (stats.isFile()) return [target];

  return readdirSync(target, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(target, entry.name);
    return entry.isDirectory() ? listFiles(fullPath) : [fullPath];
  });
}

function toProjectPath(file) {
  return relative(root, file).replace(/\\/g, "/");
}
}
