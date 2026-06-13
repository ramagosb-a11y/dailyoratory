import { LibraryFilters, type LibraryFacetOptions } from "@/components/library/LibraryFilters";
import type { LibrarySearchState } from "@/lib/search";

export function MobileFilterDrawer({ state, facets }: { state: LibrarySearchState; facets: LibraryFacetOptions }) {
  return (
    <details className="dashboard-card p-4 lg:hidden">
      <summary className="cursor-pointer list-none text-sm font-bold text-navy">
        Filters
        <span className="ml-2 text-xs font-semibold text-muted">Category, type, season, tags</span>
      </summary>
      <div className="mt-5 border-t border-stone pt-5">
        <LibraryFilters state={state} facets={facets} variant="mobile" />
      </div>
    </details>
  );
}
