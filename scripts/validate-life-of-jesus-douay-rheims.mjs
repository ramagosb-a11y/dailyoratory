import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { lifeOfJesusRecords } from "../src/data/lifeOfJesus.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const artifact = JSON.parse(readFileSync(join(root, "src/data/lifeOfJesusDouayRheims.generated.json"), "utf8"));
const displayReferences = lifeOfJesusRecords.flatMap((record) => record.scripturePassages.map((passage) => passage.displayLabel));
const uniqueReferences = new Set(displayReferences);
const mappedReferences = {
  "Psalm 22:2": "Psalm 21:2",
  "Micah 5:1–4": "Micah 5:2–5",
  "Mark 4:35–41": "Mark 4:35–40",
  "Mark 8:34–9:1": "Mark 8:34–39",
  "Mark 9:2–8": "Mark 9:1–7",
  "Mark 9:14–29": "Mark 9:13–28",
  "Matthew 17:14–20": "Matthew 17:14–19",
  "Matthew 17:22–23": "Matthew 17:21–22",
  "John 6:22–59": "John 6:22–60",
  "John 6:60–66": "John 6:61–67",
  "John 6:67–69": "John 6:68–70",
  "Luke 9:37–43": "Luke 9:37–44a",
};

assert.equal(lifeOfJesusRecords.length, 280);
assert.equal(displayReferences.length, 462);
assert.equal(uniqueReferences.size, 453);
assert.equal(artifact.passageInstances, displayReferences.length);
assert.equal(artifact.uniquePassages, uniqueReferences.size);
assert.deepEqual(new Set(Object.keys(artifact.passages)), uniqueReferences);
assert.equal(artifact.source.edition, "Douay-Rheims American Edition, 1899");
assert.equal(artifact.source.rightsStatus, "public-domain");
assert.equal(artifact.source.editionUrl, "https://ebible.org/engDRA/copyright.htm");
assert.equal(artifact.source.archiveUrl, "https://ebible.org/Scriptures/engDRA_vpl.zip");
assert.match(artifact.source.archiveSha256, /^[a-f0-9]{64}$/);
assert.match(artifact.source.extractedFileSha256, /^[a-f0-9]{64}$/);
assert.ok(artifact.source.attribution.includes("eBible.org"));
assert.ok(artifact.source.accessedAt);
assert.ok(!artifact.source.attribution.includes("Challoner"));

let verseCount = 0;
for (const reference of uniqueReferences) {
  const passage = artifact.passages[reference];
  assert.equal(passage.reference, reference);
  assert.equal(passage.editionReference, mappedReferences[reference] ?? reference);
  assert.equal(Boolean(passage.numberingNote), Object.hasOwn(mappedReferences, reference));
  assert.equal(passage.verificationStatus, "automated-exact-range");
  assert.equal(passage.humanReviewStatus, "pending");
  assert.match(passage.sourceUrl, /^https:\/\/ebible\.org\/engDRA\/[A-Z0-9]+\.htm#V\d+$/);
  assert.ok(passage.verses.length > 0, `${reference} has no text`);

  const match = /^(.+?) (\d+):(.+)$/.exec(passage.editionReference);
  assert.ok(match, `${reference} has an invalid edition reference`);
  const chapter = Number(match[2]);
  const expected = [];
  for (const span of match[3].split(/,\s*/)) {
    const range = /^(\d+)[–-](\d+)(a)?$/.exec(span);
    if (range) {
      for (let verse = Number(range[1]); verse <= Number(range[2]); verse += 1) {
        expected.push(`${chapter}:${verse}${verse === Number(range[2]) ? range[3] ?? "" : ""}`);
      }
    } else {
      assert.match(span, /^\d+$/);
      expected.push(`${chapter}:${Number(span)}`);
    }
  }
  const actual = passage.verses.map((verse) => `${verse.chapter}:${verse.number}${verse.part ?? ""}`);
  assert.deepEqual(actual, expected, `${reference} has incomplete, duplicate, or extra verses`);
  assert.ok(passage.sourceUrl.endsWith(`#V${passage.verses[0].number}`));
  for (const verse of passage.verses) {
    assert.ok(typeof verse.text === "string" && verse.text.trim().length > 0, `${reference} has an empty verse`);
    assert.equal(verse.text, verse.text.trim(), `${reference} has untrimmed text`);
  }
  if (reference === "Luke 9:37–43") {
    assert.equal(passage.verses.at(-1)?.text.endsWith("he said to his disciples:"), true);
    assert.equal(passage.verses.at(-1)?.text.includes("Lay you up in your hearts"), false);
  }
  verseCount += actual.length;
}

const timeline = readFileSync(join(root, "src/components/life-of-jesus/LifeOfJesusTimeline.tsx"), "utf8");
assert.ok(timeline.includes("getLifeOfJesusDouayRheims(passage.displayLabel)"));
assert.ok(!timeline.includes("getLifeOfJesusDouayRheimsFallback"));
assert.ok(!timeline.includes("Full local text is pending"));
console.log(`Life of Jesus Scripture: ${displayReferences.length} rendered boxes, ${uniqueReferences.size} exact local ranges, ${verseCount} verse instances, ${Object.keys(mappedReferences).length} documented numbering mappings.`);
