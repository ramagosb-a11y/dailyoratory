"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { SearchCategoryFilters } from "@/components/search/SearchCategoryFilters";
import { SearchEmptyState } from "@/components/search/SearchEmptyState";
import { SearchQuickLinks } from "@/components/search/SearchQuickLinks";
import { SearchResults } from "@/components/search/SearchResults";
import { SiteSearchBar } from "@/components/search/SiteSearchBar";
import { normalizeSearchText, scoreSearchItem } from "@/lib/searchScoring";
import type { SearchCategory, SearchItem, SearchItemType } from "@/types/search";

type SearchPageClientProps = {
  items: SearchItem[];
  categories: SearchCategory[];
  popular: string[];
};

export function SearchPageClient({ items, categories, popular }: SearchPageClientProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "";
  const typeParam = searchParams.get("type") ?? "";
  const type = isSearchItemType(typeParam) ? typeParam : "";
  const hasActiveSearch = Boolean(query || category || type);

  const results = useMemo(
    () => searchItems(items, query, { category, type, limit: 72 }),
    [items, query, category, type],
  );
  const resultLabel = query ? `"${query}"` : category ? category : type ? type.replace(/-/g, " ") : "your search";

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Search</p>
          <div className="mt-3 max-w-3xl">
            <h1 className="font-display text-4xl font-semibold text-navy sm:text-6xl">Search Daily Oratory</h1>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Find prayers, guides, reflections, sacraments, saints, media, and formation resources.
            </p>
          </div>
          <div className="mt-6">
            <SiteSearchBar
              key={query}
              variant="hero"
              defaultValue={query}
              showQuickLinks={!hasActiveSearch}
              placeholder="Search Daily Oratory..."
              autoFocus
            />
          </div>
        </div>

        {!hasActiveSearch ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <section className="dashboard-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Popular searches</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {popular.map((item) => (
                  <Link
                    key={item}
                    href={`/search?q=${encodeURIComponent(item)}`}
                    className="focus-ring season-pill transition hover:border-gold hover:text-navy"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <SearchQuickLinks />
              </div>
            </section>

            <section className="dashboard-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Featured starting points</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <FeatureLink href="/pray" title="I want to pray" />
                <FeatureLink href="/explore" title="I am exploring the Catholic faith" />
                <FeatureLink href="/mass" title="I want to understand the Mass" />
                <FeatureLink href="/confession" title="I need Confession help" />
                <FeatureLink href="/formation" title="I want to learn the faith" />
                <FeatureLink href="/media" title="I want Catholic media" />
              </div>
            </section>

            <section className="dashboard-card p-6 lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Browse by category</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((item) => (
                  <Link
                    key={item.id}
                    href={`/search?category=${encodeURIComponent(item.title)}`}
                    className="focus-ring rounded-2xl border border-stone bg-parchment/40 p-4 transition hover:border-gold hover:bg-parchment"
                  >
                    <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="mt-8 grid gap-6">
            <div className="dashboard-card p-5">
              <p className="text-sm font-semibold text-muted">
                Results for <span className="text-navy">{resultLabel}</span>:{" "}
                <span className="text-navy">{results.length}</span>
              </p>
            </div>
            <SearchCategoryFilters query={query} category={category} type={type} />
            {results.length > 0 ? <SearchResults items={results} query={query} /> : <SearchEmptyState />}
          </div>
        )}
      </section>
    </div>
  );
}

function searchItems(
  items: SearchItem[],
  query: string,
  options: { category?: string; type?: SearchItemType | ""; limit?: number } = {},
) {
  const normalizedQuery = normalizeSearchText(query);

  return items
    .filter((item) => {
      if (options.category && normalizeSearchText(item.category) !== normalizeSearchText(options.category)) {
        return false;
      }

      if (options.type && item.type !== options.type) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return scoreSearchItem(item, normalizedQuery) > 0;
    })
    .map((item) => ({
      item,
      score: normalizedQuery ? scoreSearchItem(item, normalizedQuery) : item.priority,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.priority - a.item.priority || a.item.title.localeCompare(b.item.title))
    .slice(0, options.limit ?? 60)
    .map((entry) => entry.item);
}

function FeatureLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="focus-ring rounded-2xl border border-stone bg-parchment/40 p-4 text-sm font-semibold text-navy transition hover:border-gold hover:bg-parchment"
    >
      {title}
    </Link>
  );
}

function isSearchItemType(value: string): value is SearchItemType {
  return [
    "page",
    "prayer",
    "reflection",
    "media",
    "saint",
    "devotion",
    "sacrament",
    "guide",
    "tool",
    "resource",
    "external-resource",
  ].includes(value);
}
