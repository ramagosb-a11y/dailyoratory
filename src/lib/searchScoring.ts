import type { SearchItem } from "@/types/search";

export function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function scoreSearchItem(item: SearchItem, query: string) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return item.priority;

  const title = normalizeSearchText(item.title);
  const description = normalizeSearchText(item.description);
  const content = normalizeSearchText(item.content);
  const category = normalizeSearchText(item.category);
  const type = normalizeSearchText(item.type);
  const tags = item.tags.map(normalizeSearchText);
  const words = normalizedQuery.split(" ").filter(Boolean);

  let score = 0;

  if (title === normalizedQuery) score += 120;
  if (title.includes(normalizedQuery)) score += 80;
  if (tags.some((tag) => tag === normalizedQuery)) score += 70;
  if (tags.some((tag) => tag.includes(normalizedQuery))) score += 40;
  if (category.includes(normalizedQuery)) score += 25;
  if (type.includes(normalizedQuery)) score += 25;
  if (description.includes(normalizedQuery)) score += 20;
  if (content.includes(normalizedQuery)) score += 10;

  for (const word of words) {
    if (title.includes(word)) score += 24;
    if (tags.some((tag) => tag.includes(word))) score += 18;
    if (description.includes(word)) score += 10;
    if (content.includes(word)) score += 6;
  }

  return score + item.priority * 0.12;
}
