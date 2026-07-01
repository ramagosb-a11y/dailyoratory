import type { Metadata } from "next";
import { Suspense } from "react";
import { LibraryPageClient } from "@/components/library/LibraryPageClient";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getLibraryFacetOptions, getLibrarySearchResults } from "@/lib/search";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Library",
  description:
    "Read the current Daily Oratory reflection library while new Catholic formation content is being prepared.",
  path: "/library",
});

export default async function LibraryPage() {
  const [results, facets] = await Promise.all([getLibrarySearchResults(), getLibraryFacetOptions()]);

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Library"
          title="Daily Oratory library"
          summary="Search reflections, media, and core Daily Oratory resources in one place. Approved media and current Mass reading insights are added automatically."
        />
        <Suspense fallback={<div className="dashboard-card mt-8 min-h-48 p-6" />}>
          <LibraryPageClient results={results} facets={facets} />
        </Suspense>
      </section>
    </div>
  );
}
