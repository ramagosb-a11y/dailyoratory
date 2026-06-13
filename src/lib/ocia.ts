import {
  beginnerCatholicLearningPath,
  ociaAudiencePaths,
  ociaAudienceCards,
  ociaCannotReplace,
  ociaHelpCards,
  ociaParishQuestions,
  ociaPossibleNextSteps,
  ociaPrayerCards,
  ociaReadinessPrompts,
  ociaTimelineExample,
  ociaTopics,
  relatedOciaTools,
} from "@/data/ociaPage";
import { ociaFaqs } from "@/data/ociaFaqs";
import { ociaGlossary } from "@/data/ociaGlossary";
import { ociaResources } from "@/data/ociaResources";
import { ociaStages } from "@/data/ociaStages";
import type {
  OciaAudiencePath,
  OciaGlossaryTerm,
  OciaNextStepPlan,
  OciaQuestion,
  OciaResource,
  OciaStage,
  OciaTopic,
} from "@/types/ocia";

export function getOciaStages(): OciaStage[] {
  return [...ociaStages].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOciaAudiencePaths(): OciaAudiencePath[] {
  return [...ociaAudiencePaths].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOciaTopics(): OciaTopic[] {
  return [...ociaTopics].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOciaFaqs(): OciaQuestion[] {
  return [...ociaFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOciaGlossaryTerms(): OciaGlossaryTerm[] {
  return [...ociaGlossary].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getOciaResources(): OciaResource[] {
  return [...ociaResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildOciaNextStepPlan(input: { interests: string[] }): OciaNextStepPlan {
  const matchedSteps = input.interests
    .map((interest) => ociaPossibleNextSteps.find((step) => step.id === interest))
    .filter((step): step is (typeof ociaPossibleNextSteps)[number] => Boolean(step));

  const nextSteps = matchedSteps.length > 0 ? matchedSteps.map((step) => step.label) : [
    "Visit a local Catholic parish",
    "Attend Sunday Mass",
    "Write down questions for the parish",
  ];

  const relatedLinks = matchedSteps.flatMap((step) => step.relatedLinks);

  return {
    interests: input.interests,
    nextSteps,
    relatedLinks,
    createdAt: new Date().toISOString(),
  };
}

export function formatOciaNextStepPlanForCopy(plan: OciaNextStepPlan): string {
  return [
    "My OCIA Next Step Plan",
    "",
    "Possible next steps:",
    ...plan.nextSteps.map((step) => `- ${step}`),
    "",
    "Helpful links:",
    ...plan.relatedLinks.map((link) => `- ${link.label}: ${link.href}`),
  ].join("\n");
}

export function getRelatedOciaTools() {
  return [...relatedOciaTools];
}

export function getOciaAudienceCards() {
  return [...ociaAudienceCards];
}

export function getOciaParishQuestions() {
  return [...ociaParishQuestions];
}

export function getOciaReadinessPrompts() {
  return [...ociaReadinessPrompts];
}

export function getOciaPossibleNextSteps() {
  return [...ociaPossibleNextSteps];
}

export function getOciaTimelineExample() {
  return [...ociaTimelineExample];
}

export function getOciaPrayerCards() {
  return [...ociaPrayerCards];
}

export function getHowDailyOratoryHelpsOcia() {
  return [...ociaHelpCards];
}

export function getOciaCannotReplaceItems() {
  return [...ociaCannotReplace];
}

export function getBeginnerCatholicLearningPath() {
  return [...beginnerCatholicLearningPath];
}
