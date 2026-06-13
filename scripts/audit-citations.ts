import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type AuditFinding = {
  file: string;
  line: number;
  raw: string;
  type: "bible" | "ccc";
  targetUrl: string;
  confidence: "high" | "medium" | "low";
  status: "detected" | "already-linked" | "suspected";
};

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scanDirectories = ["src/app", "src/components", "src/data", "src/content"];
const supportedExtensions = /\.(ts|tsx|md|mdx)$/;

type BibleReference = {
  raw: string;
  book: string;
  chapter?: string;
  verse?: string;
  url: string;
};

type CccReference = {
  raw: string;
  paragraph?: string;
  url: string;
};

type CitationModule = {
  detectBibleReferences: (text: string) => BibleReference[];
  detectCccReferences: (text: string) => CccReference[];
  bibleBookUrl: (bookNameOrAbbreviation: string) => string | null;
  cccUrl: (reference?: string) => string;
};

let citationModulePromise: Promise<CitationModule> | null = null;

function loadCitationModule() {
  citationModulePromise ??= import(new URL("../src/lib/citationLinks.ts", import.meta.url).href) as Promise<CitationModule>;
  return citationModulePromise;
}

async function main() {
  const citationModule = await loadCitationModule();
  const findings: AuditFinding[] = [];

  for (const directory of scanDirectories) {
    const fullPath = path.join(projectRoot, directory);
    try {
      findings.push(...(await scanDirectory(fullPath, citationModule)));
    } catch {
      continue;
    }
  }

  if (!findings.length) {
    console.log("[audit:citations] No Bible or CCC references found.");
    return;
  }

  findings
    .sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
    .forEach((finding) => {
      console.log(
        `[audit:citations] ${finding.file}:${finding.line} :: ${finding.type} :: ${finding.raw} :: ${finding.targetUrl} :: ${finding.confidence} :: ${finding.status}`,
      );
    });

  const summary = findings.reduce<Record<string, number>>((accumulator, finding) => {
    const key = `${finding.type}:${finding.status}`;
    accumulator[key] = (accumulator[key] ?? 0) + 1;
    return accumulator;
  }, {});

  console.log(`[audit:citations] Summary ${JSON.stringify(summary)}`);
}

async function scanDirectory(directory: string, citationModule: CitationModule): Promise<AuditFinding[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const findings: AuditFinding[] = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      findings.push(...(await scanDirectory(fullPath, citationModule)));
      continue;
    }

    if (!supportedExtensions.test(entry.name)) continue;

    const content = await readFile(fullPath, "utf8");
    const relativePath = path.relative(projectRoot, fullPath).replace(/\\/g, "/");
    findings.push(...scanFileContent(relativePath, content, citationModule));
  }

  return findings;
}

function scanFileContent(file: string, content: string, citationModule: CitationModule): AuditFinding[] {
  const findings: AuditFinding[] = [];
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const bibleReferences = citationModule.detectBibleReferences(line);
    const cccReferences = citationModule.detectCccReferences(line);
    const isAlreadyLinkedLine = /https?:\/\/(?:bible\.usccb\.org\/bible|www\.vatican\.va\/archive\/ENG0015\/_INDEX\.HTM)/i.test(line);

    bibleReferences.forEach((reference) => {
      findings.push({
        file,
        line: lineNumber,
        raw: reference.raw,
        type: "bible",
        targetUrl: reference.url,
        confidence: "high",
        status: isAlreadyLinkedLine ? "already-linked" : "detected",
      });
    });

    cccReferences.forEach((reference) => {
      findings.push({
        file,
        line: lineNumber,
        raw: reference.raw,
        type: "ccc",
        targetUrl: reference.url,
        confidence: "high",
        status: isAlreadyLinkedLine ? "already-linked" : "detected",
      });
    });

    findings.push(...detectSuspectedReferences(file, lineNumber, line, bibleReferences, cccReferences, citationModule));
  });

  return findings;
}

function detectSuspectedReferences(
  file: string,
  line: number,
  lineText: string,
  bibleReferences: BibleReference[],
  cccReferences: CccReference[],
  citationModule: CitationModule,
): AuditFinding[] {
  const findings: AuditFinding[] = [];
  const detectedRawValues = new Set([...bibleReferences, ...cccReferences].map((reference) => reference.raw));

  for (const match of lineText.matchAll(/\b(?:[1-3]\s*)?[A-Z][a-z]+\d+:\d+(?:[-–]\d+)?\b/g)) {
    const raw = match[0];
    if (detectedRawValues.has(raw)) continue;

    findings.push({
      file,
      line,
      raw,
      type: "bible",
      targetUrl: citationModule.bibleBookUrl(raw.replace(/\d.*$/, "").trim()) ?? "",
      confidence: "low",
      status: "suspected",
    });
  }

  for (const match of lineText.matchAll(/\b(?:CCC|Catechism)(?:,)?\d+(?:[-–]\d+)?\b/gi)) {
    const raw = match[0];
    if (detectedRawValues.has(raw)) continue;

    findings.push({
      file,
      line,
      raw,
      type: "ccc",
      targetUrl: citationModule.cccUrl(raw),
      confidence: "medium",
      status: "suspected",
    });
  }

  return findings.filter((finding) => finding.targetUrl);
}

void main();
