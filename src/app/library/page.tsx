import type { Metadata } from "next";
import { ActiveFilters } from "@/components/library/ActiveFilters";
import { LibraryFilters } from "@/components/library/LibraryFilters";
import { LibraryResults } from "@/components/library/LibraryResults";
import { LibrarySearchBar } from "@/components/library/LibrarySearchBar";
import { MobileFilterDrawer } from "@/components/library/MobileFilterDrawer";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getLibraryFacetOptions, parseLibrarySearchParams, searchLibraryContent } from "@/lib/search";

export const metadata: Metadata = createPageMetadata({
  title: "Library",
  description:
    "Read the current Daily Oratory reflection library while new Catholic formation content is being prepared.",
  path: "/library",
});

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const state = parseLibrarySearchParams(params);
  const [results, facets] = await Promise.all([searchLibraryContent(state), getLibraryFacetOptions()]);

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Library"
          title="Daily Oratory library"
          summary="Search reflections, media, and core Daily Oratory resources in one place. Approved media and current Mass reading insights are added automatically."
        />
        <div className="mt-8 grid gap-5">
          <LibrarySearchBar state={state} resultCount={results.length} />
          <MobileFilterDrawer state={state} facets={facets} />
          <ActiveFilters state={state} />
        </div>
        <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
          <aside className="dashboard-card sticky top-24 hidden p-5 lg:block">
            <h2 className="font-display text-3xl font-semibold text-navy">Filters</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Narrow the current reflection library by category, content type, season, and tags.
            </p>
            <div className="mt-6">
              <LibraryFilters state={state} facets={facets} />
            </div>
          </aside>
          <LibraryResults results={results} />
        </div>
      </section>
    </div>
  );
}
