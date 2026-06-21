import { useCallback, useSyncExternalStore } from "react";
import { actOfContrition, guidedExaminationPaths, stateOfLifeCategories } from "@/data/guidedExamination";
import type { GuidedExamenStore, GuidedExaminationPath, GuidedExaminationSection } from "@/types/guidedExamination";

export const overviewStorageKey = "daily-oratory-guided-examination-overview";

const guidedExaminationChangeEvent = "daily-oratory-guided-examination-change";

export const emptyGuidedExamenStore: GuidedExamenStore = {
  version: 1,
  lastConfessionDate: "",
  selectedCategoryIds: [],
  markedPromptIds: [],
  notesByPromptId: {},
  updatedAt: "",
};

const storeSnapshotCache = new Map<string, { raw: string | null; snapshot: GuidedExamenStore }>();
let reportSnapshotCache: { raw: string; snapshot: GuidedExaminationReport } | null = null;
const emptyGuidedExaminationReportSnapshot: GuidedExaminationReport = {
  hasReportData: false,
  lastConfessionDate: "",
  lastConfessionSummary: "No date saved yet.",
  currentStateOfLife: [],
  openingLine: "Forgive me, Father, for I have sinned. It has been ______ since my last Confession.",
  pastoralNote:
    "Bring what is clear to Confession. If you are unsure how to confess something, ask the priest for help.",
  actOfContrition,
  paths: [],
};

export type GuidedExaminationReportPrompt = {
  id: string;
  text: string;
  note: string;
  marked: boolean;
};

export type GuidedExaminationReportSection = {
  id: string;
  title: string;
  prompts: GuidedExaminationReportPrompt[];
};

export type GuidedExaminationReportPath = {
  id: GuidedExaminationPath["id"];
  title: string;
  shortTitle: string;
  sections: GuidedExaminationReportSection[];
};

export type GuidedExaminationReport = {
  hasReportData: boolean;
  lastConfessionDate: string;
  lastConfessionSummary: string;
  currentStateOfLife: string[];
  openingLine: string;
  pastoralNote: string;
  actOfContrition: string;
  paths: GuidedExaminationReportPath[];
};

export type LastConfessionDateState = {
  daysSinceConfession: number | null;
  formattedDate: string | null;
  isFuture: boolean;
  isInvalid: boolean;
  isToday: boolean;
  summary: string;
  warning: string | null;
};

export function readGuidedExamenStore(storageKey: string): GuidedExamenStore {
  if (typeof window === "undefined") return emptyGuidedExamenStore;

  try {
    const raw = window.localStorage.getItem(storageKey);
    const cached = storeSnapshotCache.get(storageKey);
    if (cached?.raw === raw) return cached.snapshot;

    const snapshot = raw ? sanitizeStore(JSON.parse(raw)) : createFreshStore();
    storeSnapshotCache.set(storageKey, { raw, snapshot });
    return snapshot;
  } catch {
    const cached = storeSnapshotCache.get(storageKey);
    if (cached?.raw === null) return cached.snapshot;

    const snapshot = createFreshStore();
    storeSnapshotCache.set(storageKey, { raw: null, snapshot });
    return snapshot;
  }
}

export function saveGuidedExamenStore(storageKey: string, next: GuidedExamenStore, clear = false) {
  if (typeof window === "undefined") return false;

  const sanitized = sanitizeStore({ ...next, updatedAt: new Date().toISOString() });

  try {
    if (clear) window.localStorage.removeItem(storageKey);
    else window.localStorage.setItem(storageKey, JSON.stringify(sanitized));
    dispatchGuidedExaminationChange();
    return true;
  } catch {
    dispatchGuidedExaminationChange();
    return false;
  }
}

export function clearAllGuidedExaminationData() {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(overviewStorageKey);
    guidedExaminationPaths.forEach((path) => window.localStorage.removeItem(path.storageKey));
  } catch {
    // Client surfaces already show a storage warning when localStorage is unavailable.
  } finally {
    dispatchGuidedExaminationChange();
  }
}

