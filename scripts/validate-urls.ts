import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type ValidationIssue = {
  file: string;
  line: number;
  value: string;
  reason: string;
  severity: "error" | "warning";
};

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scanDirectories = ["src/app", "src/components", "src/config", "src/data", "src/lib", "scripts"];
const generatedSitemapPath = path.join(projectRoot, ".next", "server", "app", "sitemap.xml.body");
const issues: ValidationIssue[] = [];

const malformedChecks = [
  { test: (value: string) => /dailyoratory\.faith\/https?:\/\//i.test(value), reason: "duplicated Daily Oratory domain followed by another URL" },
  { test: (value: string) => /dailyoratory\.faith\/http:\/\//i.test(value), reason: "duplicated Daily Oratory domain followed by an http URL" },
  { test: (value: string) => /%20https?:\/\//i.test(value), reason: "encoded second URL" },
  { test: (value: string) => /\/https?:\/\//i.test(value), reason: "embedded absolute URL in path" },
  { test: (value: string) => /\shttps?:\/\//i.test(value), reason: "space-separated second URL" },
];

async function main() {
  for (const directory of scanDirectories) {
    await scanDirectory(path.join(projectRoot, directory));
  }

  await scanGeneratedSitemap();

  for (const issue of issues) {
    const prefix = issue.severity === "error" ? "ERROR" : "WARN";
    console.log(
      `[validate:urls] ${prefix} ${issue.file}:${issue.line} :: ${issue.reason} :: ${issue.value}`,
    );
  }

  const errorCount = issues.filter((issue) => issue.severity === "error").length;
  if (errorCount > 0) {
    console.error(`[validate:urls] failed with ${errorCount} error(s).`);
    process.exitCode = 1;
    return;
  }

  console.log("[validate:urls] URL validation passed.");
}

async function scanDirectory(directory: string) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await scanDirectory(fullPath);
      continue;
    }

    if (!/\.(ts|tsx|mts)$/.test(entry.name)) {
      continue;
    }

    const content = await readFile(fullPath, "utf8");
    scanFileContent(path.relative(projectRoot, fullPath).replace(/\\/g, "/"), content);
  }
}

async function scanGeneratedSitemap() {
  try {
    await stat(generatedSitemapPath);
  } catch {
    return;
  }

  const content = await readFile(generatedSitemapPath, "utf8");
  scanFileContent(".next/server/app/sitemap.xml.body", content, true);
}

function scanFileContent(file: string, content: string, isGeneratedSitemap = false) {
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const stringLiterals = Array.from(line.matchAll(/["'`]([^"'`]+)["'`]/g)).map((match) => match[1]);

    for (const literal of stringLiterals) {
      validateLiteral(file, lineNumber, line, literal);
    }

    if (isGeneratedSitemap) {
      const locMatch = line.match(/<loc>([^<]+)<\/loc>/i);
      if (locMatch?.[1]) {
        validateSitemapUrl(file, lineNumber, locMatch[1]);
      }
    }
  });
}

function validateLiteral(file: string, line: number, lineText: string, value: string) {
  const trimmed = value.trim();
  if (!trimmed) return;
  if (shouldIgnoreLiteral(lineText)) return;
  if (trimmed.includes("${")) return;

  const isUrlLikeValue =
    trimmed.startsWith("/") ||
    /^https?:\/\//i.test(trimmed);

  if (isUrlLikeValue) {
    for (const check of malformedChecks) {
      if (check.test(trimmed)) {
        addIssue(file, line, trimmed, check.reason);
      }
    }
  }

  const absoluteMatches = trimmed.match(/https?:\/\//gi) ?? [];
  if (isUrlLikeValue && absoluteMatches.length > 1) {
    addIssue(file, line, trimmed, "contains more than one absolute URL");
  }

  if (/^https?:\/\/dailyoratory\.faith/i.test(trimmed) && /\bhref\b/i.test(lineText)) {
    addIssue(file, line, trimmed, "href stores an absolute Daily Oratory URL instead of a relative path");
  }

  if ((trimmed.startsWith("/") || /^https?:\/\/dailyoratory\.faith/i.test(trimmed)) && /\s/.test(trimmed) && !trimmed.startsWith("/search?")) {
    addIssue(file, line, trimmed, "internal href contains whitespace");
  }
}

function shouldIgnoreLiteral(lineText: string) {
  return /\b(?:includes|match|test)\s*\(/.test(lineText) || /\b(?:pattern|reason)\s*:/.test(lineText);
}

function validateSitemapUrl(file: string, line: number, value: string) {
  const trimmed = value.trim();

  for (const check of malformedChecks) {
    if (check.test(trimmed)) {
      addIssue(file, line, trimmed, `malformed sitemap URL: ${check.reason}`);
    }
  }

  if (/\s/.test(trimmed)) {
    addIssue(file, line, trimmed, "sitemap URL contains whitespace");
  }

  if (/http:\/\/dailyoratory\.faith/i.test(trimmed)) {
    addIssue(file, line, trimmed, "sitemap URL uses http instead of https");
  }

  if ((trimmed.match(/dailyoratory\.faith/gi) ?? []).length > 1) {
    addIssue(file, line, trimmed, "sitemap URL contains the domain more than once");
  }

  if ((trimmed.match(/https?:\/\//gi) ?? []).length > 1) {
    addIssue(file, line, trimmed, "sitemap URL contains more than one absolute URL");
  }
}

function addIssue(file: string, line: number, value: string, reason: string, severity: "error" | "warning" = "error") {
  issues.push({ file, line, value, reason, severity });
}

void main();
