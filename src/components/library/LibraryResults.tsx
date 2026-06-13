import Link from "next/link";
import { LibraryResultCard } from "@/components/library/LibraryResultCard";
import type { LibrarySearchResult } from "@/lib/search";

export function LibraryResults({ results }: { results: LibrarySearchResult[] }) {
  if (results.length === 0) {
    return (
      <div className="card-parchment p-8 text-center">
        <p className="text-xs font-bold uppercase text-burgundy">No resources found</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Try a simpler search.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
          Remove one filter, try a broader word like prayer or saints, or return to the full Daily Oratory library.
        </p>
        <Link href="/library" className="btn btn-primary focus-ring mt-6">
          Clear filters
        </Link>
      </div>
    );
  }

  return (
    <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => (
        <LibraryResultCard key={result.record.id} result={result} />
      ))}
    </div>
  );
}
