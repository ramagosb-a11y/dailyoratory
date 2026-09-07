import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const blockedMarker = join(root, ".do-not-deploy-from-this-folder");

if (existsSync(blockedMarker)) {
  console.error(
    [
      "This folder is marked as a legacy deploy copy and must not be deployed.",
      "",
      "Use the Git repo source of truth instead:",
      "  C:\\Users\\brent\\OneDrive\\Documents\\Codex\\Ascension\\brotherhood-of-ascension",
      "",
      "Reason: deploying from a drifted copy previously reintroduced a fixed",
      "React client-store bug on /confession/examination.",
    ].join("\n"),
  );
  process.exit(1);
}
