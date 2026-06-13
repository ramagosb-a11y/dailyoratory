"use client";

import { useSyncExternalStore } from "react";
import {
  prayerChainCategoryOptions,
  prayerChainPrivacyOptions,
  prayerChainTeams,
  prayerChainUrgencyOptions,
} from "@/data/prayerChain";
import { routePrayerChainRequest } from "@/lib/prayerChain";
import type {
  LocalPrayerChainSubmission,
  PrayerChainCategory,
  PrayerChainContactPreference,
  PrayerChainCoordinatorDecision,
  PrayerChainPrayerCommitment,
  PrayerChainPrivacy,
  PrayerChainStore,
  PrayerChainTeamId,
  PrayerChainThanksgivingUpdate,
  PrayerChainUrgency,
} from "@/types/prayerChain";

export const prayerChainStorageKey = "daily-oratory-prayer-chain-v1";

const prayerChainChangeEvent = "daily-oratory-prayer-chain-change";
const categoryValues = new Set<PrayerChainCategory>(prayerChainCategoryOptions.map((option) => option.value));
const urgencyValues = new Set<PrayerChainUrgency>(prayerChainUrgencyOptions.map((option) => option.value));
const privacyValues = new Set<PrayerChainPrivacy>(prayerChainPrivacyOptions.map((option) => option.value));
const teamValues = new Set<PrayerChainTeamId>(prayerChainTeams.map((team) => team.id));
const contactValues = new Set<PrayerChainContactPreference>(["none", "email", "phone", "group-leader"]);
let cachedRawPrayerChain: string | null | undefined;
let cachedParsedPrayerChain: PrayerChainStore | null = null;

export const defaultPrayerChainStore: PrayerChainStore = {
  version: 1,
  submissions: [],
  prayerCommitments: [],
  thanksgivingUpdates: [],
  coordinatorDecisions: [],
  alertDeliveries: [],
};

export function readPrayerChainStore(): PrayerChainStore {
  if (typeof window === "undefined") return defaultPrayerChainStore;

  try {
    const raw = window.localStorage.getItem(prayerChainStorageKey);
    if (raw === cachedRawPrayerChain && cachedParsedPrayerChain) return cachedParsedPrayerChain;
    cachedRawPrayerChain = raw;

    if (!raw) {
      cachedParsedPrayerChain = defaultPrayerChainStore;
      return cachedParsedPrayerChain;
    }

    cachedParsedPrayerChain = sanitizeStore(JSON.parse(raw) as Partial<PrayerChainStore>);
    return cachedParsedPrayerChain;
  } catch {
    cachedParsedPrayerChain = defaultPrayerChainStore;
    return cachedParsedPrayerChain;
  }
}

export function savePrayerChainStore(store: PrayerChainStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(prayerChainStorageKey, JSON.stringify(sanitizeStore(store)));
  cachedRawPrayerChain = undefined;
  window.dispatchEvent(new Event(prayerChainChangeEvent));
}

export function usePrayerChainStore() {
  return useSyncExternalStore(subscribePrayerChain, readPrayerChainStore, getServerSnapshot);
}

export function submitLocalPrayerChainRequest(input: {
  title: string;
  requestSummary: string;
  requestCategory: PrayerChainCategory;
  urgency: PrayerChainUrgency;
  privacy: PrayerChainPrivacy;
  requestedBy: string;
  contactEmail: string;
  contactPreference: PrayerChainContactPreference;
  consentToShare: boolean;
  consentToContact: boolean;
  hasYouthInvolved: boolean;
  requestedTeamId: PrayerChainTeamId | "auto";
}) {
  const store = readPrayerChainStore();
  const now = new Date().toISOString();
  const routing = routePrayerChainRequest(input);
  const submission: LocalPrayerChainSubmission = sanitizeSubmission({
    ...input,
    id: createLocalId("chain-request"),
    assignedTeamIds: routing.assignedTeamIds,
    routingReasons: routing.routingReasons,
    alertCadence: routing.alertCadence,
    pastoralReferralRecommended: routing.pastoralReferralRecommended,
    moderationStatus: routing.moderationStatus,
    submittedAt: now,
    updatedAt: now,
  });

  savePrayerChainStore({
    ...store,
    submissions: [submission, ...store.submissions].slice(0, 50),
  });

  return submission;
}

