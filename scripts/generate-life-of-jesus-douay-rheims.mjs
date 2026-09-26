/**
 * Reproduce the Life of Jesus reading text from eBible.org's public-domain
 * engDRA VPL archive. The source archive is downloaded separately; never fetch
 * Scripture during a build or a reader request.
 *
 * Usage:
 * node --experimental-strip-types scripts/generate-life-of-jesus-douay-rheims.mjs --source=<engDRA_vpl.txt>
 * Add --check to verify the committed artifact without rewriting it.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { lifeOfJesusRecords } from "../src/data/lifeOfJesus.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = join(root, "src", "data", "lifeOfJesusDouayRheims.generated.json");
const expectedSourceHash = "96282bfa7c89a74680cea66fe873aafa5e7cd446407f0ff2531a723e19eee2c2";
const archiveHash = "d953c97b16ab4529ed119f6673c89cc928a1e790160b4f286b7af01782997a4f";
const sourceArg = process.argv.find((arg) => arg.startsWith("--source="));
const checkOnly = process.argv.includes("--check");

if (!sourceArg) {
  throw new Error("Pass --source=<path to extracted engDRA_vpl.txt> from the official eBible.org archive.");
}

const sourcePath = resolve(sourceArg.slice("--source=".length));
const sourceBytes = readFileSync(sourcePath);
const sourceHash = createHash("sha256").update(sourceBytes).digest("hex");
if (sourceHash !== expectedSourceHash) {
  throw new Error(`Source SHA-256 mismatch: expected ${expectedSourceHash}, got ${sourceHash}.`);
}

const bookCodes = {
  Genesis: ["GEN", "GEN"],
  "2 Samuel": ["2SA", "2SA"],
  Isaiah: ["ISA", "ISA"],
  Matthew: ["MAT", "MAT"],
  Micah: ["MIC", "MIC"],
  Luke: ["LUK", "LUK"],
  Mark: ["MAR", "MRK"],
  John: ["JOH", "JHN"],
  Acts: ["ACT", "ACT"],
  Colossians: ["COL", "COL"],
  "1 Corinthians": ["1CO", "1CO"],
  "1 Peter": ["1PE", "1PE"],
  Psalm: ["PSA", "PSA"],
};

const sourceVerses = new Map();
const chapterEnds = new Map();
const sourceLines = sourceBytes.toString("utf8").trim().split(/\r?\n/);
for (const [index, line] of sourceLines.entries()) {
  const match = /^([A-Z0-9]{3}) (\d+):(\d+) (.+)$/.exec(line);
  if (!match) throw new Error(`Malformed VPL line ${index + 1}: ${line.slice(0, 100)}`);
  const [, code, chapterText, verseText, text] = match;
  const chapter = Number(chapterText);
  const verse = Number(verseText);
  const key = `${code}:${chapter}:${verse}`;
  if (sourceVerses.has(key)) throw new Error(`Duplicate VPL verse ${key}.`);
  sourceVerses.set(key, text);
  const chapterKey = `${code}:${chapter}`;
  chapterEnds.set(chapterKey, Math.max(chapterEnds.get(chapterKey) ?? 0, verse));
}
if (sourceVerses.size !== 35811) {
  throw new Error(`Expected 35,811 distinct source verses, found ${sourceVerses.size}.`);
}

const missingSelections = [];

function selectVerses(code, chapter, verseSpec, label) {
  const selected = [];
  const seen = new Set();
  const add = (selectedChapter, selectedVerse) => {
    const key = `${code}:${selectedChapter}:${selectedVerse}`;
    const text = sourceVerses.get(key);
    if (!text?.trim()) {
      missingSelections.push(`${label}: ${key}`);
      return;
    }
    if (seen.has(key)) throw new Error(`Overlapping verse ${key} in ${label}.`);
    seen.add(key);
    selected.push({ chapter: selectedChapter, number: selectedVerse, text });
  };
  const addRange = (selectedChapter, first, last) => {
    if (first < 1 || last < first) throw new Error(`Invalid verse range in ${label}.`);
    for (let verse = first; verse <= last; verse += 1) add(selectedChapter, verse);
  };

  for (const segment of verseSpec.split(/,\s*/)) {
    const crossChapter = /^(\d+)[–-](\d+):(\d+)$/.exec(segment);
    if (crossChapter) {
      const first = Number(crossChapter[1]);
      const endChapter = Number(crossChapter[2]);
      const last = Number(crossChapter[3]);
      if (endChapter <= chapter) throw new Error(`Invalid cross-chapter span in ${label}.`);
      for (let current = chapter; current <= endChapter; current += 1) {
        const finalVerse = current === endChapter ? last : chapterEnds.get(`${code}:${current}`);
        if (!finalVerse) throw new Error(`Missing chapter ${code} ${current} for ${label}.`);
        addRange(current, current === chapter ? first : 1, finalVerse);
      }
      continue;
    }
    const sameChapter = /^(\d+)[–-](\d+)$/.exec(segment);
    if (sameChapter) {
      addRange(chapter, Number(sameChapter[1]), Number(sameChapter[2]));
      continue;
    }
    if (/^\d+$/.test(segment)) {
      add(chapter, Number(segment));
      continue;
    }
    throw new Error(`Unrecognized verse segment "${segment}" in ${label}.`);
  }
  if (!selected.length) missingSelections.push(`${label}: no verses selected`);
  return selected;
}

