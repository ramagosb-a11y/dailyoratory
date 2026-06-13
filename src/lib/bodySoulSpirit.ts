import { bodySoulSpiritFaqs } from "@/data/bodySoulSpiritFaqs";
import {
  bodySoulSpiritHero,
  interiorTempleCheckupQuestions,
  interiorTempleImages,
  relatedBodySoulSpiritTools,
  templeCarePractices,
} from "@/data/bodySoulSpiritPage";
import { bodySoulSpiritPrayers } from "@/data/bodySoulSpiritPrayers";
import { bodySoulSpiritResources } from "@/data/bodySoulSpiritResources";
import type {
  BodySoulSpiritFAQ,
  BodySoulSpiritPrayer,
  BodySoulSpiritRelatedTool,
  BodySoulSpiritResource,
  InteriorTempleCheckupInput,
  InteriorTempleCheckupQuestion,
  InteriorTempleCheckupResult,
  InteriorTempleImage,
  TempleCarePractice,
} from "@/types/bodySoulSpirit";

const defaultReflection: InteriorTempleCheckupResult = {
  gratitude: "Thank God that He still desires to dwell within you and lead you gently toward holiness.",
  mercyArea: "Bring the whole interior temple before Christ and ask Him to cleanse whatever is dim, cluttered, or wounded.",
  virtue: "Trust",
  nextStep: "Take five quiet minutes for prayer and ask the Holy Spirit for light and peace.",
};

export function getInteriorTempleImages(): InteriorTempleImage[] {
  return [...interiorTempleImages].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTempleCarePractices(): TempleCarePractice[] {
  return [...templeCarePractices].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getBodySoulSpiritPrayers(): BodySoulSpiritPrayer[] {
  return [...bodySoulSpiritPrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getBodySoulSpiritFaqs(): BodySoulSpiritFAQ[] {
  return [...bodySoulSpiritFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getBodySoulSpiritResources(): BodySoulSpiritResource[] {
  return [...bodySoulSpiritResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getInteriorTempleCheckupQuestions(): InteriorTempleCheckupQuestion[] {
  return [...interiorTempleCheckupQuestions].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildInteriorTempleCheckupResult(
  input: InteriorTempleCheckupInput,
): InteriorTempleCheckupResult {
  const questions = getInteriorTempleCheckupQuestions();
  const gratitudeQuestion = questions.find((question) => input[question.id] === "steady-light");
  const mercyQuestion = questions.find((question) => input[question.id] === "needs-mercy");
  const strengtheningQuestion =
    questions.find((question) => input[question.id] === "needs-strengthening") ??
    mercyQuestion ??
    gratitudeQuestion;

  return {
    gratitude: gratitudeQuestion?.gratitudePrompt ?? defaultReflection.gratitude,
    mercyArea: mercyQuestion?.mercyPrompt ?? defaultReflection.mercyArea,
    virtue: strengtheningQuestion?.virtue ?? defaultReflection.virtue,
    nextStep: strengtheningQuestion?.nextStep ?? defaultReflection.nextStep,
  };
}

export function formatInteriorTemplePrayerForCopy(prayer: BodySoulSpiritPrayer): string {
  return [prayer.title, "", prayer.body, "", `When to pray: ${prayer.whenToPray}`].join("\n");
}

export function formatInteriorTempleReflectionForCopy(
  result: InteriorTempleCheckupResult,
): string {
  return [
    "Interior Temple Reflection",
    "",
    `Thank God for: ${result.gratitude}`,
    `Bring to mercy: ${result.mercyArea}`,
    `Virtue to practice: ${result.virtue}`,
    `Next step: ${result.nextStep}`,
  ].join("\n");
}

export function getRelatedBodySoulSpiritTools(): BodySoulSpiritRelatedTool[] {
  return [...relatedBodySoulSpiritTools];
}

export function formatTempleCareChecklistForCopy(): string {
  return [
    "Daily Temple Care Checklist",
    "",
    ...getTempleCarePractices().map(
      (practice, index) => `${index + 1}. ${practice.title}: ${practice.practice}`,
    ),
    "",
    `Keep close to Christ: ${bodySoulSpiritHero.title}`,
  ].join("\n");
}