export function markPrayerChainPraying(requestId: string, teamId: PrayerChainTeamId) {
  const store = readPrayerChainStore();
  const alreadyPraying = store.prayerCommitments.some(
    (commitment) => commitment.requestId === requestId && commitment.teamId === teamId,
  );

  if (alreadyPraying) return false;

  savePrayerChainStore({
    ...store,
    prayerCommitments: [
      { requestId, teamId, prayedAt: new Date().toISOString() },
      ...store.prayerCommitments,
    ].slice(0, 500),
  });

  return true;
}

export function savePrayerChainThanksgiving(requestId: string, note: string) {
  const store = readPrayerChainStore();
  const update: PrayerChainThanksgivingUpdate = {
    id: createLocalId("chain-thanks"),
    requestId,
    note: sanitizeText(note, 900),
    submittedAt: new Date().toISOString(),
    moderationStatus: "pending-review",
  };

  savePrayerChainStore({
    ...store,
    thanksgivingUpdates: [update, ...store.thanksgivingUpdates].slice(0, 100),
  });

  return update;
}

export function saveCoordinatorDecision(input: {
  requestId: string;
  moderationStatus: PrayerChainCoordinatorDecision["moderationStatus"];
  assignedTeamIds: PrayerChainTeamId[];
  coordinatorNote: string;
}) {
  const store = readPrayerChainStore();
  const decision: PrayerChainCoordinatorDecision = {
    requestId: input.requestId,
    moderationStatus: input.moderationStatus,
    assignedTeamIds: sanitizeTeams(input.assignedTeamIds),
    coordinatorNote: sanitizeText(input.coordinatorNote, 800),
    decidedAt: new Date().toISOString(),
  };

  savePrayerChainStore({
    ...store,
    coordinatorDecisions: [
      decision,
      ...store.coordinatorDecisions.filter((item) => item.requestId !== input.requestId),
    ].slice(0, 100),
  });

  return decision;
}

export function clearPrayerChainLocalData() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(prayerChainStorageKey);
  cachedRawPrayerChain = undefined;
  window.dispatchEvent(new Event(prayerChainChangeEvent));
}

function sanitizeStore(value: Partial<PrayerChainStore>): PrayerChainStore {
  return {
    version: 1,
    submissions: Array.isArray(value.submissions)
      ? value.submissions
          .map((submission) => sanitizeSubmission(submission as Partial<LocalPrayerChainSubmission>))
          .filter((submission) => submission.title && submission.requestSummary)
          .slice(0, 50)
      : [],
    prayerCommitments: Array.isArray(value.prayerCommitments)
      ? value.prayerCommitments
          .map((commitment) => sanitizeCommitment(commitment as Partial<PrayerChainPrayerCommitment>))
          .filter((commitment) => commitment.requestId && teamValues.has(commitment.teamId))
          .slice(0, 500)
      : [],
    thanksgivingUpdates: Array.isArray(value.thanksgivingUpdates)
      ? value.thanksgivingUpdates
          .map((update) => ({
            id: sanitizeText((update as PrayerChainThanksgivingUpdate).id, 100) || createLocalId("chain-thanks"),
            requestId: sanitizeText((update as PrayerChainThanksgivingUpdate).requestId, 100),
            note: sanitizeText((update as PrayerChainThanksgivingUpdate).note, 900),
            submittedAt: sanitizeText((update as PrayerChainThanksgivingUpdate).submittedAt, 40) || new Date().toISOString(),
            moderationStatus: "pending-review" as const,
          }))
          .filter((update) => update.requestId && update.note)
          .slice(0, 100)
      : [],
    coordinatorDecisions: Array.isArray(value.coordinatorDecisions)
      ? value.coordinatorDecisions
          .map((decision) => sanitizeDecision(decision as Partial<PrayerChainCoordinatorDecision>))
          .filter((decision) => decision.requestId)
          .slice(0, 100)
      : [],
    alertDeliveries: Array.isArray(value.alertDeliveries) ? value.alertDeliveries.slice(0, 200) as PrayerChainStore["alertDeliveries"] : [],
  };
}

