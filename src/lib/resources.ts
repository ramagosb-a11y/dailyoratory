import { resources } from "@/data/resources";
import type { Resource, ResourceCategory, LiturgicalSeason } from "@/content/types";

export const publishedResources = resources
  .filter((resource) => resource.status === "published")
  .sort((a, b) => a.title.localeCompare(b.title));

export function getFeaturedResources(limit = 6) {
  return publishedResources.filter((resource) => resource.featured).slice(0, limit);
}

export function getResourceBySlug(slug: string) {
  return publishedResources.find((resource) => resource.slug === slug);
}

export function getResourcesByCategory(categories: ResourceCategory[]) {
  return publishedResources.filter((resource) => categories.includes(resource.category));
}

export function getResourcesBySeason(season: LiturgicalSeason) {
  return publishedResources.filter((resource) => resource.season === season);
}

export function getRelatedResources(resource: Resource, limit = 3) {
  const explicit = resource.related
    ?.map((slug) => getResourceBySlug(slug))
    .filter((item): item is Resource => Boolean(item));

  if (explicit?.length) {
    return explicit.slice(0, limit);
  }

  return publishedResources
    .filter((candidate) => candidate.slug !== resource.slug)
    .map((candidate) => ({
      candidate,
      score:
        (candidate.category === resource.category ? 2 : 0) +
        candidate.tags.filter((tag) => resource.tags.includes(tag)).length +
        (candidate.season === resource.season ? 1 : 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.candidate);
}

export const resourceCategories = Array.from(
  new Set(publishedResources.map((resource) => resource.category)),
).sort();

export const resourceSeasons = Array.from(
  new Set(publishedResources.map((resource) => resource.season)),
).sort();

export const resourceTags = Array.from(
  new Set(publishedResources.flatMap((resource) => resource.tags)),
).sort();
