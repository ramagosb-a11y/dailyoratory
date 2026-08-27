"use client";

import { useCallback, useSyncExternalStore } from "react";
import { companionExaminationGuides } from "@/data/examinationCompanion";
import type {
  CompanionCustomReflection,
  CompanionGuideId,
  CompanionHistoryEntry,
  CompanionPromptStatus,
  CompanionSinDetails,
  CompanionSinFrequency,
  ExaminationCompanionStore,
} from "@/types/examinationCompanion";

export const examinationCompanionStorageKey = "daily-oratory-examination-companion-v1";

const guideIds = new Set<CompanionGuideId>(companionExaminationGuides.map((guide) => guide.id));
const promptIds = new Set(
  companionExaminationGuides.flatMap((guide) =>
    guide.sections.flatMap((section) => section.prompts.map((prompt) => prompt.id)),
  ),
);
const examinationCompanionChangeEvent = "daily-oratory-examination-companion-change";

export const emptyExaminationCompanionStore: ExaminationCompanionStore = {
  version: 1,
  activeGuideId: "ten-commandments",
  lastConfessionDate: "",
  statusByPromptId: {},
  sinDetailsByPromptId: {},
  noteByPromptId: {},
  customReflections: [],
  history: [],
  updatedAt: "",
};

export function useExaminationCompanionStore() {
  const store = useSyncExternalStore(subscribe, readStore, getServerSnapshot);

  const updateStore = useCallback((update: (current: ExaminationCompanionStore) => ExaminationCompanionStore) => {
    saveStore({ ...update(readStore()), version: 1, updatedAt: new Date().toISOString() });
  }, []);

  const clearStore = useCallback(() => {
    try {
      window.localStorage.removeItem(examinationCompanionStorageKey);
    } catch {
      // The unavailable-storage notice remains visible through canUseStorage().
    } finally {
      cachedRaw = undefined;
      window.dispatchEvent(new Event(examinationCompanionChangeEvent));
    }
  }, []);

  return { clearStore, ready: true, storageAvailable: canUseStorage(), store, updateStore };
}

let cachedRaw: string | null | undefined;
let cachedStore = emptyExaminationCompanionStore;

function readStore() {
  if (typeof window === "undefined") return emptyExaminationCompanionStore;

  try {
    const raw = window.localStorage.getItem(examinationCompanionStorageKey);
    if (raw === cachedRaw) return cachedStore;
    cachedRaw = raw;
    cachedStore = raw ? sanitizeStore(JSON.parse(raw)) : emptyExaminationCompanionStore;
    return cachedStore;
  } catch {
    return emptyExaminationCompanionStore;
  }
}

function saveStore(store: ExaminationCompanionStore) {
  try {
    window.localStorage.setItem(examinationCompanionStorageKey, JSON.stringify(store));
  } catch {
    // The unavailable-storage notice remains visible through canUseStorage().
  } finally {
    cachedRaw = undefined;
    window.dispatchEvent(new Event(examinationCompanionChangeEvent));
  }
}

function subscribe(onStoreChange: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === examinationCompanionStorageKey) {
      cachedRaw = undefined;
      onStoreChange();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(examinationCompanionChangeEvent, onStoreChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(examinationCompanionChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return emptyExaminationCompanionStore;
}

function canUseStorage() {
  if (typeof window === "undefined") return true;
  try {
    const key = "__daily-oratory-examination-companion-test__";
    window.localStorage.setItem(key, "1");
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

function sanitizeStore(value: unknown): ExaminationCompanionStore {
  if (!value || typeof value !== "object") return { ...emptyExaminationCompanionStore };
  const maybe = value as Partial<ExaminationCompanionStore>;

  return {
    version: 1,
    activeGuideId:
      typeof maybe.activeGuideId === "string" && guideIds.has(maybe.activeGuideId as CompanionGuideId)
        ? (maybe.activeGuideId as CompanionGuideId)
        : "ten-commandments",
    lastConfessionDate:
      typeof maybe.lastConfessionDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(maybe.lastConfessionDate)
        ? maybe.lastConfessionDate
        : "",
    statusByPromptId: sanitizeStatuses(maybe.statusByPromptId),
    sinDetailsByPromptId: sanitizeSinDetails(maybe.sinDetailsByPromptId),
    noteByPromptId: sanitizeNotes(maybe.noteByPromptId),
    customReflections: sanitizeCustomReflections(maybe.customReflections),
    history: sanitizeHistory(maybe.history),
    updatedAt: typeof maybe.updatedAt === "string" ? maybe.updatedAt : "",
  };
}

const sinFrequencies = new Set<CompanionSinFrequency>([
  "once",
  "few-times",
  "several-times",
  "habitual",
  "daily",
  "unsure",
]);

function sanitizeSinDetails(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([id, details]) => {
        if (!promptIds.has(id) && !id.startsWith("companion-custom-")) return false;
        if (!details || typeof details !== "object") return false;
        const maybe = details as Partial<CompanionSinDetails>;
        return typeof maybe.frequency === "string" && sinFrequencies.has(maybe.frequency as CompanionSinFrequency);
      })
      .map(([id, details]) => {
        const safe = details as CompanionSinDetails;
        return [id, { frequency: safe.frequency, graveMatter: safe.graveMatter === true }];
      }),
  ) as Record<string, CompanionSinDetails>;
}

function sanitizeStatuses(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).filter(
      ([id, status]) =>
        (promptIds.has(id) || id.startsWith("companion-custom-")) &&
        (status === "confess" || status === "clear"),
    ),
  ) as Record<string, CompanionPromptStatus>;
}

function sanitizeNotes(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(
        ([id, note]) =>
          (promptIds.has(id) || id.startsWith("companion-custom-")) && typeof note === "string",
      )
      .map(([id, note]) => [id, (note as string).slice(0, 1200)]),
  );
}

function sanitizeCustomReflections(value: unknown): CompanionCustomReflection[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is CompanionCustomReflection => {
      if (!item || typeof item !== "object") return false;
      const maybe = item as Partial<CompanionCustomReflection>;
      return typeof maybe.id === "string" && typeof maybe.text === "string";
    })
    .slice(0, 20)
    .map((item) => ({
      id: item.id.slice(0, 100),
      text: item.text.slice(0, 300),
      status: item.status === "confess" || item.status === "clear" ? item.status : undefined,
    }));
}

function sanitizeHistory(value: unknown): CompanionHistoryEntry[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is CompanionHistoryEntry => {
      if (!item || typeof item !== "object") return false;
      const maybe = item as Partial<CompanionHistoryEntry>;
      return (
        typeof maybe.id === "string" &&
        typeof maybe.completedAt === "string" &&
        typeof maybe.itemCount === "number" &&
        Array.isArray(maybe.guideTitles)
      );
    })
    .slice(0, 12)
    .map((item) => ({
      id: item.id.slice(0, 100),
      completedAt: item.completedAt,
      itemCount: Math.max(0, Math.floor(item.itemCount)),
      guideTitles: item.guideTitles.filter((title): title is string => typeof title === "string").slice(0, 7),
    }));
}