const displayedPassages = lifeOfJesusRecords.flatMap((record) => record.scripturePassages);
const uniquePassages = [...new Map(displayedPassages.map((passage) => [passage.displayLabel, passage])).values()];
if (displayedPassages.length !== 462 || uniquePassages.length !== 453) {
  throw new Error(`Expected 462 passage instances and 453 unique labels, found ${displayedPassages.length} and ${uniquePassages.length}.`);
}

const passages = {};
for (const passage of uniquePassages) {
  const { displayLabel, book, chapter, verses } = passage;
  const codes = bookCodes[book];
  if (!codes || !verses || !displayLabel.startsWith(`${book} ${chapter}:`)) {
    throw new Error(`Unsupported reference ${displayLabel}.`);
  }

  let sourceChapter = chapter;
  let sourceVerseSpec = verses;
  let editionReference = displayLabel;
  let numberingNote;
  if (displayLabel === "Psalm 22:2") {
    sourceChapter = 21;
    sourceVerseSpec = "2";
    editionReference = "Psalm 21:2";
    numberingNote = "The timeline cites Psalm 22:2 in modern numbering; this Douay–Rheims edition numbers the same psalm Psalm 21:2.";
  } else if (displayLabel === "Micah 5:1–4") {
    sourceVerseSpec = "2–5";
    editionReference = "Micah 5:2–5";
    numberingNote = "The timeline cites Micah 5:1–4 in modern numbering; this Douay–Rheims edition numbers the same passage Micah 5:2–5.";
  } else if (displayLabel === "Mark 4:35–41") {
    sourceVerseSpec = "35–40";
    editionReference = "Mark 4:35–40";
    numberingNote = "The timeline cites Mark 4:35–41 in modern numbering; this Douay–Rheims edition includes the final question about Jesus' identity within verse 40 and has no verse 41.";
  } else if (displayLabel === "Mark 8:34–9:1") {
    sourceVerseSpec = "34–39";
    editionReference = "Mark 8:34–39";
    numberingNote = "The timeline cites Mark 8:34–9:1 in modern numbering; this Douay–Rheims edition places the saying about seeing God's kingdom at Mark 8:39. Its Mark 9:1 begins the Transfiguration account.";
  } else if (displayLabel === "Mark 9:2–8") {
    sourceVerseSpec = "1–7";
    editionReference = "Mark 9:1–7";
    numberingNote = "The timeline cites Mark 9:2–8 in modern numbering; this Douay–Rheims edition numbers the same Transfiguration passage Mark 9:1–7.";
  } else if (displayLabel === "Mark 9:14–29") {
    sourceVerseSpec = "13–28";
    editionReference = "Mark 9:13–28";
    numberingNote = "The timeline cites Mark 9:14–29 in modern numbering; this Douay–Rheims edition numbers the same passage Mark 9:13–28.";
  } else if (displayLabel === "Matthew 17:14–20") {
    sourceVerseSpec = "14–19";
    editionReference = "Matthew 17:14–19";
    numberingNote = "The timeline cites Matthew 17:14–20 in modern numbering; this Douay–Rheims edition places the same account at Matthew 17:14–19. Its verse 20 adds the prayer-and-fasting saying.";
  } else if (displayLabel === "Matthew 17:22–23") {
    sourceVerseSpec = "21–22";
    editionReference = "Matthew 17:21–22";
    numberingNote = "The timeline cites Matthew 17:22–23 in modern numbering; this Douay–Rheims edition numbers the same Passion prediction Matthew 17:21–22.";
  } else if (displayLabel === "John 6:22–59") {
    sourceVerseSpec = "22–60";
    editionReference = "John 6:22–60";
    numberingNote = "The timeline cites John 6:22–59 in modern numbering; this Douay–Rheims edition divides the saying at verse 51 across verses 51–52, so the same discourse ends at verse 60.";
  } else if (displayLabel === "John 6:60–66") {
    sourceVerseSpec = "61–67";
    editionReference = "John 6:61–67";
    numberingNote = "The timeline cites John 6:60–66 in modern numbering; this Douay–Rheims edition numbers the same passage John 6:61–67.";
  } else if (displayLabel === "John 6:67–69") {
    sourceVerseSpec = "68–70";
    editionReference = "John 6:68–70";
    numberingNote = "The timeline cites John 6:67–69 in modern numbering; this Douay–Rheims edition numbers the same confession John 6:68–70.";
  } else if (displayLabel === "Luke 9:37–43") {
    sourceVerseSpec = "37–44";
    editionReference = "Luke 9:37–44a";
    numberingNote = "The timeline cites Luke 9:37–43 in modern numbering. This Douay–Rheims edition places the crowd's response and introductory clause in the first part of verse 44; “44a” here marks that part of the verse, not a separate canonical verse. The following Passion prediction is not included.";
  }

  const [sourceCode, htmlCode] = codes;
  const selected = selectVerses(sourceCode, sourceChapter, sourceVerseSpec, displayLabel);
  if (displayLabel === "Luke 9:37–43") {
    const finalVerse = selected.at(-1);
    const fullVerse = sourceVerses.get("LUK:9:44");
    const predictionStart = " Lay you up in your hearts these words";
    if (!finalVerse || finalVerse.chapter !== 9 || finalVerse.number !== 44 || !fullVerse?.includes(predictionStart)) {
      throw new Error("Luke 9:44 source boundary changed; review its editorial split before generating.");
    }
    const accountEnding = fullVerse.slice(0, fullVerse.indexOf(predictionStart));
    if (!accountEnding.endsWith("he said to his disciples:")) {
      throw new Error("Luke 9:44 account ending changed; review its editorial split before generating.");
    }
    finalVerse.text = accountEnding;
    finalVerse.part = "a";
  }
  const first = selected[0];
  const chapterSlug = String(first.chapter).padStart(htmlCode === "PSA" ? 3 : 2, "0");
  passages[displayLabel] = {
    reference: displayLabel,
    editionReference,
    ...(numberingNote ? { numberingNote } : {}),
    sourceUrl: `https://ebible.org/engDRA/${htmlCode}${chapterSlug}.htm#V${first.number}`,
    verificationStatus: "automated-exact-range",
    humanReviewStatus: "pending",
    verses: selected,
  };
}

