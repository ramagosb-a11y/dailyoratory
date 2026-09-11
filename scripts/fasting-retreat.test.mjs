import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  decodeProgress,
  decodeRoute,
  makeRouteHash,
} from "../src/lib/fastingRetreatState.ts";
const { chapters, steps } = JSON.parse(
  readFileSync("src/content/fasting-retreat.json", "utf8"),
);
const ids = new Set(steps.map((s) => s.id)),
  chapterIds = new Set(chapters.map((c) => c.id)),
  mapping = new Map(steps.map((s) => [s.id, s.chapter]));

test("each daily intention step follows the offering without changing existing IDs", () => {
  for (const day of ["day-1", "day-2", "day-3"]) {
    const index = steps.findIndex(s => s.id === day + "-offering");
    assert.equal(steps[index + 1].id, day + "-intentions");
    assert.equal(steps[index + 1].intentions, day);
  }
  assert.equal(steps.find(s => s.id === "preparation-saints").title, "Litany of the Saints");
});

test("all Scripture mappings resolve to complete numbered local passages", () => {
  const data = JSON.parse(readFileSync("src/content/fasting-retreat-scripture.json", "utf8"));
  for (const step of steps) {
    for (const slot of step.passageIds) {
      const p = data.passages[data.slots[slot]];
      assert.ok(p, step.id + ":" + slot);
      assert.ok(p.verses.length);
      assert.deepEqual(p.verses.map(v => v.number), p.verseNumbers);
      assert.equal(new Set(p.verseNumbers).size, p.verseNumbers.length);
      assert.ok(p.verses.every(v => v.text && !v.text.includes("…")));
    }
  }
  for (const [slot, length] of [["day-1",11],["day-1-evening",48],["day-2-evening",34],["day-3-evening",2]]) {
    assert.equal(data.passages[data.slots[slot]].verses.length,length);
  }
});
test("malformed and stale bookmarks cannot break the reader", () => {
  for (const raw of [
    "bad json",
    "null",
    '{"version":9}',
    JSON.stringify({
      version: 1,
      lastStep: "gone",
      positions: { gone: 4, [steps[0].id]: -1 },
    }),
  ]) {
    const value = decodeProgress(raw, ids);
    assert.equal(value.lastStep, null);
    assert.deepEqual(value.positions, {});
  }
  const p = decodeProgress(
    JSON.stringify({
      version: 1,
      lastStep: steps[0].id,
      positions: { [steps[0].id]: 210 },
      largeText: true,
    }),
    ids,
  );
  assert.equal(p.positions[steps[0].id], 210);
  assert.equal(p.largeText, true);
});
test("deep links determine the correct chapter and survive URL round trips", () => {
  for (const step of steps) {
    const route = decodeRoute(
      "#day=wrong&step=" + step.id,
      mapping,
      chapterIds,
    );
    assert.equal(route.chapter, step.chapter);
    assert.equal(route.step, step.id);
    assert.deepEqual(
      decodeRoute(makeRouteHash(route), mapping, chapterIds),
      route,
    );
  }
  assert.equal(
    decodeRoute("#day=unknown&step=unknown", mapping, chapterIds).chapter,
    "welcome",
  );
});
test("every chapter, image and companion route is connected", () => {
  assert.equal(ids.size, steps.length);
  assert.equal(chapters.length, 6);
  for (const chapter of chapters)
    assert.ok(steps.some((s) => s.chapter === chapter.id));
  for (const entry of [...chapters, ...steps]) {
    assert.ok(entry.image.endsWith(".webp"));
    assert.ok(existsSync("public" + entry.image), entry.image);
  }
  for (const step of steps) {
    assert.ok(chapterIds.has(step.chapter));
    assert.ok(step.blocks.length || step.scripture || step.companion);
    assert.ok(!JSON.stringify(step).includes("Click Here"));
  }
});
test("daily rhythm has an intentional stopping point", () => {
  for (const day of ["day-1", "day-2"]) {
    const daily = steps.filter((s) => s.chapter === day);
    assert.deepEqual(
      [...new Set(daily.map((s) => s.period))],
      ["Morning", "Throughout the Day", "Evening"],
    );
    assert.equal(daily.at(-1).dayEnd, true);
  }
});
