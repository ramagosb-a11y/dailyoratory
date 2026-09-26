"use client";

import { useSyncExternalStore } from "react";

export type ScriptureJournalEntry = {
  date: string;
  wordOrPhrase: string;
  reflection: string;
  createdAt: string;
  updatedAt: string;
};

export type ScriptureJournalStore = {
  version: 1;
  entries: Record<string, ScriptureJournalEntry>;
};

export type ScriptureJournalSnapshot = {
  store: ScriptureJournalStore;
  status: "ready" | "corrupt" | "unavailable";
};

export const scriptureJournalStorageKey = "daily-oratory-scripture-journal-v1";

const changeEventName = "daily-oratory-scripture-journal-change";
const emptyStore: ScriptureJournalStore = { version: 1, entries: {} };
const emptySnapshot: ScriptureJournalSnapshot = { store: emptyStore, status: "ready" };
const corruptSnapshot: ScriptureJournalSnapshot = { store: emptyStore, status: "corrupt" };
const unavailableSnapshot: ScriptureJournalSnapshot = { store: emptyStore, status: "unavailable" };

let cachedRaw: string | null | undefined;
let cachedSnapshot: ScriptureJournalSnapshot = emptySnapshot;

export function getLocalCalendarDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function useScriptureJournalStore() {
  return useSyncExternalStore(subscribe, getScriptureJournalSnapshot, getServerSnapshot);
}

export function getScriptureJournalSnapshot(): ScriptureJournalSnapshot {
  if (typeof window === "undefined") return emptySnapshot;

  let raw: string | null;
  try {
    raw = window.localStorage.getItem(scriptureJournalStorageKey);
  } catch {
    return unavailableSnapshot;
  }

  if (raw === cachedRaw) return cachedSnapshot;
  cachedRaw = raw;

  if (!raw) {
    cachedSnapshot = emptySnapshot;
    return cachedSnapshot;
  }

  try {
    cachedSnapshot = sanitizeSnapshot(JSON.parse(raw) as unknown);
  } catch {
    cachedSnapshot = corruptSnapshot;
  }
  return cachedSnapshot;
}

export function saveScriptureJournalEntry(
  input: Pick<ScriptureJournalEntry, "date" | "wordOrPhrase" | "reflection">,
): { ok: true } | { ok: false; reason: "corrupt" | "unavailable" } {
  if (typeof window === "undefined") return { ok: false, reason: "unavailable" };
  const snapshot = getScriptureJournalSnapshot();
  if (snapshot.status !== "ready") return { ok: false, reason: snapshot.status };

  const date = input.date;
  const wordOrPhrase = input.wordOrPhrase.trim().slice(0, 60);
  const reflection = input.reflection.trim().slice(0, 500);
  if (!isValidDateKey(date) || (!wordOrPhrase && !reflection)) return { ok: false, reason: "unavailable" };

  const now = new Date().toISOString();
  const existing = snapshot.store.entries[date];
  const entry: ScriptureJournalEntry = {
    date,
    wordOrPhrase,
    reflection,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };

  try {
    const next: ScriptureJournalStore = {
      version: 1,
      entries: { ...snapshot.store.entries, [date]: entry },
    };
    window.localStorage.setItem(scriptureJournalStorageKey, JSON.stringify(next));
    cachedRaw = undefined;
    window.dispatchEvent(new Event(changeEventName));
    return { ok: true };
  } catch {
    return { ok: false, reason: "unavailable" };
  }
}

export function isValidDateKey(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return Number.isFinite(date.getTime()) && getLocalCalendarDate(date) === value;
}

function sanitizeSnapshot(value: unknown): ScriptureJournalSnapshot {
  if (!isRecord(value) || value.version !== 1 || !isRecord(value.entries)) return corruptSnapshot;

  const entries: Record<string, ScriptureJournalEntry> = Object.create(null) as Record<string, ScriptureJournalEntry>;
  for (const [date, valueEntry] of Object.entries(value.entries)) {
    if (!isValidEntry(date, valueEntry)) continue;
    entries[date] = {
      date,
      wordOrPhrase: valueEntry.wordOrPhrase,
      reflection: valueEntry.reflection,
      createdAt: valueEntry.createdAt,
      updatedAt: valueEntry.updatedAt,
    };
  }
  return { status: "ready", store: { version: 1, entries } };
}

function isValidEntry(date: string, value: unknown): value is ScriptureJournalEntry {
  return (
    isValidDateKey(date) &&
    isRecord(value) &&
    value.date === date &&
    typeof value.wordOrPhrase === "string" &&
    value.wordOrPhrase.length <= 60 &&
    typeof value.reflection === "string" &&
    value.reflection.length <= 500 &&
    isValidTimestamp(value.createdAt) &&
    isValidTimestamp(value.updatedAt)
  );
}

function isValidTimestamp(value: unknown): value is string {
  return typeof value === "string" && Number.isFinite(Date.parse(value));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => undefined;
  const handleStorage = (event: StorageEvent) => {
    if (event.key === scriptureJournalStorageKey || event.key === null) callback();
  };
  window.addEventListener("storage", handleStorage);
  window.addEventListener(changeEventName, callback);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(changeEventName, callback);
  };
}

function getServerSnapshot() {
  return emptySnapshot;
}
