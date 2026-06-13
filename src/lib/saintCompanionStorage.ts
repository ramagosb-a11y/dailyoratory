"use client";

import { useSyncExternalStore } from "react";
import { getPublishedSaints } from "@/lib/saints";
import type { SavedSaintCompanion, SavedSaintCompanionStore } from "@/types/saints";

export const saintCompanionStorageKey = "daily-oratory-saint-companions-v1";

const saintCompanionChangeEvent = "daily-oratory-saint-companions-change";
let cachedRawCompanions: string | null | undefined;
let cachedParsedCompanions: SavedSaintCompanionStore | null = null;

export const defaultSaintCompanionStore: SavedSaintCompanionStore = {
  version: 1,
  companions: [],
};

export function readSaintCompanionStore(): SavedSaintCompanionStore {
  if (typeof window === "undefined") return defaultSaintCompanionStore;

  try {
    const raw = window.localStorage.getItem(saintCompanionStorageKey);
    if (raw === cachedRawCompanions && cachedParsedCompanions) return cachedParsedCompanions;
    cachedRawCompanions = raw;

    if (!raw) {
      cachedParsedCompanions = defaultSaintCompanionStore;
      return cachedParsedCompanions;
    }

    cachedParsedCompanions = sanitizeStore(JSON.parse(raw) as Partial<SavedSaintCompanionStore>);
    return cachedParsedCompanions;
  } catch {
    cachedParsedCompanions = defaultSaintCompanionStore;
    return cachedParsedCompanions;
  }
}

export function saveSaintCompanionStore(store: SavedSaintCompanionStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(saintCompanionStorageKey, JSON.stringify(sanitizeStore(store)));
  cachedRawCompanions = undefined;
  window.dispatchEvent(new Event(saintCompanionChangeEvent));
}

export function useSaintCompanionStore() {
  return useSyncExternalStore(subscribeSaintCompanions, readSaintCompanionStore, getServerSnapshot);
}

export function saveSaintCompanion(saintId: string, note = "") {
  const store = readSaintCompanionStore();
  const companions = store.companions.filter((companion) => companion.saintId !== saintId);

  saveSaintCompanionStore({
    version: 1,
    companions: [
      {
        saintId,
        savedAt: new Date().toISOString(),
        note: note.slice(0, 800),
      },
      ...companions,
    ].slice(0, 30),
  });
}

export function removeSaintCompanion(saintId: string) {
  const store = readSaintCompanionStore();
  saveSaintCompanionStore({
    version: 1,
    companions: store.companions.filter((companion) => companion.saintId !== saintId),
  });
}

export function saveSaintCompanionNote(saintId: string, note: string) {
  const store = readSaintCompanionStore();
  saveSaintCompanionStore({
    version: 1,
    companions: store.companions.map((companion) =>
      companion.saintId === saintId ? { ...companion, note: note.slice(0, 800) } : companion,
    ),
  });
}

export function clearSaintCompanions() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(saintCompanionStorageKey);
  cachedRawCompanions = undefined;
  window.dispatchEvent(new Event(saintCompanionChangeEvent));
}

export function exportSaintCompanionsAsText(store: SavedSaintCompanionStore) {
  const saintById = new Map(getPublishedSaints().map((saint) => [saint.id, saint]));

  return [
    "Daily Oratory Saint Companions",
    "",
    "Private local list. This is not a horoscope, personality quiz, or spiritual assignment.",
    "",
    ...(store.companions.length
      ? store.companions.map((companion) => {
          const saint = saintById.get(companion.saintId);
          return [
            `- ${saint?.title ?? companion.saintId}`,
            saint ? `  Prayer: ${saint.prayerPrompt}` : "",
            companion.note ? `  Note: ${companion.note}` : "",
          ]
            .filter(Boolean)
            .join("\n");
        })
      : ["- No saved companions"]),
  ].join("\n");
}

export function exportSaintCompanionsAsJson(store: SavedSaintCompanionStore) {
  return JSON.stringify(store, null, 2);
}

function sanitizeStore(value: Partial<SavedSaintCompanionStore>): SavedSaintCompanionStore {
  const validSaintIds = new Set(getPublishedSaints().map((saint) => saint.id));

  return {
    version: 1,
    companions: Array.isArray(value.companions)
      ? (value.companions as unknown[])
          .filter((companion): companion is Partial<SavedSaintCompanion> => Boolean(companion) && typeof companion === "object")
          .map((companion) => ({
            saintId: typeof companion.saintId === "string" ? companion.saintId : "",
            savedAt: typeof companion.savedAt === "string" ? companion.savedAt : new Date().toISOString(),
            note: typeof companion.note === "string" ? companion.note.slice(0, 800) : "",
          }))
          .filter((companion) => validSaintIds.has(companion.saintId))
          .slice(0, 30)
      : [],
  };
}

function subscribeSaintCompanions(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === saintCompanionStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(saintCompanionChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(saintCompanionChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return defaultSaintCompanionStore;
}
