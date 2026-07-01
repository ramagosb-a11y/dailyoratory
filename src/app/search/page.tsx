import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPageClient } from "@/components/search/SearchPageClient";
import { createPageMetadata } from "@/lib/metadata";
import { getAllSearchItems, getPopularSearches, getSearchCategories } from "@/lib/search";

export const metadata: Metadata = createPageMetadata({
  title: "Search Daily Oratory",
  description:
    "Search Daily Oratory prayers, guides, reflections, saints, media, sacraments, and Catholic formation resources.",
  path: "/search",
});

export const revalidate = 86400;

export default async function SearchPage() {
  const [items, categories] = await Promise.all([getAllSearchItems(), Promise.resolve(getSearchCategories())]);
  const popular = getPopularSearches();

  return (
    <Suspense fallback={<div className="paper-texture min-h-[50vh]" />}>
      <SearchPageClient items={items} categories={categories} popular={popular} />
    </Suspense>
  );
}
