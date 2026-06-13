import { relicFaqs } from "@/data/relicFaqs";
import { relicPrayers } from "@/data/relicPrayers";
import { relicResources } from "@/data/relicResources";
import { relicSites } from "@/data/relicSites";
import {
  relicClasses,
  relicExplorerPath,
  relicFamilyIdeas,
  relicRelatedTools,
  relicTopics,
  relicVisitRecommendations,
} from "@/data/relicsPage";
import type { RelicPrayer, RelicVisitNeed } from "@/types/relics";

export function getRelicClasses() {
  return [...relicClasses].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelicTopics() {
  return [...relicTopics].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelicPrayers() {
  return [...relicPrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelicResources() {
  return [...relicResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelicSites() {
  return [...relicSites].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getRelicFaqs() {
  return [...relicFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function buildRelicVisitRecommendation(need: RelicVisitNeed) {
  return relicVisitRecommendations.find((item) => item.need === need) ?? relicVisitRecommendations[0];
}

export function formatRelicPrayerForCopy(prayer: RelicPrayer) {
  return `${prayer.title}\n\n${prayer.body}`;
}

export function formatRelicVisitRecommendationForCopy(need: RelicVisitNeed) {
  const recommendation = buildRelicVisitRecommendation(need);
  return [
    "Prepare for a Relic Visit",
    "",
    ...recommendation.steps.map((step, index) => `${index + 1}. ${step}`),
    "",
    `Prayer: ${recommendation.prayer}`,
    `Reflection: ${recommendation.reflectionQuestion}`,
  ].join("\n");
}

export function formatRelicClassesSummaryForCopy() {
  return getRelicClasses()
    .map((item) => `${item.title}: ${item.description}`)
    .join("\n");
}

export function getRelatedRelicTools() {
  return [...relicRelatedTools];
}

export function getRelicFamilyIdeas() {
  return [...relicFamilyIdeas];
}

export function getRelicExplorerPath() {
  return [...relicExplorerPath];
}
