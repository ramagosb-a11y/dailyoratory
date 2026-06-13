"use client";

import { useSyncExternalStore } from "react";
import { sacramentCompanions } from "@/data/sacramentCompanion";
import type {
  SacramentPreparationProgress,
  SacramentPreparationRole,
  SacramentPreparationSettings,
  SacramentPreparationStore,
} from "@/types/sacramentCompanion";

export const sacramentPreparationStorageKey = "daily-oratory-sacrament-preparation-v1";

const sacramentPreparationChangeEvent = "daily-oratory-sacrament-preparation-change";
const roleValues = new Set<SacramentPreparationRole>([
  "candidate",
  "parent",
  "family",
  "sponsor",
  "godparent",
  "spouse",
  "discernment",
  "caregiver",
  "returning-catholic",
  "parish-team",
  "all",
]);
const preparingForValues = new Set(["myself", "child", "family-member", "couple", "parish-group", "not-sure"]);

let cachedRawStore: string | null | undefined;
let cachedParsedStore: SacramentPreparationStore | null = null;

export const defaultSacramentPreparationSettings: SacramentPreparationSettings = {
  version: 1,
  selectedCompanionSlug: "reconciliation",
  role: "all",
  preparingFor: "not-sure",
  parishName: "",
  updatedAt: "2026-05-06T00:00:00.000Z",
};

export const defaultSacramentPreparationStore: SacramentPreparationStore = {
  version: 1,
  settings: defaultSacramentPreparationSettings,
  preparations: {},
};

export function readSacramentPreparationStore(): SacramentPreparationStore {
  if (typeof window === "undefined") return defaultSacramentPreparationStore;

  try {
    const raw = window.localStorage.getItem(sacramentPreparationStorageKey);
    if (raw === cachedRawStore && cachedParsedStore) return cachedParsedStore;
    cachedRawStore = raw;

    if (!raw) {
      cachedParsedStore = defaultSacramentPreparationStore;
      return cachedParsedStore;
    }

    cachedParsedStore = sanitizeStore(JSON.parse(raw) as Partial<SacramentPreparationStore>);
    return cachedParsedStore;
  } catch {
    cachedParsedStore = defaultSacramentPreparationStore;
    return cachedParsedStore;
  }
}

export function saveSacramentPreparationStore(store: SacramentPreparationStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(sacramentPreparationStorageKey, JSON.stringify(sanitizeStore(store)));
  cachedRawStore = undefined;
  window.dispatchEvent(new Event(sacramentPreparationChangeEvent));
}

export function useSacramentPreparationStore() {
  return useSyncExternalStore(subscribeSacramentPreparation, readSacramentPreparationStore, getServerSnapshot);
}

export function updateSacramentPreparationSettings(
  patch: Partial<Omit<SacramentPreparationSettings, "version" | "updatedAt">>,
) {
  const store = readSacramentPreparationStore();
  saveSacramentPreparationStore({
    ...store,
    settings: sanitizeSettings({
      ...store.settings,
      ...patch,
      updatedAt: new Date().toISOString(),
      version: 1,
    }),
  });
}

export function startSacramentPreparation(companionSlug: string, firstStepId?: string) {
  const store = readSacramentPreparationStore();
  const now = new Date().toISOString();
  const existing = store.preparations[companionSlug];

  saveSacramentPreparationStore({
    ...store,
    settings: sanitizeSettings({
      ...store.settings,
      selectedCompanionSlug: companionSlug,
      updatedAt: now,
      version: 1,
    }),
    preparations: {
      ...store.preparations,
      [companionSlug]: {
        companionSlug,
        startedAt: existing?.startedAt ?? now,
        updatedAt: now,
        currentStepId: existing?.currentStepId ?? firstStepId,
        completedStepIds: existing?.completedStepIds ?? [],
        completedChecklistItemIds: existing?.completedChecklistItemIds ?? [],
        reflectionAnswers: existing?.reflectionAnswers ?? {},
      },
    },
  });
}

export function toggleSacramentStep(companionSlug: string, stepId: string, nextStepId?: string) {
  const store = readSacramentPreparationStore();
  const progress = getProgressDraft(store.preparations[companionSlug], companionSlug);
  const completed = new Set(progress.completedStepIds);

  if (completed.has(stepId)) {
    completed.delete(stepId);
  } else {
    completed.add(stepId);
  }

  saveSacramentPreparationStore({
    ...store,
    preparations: {
      ...store.preparations,
      [companionSlug]: {
        ...progress,
        updatedAt: new Date().toISOString(),
        currentStepId: nextStepId ?? progress.currentStepId ?? stepId,
        completedStepIds: Array.from(completed),
      },
    },
  });
}

export function toggleSacramentChecklistItem(companionSlug: string, checklistItemId: string) {
  const store = readSacramentPreparationStore();
  const progress = getProgressDraft(store.preparations[companionSlug], companionSlug);
  const completed = new Set(progress.completedChecklistItemIds);

  if (completed.has(checklistItemId)) {
    completed.delete(checklistItemId);
  } else {
    completed.add(checklistItemId);
  }

  saveSacramentPreparationStore({
    ...store,
    preparations: {
      ...store.preparations,
      [companionSlug]: {
        ...progress,
        updatedAt: new Date().toISOString(),
        completedChecklistItemIds: Array.from(completed),
      },
    },
  });
}

