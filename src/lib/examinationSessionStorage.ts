"use client";

import { useSyncExternalStore } from "react";
import { examinationPathOptions } from "@/data/examination";
import type {
  ExaminationMode,
  ExaminationPath,
  ExaminationSession,
  ExaminationSessionSettings,
  ExaminationStateOfLife,
} from "@/types/examination";

export const examinationSessionStorageKey = "daily-oratory-examination-session-v1";

const examinationSessionChangeEvent = "daily-oratory-examination-session-change";
const modeValues = new Set<ExaminationMode>(["quick", "standard", "thorough", "returning"]);
const stateValues = new Set<ExaminationStateOfLife>([
  "adult",
  "young-adult",
  "teen",
  "married",
  "parent",
  "single",
  "clergy-religious",
  "student",
  "worker-professional",
]);
const pathValues = new Set<ExaminationPath>(examinationPathOptions.map((option) => option.value));

let cachedRawSession: string | null | undefined;
let cachedParsedSession: ExaminationSession | null = null;

export const defaultExaminationSettings: ExaminationSessionSettings = {
  mode: "standard",
  stateOfLife: "adult",
  selectedPaths: ["ten-commandments", "beatitudes", "virtues", "relationships-duties", "prayer-sacramental-life"],
};

export const defaultExaminationSession: ExaminationSession = {
  version: 1,
  startedAt: "2026-05-06T00:00:00.000Z",
  updatedAt: "2026-05-06T00:00:00.000Z",
  settings: defaultExaminationSettings,
  markedPromptIds: [],
  noteByPromptId: {},
  generalNotes: "",
};

export function readExaminationSession(): ExaminationSession {
  if (typeof window === "undefined") return defaultExaminationSession;

  try {
    const raw = window.localStorage.getItem(examinationSessionStorageKey);
    if (raw === cachedRawSession && cachedParsedSession) return cachedParsedSession;
    cachedRawSession = raw;

    if (!raw) {
      cachedParsedSession = createFreshSession();
      return cachedParsedSession;
    }

    cachedParsedSession = sanitizeSession(JSON.parse(raw) as Partial<ExaminationSession>);
    return cachedParsedSession;
  } catch {
    cachedParsedSession = createFreshSession();
    return cachedParsedSession;
  }
}

export function saveExaminationSession(session: ExaminationSession) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(examinationSessionStorageKey, JSON.stringify(sanitizeSession(session)));
  cachedRawSession = undefined;
  window.dispatchEvent(new Event(examinationSessionChangeEvent));
}

export function useExaminationSession() {
  return useSyncExternalStore(subscribeExaminationSession, readExaminationSession, getServerSnapshot);
}

export function startExaminationSession(settings: ExaminationSessionSettings) {
  saveExaminationSession({
    version: 1,
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    settings: sanitizeSettings(settings),
    markedPromptIds: [],
    noteByPromptId: {},
    generalNotes: "",
  });
}

export function updateExaminationSettings(patch: Partial<ExaminationSessionSettings>) {
  const session = readExaminationSession();
  saveExaminationSession({
    ...session,
    updatedAt: new Date().toISOString(),
    settings: sanitizeSettings({ ...session.settings, ...patch }),
  });
}

export function toggleMarkedPrompt(promptId: string) {
  const session = readExaminationSession();
  const marked = new Set(session.markedPromptIds);
  if (marked.has(promptId)) {
    marked.delete(promptId);
  } else {
    marked.add(promptId);
  }
  saveExaminationSession({
    ...session,
    updatedAt: new Date().toISOString(),
    markedPromptIds: Array.from(marked),
  });
}

export function savePromptNote(promptId: string, note: string) {
  const session = readExaminationSession();
  saveExaminationSession({
    ...session,
    updatedAt: new Date().toISOString(),
    noteByPromptId: {
      ...session.noteByPromptId,
      [promptId]: note.slice(0, 1000),
    },
  });
}

export function saveGeneralNotes(generalNotes: string) {
  const session = readExaminationSession();
  saveExaminationSession({
    ...session,
    updatedAt: new Date().toISOString(),
    generalNotes: generalNotes.slice(0, 2000),
  });
}

export function clearExaminationSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(examinationSessionStorageKey);
  cachedRawSession = undefined;
  window.dispatchEvent(new Event(examinationSessionChangeEvent));
}

export function exportExaminationText(session: ExaminationSession, promptLookup: Map<string, string>) {
  return [
    "Daily Oratory Guided Examination of Conscience",
    "",
    "Private preparation notes. This guide does not determine mortal or venial sin. Speak with a priest when unsure.",
    "",
    `Mode: ${session.settings.mode}`,
    `State of life: ${session.settings.stateOfLife}`,
    `Paths: ${session.settings.selectedPaths.join(", ")}`,
    "",
    "Marked for confession",
    ...(session.markedPromptIds.length
      ? session.markedPromptIds.map((id) => `- ${promptLookup.get(id) ?? id}${session.noteByPromptId[id] ? `\n  Note: ${session.noteByPromptId[id]}` : ""}`)
      : ["- No marked prompts"]),
    "",
    "General notes",
    session.generalNotes || "No general notes",
  ].join("\n");
}

function createFreshSession() {
  const now = new Date().toISOString();
  return { ...defaultExaminationSession, startedAt: now, updatedAt: now };
}

function sanitizeSession(value: Partial<ExaminationSession>): ExaminationSession {
  return {
    version: 1,
    startedAt: typeof value.startedAt === "string" ? value.startedAt : new Date().toISOString(),
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : new Date().toISOString(),
    settings: sanitizeSettings(value.settings),
    markedPromptIds: sanitizeStringArray(value.markedPromptIds),
    noteByPromptId: sanitizeNotes(value.noteByPromptId),
    generalNotes: typeof value.generalNotes === "string" ? value.generalNotes.slice(0, 2000) : "",
  };
}

function sanitizeSettings(value: Partial<ExaminationSessionSettings> | undefined): ExaminationSessionSettings {
  const selectedPaths = sanitizeStringArray(value?.selectedPaths).filter((path): path is ExaminationPath =>
    pathValues.has(path as ExaminationPath),
  );

  return {
    mode: value?.mode && modeValues.has(value.mode) ? value.mode : defaultExaminationSettings.mode,
    stateOfLife:
      value?.stateOfLife && stateValues.has(value.stateOfLife)
        ? value.stateOfLife
        : defaultExaminationSettings.stateOfLife,
    selectedPaths: selectedPaths.length ? selectedPaths : defaultExaminationSettings.selectedPaths,
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
      .map(([key, note]) => [key, (note as string).slice(0, 1000)]),
  );
}

function subscribeExaminationSession(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === examinationSessionStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(examinationSessionChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(examinationSessionChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return defaultExaminationSession;
}
