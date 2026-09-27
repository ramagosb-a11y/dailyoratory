import test from "node:test";
import assert from "node:assert/strict";
import {
  getLocalCalendarDate,
  getScriptureJournalSnapshot,
  saveScriptureJournalEntry,
  scriptureJournalStorageKey,
} from "../src/lib/scriptureJournalStorage.ts";
import { getScriptureStudyPassages } from "../src/lib/scriptureSourceLinks.ts";
import haydockChapterMap from "../src/lib/haydockChapterLinks.generated.json" with { type: "json" };

const haydockChapterLinks = haydockChapterMap.chapters;

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
      "2026-09-25": { date: "2026-09-25", wordOrPhrase: "x".repeat(121), reflection: "", createdAt: "2026-09-25T10:00:00.000Z", updatedAt: "2026-09-25T10:00:00.000Z" },
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
  assert.equal(passages[0].douayTargets[0].href, "https://www.drbo.org/chapter/23003.htm");
  assert.equal(passages[0].haydockTargets[0].href, "https://johnblood.gitlab.io/haydock/id1129.html");
  assert.equal(passages[0].haydockDirect, true);
  assert.equal(passages[1].douayTargets[0].href, "https://www.drbo.org/chapter/21103.htm");
  assert.equal(passages[1].haydockTargets[0].href, haydockChapterLinks["psalm:103"]);
  assert.equal(passages[1].haydockDirect, true);
});

test("supports multi-reading references and maps their Haydock chapters", () => {
  const passages = getScriptureStudyPassages([
    { label: "First Reading Option", reference: "Genesis 11:1-9; Exodus 19:3-8a, 16-20b" },
    { label: "Gospel", reference: "Matthew 16:13-20" },
  ]);
  assert.equal(passages.length, 3);
  assert.equal(passages[0].douayTargets[0].href, "https://www.drbo.org/chapter/01011.htm");
  assert.equal(passages[1].douayTargets[0].href, "https://www.drbo.org/chapter/02019.htm");
  assert.equal(passages[2].haydockTargets[0].href, "https://johnblood.gitlab.io/haydock/id34.html");
  assert.equal(passages[2].haydockDirect, true);
});

test("maps Psalm 25 to the matching Haydock chapter with clear numbering", () => {
  const [passage] = getScriptureStudyPassages([
    { label: "Responsorial Psalm", reference: "Psalm 25:4-5, 6-7, 8-9" },
  ]);
  assert.equal(passage.haydockTargets[0].href, "https://johnblood.gitlab.io/haydock/id749.html");
  assert.match(passage.haydockTargets[0].label, /Psalm 24 \(modern Psalm 25\)/);
  assert.equal(passage.haydockDirect, true);
});

test("maps split modern Psalms 116 and 147 to both Haydock and translation chapters", () => {
  const [psalm116, psalm147] = getScriptureStudyPassages([
    { label: "Psalm", reference: "Psalm 116:1-9, 10-19" },
    { label: "Psalm", reference: "Psalm 147:1-11, 12-20" },
  ]);
  assert.deepEqual(psalm116.haydockTargets.map((target) => target.href), [
    haydockChapterLinks["psalm:114"], haydockChapterLinks["psalm:115"],
  ]);
  assert.deepEqual(psalm116.newAdventTargets.map((target) => target.href), [
    "https://www.newadvent.org/bible/psa114.htm", "https://www.newadvent.org/bible/psa115.htm",
  ]);
  assert.deepEqual(psalm116.douayTargets.map((target) => target.href), [
    "https://www.drbo.org/chapter/21114.htm", "https://www.drbo.org/chapter/21115.htm",
  ]);
  assert.match(psalm116.haydockTargets[0].label, /verses 1–9/);
  assert.match(psalm116.haydockTargets[1].label, /verses 10–19/);
  assert.deepEqual(psalm147.haydockTargets.map((target) => target.href), [
    haydockChapterLinks["psalm:146"], haydockChapterLinks["psalm:147"],
  ]);
  assert.match(psalm147.haydockTargets[0].label, /verses 1–11/);
  assert.match(psalm147.haydockTargets[1].label, /verses 12–20/);
});

test("maps merged and boundary Psalms through Haydock's numbering", () => {
  const chapterPairs = [[9, 9], [10, 9], [113, 112], [114, 113], [115, 113], [117, 116], [146, 145], [148, 148], [150, 150]];
  for (const [modernPsalm, haydockPsalm] of chapterPairs) {
    const [passage] = getScriptureStudyPassages([{ label: "Psalm", reference: `Psalm ${modernPsalm}:1-2` }]);
    assert.equal(passage.haydockTargets[0].href, haydockChapterLinks[`psalm:${haydockPsalm}`], `Psalm ${modernPsalm}`);
    assert.equal(passage.haydockDirect, true, `Psalm ${modernPsalm}`);
  }
});

test("uses a clearly labeled fallback for a chapter absent from the source index", () => {
  const [passage] = getScriptureStudyPassages([{ label: "Reading", reference: "Genesis 99:1-2" }]);
  assert.equal(passage.haydockTargets[0].href, "https://johnblood.gitlab.io/haydock/id330.html");
  assert.match(passage.haydockTargets[0].label, /Choose chapter in the Old Testament index/);
  assert.equal(passage.haydockDirect, false);
});

test("the checked-in Haydock map contains the full navigation snapshot and valid chapter URLs", () => {
  const entries = Object.entries(haydockChapterLinks);
  assert.ok(entries.length > 1300);
  assert.equal(new Set(entries.map(([key]) => key.split(":")[0])).size, 73);
  for (const [key, href] of entries) {
    assert.match(key, /^[a-z0-9 ]+:\d+$/);
    assert.match(href, /^https:\/\/johnblood\.gitlab\.io\/haydock\/id\d+\.html$/);
  }
});

test("unsupported book syntax returns no unsafe or malformed link", () => {
  assert.deepEqual(getScriptureStudyPassages([{ label: "Reading", reference: "Mystery 1:1" }]), []);
});
