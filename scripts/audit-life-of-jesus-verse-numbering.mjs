/** Read-only diagnostic: compare source verse inventory to a second public-domain versification. */
import { readFileSync } from "node:fs";
import { lifeOfJesusRecords } from "../src/data/lifeOfJesus.ts";

const modernPath = process.argv.find((arg) => arg.startsWith("--modern="))?.slice(9);
const douayPath = process.argv.find((arg) => arg.startsWith("--douay="))?.slice(8);
if (!modernPath || !douayPath) throw new Error("Pass --modern=<VPL file> and --douay=<VPL file>.");

function inventory(path) {
  const chapters = new Map();
  for (const line of readFileSync(path, "utf8").trim().split(/\r?\n/)) {
    const match = /^([A-Z0-9]{3}) (\d+):(\d+) (.+)$/.exec(line);
    if (!match) throw new Error(`Malformed source line: ${line.slice(0, 90)}`);
    const key = `${match[1]}:${match[2]}`;
    const verse = Number(match[3]);
    const chapter = chapters.get(key) ?? new Map();
    chapter.set(verse, match[4]);
    chapters.set(key, chapter);
  }
  return chapters;
}

const modern = inventory(modernPath);
const douay = inventory(douayPath);
const codes = {
  Genesis: "GEN", "2 Samuel": "2SA", Isaiah: "ISA", Matthew: "MAT", Micah: "MIC", Luke: "LUK",
  Mark: "MAR", John: "JOH", Acts: "ACT", Colossians: "COL", "1 Corinthians": "1CO",
  "1 Peter": "1PE", Psalm: "PSA",
};
const cited = new Map();
for (const record of lifeOfJesusRecords) {
  for (const passage of record.scripturePassages) {
    const chapter = `${codes[passage.book]}:${passage.chapter}`;
    const references = cited.get(chapter) ?? new Set();
    references.add(passage.displayLabel);
    cited.set(chapter, references);
  }
}

for (const [chapter, references] of cited) {
  const a = modern.get(chapter);
  const b = douay.get(chapter);
  if (!a || !b) throw new Error(`Missing ${chapter}.`);
  const aKeys = [...a.keys()];
  const bKeys = [...b.keys()];
  if (aKeys.length === bKeys.length && aKeys.every((number, index) => number === bKeys[index])) continue;
  const missingInDouay = aKeys.filter((number) => !b.has(number));
  const extraInDouay = bKeys.filter((number) => !a.has(number));
  console.log(`${chapter}: modern ${aKeys.length} (ends ${aKeys.at(-1)}), Douay ${bKeys.length} (ends ${bKeys.at(-1)}), missing [${missingInDouay}], extra [${extraInDouay}]`);
  console.log(`  ${[...references].join("; ")}`);
}

const alignmentChapter = process.argv.find((arg) => arg.startsWith("--alignment="))?.slice(12);
if (alignmentChapter) {
  const modernVerses = modern.get(alignmentChapter);
  const douayVerses = douay.get(alignmentChapter);
  if (!modernVerses || !douayVerses) throw new Error(`Missing alignment chapter ${alignmentChapter}.`);
  const words = (value) => new Set(value.toLowerCase().match(/[a-z]{4,}/g) ?? []);
  const similarity = (first, second) => {
    const a = words(first);
    const b = words(second);
    return [...a].filter((word) => b.has(word)).length / new Set([...a, ...b]).size;
  };
  for (const [number, text] of modernVerses) {
    const candidates = [...douayVerses]
      .filter(([other]) => Math.abs(other - number) <= 3)
      .map(([other, value]) => ({ number: other, score: similarity(text, value) }))
      .sort((a, b) => b.score - a.score);
    if (candidates[0]?.number !== number) {
      console.log(`${alignmentChapter}:${number} → ${candidates[0]?.number} (${candidates[0]?.score.toFixed(2)}; same ${candidates.find((item) => item.number === number)?.score.toFixed(2) ?? "missing"})`);
    }
  }
}
