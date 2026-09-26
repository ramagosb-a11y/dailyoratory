import test from "node:test";
import assert from "node:assert/strict";
import {
  getLocalCalendarDate,
  getScriptureJournalSnapshot,
  saveScriptureJournalEntry,
  scriptureJournalStorageKey,
} from "../src/lib/scriptureJournalStorage.ts";
import { getScriptureStudyPassages } from "../src/lib/scriptureSourceLinks.ts";

function installMemoryWindow({ initial = null, deniedRead = false, deniedWrite = false } = {}) {
  const values = new Map();
  if (initial !== null) values.set(scriptureJournalStorageKey, initial);
  const target = new EventTarget();
  target.localStorage = {
    getItem(key) {
      if (deniedRead) throw new Error("Storage read denied");
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      if (deniedWrite) throw new Error("Storage write denied");
      values.set(key, value);
    },
  };
  globalThis.window = target;
  return { values, target };
}

test("uses local calendar parts rather than UTC date slicing", () => {
  assert.equal(getLocalCalendarDate(new Date(2026, 8, 26, 23, 45)), "2026-09-26");
});

test("saves and updates one entry for a date while preserving createdAt", () => {
  installMemoryWindow();
  const first = saveScriptureJournalEntry({ date: "2026-09-26", wordOrPhrase: " Abide ", reflection: "Stay with Christ." });
  assert.deepEqual(first, { ok: true });
  const firstEntry = getScriptureJournalSnapshot().store.entries["2026-09-26"];
  const second = saveScriptureJournalEntry({ date: "2026-09-26", wordOrPhrase: "Remain", reflection: "Return to prayer." });
  assert.deepEqual(second, { ok: true });
  const updated = getScriptureJournalSnapshot().store.entries["2026-09-26"];
  assert.equal(updated.wordOrPhrase, "Remain");
  assert.equal(updated.createdAt, firstEntry.createdAt);
  assert.equal(Object.keys(getScriptureJournalSnapshot().store.entries).length, 1);
});

test("sanitizes overlong and malformed entries without losing valid entries", () => {
  const initial = JSON.stringify({
    version: 1,
    entries: {
      "2026-09-26": { date: "2026-09-26", wordOrPhrase: "Mercy", reflection: "A sound note.", createdAt: "2026-09-26T10:00:00.000Z", updatedAt: "2026-09-26T10:00:00.000Z" },
      "not-a-date": { date: "not-a-date", wordOrPhrase: "x", reflection: "y", createdAt: "now", updatedAt: "now" },
      "2026-09-25": { date: "2026-09-25", wordOrPhrase: "x".repeat(61), reflection: "", createdAt: "2026-09-25T10:00:00.000Z", updatedAt: "2026-09-25T10:00:00.000Z" },
    },
  });
  installMemoryWindow({ initial });
  const snapshot = getScriptureJournalSnapshot();
  assert.equal(snapshot.status, "ready");
  assert.deepEqual(Object.keys(snapshot.store.entries), ["2026-09-26"]);
});

test("does not overwrite malformed root data and handles denied storage", () => {
  const malformed = "{broken";
  const { values } = installMemoryWindow({ initial: malformed });
  assert.equal(getScriptureJournalSnapshot().status, "corrupt");
  assert.deepEqual(saveScriptureJournalEntry({ date: "2026-09-26", wordOrPhrase: "Mercy", reflection: "A private note." }), { ok: false, reason: "corrupt" });
  assert.equal(values.get(scriptureJournalStorageKey), malformed);

  installMemoryWindow({ deniedRead: true });
  assert.equal(getScriptureJournalSnapshot().status, "unavailable");
  assert.deepEqual(saveScriptureJournalEntry({ date: "2026-09-26", wordOrPhrase: "Mercy", reflection: "A private note." }), { ok: false, reason: "unavailable" });

  installMemoryWindow({ deniedWrite: true });
  assert.deepEqual(saveScriptureJournalEntry({ date: "2026-09-26", wordOrPhrase: "Mercy", reflection: "A private note." }), { ok: false, reason: "unavailable" });
});

test("builds direct source links for Ecclesiastes and converts modern psalm numbering", () => {
  const passages = getScriptureStudyPassages([
    { label: "First Reading", reference: "Ecclesiastes 3:1-11" },
    { label: "Responsorial Psalm", reference: "Psalm 104" },
  ]);
  assert.equal(passages[0].douayHref, "https://www.drbo.org/chapter/23003.htm");
  assert.equal(passages[0].haydockHref, "https://johnblood.gitlab.io/haydock/id1129.html");
  assert.equal(passages[0].haydockDirect, true);
  assert.equal(passages[1].douayHref, "https://www.drbo.org/chapter/21103.htm");
  assert.equal(passages[1].haydockDirect, false);
});

test("supports multi-reading references and uses the Haydock book index fallback", () => {
  const passages = getScriptureStudyPassages([
    { label: "First Reading Option", reference: "Genesis 11:1-9; Exodus 19:3-8a, 16-20b" },
    { label: "Gospel", reference: "Matthew 16:13-20" },
  ]);
  assert.equal(passages.length, 3);
  assert.equal(passages[0].douayHref, "https://www.drbo.org/chapter/01011.htm");
  assert.equal(passages[1].douayHref, "https://www.drbo.org/chapter/02019.htm");
  assert.equal(passages[2].haydockHref, "https://johnblood.gitlab.io/haydock/id34.html");
});

test("unsupported book syntax returns no unsafe or malformed link", () => {
  assert.deepEqual(getScriptureStudyPassages([{ label: "Reading", reference: "Mystery 1:1" }]), []);
});
