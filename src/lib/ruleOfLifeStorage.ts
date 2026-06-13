"use client";

import { useSyncExternalStore } from "react";
import {
  dailyExamenSteps,
  ruleOfLifeBuilderTemplates,
  ruleOfLifePracticeOptions,
  ruleOfLifeReviewRhythmOptions,
  ruleOfLifeSpiritualSeasonOptions,
  ruleOfLifeTimeOptions,
  ruleOfLifeVirtueFocusOptions,
} from "@/data/ruleOfLife";
import type {
  RuleOfLifeAvailableTime,
  RuleOfLifeBuilderDraft,
  RuleOfLifeBuilderTemplate,
  RuleOfLifePractice,
  RuleOfLifeReviewRhythm,
  RuleOfLifeSpiritualSeason,
  SavedRuleOfLife,
} from "@/types/ruleOfLife";

export const ruleOfLifeStorageKey = "daily-oratory-rule-of-life-v1";

const ruleOfLifeChangeEvent = "daily-oratory-rule-of-life-change";
let cachedRawRule: string | null | undefined;
let cachedParsedRule: SavedRuleOfLife | null = null;

export const defaultRuleDraft: RuleOfLifeBuilderDraft = {
  spiritualSeason: "beginning-again",
  availableTime: "10-minutes",
  dailyPracticeIds: ["practice-morning-offering", "practice-daily-scripture", "practice-daily-examen"],
  periodicPracticeIds: ["practice-sunday-mass", "practice-confession-rhythm"],
  virtueFocusId: "virtue-humility",
  reviewRhythm: "weekly",
};

export function readSavedRuleOfLife(): SavedRuleOfLife | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(ruleOfLifeStorageKey);
    if (raw === cachedRawRule) return cachedParsedRule;
    cachedRawRule = raw;
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SavedRuleOfLife>;

    if (parsed.version !== 1 || !parsed.id || !parsed.title) {
      cachedParsedRule = null;
      return null;
    }

    cachedParsedRule = {
      ...defaultRuleDraft,
      ...parsed,
      version: 1,
      id: parsed.id,
      title: parsed.title,
      createdAt: parsed.createdAt ?? new Date().toISOString(),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
      dailyPracticeIds: sanitizePracticeIds(parsed.dailyPracticeIds, "daily"),
      periodicPracticeIds: sanitizePracticeIds(parsed.periodicPracticeIds, "periodic"),
    };
    return cachedParsedRule;
  } catch {
    cachedParsedRule = null;
    return null;
  }
}

export function saveRuleOfLife(rule: SavedRuleOfLife) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ruleOfLifeStorageKey, JSON.stringify(rule));
  emitRuleOfLifeChange();
}

export function clearRuleOfLife() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ruleOfLifeStorageKey);
  emitRuleOfLifeChange();
}

export function useSavedRuleOfLife() {
  return useSyncExternalStore(subscribeRuleOfLife, readSavedRuleOfLife, getServerSnapshot);
}

export function createSavedRuleOfLife(draft: RuleOfLifeBuilderDraft, title = "My Daily Rule of Life"): SavedRuleOfLife {
  const now = new Date().toISOString();

  return {
    ...draft,
    version: 1,
    id: createLocalId(),
    title,
    createdAt: now,
    updatedAt: now,
    dailyPracticeIds: sanitizePracticeIds(draft.dailyPracticeIds, "daily"),
    periodicPracticeIds: sanitizePracticeIds(draft.periodicPracticeIds, "periodic"),
  };
}

export function updateSavedRule(rule: SavedRuleOfLife, patch: Partial<RuleOfLifeBuilderDraft & { title: string }>) {
  return {
    ...rule,
    ...patch,
    updatedAt: new Date().toISOString(),
  } satisfies SavedRuleOfLife;
}

export function draftFromTemplate(template: RuleOfLifeBuilderTemplate): RuleOfLifeBuilderDraft {
  return {
    spiritualSeason: template.spiritualSeason,
    availableTime: template.availableTime,
    dailyPracticeIds: sanitizePracticeIds(template.dailyPracticeIds, "daily"),
    periodicPracticeIds: sanitizePracticeIds(template.periodicPracticeIds, "periodic"),
    virtueFocusId: template.virtueFocusId,
    reviewRhythm: template.reviewRhythm,
  };
}

export function getRuleTemplate(id: string) {
  return ruleOfLifeBuilderTemplates.find((template) => template.id === id);
}

export function getSpiritualSeason(id: RuleOfLifeSpiritualSeason | string) {
  return ruleOfLifeSpiritualSeasonOptions.find((option) => option.id === id) ?? ruleOfLifeSpiritualSeasonOptions[0];
}

