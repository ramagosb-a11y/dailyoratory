import type { Metadata } from "next";
import Link from "next/link";
import { SiteSearchBar } from "@/components/search/SiteSearchBar";
import { SearchCategoryFilters } from "@/components/search/SearchCategoryFilters";
import { SearchEmptyState } from "@/components/search/SearchEmptyState";
import { SearchQuickLinks } from "@/components/search/SearchQuickLinks";
import { SearchResults } from "@/components/search/SearchResults";
import { createPageMetadata } from "@/lib/metadata";
import { getPopularSearches, getSearchCategories, searchSite } from "@/lib/search";
import type { SearchItemType } from "@/types/search";

export const metadata: Metadata = createPageMetadata({
  title: "Search",
  description:
    "Search Daily Oratory for Catholic prayers, guides, reflections, sacraments, saints, media, and formation resources.",
  path: "/search",
});

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const query = readOne(params.q);
  const category = readOne(params.category);
  const type = readOne(params.type) as SearchItemType | "";
  const hasActiveSearch = Boolean(query || category || type);

  const [results, categories] = await Promise.all([
    searchSite(query, { category, type, limit: 72 }),
    Promise.resolve(getSearchCategories()),
  ]);

  const popular = getPopularSearches();
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

function readOne(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}
