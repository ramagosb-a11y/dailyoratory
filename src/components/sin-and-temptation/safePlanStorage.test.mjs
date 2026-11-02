import test from "node:test";
import assert from "node:assert/strict";
import { readPrivatePlan, writePrivatePlan, removePrivatePlan } from "./safePlanStorage.ts";
const defaults = { attachmentOrSin: "", nearOccasion: "" };
const key = "detachment-from-sin-plan";
function memory() { const data = new Map(); return { data, getItem: (key) => data.get(key) ?? null, setItem: (key, value) => data.set(key, value), removeItem: (key) => data.delete(key) }; }
test("manual save/load keeps legacy known strings and strips unknown fields", () => {
 const storage = memory();
 assert.equal(writePrivatePlan(() => storage, key, { attachmentOrSin: "Synthetic QA marker", nearOccasion: "Synthetic pattern", extra: "never persisted" }, defaults).ok, true);
 assert.deepEqual(JSON.parse(storage.getItem(key)), { attachmentOrSin: "Synthetic QA marker", nearOccasion: "Synthetic pattern" });
 storage.setItem(key, JSON.stringify({ attachmentOrSin: "Legacy synthetic plan", injected: { bad: true } }));
 assert.deepEqual(readPrivatePlan(() => storage, key, defaults), { ok: true, value: { attachmentOrSin: "Legacy synthetic plan", nearOccasion: "" } });
});
test("clear removes the saved key and a later load cannot resurrect it", () => {
 const storage = memory(); writePrivatePlan(() => storage, key, defaults, defaults);
 assert.equal(removePrivatePlan(() => storage, key).ok, true);
 assert.equal(storage.data.has(key), false);
 assert.deepEqual(readPrivatePlan(() => storage, key, defaults), { ok: true, value: null });
});
test("denied storage never throws and failed deletion is honestly reported", () => {
 const denied = () => { throw new Error("Denied"); };
 assert.equal(readPrivatePlan(denied, key, defaults).ok, false);
 assert.equal(writePrivatePlan(denied, key, defaults, defaults).ok, false);
 const result = removePrivatePlan(denied, key); assert.equal(result.ok, false); assert.match(result.message, /could not be removed/);
});
test("corrupt, array and non-string known fields are rejected without deleting stored data", () => {
 const storage = memory();
 for (const value of ["{", "null", "[]", JSON.stringify({ attachmentOrSin: { nested: true } }), JSON.stringify({ nearOccasion: 12 })]) {
 storage.setItem(key, value); assert.equal(readPrivatePlan(() => storage, key, defaults).ok, false); assert.equal(storage.getItem(key), value);
 }
});
test("private selectors have no choice or recommendation telemetry", () => {
 for (const name of ["adoration/AdorationPrayerPathSelector", "sacramentals/SacramentalFinderTool", "relics/RelicVisitReflectionTool", "councils/CouncilTopicFinder", "councils/CouncilsTimelineExplorer"]) {
 const source = readFileSync(new URL("../" + name + ".tsx", import.meta.url), "utf8");
 assert.doesNotMatch(source, /trackEvent|eventName=|eventParams=/, name);
 }
});
import { readFileSync } from "node:fs";

test("the filter-derived council cards opt out while static cards retain their default", () => {
 const explorer = readFileSync(new URL("../councils/CouncilsTimelineExplorer.tsx", import.meta.url), "utf8");
 const card = readFileSync(new URL("../councils/CouncilCard.tsx", import.meta.url), "utf8");
 assert.match(explorer, /council=\{council\} suppressResourceTracking/);
 assert.match(card, /suppressResourceTracking = false/);
 assert.match(card, /eventName=\{suppressResourceTracking \? undefined/);
 assert.match(card, /eventParams=\{suppressResourceTracking \? undefined/);
});
