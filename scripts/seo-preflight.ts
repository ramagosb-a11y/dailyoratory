import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function runScript(scriptName: string) {
  const result = spawnSync(`npm run ${scriptName}`, {
    cwd: projectRoot,
    stdio: "inherit",
    shell: true,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("[seo:preflight] Running URL validation...");
runScript("validate:urls");

console.log("[seo:preflight] Checking priority pages...");
runScript("check:priority-pages");

console.log("[seo:preflight] SEO preflight passed.");
