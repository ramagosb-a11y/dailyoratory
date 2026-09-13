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
const { holyHourGuide } = loadTypeScriptData("src/data/adorationPage.ts");
const { companionArtwork } = loadTypeScriptData("src/data/companionArtwork.ts");
const scripture = JSON.parse(fs.readFileSync("src/data/companionScripture.json", "utf8"));
const massScripture = JSON.parse(fs.readFileSync("src/data/massScripture.json", "utf8"));

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

const expectedHolyHour = {
  "holy-hour-arrive": {
    existing: ["Psalm 45:11 (Douay-Rheims)"],
    related: ["Psalm 83 (84):2–5", "Apocalypse (Revelation) 4:8–11"],
  },
  "holy-hour-thanksgiving": {
    existing: ["Psalm 117:1 (Douay-Rheims)", "Luke 17:15-16", "John 6:35"],
    related: ["Apocalypse (Revelation) 5:11–14", "Apocalypse (Revelation) 7:9–12"],
  },
  "holy-hour-mercy": {
    existing: ["Psalm 50:3 (Douay-Rheims)", "Isaiah 53:5", "John 19:34", "Ezekiel 36:26", "John 8:11"],
    related: ["1 John 1:8–9", "Hebrews 4:14–16"],
  },
  "holy-hour-scripture": {
    existing: ["1 Kings 3:10 (Douay-Rheims)", "John 15:4-5", "Psalm 62"],
    related: ["Luke 24:28–35", "Hebrews 4:12–13"],
  },
  "holy-hour-intercession": {
    existing: ["Galatians 6:2", "John 17:15", "Joshua 24:15", "Matthew 11:28"],
    related: ["Apocalypse (Revelation) 8:3–4", "Hebrews 7:24–25"],
  },
  "holy-hour-surrender": {
    existing: ["Luke 23:46", "John 15:13", "Matthew 6:26"],
    related: ["Apocalypse (Revelation) 19:6–9", "Romans 12:1–2"],
  },
};

assert.equal(holyHourGuide.length, 6, "The Holy Hour must contain six stages");
assert.equal(new Set(holyHourGuide.map(segment => segment.id)).size, 6, "Holy Hour IDs must be unique");
assert.deepEqual(holyHourGuide.map(segment => segment.id), Object.keys(expectedHolyHour), "Stable Holy Hour order changed");

let holyHourScriptureBlocks = 0;
let holyHourVerseOccurrences = 0;
for (const segment of holyHourGuide) {
  const expectedStage = expectedHolyHour[segment.id];
  const existingEntries = [
    segment.scripture,
    ...(segment.guide ?? []).filter(block => block.kind === "scripture"),
  ].filter(Boolean);
  const existingReferences = existingEntries.map(entry => entry.reference);
  const relatedReferences = segment.relatedScriptures.map(entry => entry.reference);

  assert.deepEqual(existingReferences, expectedStage.existing, `${segment.id} existing Scripture order changed`);
  assert.deepEqual(relatedReferences, expectedStage.related, `${segment.id} related Scripture order changed`);
  assert.equal(segment.relatedScriptures.length, 2, `${segment.id} must contain two related Scriptures`);
  assert.equal(new Set([...existingReferences, ...relatedReferences]).size, existingReferences.length + 2, `${segment.id} repeats a Scripture reference`);

  for (const entry of [...existingEntries, ...segment.relatedScriptures]) {
    assert(entry.connection.trim(), `Missing connection for ${segment.id}: ${entry.reference}`);
    const passageId = scripture.byReference[entry.reference];
    const passage = scripture.passages[passageId];
    assert(passageId, `Missing reference mapping for ${entry.reference}`);
    assert(passage, `Missing passage for ${entry.reference}`);
    assert.deepEqual(passage.verses.map(verse => verse.number), passage.verseNumbers, `Verse coverage differs for ${entry.reference}`);
    assert.equal(new Set(passage.verseNumbers).size, passage.verseNumbers.length, `Duplicate verse in ${entry.reference}`);
    assert(passage.verses.every(verse => verse.text.trim()), `Empty verse in ${entry.reference}`);
    assert.match(passage.sourceUrl, /^https:\/\/ebible\.org\/engDRA\//, `Invalid source for ${entry.reference}`);
    holyHourScriptureBlocks += 1;
    holyHourVerseOccurrences += passage.verses.length;
  }

  segment.relatedScriptures.forEach((entry, index) => {
    assert.equal(scripture.slots[`${segment.id}:related:${index}`], scripture.byReference[entry.reference], `Related Scripture slot differs for ${segment.id}:${index}`);
  });
}

assert.equal(holyHourScriptureBlocks, 31, "Holy Hour must display 31 Scripture blocks");
assert.equal(holyHourVerseOccurrences, 73, "Holy Hour must display 73 verse occurrences");

const reusedReferences = Object.values(expectedHolyHour).flatMap(stage => stage.related).filter(reference => !["Luke 24:28–35", "Hebrews 4:14–16", "Hebrews 7:24–25"].includes(reference));
for (const reference of reusedReferences) {
  const companionPassage = scripture.passages[scripture.byReference[reference]];
  const massPassage = Object.values(massScripture.passages).find(passage => passage.reference === reference);
  assert(massPassage, `Missing verified Mass Scripture source for ${reference}`);
  assert.deepEqual(companionPassage.verses, massPassage.verses, `Companion text differs from verified Mass Scripture for ${reference}`);
}

assert.deepEqual(scripture.passages["heb-4-14-16"].verses, [
  { number: 14, text: "Having therefore a great high priest that hath passed into the heavens, Jesus the Son of God: let us hold fast our confession." },
  { number: 15, text: "For we have not a high priest, who can not have compassion on our infirmities: but one tempted in all things like as we are, without sin." },
  { number: 16, text: "Let us go therefore with confidence to the throne of grace: that we may obtain mercy, and find grace in seasonable aid." },
], "Hebrews 4:14–16 differs from the freshly retrieved eBible text");
assert.deepEqual(scripture.passages["heb-7-24-25"].verses, [
  { number: 24, text: "But this, for that he continueth for ever, hath an everlasting priesthood," },
  { number: 25, text: "Whereby he is able also to save for ever them that come to God by him; always living to make intercession for us." },
], "Hebrews 7:24–25 differs from the freshly retrieved eBible text");

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
  "Remain With Me",
  "Pause With Jesus",
  "About This Meditation",
]) {
  assert(renderedSources.includes(requiredPhrase), `Required content is missing: ${requiredPhrase}`);
}

for (const removedIntroductionPhrase of [
  "The Blessed Sacrament Meditation",
  "In the Presence of Jesus",
  "A Guided Eucharistic Meditation",
  "Remain here for a while.",
  "The words presented in the voice of Jesus are devotional reflections and are not private revelation.",
]) {
  assert(!renderedSources.includes(removedIntroductionPhrase), `Removed meditation introduction remains: ${removedIntroductionPhrase}`);
}

console.log(JSON.stringify({
  meditationParts: meditationParts.length,
  scriptureBlocks: meditationParts.length * 3,
  displayedVerses,
  artworkMappings: Object.keys(expected).filter(id => companionArtwork[id]).length,
  holyHourStages: holyHourGuide.length,
  holyHourScriptureBlocks,
  holyHourVerseOccurrences,
  status: "Adoration Companion content and local Scripture coverage PASS",
}));
