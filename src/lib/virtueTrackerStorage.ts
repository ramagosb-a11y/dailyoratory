"use client";

import { useSyncExternalStore } from "react";
import { viceDefinitions, virtueDefinitions } from "@/data/virtueTracker";
import { exportVirtueTrackerText } from "@/lib/virtueTracker";
import type {
  PatternTenderness,
  ViceName,
  VirtueName,
  VirtueTrackerCheckIn,
  VirtueTrackerSettings,
  VirtueTrackerStore,
} from "@/types/virtueTracker";

export const virtueTrackerStorageKey = "daily-oratory-virtue-tracker-v1";

const virtueTrackerChangeEvent = "daily-oratory-virtue-tracker-change";
const virtueValues = new Set<VirtueName>(virtueDefinitions.map((item) => item.virtue));
const viceValues = new Set<ViceName>(viceDefinitions.map((item) => item.vice));
const tendernessValues = new Set<PatternTenderness>(["light", "noticeable", "recurring"]);
let cachedRawTracker: string | null | undefined;
let cachedParsedTracker: VirtueTrackerStore | null = null;

export const defaultVirtueTrackerSettings: VirtueTrackerSettings = {
  defaultVirtueFocus: ["faith", "hope", "charity"],
  reviewCadence: "weekly",
  includeConfessionPrepReminder: true,
};

export const defaultVirtueTrackerStore: VirtueTrackerStore = {
  version: 1,
  checkIns: [],
  settings: defaultVirtueTrackerSettings,
};

export function readVirtueTrackerStore(): VirtueTrackerStore {
  if (typeof window === "undefined") return defaultVirtueTrackerStore;

  try {
    const raw = window.localStorage.getItem(virtueTrackerStorageKey);
    if (raw === cachedRawTracker && cachedParsedTracker) return cachedParsedTracker;
    cachedRawTracker = raw;

    if (!raw) {
      cachedParsedTracker = defaultVirtueTrackerStore;
      return cachedParsedTracker;
    }

    cachedParsedTracker = sanitizeStore(JSON.parse(raw) as Partial<VirtueTrackerStore>);
    return cachedParsedTracker;
  } catch {
    cachedParsedTracker = defaultVirtueTrackerStore;
    return cachedParsedTracker;
  }
}

export function saveVirtueTrackerStore(store: VirtueTrackerStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(virtueTrackerStorageKey, JSON.stringify(sanitizeStore(store)));
  cachedRawTracker = undefined;
  window.dispatchEvent(new Event(virtueTrackerChangeEvent));
}

export function useVirtueTrackerStore() {
  return useSyncExternalStore(subscribeVirtueTracker, readVirtueTrackerStore, getServerSnapshot);
}

export function saveVirtueCheckIn(input: Omit<VirtueTrackerCheckIn, "id" | "createdAt" | "updatedAt">) {
  const store = readVirtueTrackerStore();
  const now = new Date().toISOString();
  const checkIn: VirtueTrackerCheckIn = sanitizeCheckIn({
    ...input,
    id: createLocalId(),
    createdAt: now,
    updatedAt: now,
  });

  saveVirtueTrackerStore({
    ...store,
    checkIns: [checkIn, ...store.checkIns].slice(0, 365),
  });

  return checkIn;
}

export function updateVirtueTrackerSettings(patch: Partial<VirtueTrackerSettings>) {
  const store = readVirtueTrackerStore();
  saveVirtueTrackerStore({
    ...store,
    settings: sanitizeSettings({ ...store.settings, ...patch }),
  });
}

export function deleteVirtueCheckIn(id: string) {
  const store = readVirtueTrackerStore();
  saveVirtueTrackerStore({
    ...store,
    checkIns: store.checkIns.filter((checkIn) => checkIn.id !== id),
  });
}

export function clearVirtueTrackerData() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(virtueTrackerStorageKey);
  cachedRawTracker = undefined;
  window.dispatchEvent(new Event(virtueTrackerChangeEvent));
}

export function exportVirtueTrackerAsJson(store: VirtueTrackerStore) {
  return JSON.stringify(store, null, 2);
}

export function exportVirtueTrackerAsText(store: VirtueTrackerStore) {
  return exportVirtueTrackerText(store.checkIns);
}

function sanitizeStore(value: Partial<VirtueTrackerStore>): VirtueTrackerStore {
  return {
    version: 1,
    checkIns: Array.isArray(value.checkIns) ? value.checkIns.map(sanitizeCheckIn).filter(Boolean).slice(0, 365) : [],
    settings: sanitizeSettings(value.settings),
  };
}

function sanitizeCheckIn(value: Partial<VirtueTrackerCheckIn>): VirtueTrackerCheckIn {
  const now = new Date().toISOString();

  return {
    id: typeof value.id === "string" && value.id ? value.id : createLocalId(),
    date: typeof value.date === "string" && value.date ? value.date : now.slice(0, 10),
    virtueFocus: sanitizeVirtues(value.virtueFocus),
    viceStruggles: sanitizeVices(value.viceStruggles),
    patternTenderness:
      value.patternTenderness && tendernessValues.has(value.patternTenderness)
        ? value.patternTenderness
        : "noticeable",
    graceReceived: sanitizeNote(value.graceReceived, 900),
    struggleNotes: sanitizeNote(value.struggleNotes, 900),
    nextStep: sanitizeNote(value.nextStep, 500),
    prayer: sanitizeNote(value.prayer, 500),
    confessionPrepNote: sanitizeNote(value.confessionPrepNote, 900),
    bringToConfession: Boolean(value.bringToConfession),
    createdAt: typeof value.createdAt === "string" ? value.createdAt : now,
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : now,
  };
}

function sanitizeSettings(value: Partial<VirtueTrackerSettings> | undefined): VirtueTrackerSettings {
  const defaultVirtueFocus = sanitizeVirtues(value?.defaultVirtueFocus);

  return {
    defaultVirtueFocus: defaultVirtueFocus.length ? defaultVirtueFocus : defaultVirtueTrackerSettings.defaultVirtueFocus,
    reviewCadence:
      value?.reviewCadence === "daily" || value?.reviewCadence === "weekly" || value?.reviewCadence === "monthly"
        ? value.reviewCadence
        : defaultVirtueTrackerSettings.reviewCadence,
    includeConfessionPrepReminder:
      typeof value?.includeConfessionPrepReminder === "boolean"
        ? value.includeConfessionPrepReminder
        : defaultVirtueTrackerSettings.includeConfessionPrepReminder,
  };
}

function sanitizeVirtues(value: unknown) {
  if (!Array.isArray(value)) return [];
  return Array.from(new Set(value.filter((item): item is VirtueName => typeof item === "string" && virtueValues.has(item as VirtueName))));
}

function sanitizeVices(value: unknown) {
  if (!Array.isArray(value)) return [];
  return Array.from(new Set(value.filter((item): item is ViceName => typeof item === "string" && viceValues.has(item as ViceName))));
}

function sanitizeNote(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.slice(0, maxLength) : "";
}

function subscribeVirtueTracker(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === virtueTrackerStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(virtueTrackerChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(virtueTrackerChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return defaultVirtueTrackerStore;
}

function createLocalId() {
  if (typeof window !== "undefined" && window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `virtue-check-in-${Date.now()}`;
}
