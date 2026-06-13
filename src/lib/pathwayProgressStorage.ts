"use client";

import { useSyncExternalStore } from "react";
import { pathwayPaces, pathwayStages } from "@/data/pathways";
import type {
  PathwayPace,
  PathwayProgressRecord,
  PathwayProgressStore,
  PathwaySettingsRecord,
} from "@/types/pathways";

export const pathwayProgressStorageKey = "daily-oratory-pathways-v1";

const pathwayProgressChangeEvent = "daily-oratory-pathways-change";
let cachedRawStore: string | null | undefined;
let cachedParsedStore: PathwayProgressStore | null = null;

export const defaultPathwaySettings: PathwaySettingsRecord = {
  version: 1,
  spiritualSeason: "not-sure",
  availablePace: "gentle",
  household: "not-sure",
  focusTags: [],
  updatedAt: "2026-05-06T00:00:00.000Z",
};

export const defaultPathwayProgressStore: PathwayProgressStore = {
  version: 1,
  pathways: {},
  settings: defaultPathwaySettings,
};

export function readPathwayProgressStore(): PathwayProgressStore {
  if (typeof window === "undefined") return defaultPathwayProgressStore;

  try {
    const raw = window.localStorage.getItem(pathwayProgressStorageKey);
    if (raw === cachedRawStore && cachedParsedStore) return cachedParsedStore;
    cachedRawStore = raw;

    if (!raw) {
      cachedParsedStore = defaultPathwayProgressStore;
      return cachedParsedStore;
    }

    const parsed = JSON.parse(raw) as Partial<PathwayProgressStore>;
    cachedParsedStore = sanitizeStore(parsed);

    return cachedParsedStore;
  } catch {
    cachedParsedStore = defaultPathwayProgressStore;
    return cachedParsedStore;
  }
}

export function savePathwayProgressStore(store: PathwayProgressStore) {
  if (typeof window === "undefined") return;
  const sanitized = sanitizeStore(store);
  window.localStorage.setItem(pathwayProgressStorageKey, JSON.stringify(sanitized));
  cachedRawStore = undefined;
  emitPathwayProgressChange();
}

export function usePathwayProgressStore() {
  return useSyncExternalStore(subscribePathwayProgress, readPathwayProgressStore, getServerSnapshot);
}

export function startPathway(slug: string, firstStepSlug?: string) {
  const store = readPathwayProgressStore();
  const now = new Date().toISOString();
  const existing = store.pathways[slug];

  savePathwayProgressStore({
    ...store,
    pathways: {
      ...store.pathways,
      [slug]: {
        slug,
        startedAt: existing?.startedAt ?? now,
        updatedAt: now,
        completedStepSlugs: existing?.completedStepSlugs ?? [],
        currentStepSlug: existing?.currentStepSlug ?? firstStepSlug,
      },
    },
  });
}

export function setCurrentPathwayStep(slug: string, stepSlug: string) {
  const store = readPathwayProgressStore();
  const existing = store.pathways[slug];

  savePathwayProgressStore({
    ...store,
    pathways: {
      ...store.pathways,
      [slug]: {
        slug,
        startedAt: existing?.startedAt ?? new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        completedStepSlugs: existing?.completedStepSlugs ?? [],
        currentStepSlug: stepSlug,
      },
    },
  });
}

export function togglePathwayStep(slug: string, stepSlug: string, nextStepSlug?: string) {
  const store = readPathwayProgressStore();
  const existing = store.pathways[slug];
  const completed = new Set(existing?.completedStepSlugs ?? []);

  if (completed.has(stepSlug)) {
    completed.delete(stepSlug);
  } else {
    completed.add(stepSlug);
  }

  savePathwayProgressStore({
    ...store,
    pathways: {
      ...store.pathways,
      [slug]: {
        slug,
        startedAt: existing?.startedAt ?? new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        completedStepSlugs: Array.from(completed),
        currentStepSlug: nextStepSlug ?? existing?.currentStepSlug ?? stepSlug,
      },
    },
  });
}

export function resetPathwayProgress(slug: string) {
  const store = readPathwayProgressStore();
  const nextPathways = { ...store.pathways };
  delete nextPathways[slug];
  savePathwayProgressStore({ ...store, pathways: nextPathways });
}

export function updatePathwaySettings(patch: Partial<Omit<PathwaySettingsRecord, "version" | "updatedAt">>) {
  const store = readPathwayProgressStore();

  savePathwayProgressStore({
    ...store,
    settings: sanitizeSettings({
      ...store.settings,
      ...patch,
      version: 1,
      updatedAt: new Date().toISOString(),
    }),
  });
}

export function clearAllPathwayProgress() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(pathwayProgressStorageKey);
  cachedRawStore = undefined;
  emitPathwayProgressChange();
}

function sanitizeStore(value: Partial<PathwayProgressStore>): PathwayProgressStore {
  return {
    version: 1,
    pathways: sanitizeProgressRecords(value.pathways),
    settings: sanitizeSettings(value.settings),
  };
}

function sanitizeProgressRecords(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, Partial<PathwayProgressRecord>>)
      .filter(([slug]) => typeof slug === "string" && slug.length > 0)
      .map(([slug, record]) => [
        slug,
        {
          slug,
          startedAt: typeof record.startedAt === "string" ? record.startedAt : new Date().toISOString(),
          updatedAt: typeof record.updatedAt === "string" ? record.updatedAt : new Date().toISOString(),
          completedStepSlugs: Array.isArray(record.completedStepSlugs)
            ? Array.from(new Set(record.completedStepSlugs.filter((item): item is string => typeof item === "string")))
            : [],
          currentStepSlug: typeof record.currentStepSlug === "string" ? record.currentStepSlug : undefined,
        },
      ]),
  );
}

function sanitizeSettings(value: Partial<PathwaySettingsRecord> | undefined): PathwaySettingsRecord {
  const stageValues = new Set(pathwayStages.map((stage) => stage.value));
  const paceValues = new Set(pathwayPaces.map((pace) => pace.value));
  const householdValues = new Set(["individual", "family", "group", "not-sure"]);

  return {
    version: 1,
    spiritualSeason:
      value?.spiritualSeason && stageValues.has(value.spiritualSeason) ? value.spiritualSeason : defaultPathwaySettings.spiritualSeason,
    availablePace:
      value?.availablePace && paceValues.has(value.availablePace) ? (value.availablePace as PathwayPace) : defaultPathwaySettings.availablePace,
    household:
      value?.household && householdValues.has(value.household) ? value.household : defaultPathwaySettings.household,
    focusTags: Array.isArray(value?.focusTags)
      ? Array.from(new Set(value.focusTags.filter((tag): tag is string => typeof tag === "string")))
      : [],
    updatedAt: typeof value?.updatedAt === "string" ? value.updatedAt : new Date().toISOString(),
  };
}

function subscribePathwayProgress(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === pathwayProgressStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(pathwayProgressChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(pathwayProgressChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return defaultPathwayProgressStore;
}

function emitPathwayProgressChange() {
  window.dispatchEvent(new Event(pathwayProgressChangeEvent));
}