const output = {
  source: {
    edition: "Douay-Rheims American Edition, 1899",
    editionUrl: "https://ebible.org/engDRA/copyright.htm",
    archiveUrl: "https://ebible.org/Scriptures/engDRA_vpl.zip",
    archiveSha256: archiveHash,
    extractedFile: "engDRA_vpl.txt",
    extractedFileSha256: expectedSourceHash,
    sourceFileDate: "2022-11-03",
    accessedAt: "2026-09-24",
    rightsStatus: "public-domain",
    attribution: "Douay–Rheims American Edition of 1899; public-domain text courtesy of eBible.org.",
    extractionMethod: "Exact book/chapter/verse selection from the pinned official VPL file; eleven whole-verse numbering mappings and one documented partial-verse boundary.",
  },
  passageInstances: displayedPassages.length,
  uniquePassages: uniquePassages.length,
  passages,
};
if (missingSelections.length) {
  throw new Error(`Missing source verses (${missingSelections.length}):\n${missingSelections.join("\n")}`);
}
const serialized = `${JSON.stringify(output, null, 2)}\n`;

if (checkOnly) {
  const committed = readFileSync(outputPath, "utf8");
  if (committed !== serialized) throw new Error("Generated Scripture artifact differs from the pinned source.");
  console.log(`Verified ${uniquePassages.length} passages against pinned eBible.org source.`);
} else {
  writeFileSync(outputPath, serialized);
  console.log(`Generated ${uniquePassages.length} passages / ${displayedPassages.length} instances from pinned eBible.org source.`);
}
