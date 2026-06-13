import {
  relatedTraditionTools,
  traditionCategories,
  traditionClassifierItems,
  traditionConcepts,
  traditionDailyLifeCards,
  traditionPrayer,
  traditionStudyPath,
  traditionTimeline,
} from "@/data/traditionPage";
import { traditionFaqs } from "@/data/traditionFaqs";
import { traditionResources } from "@/data/traditionResources";

export function getTraditionConcepts() {
  return [...traditionConcepts].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTraditionCategories() {
  return [...traditionCategories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTraditionResources() {
  return [...traditionResources].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTraditionFaqs() {
  return [...traditionFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTraditionTimeline() {
  return [...traditionTimeline].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTraditionClassifierItems() {
  return [...traditionClassifierItems].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function classifyTraditionItem(slug: string) {
  return getTraditionClassifierItems().find((item) => item.slug === slug);
}

export function getRelatedTraditionTools() {
  return [...relatedTraditionTools];
}

export function formatTraditionStudyPathForCopy() {
  return [
    "A Simple Study Path for Sacred Tradition",
    "",
    ...traditionStudyPath.map((step, index) => `${index + 1}. ${step.title} - ${step.href}`),
  ].join("\n");
}

export function formatTraditionPrayerForCopy() {
  return traditionPrayer;
}

export function getTraditionPrayer() {
  return traditionPrayer;
}

export function getTraditionStudyPath() {
  return [...traditionStudyPath];
}

export function getTraditionDailyLifeCards() {
  return [...traditionDailyLifeCards];
}
