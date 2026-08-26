"use client";

import { useCallback, useSyncExternalStore } from "react";
import { guidedExaminationPaths } from "@/data/guidedExamination";
import type {
  CompanionCustomReflection,
  CompanionHistoryEntry,
  CompanionPromptStatus,
  ExaminationCompanionStore,
} from "@/types/examinationCompanion";
import type { GuidedExaminationPathId } from "@/types/guidedExamination";

export const examinationCompanionStorageKey = "daily-oratory-examination-companion-v1";

const guideIds = new Set<GuidedExaminationPathId>(guidedExaminationPaths.map((guide) => guide.id));
const examinationCompanionChangeEvent = "daily-oratory-examination-companion-change";

export const emptyExaminationCompanionStore: ExaminationCompanionStore = {
  version: 1,
  activeGuideId: "ten-commandments",
  lastConfessionDate: "",
  statusByPromptId: {},
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
      typeof maybe.activeGuideId === "string" && guideIds.has(maybe.activeGuideId as GuidedExaminationPathId)
        ? (maybe.activeGuideId as GuidedExaminationPathId)
        : "ten-commandments",
    lastConfessionDate:
      typeof maybe.lastConfessionDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(maybe.lastConfessionDate)
        ? maybe.lastConfessionDate
        : "",
    statusByPromptId: sanitizeStatuses(maybe.statusByPromptId),
    noteByPromptId: sanitizeNotes(maybe.noteByPromptId),
    customReflections: sanitizeCustomReflections(maybe.customReflections),
    history: sanitizeHistory(maybe.history),
    updatedAt: typeof maybe.updatedAt === "string" ? maybe.updatedAt : "",
  };
}

function sanitizeStatuses(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).filter(
      ([id, status]) => Boolean(id) && (status === "confess" || status === "clear"),
    ),
  ) as Record<string, CompanionPromptStatus>;
}

function sanitizeNotes(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([id, note]) => Boolean(id) && typeof note === "string")
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
