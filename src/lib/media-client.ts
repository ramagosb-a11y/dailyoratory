import type { MediaCategory, MediaItem } from "@/types/media";

export function normalizeMediaSearch(value: string) {
  return value.trim().toLowerCase();
}

export function getMediaFilterOptions(items: MediaItem[]) {
  return {
    mediaTypes: Array.from(new Set(items.map((item) => item.mediaType))).sort(),
    audiences: Array.from(new Set(items.flatMap((item) => item.audience))).sort(),
    topics: Array.from(new Set(items.map((item) => item.topic))).sort(),
    tags: Array.from(new Set(items.flatMap((item) => item.tags))).sort(),
  };
}

export function getMediaCategoryBySlug(slug: string, categories: MediaCategory[]) {
  return categories.find((category) => category.slug === slug);
}
