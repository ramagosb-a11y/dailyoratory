import {
  churchCouncils,
  councilDailyLifeCards,
  councilStudyPath,
  councilTimelineFilters,
  councilsPrayer,
  firstSevenCouncilIds,
  relatedCouncilTools,
} from "@/data/churchCouncils";
import { councilFaqs } from "@/data/councilFaqs";
import { councilResources } from "@/data/councilResources";
import { councilTopics } from "@/data/councilTopics";
import type { CouncilEra, CouncilTopicType } from "@/types/councils";

export function getChurchCouncils() {
  return [...churchCouncils].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCouncilBySlug(slug: string) {
  return getChurchCouncils().find((council) => council.slug === slug);
}

export function getCouncilsByEra(era: CouncilEra) {
  return getChurchCouncils().filter((council) => council.era === era);
}

export function getCouncilsByTopic(topic: CouncilTopicType) {
  return getChurchCouncils().filter((council) => council.relatedTopics.includes(topic));
}

export function getFirstSevenCouncils() {
  return firstSevenCouncilIds
    .map((id) => getChurchCouncils().find((council) => council.id === id))
    .filter((council): council is NonNullable<typeof council> => Boolean(council));
}

export function getVaticanIICouncilDocuments() {
  return getCouncilResources().filter((resource) =>
    ["resource-vatican-ii", "resource-dei-verbum", "resource-lumen-gentium", "resource-sacrosanctum-concilium", "resource-gaudium-et-spes"].includes(resource.id),
  );
}

export function getCouncilTopics() {
  return [...councilTopics].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCouncilResources() {
  return [...councilResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCouncilFaqs() {
  return [...councilFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCouncilTimelineFilters() {
  return [...councilTimelineFilters].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCouncilTopicRecommendation(selection: string) {
  return getCouncilTopics().find((topic) => topic.slug === selection) ?? getCouncilTopics()[0];
}

export function formatCouncilStudyPathForCopy() {
  return [
    "A Simple Councils Study Path",
    "",
    ...councilStudyPath.map((step, index) => `${index + 1}. ${step.title} - ${step.focus}`),
  ].join("\n");
}

export function formatCouncilPrayerForCopy() {
  return councilsPrayer;
}

export function getRelatedCouncilTools() {
  return [...relatedCouncilTools];
}

export function getCouncilStudyPath() {
  return [...councilStudyPath];
}

export function getCouncilPrayer() {
  return councilsPrayer;
}

export function getCouncilDailyLifeCards() {
  return [...councilDailyLifeCards];
}