function sanitizeSubmission(value: Partial<LocalPrayerChainSubmission>): LocalPrayerChainSubmission {
  const now = new Date().toISOString();
  const requestCategory =
    value.requestCategory && categoryValues.has(value.requestCategory) ? value.requestCategory : "other";
  const urgency = value.urgency && urgencyValues.has(value.urgency) ? value.urgency : "ordinary";
  const privacy = value.privacy && privacyValues.has(value.privacy) ? value.privacy : "anonymous-to-team";
  const requestedTeamId =
    value.requestedTeamId === "auto" || (value.requestedTeamId && teamValues.has(value.requestedTeamId))
      ? value.requestedTeamId
      : "auto";

  return {
    id: sanitizeText(value.id, 100) || createLocalId("chain-request"),
    title: sanitizeText(value.title, 100),
    requestSummary: sanitizeText(value.requestSummary, 1400),
    requestCategory,
    urgency,
    privacy,
    requestedBy: sanitizeText(value.requestedBy, 80) || "Anonymous",
    contactEmail: sanitizeText(value.contactEmail, 160),
    contactPreference:
      value.contactPreference && contactValues.has(value.contactPreference) ? value.contactPreference : "none",
    consentToShare: Boolean(value.consentToShare),
    consentToContact: Boolean(value.consentToContact),
    hasYouthInvolved: Boolean(value.hasYouthInvolved),
    requestedTeamId,
    assignedTeamIds: sanitizeTeams(value.assignedTeamIds),
    routingReasons: sanitizeStringArray(value.routingReasons, 12),
    alertCadence:
      value.alertCadence === "immediate" ||
      value.alertCadence === "same-day-digest" ||
      value.alertCadence === "daily-digest" ||
      value.alertCadence === "no-alert"
        ? value.alertCadence
        : "daily-digest",
    pastoralReferralRecommended: Boolean(value.pastoralReferralRecommended),
    moderationStatus:
      value.moderationStatus === "needs-attention" ||
      value.moderationStatus === "pending-review" ||
      value.moderationStatus === "new"
        ? value.moderationStatus
        : "pending-review",
    submittedAt: sanitizeText(value.submittedAt, 40) || now,
    updatedAt: sanitizeText(value.updatedAt, 40) || now,
  };
}

function sanitizeCommitment(value: Partial<PrayerChainPrayerCommitment>): PrayerChainPrayerCommitment {
  return {
    requestId: sanitizeText(value.requestId, 100),
    teamId: value.teamId && teamValues.has(value.teamId) ? value.teamId : "general",
    prayedAt: sanitizeText(value.prayedAt, 40) || new Date().toISOString(),
  };
}

function sanitizeDecision(value: Partial<PrayerChainCoordinatorDecision>): PrayerChainCoordinatorDecision {
  return {
    requestId: sanitizeText(value.requestId, 100),
    moderationStatus:
      value.moderationStatus === "approved" ||
      value.moderationStatus === "routed" ||
      value.moderationStatus === "needs-attention" ||
      value.moderationStatus === "hidden" ||
      value.moderationStatus === "closed" ||
      value.moderationStatus === "archived"
        ? value.moderationStatus
        : "pending-review",
    assignedTeamIds: sanitizeTeams(value.assignedTeamIds),
    coordinatorNote: sanitizeText(value.coordinatorNote, 800),
    decidedAt: sanitizeText(value.decidedAt, 40) || new Date().toISOString(),
  };
}

function sanitizeTeams(value: unknown) {
  if (!Array.isArray(value)) return ["general" as const];
  const teams = Array.from(new Set(value.filter((team): team is PrayerChainTeamId => typeof team === "string" && teamValues.has(team as PrayerChainTeamId))));
  return teams.length ? teams : ["general" as const];
}

function sanitizeStringArray(value: unknown, limit: number) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0).slice(0, limit);
}

function sanitizeText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, maxLength) : "";
}

function subscribePrayerChain(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === prayerChainStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(prayerChainChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(prayerChainChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return defaultPrayerChainStore;
}

function createLocalId(prefix: string) {
  if (typeof window !== "undefined" && window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}`;
}
