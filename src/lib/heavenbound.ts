import { heavenboundGptUrl, heavenboundPaths, heavenboundRecommendationGroups } from "@/data/heavenboundPaths";
import type { HeavenboundNeed, HeavenboundPath, HeavenboundTimeOfDay } from "@/types/heavenbound";

export function getHeavenboundPaths() {
  return heavenboundPaths;
}

export function getPathByNumber(number: number) {
  return heavenboundPaths.find((path) => path.number === number);
}

export function getPathBySlug(slug: string) {
  return heavenboundPaths.find((path) => path.slug === slug);
}

export function generateStarterPrompt(path: HeavenboundPath) {
  return path.starterPrompt;
}

export function generateAdvancedPrompt(path: HeavenboundPath) {
  return path.advancedPrompt;
}

export function getHeavenboundPromptUrl(prompt: string) {
  const params = new URLSearchParams({ prompt });
  const separator = heavenboundGptUrl.includes("?") ? "&" : "?";

  return `${heavenboundGptUrl}${separator}${params.toString()}`;
}

export function getRecommendedPathsByTimeOfDay(timeOfDay: HeavenboundTimeOfDay) {
  return heavenboundPaths.filter((path) => path.recommendedTime.includes(timeOfDay));
}

export function getRecommendedPathsByNeed(need: HeavenboundNeed) {
  const group = heavenboundRecommendationGroups.find((item) => item.id === need);
  if (!group) return [];

  return group.recommendedPathSlugs
    .map((slug) => getPathBySlug(slug))
    .filter((path): path is HeavenboundPath => Boolean(path));
}

export function getHeavenboundRecommendationGroups() {
  return heavenboundRecommendationGroups.map((group) => ({
    ...group,
    paths: getRecommendedPathsByNeed(group.id),
  }));
}
