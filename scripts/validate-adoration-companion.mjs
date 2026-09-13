import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

function loadTypeScriptData(file) {
  const source = fs.readFileSync(file, "utf8").replace(/^import .*$/gm, "");
  const exported = {};
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function("exports", output)(exported);
  return exported;
}

const { meditationParts } = loadTypeScriptData("src/data/adorationCompanion.ts");
const { companionArtwork } = loadTypeScriptData("src/data/companionArtwork.ts");
const scripture = JSON.parse(fs.readFileSync("src/data/companionScripture.json", "utf8"));

const expected = {
  invitation: ["Matthew 11:28–30", "John 15:9", "Matthew 6:6–8"],
  intercession: ["Mark 2:1–5", "John 17:20–23", "Matthew 5:44"],
  "personal-needs": ["John 15:4–5", "Luke 18:13–14", "Romans 5:3–5"],
  "sadness-anxiety": ["Matthew 26:36–39", "Matthew 6:25–34", "John 14:27"],
  thanksgiving: ["Luke 17:11–19", "Psalm 102 (103)", "1 Thessalonians 5:16–18"],
  resolutions: ["John 14:15", "Matthew 25:35–40", "John 13:34–35"],
  departure: ["John 15:9–11", "Luke 24:29", "Matthew 28:20"],
};

assert.equal(meditationParts.length, 7, "The meditation must contain seven parts");
assert.equal(new Set(meditationParts.map(part => part.id)).size, 7, "Meditation IDs must be unique");
assert.deepEqual(meditationParts.map(part => part.id), Object.keys(expected), "Stable part order changed");

let displayedVerses = 0;
for (const part of meditationParts) {
  assert.deepEqual(part.scriptureReferences, expected[part.id], `${part.id} Scripture order changed`);
  assert.equal(part.scriptureReferences.length, 3, `${part.id} must contain three Scripture blocks`);
  assert(companionArtwork[part.id], `Missing artwork for ${part.id}`);
  assert(part.meditation.length > 0, `Missing meditation for ${part.id}`);
  assert(part.pausePrompts.length > 0, `Missing pause prompt for ${part.id}`);
  assert(part.prayer.trim(), `Missing prayer for ${part.id}`);

  for (const [index, reference] of part.scriptureReferences.entries()) {
    const slot = `meditation:${part.id}:${index}`;
    const passageId = scripture.slots[slot];
    const passage = scripture.passages[passageId];
    assert(passageId, `Missing Scripture slot ${slot}`);
    assert(passage, `Missing Scripture passage ${passageId}`);
    assert.equal(scripture.byReference[reference], passageId, `Reference mapping differs for ${reference}`);
    assert.deepEqual(passage.verses.map(verse => verse.number), passage.verseNumbers, `Verse coverage differs for ${reference}`);
    assert.equal(new Set(passage.verseNumbers).size, passage.verseNumbers.length, `Duplicate verse in ${reference}`);
    assert(passage.verses.every(verse => verse.text.trim()), `Empty verse in ${reference}`);
    assert.match(passage.sourceUrl, /^https:\/\/ebible\.org\/engDRA\//, `Invalid source for ${reference}`);
    displayedVerses += passage.verses.length;
  }
}

assert.equal(meditationParts.find(part => part.id === "thanksgiving").gratitudeResponses, 3);
assert.equal(scripture.passages[scripture.byReference["Psalm 102 (103)"]].verses.length, 22, "Psalm 102 must be complete");

const renderedSources = [
  fs.readFileSync("src/data/adorationCompanion.ts", "utf8"),
  fs.readFileSync("src/components/adoration/companion/AdorationCompanion.tsx", "utf8"),
].join("\n");

for (const oldPhrase of [
  "Jesus Speaks to Your Heart",
  "It is not necessary, My child",
  "Do you wish to ask Me something on behalf of another?",
  "Have you promises to make to Me?",
]) {
  assert(!renderedSources.includes(oldPhrase), `Old meditation text remains: ${oldPhrase}`);
}

for (const requiredPhrase of [
  "In the Presence of Jesus",
  "A Guided Eucharistic Meditation",
  "Remain With Me",
  "Pause With Jesus",
  "About This Meditation",
  "The words presented in the voice of Jesus are devotional reflections and are not private revelation.",
]) {
  assert(renderedSources.includes(requiredPhrase), `Required content is missing: ${requiredPhrase}`);
}

console.log(JSON.stringify({
  meditationParts: meditationParts.length,
  scriptureBlocks: meditationParts.length * 3,
  displayedVerses,
  artworkMappings: Object.keys(expected).filter(id => companionArtwork[id]).length,
  status: "Adoration Companion content and local Scripture coverage PASS",
}));