export function canUseGuidedExaminationStorage() {
  if (typeof window === "undefined") return true;

  try {
    const testKey = "__daily-oratory-guided-examination-test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export function useGuidedExamenStore(
  storageKey: string,
): [GuidedExamenStore, (next: GuidedExamenStore, clear?: boolean) => void, boolean] {
  const store = useSyncExternalStore(
    subscribeGuidedExamination,
    () => readGuidedExamenStore(storageKey),
    () => emptyGuidedExamenStore,
  );
  const setStore = useCallback(
    (next: GuidedExamenStore, clear = false) => {
      saveGuidedExamenStore(storageKey, next, clear);
    },
    [storageKey],
  );

  return [store, setStore, canUseGuidedExaminationStorage()];
}

export function useGuidedExaminationReport() {
  return useSyncExternalStore(subscribeGuidedExamination, getGuidedExaminationReportSnapshot, getEmptyReportSnapshot);
}

export function getLastConfessionDateState(value: string): LastConfessionDateState {
  if (!value) {
    return {
      daysSinceConfession: null,
      formattedDate: null,
      isFuture: false,
      isInvalid: false,
      isToday: false,
      summary: "No date saved yet.",
      warning: null,
    };
  }

  const confessionDate = new Date(`${value}T00:00:00`);
  if (Number.isNaN(confessionDate.getTime())) {
    return {
      daysSinceConfession: null,
      formattedDate: null,
      isFuture: false,
      isInvalid: true,
      isToday: false,
      summary: "No date saved yet.",
      warning: "That date could not be read, so it will not be used in your report.",
    };
  }

  const today = new Date();
  const todayAtMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysSinceConfession = Math.floor((todayAtMidnight.getTime() - confessionDate.getTime()) / 86_400_000);
  const formattedDate = formatSavedDate(value);

  if (daysSinceConfession < 0) {
    return {
      daysSinceConfession: null,
      formattedDate,
      isFuture: true,
      isInvalid: false,
      isToday: false,
      summary: "No date saved yet.",
      warning: "That date is in the future, so it will not be used in your report yet.",
    };
  }

  if (daysSinceConfession === 0) {
    return {
      daysSinceConfession: 0,
      formattedDate,
      isFuture: false,
      isInvalid: false,
      isToday: true,
      summary: "Last Confession: today.",
      warning: null,
    };
  }

  return {
    daysSinceConfession,
    formattedDate,
    isFuture: false,
    isInvalid: false,
    isToday: false,
    summary: `Last Confession: ${formattedDate} - ${daysSinceConfession} day${daysSinceConfession === 1 ? "" : "s"} ago.`,
    warning: null,
  };
}

export function buildGuidedExaminationReport(): GuidedExaminationReport {
  const overviewStore = readGuidedExamenStore(overviewStorageKey);
  const paths = guidedExaminationPaths
    .map((path) => buildReportPath(path, readGuidedExamenStore(path.storageKey)))
    .filter((path): path is GuidedExaminationReportPath => Boolean(path));

  const stateOfLifeStore = readGuidedExamenStore("daily-oratory-state-of-life-examen");
  const currentStateOfLife = stateOfLifeStore.selectedCategoryIds?.length
    ? stateOfLifeCategories
        .filter((category) => stateOfLifeStore.selectedCategoryIds?.includes(category.id))
        .map((category) => category.title)
    : [];

  const confessionDateState = getLastConfessionDateState(overviewStore.lastConfessionDate ?? "");
  const openingLine = confessionDateState.daysSinceConfession !== null
    ? `Forgive me, Father, for I have sinned. It has been ${confessionDateState.daysSinceConfession} day${confessionDateState.daysSinceConfession === 1 ? "" : "s"} since my last Confession.`
    : "Forgive me, Father, for I have sinned. It has been ______ since my last Confession.";
  const hasReportData = Boolean(confessionDateState.daysSinceConfession !== null || currentStateOfLife.length || paths.length);

  return {
    hasReportData,
    lastConfessionDate: overviewStore.lastConfessionDate ?? "",
    lastConfessionSummary: confessionDateState.summary,
    currentStateOfLife,
    openingLine,
    pastoralNote:
      "Bring what is clear to Confession. If you are unsure how to confess something, ask the priest for help.",
    actOfContrition,
    paths,
  };
}

function getGuidedExaminationReportSnapshot() {
  if (typeof window === "undefined") return getEmptyReportSnapshot();

  const raw = getReportRawSnapshot();
  if (reportSnapshotCache?.raw === raw) return reportSnapshotCache.snapshot;

  const snapshot = buildGuidedExaminationReport();
  reportSnapshotCache = { raw, snapshot };
  return snapshot;
}

function getReportRawSnapshot() {
  try {
    return [
      window.localStorage.getItem(overviewStorageKey) ?? "",
      ...guidedExaminationPaths.map((path) => window.localStorage.getItem(path.storageKey) ?? ""),
    ].join("\u001f");
  } catch {
    return "";
  }
}

export function buildGuidedExaminationReportText(report: GuidedExaminationReport) {
  if (!report.hasReportData) {
    return [
      "Confession Companion Report",
      "",
      "No local examination report was found on this device.",
      "Return to the guided examination to prepare your report.",
    ].join("\n");
  }

  return [
    "Confession Companion Report",
    "",
    "This guide is only an aid to preparation. The priest can help you if you are unsure what to say.",
    "This page is generated from information saved only on this device.",
    "",
    report.openingLine,
    "",
    ...(report.currentStateOfLife.length
      ? ["Current state of life:", ...report.currentStateOfLife.map((item) => `- ${item}`), ""]
      : []),
    ...report.paths.flatMap((path) => [
      path.title,
      ...path.sections.flatMap((section) => [
        `${section.title}:`,
        ...section.prompts.flatMap((prompt) => {
          const lines = [];
          if (prompt.marked) lines.push(`- ${prompt.text}`);
          if (prompt.note) lines.push(`  Note: ${prompt.note}`);
          return lines;
        }),
        "",
      ]),
    ]),
    report.pastoralNote,
    "",
    "Act of Contrition",
    report.actOfContrition,
  ].join("\n");
}

function buildReportPath(path: GuidedExaminationPath, store: GuidedExamenStore): GuidedExaminationReportPath | null {
  const sections = getSelectedSections(path, store)
    .map((section) => {
      const prompts = section.prompts
        .map((prompt) => ({
          id: prompt.id,
          text: prompt.text,
          note: store.notesByPromptId[prompt.id] ?? "",
          marked: store.markedPromptIds.includes(prompt.id),
        }))
        .filter((prompt) => prompt.marked || prompt.note);

      return prompts.length ? { id: section.id, title: section.title, prompts } : null;
    })
    .filter((section): section is GuidedExaminationReportSection => Boolean(section));

  if (!sections.length) return null;

  return {
    id: path.id,
    title: path.title,
    shortTitle: path.shortTitle,
    sections,
  };
}

function getSelectedSections(path: GuidedExaminationPath, store: GuidedExamenStore): GuidedExaminationSection[] {
  if (path.id !== "state-of-life") return path.sections;
  if (!store.selectedCategoryIds?.length) return [];
  return stateOfLifeCategories.filter((category) => store.selectedCategoryIds?.includes(category.id));
}

function subscribeGuidedExamination(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (
      event.key === overviewStorageKey ||
      guidedExaminationPaths.some((path) => path.storageKey === event.key)
    ) {
      onStoreChange();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(guidedExaminationChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(guidedExaminationChangeEvent, onStoreChange);
  };
}

function getEmptyReportSnapshot(): GuidedExaminationReport {
  return emptyGuidedExaminationReportSnapshot;
}

function createFreshStore() {
  return { ...emptyGuidedExamenStore, updatedAt: new Date().toISOString() };
}

function dispatchGuidedExaminationChange() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(guidedExaminationChangeEvent));
}

function sanitizeStore(value: unknown): GuidedExamenStore {
  const maybe = value && typeof value === "object" ? (value as Partial<GuidedExamenStore>) : {};
  return {
    version: 1,
    lastConfessionDate: sanitizeDateString(maybe.lastConfessionDate),
    selectedCategoryIds: sanitizeStringArray(maybe.selectedCategoryIds),
    markedPromptIds: sanitizeStringArray(maybe.markedPromptIds),
    notesByPromptId: sanitizeNotes(maybe.notesByPromptId),
    updatedAt: typeof maybe.updatedAt === "string" ? maybe.updatedAt : new Date().toISOString(),
  };
}

function sanitizeStringArray(value: unknown) {
  return Array.isArray(value)
    ? Array.from(new Set(value.filter((item): item is string => typeof item === "string")))
    : [];
}

function sanitizeNotes(value: unknown) {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([key, note]) => typeof key === "string" && typeof note === "string")
      .map(([key, note]) => [key, (note as string).slice(0, 1200)]),
  );
}

function sanitizeDateString(value: unknown) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
}

function formatSavedDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
