import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { armorPieces, armorJourneys, armorStruggles, armorStages, scripturePassages, catholicSources, eveningQuestions, middaySteps, armorClosingPrayers } from "../src/data/armorOfGod.ts";
import { isSensitiveAnalyticsPath, getAnalyticsPagePath } from "../src/lib/analyticsPrivacy.ts";

test("all requested armor, journeys and situations are complete and uniquely identified", () => {
  assert.equal(armorPieces.length, 6);
  assert.equal(new Set(armorPieces.map(item => item.id)).size, 6);
  assert.equal(armorJourneys.length, 4);
  assert.equal(armorStruggles.length, 31);
  assert.equal(new Set(armorStruggles.map(item => item.id)).size, 31);
  assert.deepEqual(armorJourneys.map(journey => armorStruggles.filter(item => item.journeyId === journey.id).length), [8, 8, 8, 7]);
  assert.deepEqual(armorStages, ["Recognize", "Scripture", "Armor", "Prayer", "Live the Word"]);
  const armorIds = new Set(armorPieces.map(item => item.id));
  const sourceIds = new Set(catholicSources.map(item => item.id));
  for (const item of armorStruggles) {
    for (const field of ["id", "journeyId", "title", "scriptureReference", "reflection", "armorApplication", "prayer", "dailyAction", "contemplationPrompt"]) assert.ok(typeof item[field] === "string" && item[field].length > 0, `${item.id}.${field}`);
    assert.ok(item.armorIds.length > 0 && item.armorIds.every(id => armorIds.has(id)), item.id);
    assert.ok(scripturePassages[item.scriptureReference]?.text, `verified Scripture: ${item.id}`);
    if (item.journeyId === "temptation") assert.ok(item.virtue && item.consciencePrompt, item.id);
    if (item.journeyId === "faith") assert.ok(item.teaching && sourceIds.has(item.teaching.sourceId), item.id);
  }
  for (const field of ["reflection", "armorApplication", "prayer", "dailyAction", "contemplationPrompt"]) assert.equal(new Set(armorStruggles.map(item => item[field])).size, 31, `distinct ${field}`);
});

test("daily prayers and foundational Scripture retain their required content", () => {
  assert.equal(eveningQuestions.length, 5);
  assert.equal(middaySteps.length, 5);
  assert.match(armorClosingPrayers.morning, /Clothe me in Your truth/);
  assert.match(armorClosingPrayers.midday, /respond with love/);
  const foundation = scripturePassages["Ephesians 6:10–20"];
  assert.match(foundation.text, /breastplate of justice/);
  assert.match(foundation.text, /not against flesh and blood/);
  assert.match(foundation.sourceUrl, /^https:\/\/ebible.org\/engDRA\/EPH06.htm/);
});

test("archive carries source identity and repeatable text integrity evidence", () => {
  const archive = JSON.parse(readFileSync(new URL("../src/data/armorOfGodScripture.json", import.meta.url), "utf8"));
  assert.ok(archive.source);
  assert.equal(archive.source.textSha256, "96282bfa7c89a74680cea66fe873aafa5e7cd446407f0ff2531a723e19eee2c2");
  for (const [reference, passage] of Object.entries(archive.passages)) {
    assert.equal(reference, passage.reference);
    assert.match(passage.sourceUrl, /^https:\/\/ebible.org\/engDRA\//);
    assert.ok(passage.text.trim().length > 10);
    const evidence = archive.verification[reference];
    assert.ok(evidence?.verses?.length, `verse-level evidence: ${reference}`);
    assert.equal(passage.text, evidence.verses.map(verse => verse.text).join(" "), reference);
    assert.equal(createHash("sha256").update(passage.text).digest("hex"), evidence.joinedTextSha256, reference);
  }
});

test("Armor route is sensitive and reporting cannot include query or fragment", () => {
  assert.equal(isSensitiveAnalyticsPath("/armor-of-god"), true);
  assert.equal(isSensitiveAnalyticsPath("/armor-of-god/nested"), true);
  assert.equal(getAnalyticsPagePath("/armor-of-god?concern=SYNTHETIC#private"), "/armor-of-god");
});
