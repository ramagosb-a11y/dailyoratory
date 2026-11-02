import test from "node:test";
import assert from "node:assert/strict";
import { parseStoredIndulgencePlan } from "./planStorage.ts";

const synthetic = {
  selectedWork: "rosary", intentionType: "my-own-soul", intentionName: "Synthetic QA intention",
  confessionPlannedOrCompleted: false, communionPlannedOrCompleted: true,
  prayedForPopeIntentions: false, prayedForDetachment: true, workCompletedOrPlanned: false,
  createdAt: "2026-11-01T12:00:00.000Z",
};
const parse = (value) => parseStoredIndulgencePlan(JSON.stringify(value), ["rosary", "other"]);

test("preserves a complete valid plan and strips unknown stored fields", () => {
  assert.deepEqual(parse({ ...synthetic, injected: "ignored" }), synthetic);
});
test("rejects malformed JSON, null, arrays, and incomplete records", () => {
  assert.equal(parseStoredIndulgencePlan("{", ["rosary"]), null);
  for (const value of [null, [], {}, { selectedWork: "rosary" }]) assert.equal(parse(value), null);
});
test("rejects invalid enums, booleans, intention types and dates", () => {
  for (const delta of [{ selectedWork: "unknown" }, { intentionType: "unknown" }, { intentionName: {} }, { intentionName: "x".repeat(501) }, { createdAt: "invalid" }, { prayedForDetachment: "true" }]) {
    assert.equal(parse({ ...synthetic, ...delta }), null);
  }
});
