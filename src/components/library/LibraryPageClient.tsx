"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ActiveFilters } from "@/components/library/ActiveFilters";
import { LibraryFilters, type LibraryFacetOptions } from "@/components/library/LibraryFilters";
import { LibraryResults } from "@/components/library/LibraryResults";
import { LibrarySearchBar } from "@/components/library/LibrarySearchBar";
import { MobileFilterDrawer } from "@/components/library/MobileFilterDrawer";
import {
  filterLibraryResults,
  parseLibrarySearchParams,
  type LibrarySearchResult,
} from "@/lib/librarySearch";

type LibraryPageClientProps = {
  results: LibrarySearchResult[];
  facets: LibraryFacetOptions;
};

export function LibraryPageClient({ results, facets }: LibraryPageClientProps) {
  const searchParams = useSearchParams();
  const stateKey = searchParams.toString();
  const state = useMemo(
    () =>
      parseLibrarySearchParams({
        q: searchParams.get("q"),
        category: searchParams.get("category"),
        type: searchParams.get("type"),
        season: searchParams.get("season"),
        tags: searchParams.getAll("tags"),
        sort: searchParams.get("sort"),
      }),
    [searchParams],
  );
  const filteredResults = useMemo(() => filterLibraryResults(results, state), [results, state]);

  return (
    <>
      <div className="mt-8 grid gap-5">
        <LibrarySearchBar key={`search-${stateKey}`} state={state} resultCount={filteredResults.length} />
        <MobileFilterDrawer key={`mobile-${stateKey}`} state={state} facets={facets} />
        <ActiveFilters state={state} />
      </div>
      <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
        <aside className="dashboard-card sticky top-24 hidden p-5 lg:block">
          <h2 className="font-display text-3xl font-semibold text-navy">Filters</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Narrow the current reflection library by category, content type, season, and tags.
          </p>
          <div className="mt-6">
            <LibraryFilters key={`desktop-${stateKey}`} state={state} facets={facets} />
          </div>
        </aside>
        <LibraryResults results={filteredResults} />
      </div>
    </>
  );
}
