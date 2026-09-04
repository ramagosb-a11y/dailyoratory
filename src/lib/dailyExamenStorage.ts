"use client";

import { useSyncExternalStore } from "react";
import type {
  NightlyExamenDraft,
  NightlyExamenPace,
  NightlyExamenSession,
  NightlyExamenStore,
} from "@/types/dailyExamen";

export const nightlyExamenStorageKey = "daily-oratory-nightly-examen-v1";

const changeEvent = "daily-oratory-nightly-examen-change";
const paceValues = new Set<NightlyExamenPace>(["rest", "review", "discern"]);
const emptyStore: NightlyExamenStore = { version: 1, draft: null, sessions: [] };
let cachedRaw: string | null | undefined;
let cachedParsed: NightlyExamenStore | null = null;

export function useNightlyExamenStore() {
  return useSyncExternalStore(subscribe, readNightlyExamenStore, getServerSnapshot);
}

export function readNightlyExamenStore(): NightlyExamenStore {
  if (typeof window === "undefined") return emptyStore;

  try {
    const raw = window.localStorage.getItem(nightlyExamenStorageKey);
    if (raw === cachedRaw && cachedParsed) return cachedParsed;
    cachedRaw = raw;
    cachedParsed = raw ? sanitizeStore(JSON.parse(raw) as Partial<NightlyExamenStore>) : emptyStore;
    return cachedParsed;
  } catch {
    cachedParsed = emptyStore;
    return cachedParsed;
  }
}

export function saveNightlyExamenDraft(draft: NightlyExamenDraft | null) {
  const store = readNightlyExamenStore();
  return saveStore({ ...store, draft: draft ? sanitizeDraft(draft) : null });
}

export function completeNightlyExamen(session: NightlyExamenSession) {
  const store = readNightlyExamenStore();
  const sanitizedSession = sanitizeSession(session);
  const sessions = [
    sanitizedSession,
    ...store.sessions.filter((item) => item.localDate !== sanitizedSession.localDate),
  ].slice(0, 90);

  return saveStore({ version: 1, draft: null, sessions });
}

export function clearNightlyExamenData() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(nightlyExamenStorageKey);
  } catch {
    // The in-memory experience can still reset when browser storage is unavailable.
  }
  cachedRaw = undefined;
  cachedParsed = null;
  window.dispatchEvent(new Event(changeEvent));
}

function saveStore(store: NightlyExamenStore) {
  if (typeof window === "undefined") return false;
  try {
    const sanitized = sanitizeStore(store);
    window.localStorage.setItem(nightlyExamenStorageKey, JSON.stringify(sanitized));
    cachedRaw = undefined;
    cachedParsed = null;
    window.dispatchEvent(new Event(changeEvent));
    return true;
  } catch {
    return false;
  }
}

function sanitizeStore(value: Partial<NightlyExamenStore>): NightlyExamenStore {
  return {
    version: 1,
    draft: value.draft ? sanitizeDraft(value.draft) : null,
    sessions: Array.isArray(value.sessions) ? value.sessions.map(sanitizeSession).slice(0, 90) : [],
  };
}

function sanitizeDraft(value: Partial<NightlyExamenDraft>): NightlyExamenDraft {
  return {
    localDate: sanitizeText(value.localDate, 10),
    startedAt: sanitizeText(value.startedAt, 40),
    pace: value.pace && paceValues.has(value.pace) ? value.pace : "review",
    writingEnabled: value.writingEnabled !== false,
    stepIndex: clampNumber(value.stepIndex, 0, 5),
    gratitude: sanitizeText(value.gratitude, 600),
    gratitudeArea: sanitizeText(value.gratitudeArea, 40),
    significantMoment: sanitizeText(value.significantMoment, 900),
    movementTags: sanitizeList(value.movementTags, 8, 40),
    mercy: sanitizeText(value.mercy, 700),
    tomorrowGrace: sanitizeText(value.tomorrowGrace, 40),
  };
}

function sanitizeSession(value: Partial<NightlyExamenSession>): NightlyExamenSession {
  const draft = sanitizeDraft(value);
  return {
    localDate: draft.localDate,
    startedAt: draft.startedAt,
    pace: draft.pace,
    writingEnabled: draft.writingEnabled,
    gratitude: draft.gratitude,
    gratitudeArea: draft.gratitudeArea,
    significantMoment: draft.significantMoment,
    movementTags: draft.movementTags,
    mercy: draft.mercy,
    tomorrowGrace: draft.tomorrowGrace,
    id: sanitizeText(value.id, 80) || `examen-${draft.localDate}`,
    completedAt: sanitizeText(value.completedAt, 40),
    durationMinutes: clampNumber(value.durationMinutes, 1, 120),
  };
}

function sanitizeText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.slice(0, maxLength) : "";
}

function sanitizeList(value: unknown, maxItems: number, maxLength: number) {
  if (!Array.isArray(value)) return [];
  return Array.from(
    new Set(value.filter((item): item is string => typeof item === "string").map((item) => item.slice(0, maxLength))),
  ).slice(0, maxItems);
}

function clampNumber(value: unknown, minimum: number, maximum: number) {
  const number = typeof value === "number" && Number.isFinite(value) ? Math.round(value) : minimum;
  return Math.min(maximum, Math.max(minimum, number));
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === nightlyExamenStorageKey) {
      cachedRaw = undefined;
      cachedParsed = null;
      onStoreChange();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(changeEvent, onStoreChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(changeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return emptyStore;
}
