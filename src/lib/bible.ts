import { bibleFaqs } from "@/data/bibleFaqs";
import { bibleHero, dailyReadingsMethod, relatedBibleTools, translationFinderRecommendations } from "@/data/biblePage";
import { bibleReadingPlans } from "@/data/bibleReadingPlans";
import { bibleResources } from "@/data/bibleResources";
import { bibleTranslations } from "@/data/bibleTranslations";
import { BibleUseCase, type BibleFAQ, type BibleFinderRecommendation, type BibleReadingPlan, type BibleRelatedTool, type BibleResource, type BibleTranslation, type BibleWordJournalInput } from "@/types/bible";

export function getBibleTranslations(): BibleTranslation[] {
  return [...bibleTranslations].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getBibleResources(): BibleResource[] {
  return [...bibleResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getBibleReadingPlans(): BibleReadingPlan[] {
  return [...bibleReadingPlans].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getBibleFaqs(): BibleFAQ[] {
  return [...bibleFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildBibleTranslationRecommendation(need: BibleUseCase): BibleFinderRecommendation {
  return translationFinderRecommendations[need] ?? translationFinderRecommendations[BibleUseCase.Beginner];
}

export function formatReadingPlanForCopy(plan: BibleReadingPlan): string {
  return [
    plan.title,
    "",
    plan.description,
    "",
    `Length: ${plan.days} day${plan.days === 1 ? "" : "s"}`,
    `Best for: ${plan.audience.join(", ")}`,
    "",
    "References:",
    ...plan.references.map((reference) => `- ${reference}`),
    "",
    "Related Daily Oratory links:",
    ...plan.relatedLinks.map((link) => `- ${link.label}: ${link.href}`),
  ].join("\n");
}

export function formatDailyReadingsMethodForCopy(): string {
  return [
    "A Simple Daily Readings Method",
    "",
    ...dailyReadingsMethod,
    "",
    `Start with: ${bibleHero.title}`,
    "Open today's official readings: https://bible.usccb.org/daily-bible-reading",
  ].join("\n");
}

export function formatWordJournalForCopy(input: BibleWordJournalInput): string {
  return [
    "Today's Word from Scripture",
    "",
    `Reference: ${input.reference || "-"}`,
    `Word/Phrase: ${input.wordOrPhrase || "-"}`,
    `What stood out?: ${input.stoodOut || "-"}`,
    `Invitation: ${input.invitation || "-"}`,
    `Action: ${input.action || "-"}`,
  ].join("\n");
}

export function getRelatedBibleTools(): BibleRelatedTool[] {
  return [...relatedBibleTools];
}
