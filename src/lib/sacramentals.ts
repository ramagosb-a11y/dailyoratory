import { sacramentalFaqs } from "@/data/sacramentalFaqs";
import { sacramentalItems } from "@/data/sacramentalItems";
import { sacramentalPrayers } from "@/data/sacramentalPrayers";
import { sacramentalPurchaseLinks } from "@/data/sacramentalPurchaseLinks";
import { sacramentalResources } from "@/data/sacramentalResources";
import { purchaseChecklist, relatedSacramentalTools, sacramentalFinderRecommendations } from "@/data/sacramentalsPage";
import type {
  SacramentalFinderNeed,
  SacramentalPrayer,
} from "@/types/sacramentals";

export function getSacramentalItems() {
  return [...sacramentalItems].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacramentalItemBySlug(slug: string) {
  return getSacramentalItems().find((item) => item.slug === slug);
}

export function getSacramentalPrayers() {
  return [...sacramentalPrayers].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacramentalFaqs() {
  return [...sacramentalFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacramentalResources() {
  return [...sacramentalResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSacramentalPurchaseLinks() {
  return [...sacramentalPurchaseLinks].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getApprovedPurchaseLinks() {
  return getSacramentalPurchaseLinks().filter((item) => item.status === "approved");
}

export function buildSacramentalFinderRecommendation(need: SacramentalFinderNeed) {
  const recommendation = sacramentalFinderRecommendations.find((item) => item.need === need);
  if (!recommendation) return null;
  const sacramental = sacramentalItems.find((item) => item.id === recommendation.sacramentalId);
  if (!sacramental) return null;
  return { recommendation, sacramental };
}

export function formatSacramentalPrayerForCopy(prayer: SacramentalPrayer) {
  return `${prayer.title}\n\n${prayer.body}`;
}

export function formatPurchaseChecklistForCopy() {
  return ["How to Choose Sacramentals Wisely", "", ...purchaseChecklist.map((item) => `- ${item}`)].join("\n");
}

export function formatStarterSacramentalsForCopy(items: readonly string[]) {
  return ["Starter Sacramentals for a Catholic Home", "", ...items.map((item) => `- ${item}`)].join("\n");
}

export function formatSacramentalFinderRecommendationForCopy(need: SacramentalFinderNeed) {
  const result = buildSacramentalFinderRecommendation(need);
  if (!result) return "No sacramental recommendation is available for that need yet.";

  return [
    "Which Sacramental Can Help Me Pray?",
    "",
    `Need: ${result.recommendation.need}`,
    `Recommended sacramental: ${result.sacramental.title}`,
    "",
    result.recommendation.explanation,
    "",
    `Prayer: ${result.recommendation.prayer}`,
    "",
    `How to use it: ${result.sacramental.howToUse}`,
    result.sacramental.blessingNote ? `Blessing note: ${result.sacramental.blessingNote}` : "",
    `Purchase guidance: ${result.recommendation.purchaseGuidance}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function getRelatedSacramentalTools() {
  return [...relatedSacramentalTools];
}
