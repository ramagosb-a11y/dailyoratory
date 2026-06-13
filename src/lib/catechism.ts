import {
  catechismDailyLifeUses,
  catechismDifferentUsers,
  catechismExternalBibleLink,
  catechismHowToUseSteps,
  catechismPathways,
  catechismPillars,
  catechismReadingPlan,
  catechismStudyMethod,
  catechismWhyItMatters,
  relatedCatechismTools,
} from "@/data/catechismPage";
import { catechismFaqs } from "@/data/catechismFaqs";
import { catechismResources } from "@/data/catechismResources";
import { catechismTopics } from "@/data/catechismTopics";
import type {
  CatechismFAQ,
  CatechismPathway,
  CatechismPillar,
  CatechismResource,
  CatechismStudyPlan,
  CatechismTopic,
} from "@/types/catechism";

export function getCatechismPillars(): CatechismPillar[] {
  return [...catechismPillars].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCatechismTopics(): CatechismTopic[] {
  return [...catechismTopics].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCatechismTopicBySlug(slug: string): CatechismTopic | undefined {
  return getCatechismTopics().find((topic) => topic.slug === slug);
}

export function getCatechismPathways(): CatechismPathway[] {
  return [...catechismPathways].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCatechismResources(): CatechismResource[] {
  return [...catechismResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCatechismFaqs(): CatechismFAQ[] {
  return [...catechismFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildCatechismStudyPlan(topicSlug: string): CatechismStudyPlan {
  const topic = getCatechismTopicBySlug(topicSlug) ?? getCatechismTopics()[0];

  return {
    selectedTopic: topic?.title ?? "Catechism topic",
    recommendedParagraphs: topic?.paragraphRanges ?? [],
    relatedLinks: topic?.relatedDailyOratoryLinks ?? [],
    createdAt: new Date().toISOString(),
  };
}

export function formatCatechismStudyPlanForCopy(plan: CatechismStudyPlan): string {
  return [
    `Catechism study plan: ${plan.selectedTopic}`,
    "",
    "Recommended Catechism paragraphs:",
    ...plan.recommendedParagraphs.map((range) => `- ${range}`),
    "",
    "Related Daily Oratory tools:",
    ...plan.relatedLinks.map((link) => `- ${link.label}: ${link.href}`),
  ].join("\n");
}

export function getRelatedCatechismTools() {
  return [...relatedCatechismTools];
}

export function getCatechismWhyItMatters() {
  return [...catechismWhyItMatters];
}

export function getCatechismHowToUseSteps() {
  return [...catechismHowToUseSteps];
}

export function getCatechismDailyLifeUses() {
  return [...catechismDailyLifeUses];
}

export function getCatechismReadingPlan() {
  return [...catechismReadingPlan];
}

export function getCatechismStudyMethod() {
  return [...catechismStudyMethod];
}

export function getCatechismDifferentUsers() {
  return [...catechismDifferentUsers];
}

export function getCatechismExternalBibleLink() {
  return { ...catechismExternalBibleLink };
}