export function saveSacramentReflectionAnswer(companionSlug: string, promptId: string, answer: string) {
  const store = readSacramentPreparationStore();
  const progress = getProgressDraft(store.preparations[companionSlug], companionSlug);

  saveSacramentPreparationStore({
    ...store,
    preparations: {
      ...store.preparations,
      [companionSlug]: {
        ...progress,
        updatedAt: new Date().toISOString(),
        reflectionAnswers: {
          ...progress.reflectionAnswers,
          [promptId]: answer,
        },
      },
    },
  });
}

export function resetSacramentPreparation(companionSlug: string) {
  const store = readSacramentPreparationStore();
  const nextPreparations = { ...store.preparations };
  delete nextPreparations[companionSlug];
  saveSacramentPreparationStore({ ...store, preparations: nextPreparations });
}

export function clearAllSacramentPreparation() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(sacramentPreparationStorageKey);
  cachedRawStore = undefined;
  window.dispatchEvent(new Event(sacramentPreparationChangeEvent));
}

export function exportSacramentPreparationText(store: SacramentPreparationStore) {
  const companion =
    sacramentCompanions.find((item) => item.slug === store.settings.selectedCompanionSlug) ?? sacramentCompanions[0];
  const progress = companion ? store.preparations[companion.slug] : undefined;

  if (!companion) return "Daily Oratory Sacrament Preparation";

  return [
    "Daily Oratory Sacrament Preparation",
    companion.title,
    "",
    companion.parishReminder,
    companion.decisionBoundary,
    "",
    `Parish: ${store.settings.parishName || "Not added"}`,
    `Role: ${store.settings.role}`,
    "",
    "Parish checklist",
    ...companion.parishChecklist.map((item) => `- ${item}`),
    "",
    "Preparation steps",
    ...companion.preparationSteps.map((step) => {
      const done = progress?.completedStepIds.includes(step.id) ? "done" : "open";
      return `- [${done}] ${step.title}: ${step.description}`;
    }),
    "",
    "Role-based checklist",
    ...companion.roleChecklists.map((item) => {
      const done = progress?.completedChecklistItemIds.includes(item.id) ? "done" : "open";
      return `- [${done}] ${item.title}: ${item.description}`;
    }),
    "",
    "Reflection prompts",
    ...companion.reflectionPrompts.map((item) => `- ${item.prompt} ${progress?.reflectionAnswers[item.id] ?? ""}`.trim()),
  ].join("\n");
}

function getProgressDraft(
  progress: SacramentPreparationProgress | undefined,
  companionSlug: string,
): SacramentPreparationProgress {
  const now = new Date().toISOString();

  return {
    companionSlug,
    startedAt: progress?.startedAt ?? now,
    updatedAt: progress?.updatedAt ?? now,
    currentStepId: progress?.currentStepId,
    completedStepIds: progress?.completedStepIds ?? [],
    completedChecklistItemIds: progress?.completedChecklistItemIds ?? [],
    reflectionAnswers: progress?.reflectionAnswers ?? {},
  };
}

function sanitizeStore(value: Partial<SacramentPreparationStore>): SacramentPreparationStore {
  return {
    version: 1,
    settings: sanitizeSettings(value.settings),
    preparations: sanitizePreparations(value.preparations),
  };
}

function sanitizeSettings(value: Partial<SacramentPreparationSettings> | undefined): SacramentPreparationSettings {
  const selectedCompanionSlug =
    typeof value?.selectedCompanionSlug === "string" &&
    sacramentCompanions.some((companion) => companion.slug === value.selectedCompanionSlug)
      ? value.selectedCompanionSlug
      : defaultSacramentPreparationSettings.selectedCompanionSlug;
  const preparingFor =
    typeof value?.preparingFor === "string" && preparingForValues.has(value.preparingFor)
      ? (value.preparingFor as SacramentPreparationSettings["preparingFor"])
      : defaultSacramentPreparationSettings.preparingFor;

  return {
    version: 1,
    selectedCompanionSlug,
    role:
      value?.role && roleValues.has(value.role) ? value.role : defaultSacramentPreparationSettings.role,
    preparingFor,
    parishName: typeof value?.parishName === "string" ? value.parishName.slice(0, 120) : "",
    updatedAt: typeof value?.updatedAt === "string" ? value.updatedAt : new Date().toISOString(),
  };
}

function sanitizePreparations(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, Partial<SacramentPreparationProgress>>)
      .filter(([slug]) => sacramentCompanions.some((companion) => companion.slug === slug))
      .map(([slug, progress]) => [
        slug,
        {
          companionSlug: slug,
          startedAt: typeof progress.startedAt === "string" ? progress.startedAt : new Date().toISOString(),
          updatedAt: typeof progress.updatedAt === "string" ? progress.updatedAt : new Date().toISOString(),
          currentStepId: typeof progress.currentStepId === "string" ? progress.currentStepId : undefined,
          completedStepIds: sanitizeStringArray(progress.completedStepIds),
          completedChecklistItemIds: sanitizeStringArray(progress.completedChecklistItemIds),
          reflectionAnswers: sanitizeReflectionAnswers(progress.reflectionAnswers),
        },
      ]),
  );
}

function sanitizeStringArray(value: unknown) {
  return Array.isArray(value)
    ? Array.from(new Set(value.filter((item): item is string => typeof item === "string")))
    : [];
}

function sanitizeReflectionAnswers(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([key, answer]) => typeof key === "string" && typeof answer === "string")
      .map(([key, answer]) => [key, (answer as string).slice(0, 1000)]),
  );
}

function subscribeSacramentPreparation(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === sacramentPreparationStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(sacramentPreparationChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(sacramentPreparationChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return defaultSacramentPreparationStore;
}