export function getAvailableTime(id: RuleOfLifeAvailableTime | string) {
  return ruleOfLifeTimeOptions.find((option) => option.id === id) ?? ruleOfLifeTimeOptions[1];
}

export function getVirtueFocus(id: string) {
  return ruleOfLifeVirtueFocusOptions.find((option) => option.id === id) ?? ruleOfLifeVirtueFocusOptions[0];
}

export function getReviewRhythm(id: RuleOfLifeReviewRhythm | string) {
  return ruleOfLifeReviewRhythmOptions.find((option) => option.id === id) ?? ruleOfLifeReviewRhythmOptions[1];
}

export function getPracticeById(id: string) {
  return ruleOfLifePracticeOptions.find((practice) => practice.id === id);
}

export function getPracticesByIds(ids: string[]) {
  return ids
    .map((id) => getPracticeById(id))
    .filter((practice): practice is RuleOfLifePractice => Boolean(practice));
}

export function estimateDailyMinutes(rule: RuleOfLifeBuilderDraft) {
  return getPracticesByIds(rule.dailyPracticeIds).reduce(
    (total, practice) => total + (practice.suggestedDurationMinutes ?? 0),
    0,
  );
}

export function buildRuleSummary(rule: RuleOfLifeBuilderDraft) {
  const daily = getPracticesByIds(rule.dailyPracticeIds);
  const periodic = getPracticesByIds(rule.periodicPracticeIds);
  const virtue = getVirtueFocus(rule.virtueFocusId);

  return [
    `Spiritual season: ${getSpiritualSeason(rule.spiritualSeason).label}`,
    `Available time: ${getAvailableTime(rule.availableTime).label}`,
    `Daily practices: ${daily.map((practice) => practice.title).join(", ") || "None selected"}`,
    `Weekly/monthly practices: ${periodic.map((practice) => practice.title).join(", ") || "None selected"}`,
    `Virtue focus: ${virtue.virtue}`,
    `Review rhythm: ${getReviewRhythm(rule.reviewRhythm).label}`,
  ];
}

export function exportRuleAsText(rule: SavedRuleOfLife) {
  const daily = getPracticesByIds(rule.dailyPracticeIds);
  const periodic = getPracticesByIds(rule.periodicPracticeIds);
  const virtue = getVirtueFocus(rule.virtueFocusId);

  return [
    "Daily Oratory Rule of Life",
    rule.title,
    "",
    ...buildRuleSummary(rule),
    "",
    "Daily practices",
    ...daily.map((practice) => `- ${practice.title}: ${practice.description}`),
    "",
    "Weekly and monthly practices",
    ...periodic.map((practice) => `- ${practice.title}: ${practice.description}`),
    "",
    "Virtue focus",
    `${virtue.virtue}: ${virtue.description}`,
    `Prayer: ${virtue.prayerPrompt}`,
    "",
    "Daily Examen",
    ...dailyExamenSteps.map((step) => `- ${step.title}: ${step.prompt}`),
    "",
    "Review this rule gently. Keep what draws you closer to Christ, simplify what becomes heavy, and bring discouragement to prayer.",
  ].join("\n");
}

export function exportRuleAsJson(rule: SavedRuleOfLife) {
  return JSON.stringify(
    {
      ...rule,
      summary: buildRuleSummary(rule),
      dailyPractices: getPracticesByIds(rule.dailyPracticeIds),
      periodicPractices: getPracticesByIds(rule.periodicPracticeIds),
      virtueFocus: getVirtueFocus(rule.virtueFocusId),
      reviewRhythm: getReviewRhythm(rule.reviewRhythm),
    },
    null,
    2,
  );
}

function sanitizePracticeIds(ids: unknown, cadence: "daily" | "periodic") {
  if (!Array.isArray(ids)) return [];
  const validIds = new Set(
    ruleOfLifePracticeOptions
      .filter((practice) => (cadence === "daily" ? practice.cadence === "daily" : practice.cadence !== "daily"))
      .map((practice) => practice.id),
  );

  return Array.from(new Set(ids.filter((id): id is string => typeof id === "string" && validIds.has(id))));
}

function createLocalId() {
  if (typeof window !== "undefined" && window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `rule-${Date.now()}`;
}

function subscribeRuleOfLife(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  function handleStorage(event: StorageEvent) {
    if (event.key === ruleOfLifeStorageKey) onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(ruleOfLifeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(ruleOfLifeChangeEvent, onStoreChange);
  };
}

function getServerSnapshot() {
  return null;
}

function emitRuleOfLifeChange() {
  window.dispatchEvent(new Event(ruleOfLifeChangeEvent));
}
