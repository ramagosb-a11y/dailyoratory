"use client";

import { useEffect, useState } from "react";
import type {
  AdorationLocalStore,
  AdorationReportReason,
  AdorationStreamLanguage,
  AdorationStreamReport,
  AdorationStreamSubmission,
} from "@/types/adoration";

const STORAGE_KEY = "daily-oratory-adoration-v1";
const CHANGE_EVENT = "daily-oratory-adoration-change";

const emptyStore: AdorationLocalStore = {
  reports: [],
  submissions: [],
};

export function readAdorationStore(): AdorationLocalStore {
  if (typeof window === "undefined") return emptyStore;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore;
    const value = JSON.parse(raw) as Partial<AdorationLocalStore>;

    return {
      reports: Array.isArray(value.reports) ? value.reports.filter(isReport).slice(0, 100) : [],
      submissions: Array.isArray(value.submissions) ? value.submissions.filter(isSubmission).slice(0, 50) : [],
    };
  } catch {
    return emptyStore;
  }
}

export function saveAdorationStore(store: AdorationLocalStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useAdorationStore() {
  const [store, setStore] = useState<AdorationLocalStore>(emptyStore);

  useEffect(() => {
    const update = () => setStore(readAdorationStore());
    update();
    window.addEventListener("storage", update);
    window.addEventListener(CHANGE_EVENT, update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(CHANGE_EVENT, update);
    };
  }, []);

  return store;
}

export function saveAdorationReport(streamId: string, reason: AdorationReportReason, note: string) {
  const store = readAdorationStore();
  const report: AdorationStreamReport = {
    id: `adoration-report-${streamId}-${Date.now()}`,
    streamId,
    reason,
    note: sanitizeText(note, 300),
    createdAt: new Date().toISOString(),
  };

  saveAdorationStore({
    ...store,
    reports: [report, ...store.reports].slice(0, 100),
  });
}

export function saveAdorationSubmission(
  submission: Omit<AdorationStreamSubmission, "id" | "createdAt">,
) {
  const store = readAdorationStore();
  const nextSubmission: AdorationStreamSubmission = {
    ...submission,
    id: `adoration-submission-${Date.now()}`,
    chapelName: sanitizeText(submission.chapelName, 120),
    parishOrCommunityName: sanitizeText(submission.parishOrCommunityName, 120),
    location: sanitizeText(submission.location, 120),
    country: sanitizeText(submission.country, 80),
    streamUrl: sanitizeText(submission.streamUrl, 400),
    submitterNote: sanitizeText(submission.submitterNote, 500),
    createdAt: new Date().toISOString(),
  };

  saveAdorationStore({
    ...store,
    submissions: [nextSubmission, ...store.submissions].slice(0, 50),
  });

  return nextSubmission;
}

function isReport(value: unknown): value is AdorationStreamReport {
  if (!value || typeof value !== "object") return false;
  const report = value as AdorationStreamReport;
  return Boolean(report.id && report.streamId && report.reason && report.createdAt);
}

function isSubmission(value: unknown): value is AdorationStreamSubmission {
  if (!value || typeof value !== "object") return false;
  const submission = value as AdorationStreamSubmission;
  return Boolean(
    submission.id &&
      submission.chapelName &&
      submission.streamUrl &&
      submission.createdAt &&
      isLanguage(submission.language),
  );
}

function isLanguage(value: unknown): value is AdorationStreamLanguage {
  return ["English", "Spanish", "Latin", "French", "Polish", "Multilingual"].includes(String(value));
}

function sanitizeText(value: string, maxLength: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}
