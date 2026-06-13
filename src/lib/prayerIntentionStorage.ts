"use client";

import { useSyncExternalStore } from "react";
import { prayerIntentionTypeOptions, prayerIntentionVisibilityOptions } from "@/data/prayerIntentions";
import type {
  LocalPrayerIntentionReport,
  LocalPrayerIntentionSubmission,
  PrayerIntentionReportReason,
  PrayerIntentionStore,
  PrayerIntentionType,
  PrayerIntentionVisibility,
} from "@/types/prayerIntentions";

export const prayerIntentionStorageKey = "daily-oratory-prayer-intentions-v1";

const prayerIntentionChangeEvent = "daily-oratory-prayer-intentions-change";
const intentionTypeValues = new Set<PrayerIntentionType>(prayerIntentionTypeOptions.map((option) => option.value));
const visibilityValues = new Set<PrayerIntentionVisibility>(prayerIntentionVisibilityOptions.map((option) => option.value));
const reportReasonValues = new Set<PrayerIntentionReportReason>([
  "personal-information",
  "unsafe-or-emergency",
  "uncharitable",
  "spam",
  "other",
]);
let cachedRawIntentions: string | null | undefined;
let cachedParsedIntentions: PrayerIntentionStore | null = null;

export const defaultPrayerIntentionStore: PrayerIntentionStore = {
  version: 1,
  prayedIntentionIds: [],
  reportedIntentions: [],
  submissions: [],
};

export function readPrayerIntentionStore(): PrayerIntentionStore {
  if (typeof window === "undefined") return defaultPrayerIntentionStore;

  try {
    const raw = window.localStorage.getItem(prayerIntentionStorageKey);
    if (raw === cachedRawIntentions && cachedParsedIntentions) return cachedParsedIntentions;
    cachedRawIntentions = raw;

    if (!raw) {
      cachedParsedIntentions = defaultPrayerIntentionStore;
      return cachedParsedIntentions;
    }

    cachedParsedIntentions = sanitizeStore(JSON.parse(raw) as Partial<PrayerIntentionStore>);
    return cachedParsedIntentions;
  } catch {
    cachedParsedIntentions = defaultPrayerIntentionStore;
    return cachedParsedIntentions;
  }
}

export function savePrayerIntentionStore(store: PrayerIntentionStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(prayerIntentionStorageKey, JSON.stringify(sanitizeStore(store)));
  cachedRawIntentions = undefined;
  window.dispatchEvent(new Event(prayerIntentionChangeEvent));
}

export function usePrayerIntentionStore() {
  return useSyncExternalStore(subscribePrayerIntentions, readPrayerIntentionStore, getServerSnapshot);
}

export function markIntentionPrayed(intentionId: string) {
  const store = readPrayerIntentionStore();
  if (store.prayedIntentionIds.includes(intentionId)) return false;

  savePrayerIntentionStore({
    ...store,
    prayedIntentionIds: [intentionId, ...store.prayedIntentionIds].slice(0, 500),
  });

  return true;
}

export function submitLocalPrayerIntention(input: {
  title: string;
  description: string;
  intentionType: PrayerIntentionType;
  intentionVisibility: PrayerIntentionVisibility;
  requesterDisplayName: string;
  contactEmail: string;
  consentToModeration: boolean;
}) {
  const store = readPrayerIntentionStore();
  const now = new Date().toISOString();
  const submission: LocalPrayerIntentionSubmission = sanitizeSubmission({
    ...input,
    id: createLocalId("intention-submission"),
    createdAt: now,
    updatedAt: now,
    moderationStatus: "pending-review",
  });

  savePrayerIntentionStore({
    ...store,
    submissions: [submission, ...store.submissions].slice(0, 50),
  });

  return submission;
}

export function reportPrayerIntention(input: {
  intentionId: string;
  reason: PrayerIntentionReportReason;
  note: string;
}) {
  const store = readPrayerIntentionStore();
  const report: LocalPrayerIntentionReport = sanitizeReport({
    ...input,
    reportedAt: new Date().toISOString(),
  });

  savePrayerIntentionStore({
    ...store,
    reportedIntentions: [
      report,
      ...store.reportedIntentions.filter((item) => item.intentionId !== report.intentionId),
    ].slice(0, 100),
  });

  return report;
}

export function clearPrayerIntentionLocalData() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(prayerIntentionStorageKey);
  cachedRawIntentions = undefined;
  window.dispatchEvent(new Event(prayerIntentionChangeEvent));
}

function sanitizeStore(value: Partial<PrayerIntentionStore>): PrayerIntentionStore {
  return {
    version: 1,
    prayedIntentionIds: sanitizeStringArray(value.prayedIntentionIds, 500),
    reportedIntentions: Array.isArray(value.reportedIntentions)
      ? value.reportedIntentions
          .map((report) => sanitizeReport(report as Partial<LocalPrayerIntentionReport>))
          .filter((report) => report.intentionId)
          .slice(0, 100)
      : [],
    submissions: Array.isArray(value.submissions)
      ? value.submissions
          .map((submission) => sanitizeSubmission(submission as Partial<LocalPrayerIntentionSubmission>))
          .filter((submission) => submission.title && submission.description)
          .slice(0, 50)
      : [],
  };
}

function sanitizeSubmission(value: Partial<LocalPrayerIntentionSubmission>): LocalPrayerIntentionSubmission {
  const now = new Date().toISOString();

  return {
    id: sanitizeText(value.id, 100) || createLocalId("intention-submission"),
    title: sanitizeText(value.title, 90),
    description: sanitizeText(value.description, 1200),
    intentionType: value.intentionType && intentionTypeValues.has(value.intentionType) ? value.intentionType : "other",
    intentionVisibility:
      value.intentionVisibility && visibilityValues.has(value.intentionVisibility)
        ? value.intentionVisibility
        : "anonymous-public",
    requesterDisplayName: sanitizeText(value.requesterDisplayName, 60) || "Anonymous",
    contactEmail: sanitizeText(value.contactEmail, 160),
    consentToModeration: Boolean(value.consentToModeration),
    createdAt: sanitizeText(value.createdAt, 40) || now,
    updatedAt: sanitizeText(value.updatedAt, 40) || now,
    moderationStatus: "pending-review",
  };
}

function sanitizeReport(value: Partial<LocalPrayerIntentionReport>): LocalPrayerIntentionReport {
  return {
    intentionId: sanitizeText(value.intentionId, 100),
    reason: value.reason && reportReasonValues.has(value.reason) ? value.reason : "other",
    note: sanitizeText(value.note, 600),
    reportedAt: sanitizeText(value.reportedAt, 40) || new Date().toISOString(),
  };
}

function sanitizeStringArray(value: unknown, limit: number) {
  if (!Array.isArray(value)) return [];
  return Array.from(new Set(value.filter((item): item is string => typeof item === "string" && item.length > 0))).slice(
    0,
    limit,
  );
}

function sanitizeText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, maxLength) : "";
}

function subscribePrayerIntentions(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === prayerIntentionStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(prayerIntentionChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(prayerIntentionChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return defaultPrayerIntentionStore;
}

function createLocalId(prefix: string) {
  if (typeof window !== "undefined" && window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}`;
}
