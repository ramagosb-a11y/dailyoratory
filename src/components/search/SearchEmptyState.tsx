import Link from "next/link";
import { SearchQuickLinks } from "@/components/search/SearchQuickLinks";

export function SearchEmptyState() {
  return (
    <div className="card-parchment p-8 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">No results found</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Try a simpler search.</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
        Try searching for a simpler word like Mass, prayer, confession, saints, or OCIA.
      </p>
      <div className="mt-5 flex justify-center">
        <SearchQuickLinks />
      </div>
      <div className="mt-6">
        <Link href="/contact" className="btn btn-secondary focus-ring">
          Contact Daily Oratory
        </Link>
      </div>
    </div>
  );
}
