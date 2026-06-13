import { dailyExamenFaqs } from "@/data/dailyExamenFaqs";
import {
  dailyExamenGuideSteps,
  dailyExamenHero,
  dailyExamenRelatedTools,
  examenJournalPrompts,
  examenSituations,
  quickExamenSteps,
} from "@/data/dailyExamenPage";
import { dailyExamenResources } from "@/data/dailyExamenResources";
import type {
  DailyExamenStep,
  ExamenFAQ,
  ExamenJournalEntry,
  ExamenRelatedTool,
  ExamenResource,
  ExamenSituation,
} from "@/types/dailyExamen";

export function getDailyExamenSteps(): DailyExamenStep[] {
  return [...dailyExamenGuideSteps].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getQuickExamenSteps(): DailyExamenStep[] {
  return [...quickExamenSteps].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getExamenSituations(): ExamenSituation[] {
  return [...examenSituations].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getDailyExamenFaqs(): ExamenFAQ[] {
  return [...dailyExamenFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getDailyExamenResources(): ExamenResource[] {
  return [...dailyExamenResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function formatDailyExamenGuideForCopy(): string {
  return [
    `${dailyExamenHero.title}`,
    "",
    ...getDailyExamenSteps().flatMap((step, index) => [
      `${index + 1}. ${step.title}`,
      step.guide,
      `Prayer: ${step.prayer}`,
      "",
    ]),
  ].join("\n");
}

export function formatQuickExamenForCopy(): string {
  return [
    "A 5-Minute Daily Examen",
    "",
    ...getQuickExamenSteps().flatMap((step, index) => [`${index + 1}. ${step.title}: ${step.guide}`]),
  ].join("\n");
}

export function formatJournalPromptsForCopy(): string {
  return ["Daily Examen Journal Prompts", "", ...examenJournalPrompts.map((prompt) => `- ${prompt}`)].join("\n");
}

export function formatExamenJournalEntryForCopy(entry: ExamenJournalEntry): string {
  return [
    "My Daily Examen Reflection",
    "",
    `Gratitude: ${entry.gratitude || "-"}`,
    `God's presence: ${entry.godsPresence || "-"}`,
    `Need for mercy: ${entry.mercy || "-"}`,
    `Grace for tomorrow: ${entry.graceForTomorrow || "-"}`,
    `Surrender: ${entry.surrender || "-"}`,
  ].join("\n");
}

export function getRelatedDailyExamenTools(): ExamenRelatedTool[] {
  return [...dailyExamenRelatedTools];
}

