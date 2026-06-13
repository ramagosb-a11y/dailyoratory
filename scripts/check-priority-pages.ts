import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const priorityRoutes = [
  "/",
  "/what-should-i-do",
  "/catholic-life",
  "/catholic-answers",
  "/prayers",
  "/confession",
  "/devotions/holy-rosary",
  "/sin-and-temptation",
  "/formation/grace",
  "/formation/eschatology",
  "/liturgical-living/lent",
  "/sacramental-emergency",
  "/prophecy-series",
] as const;

async function main() {
  let foundCount = 0;

  for (const route of priorityRoutes) {
    const exists = await routeExists(route);
    if (exists) {
      foundCount += 1;
      console.log(`[check:priority-pages] OK ${route}`);
    } else {
      console.warn(`[check:priority-pages] WARN ${route} :: route file not found`);
    }
  }

  console.log(`[check:priority-pages] found ${foundCount}/${priorityRoutes.length} priority routes.`);
}

async function routeExists(route: string) {
  const routePath = route === "/" ? [] : route.replace(/^\/+|\/+$/g, "").split("/");
  const appDirectory = path.join(projectRoot, "src", "app", ...routePath);
  const candidates = [
    path.join(appDirectory, "page.tsx"),
    path.join(appDirectory, "page.ts"),
    path.join(appDirectory, "page.jsx"),
    path.join(appDirectory, "page.js"),
  ];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return true;
    } catch {
      continue;
    }
  }

  return false;
}

void main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[check:priority-pages] failed: ${message}`);
  process.exitCode = 1;
});
