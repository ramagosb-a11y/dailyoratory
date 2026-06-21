{
const { readFileSync, readdirSync, statSync } = require("node:fs");
const { join, relative } = require("node:path");

type Finding = {
  file: string;
  message: string;
};

const root = process.cwd();
const libDir = join(root, "src", "lib");
const findings: Finding[] = [];

for (const filePath of walk(libDir)) {
  if (!filePath.endsWith(".ts") && !filePath.endsWith(".tsx")) continue;

  const source = readFileSync(filePath, "utf8");
  if (!source.includes("useSyncExternalStore")) continue;

  const file = relative(root, filePath);
  if (!hasSnapshotCache(source)) {
    findings.push({
      file,
      message:
        "useSyncExternalStore readers must cache parsed/localStorage snapshots so React sees stable object identity.",
    });
  }

  const unstableSnapshotFunctions = findSnapshotFunctionsReturningObjectLiterals(source);
  for (const functionName of unstableSnapshotFunctions) {
    findings.push({
      file,
      message: `${functionName} returns a fresh object literal. Snapshot functions should return a module-level constant or cached object.`,
    });
  }
}

if (findings.length) {
  console.error("Client store audit failed:\n");
  for (const finding of findings) {
    console.error(`- ${finding.file}: ${finding.message}`);
  }
  process.exit(1);
}

console.log("Client store audit passed.");

function hasSnapshotCache(source: string) {
  return /cached(?:Raw|Parsed)|SnapshotCache|storeSnapshotCache|reportSnapshotCache/.test(source);
}

function findSnapshotFunctionsReturningObjectLiterals(source: string) {
  const names: string[] = [];
  const snapshotFunctionPattern =
    /function\s+([A-Za-z0-9_]*Snapshot[A-Za-z0-9_]*)\s*\([^)]*\)\s*(?::[^{]+)?\{\s*return\s*\{/g;

  for (const match of source.matchAll(snapshotFunctionPattern)) {
    names.push(match[1]);
  }

  return names;
}

function* walk(directory: string): Generator<string> {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      yield* walk(fullPath);
    } else if (stats.isFile()) {
      yield fullPath;
    }
  }
}
}
