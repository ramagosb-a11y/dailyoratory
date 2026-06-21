import Link from "next/link";
import type { LibrarySearchState } from "@/lib/librarySearch";
import { buildLibraryHref, librarySortOptions, removeTag } from "@/lib/librarySearch";

export function ActiveFilters({ state }: { state: LibrarySearchState }) {
  const activeFilters = [
    state.q ? { label: `Search: ${state.q}`, href: buildLibraryHref(state, { q: "" }) } : null,
    state.category ? { label: `Category: ${state.category}`, href: buildLibraryHref(state, { category: "" }) } : null,
    state.type ? { label: `Type: ${state.type}`, href: buildLibraryHref(state, { type: "" }) } : null,
    state.season ? { label: `Season: ${state.season}`, href: buildLibraryHref(state, { season: "" }) } : null,
    state.sort !== "recommended"
      ? {
          label: `Sort: ${librarySortOptions.find((option) => option.value === state.sort)?.label ?? state.sort}`,
          href: buildLibraryHref(state, { sort: "recommended" }),
        }
      : null,
    ...state.tags.map((tag) => ({ label: `Tag: ${tag}`, href: removeTag(state, tag) })),
  ].filter((filter): filter is { label: string; href: string } => Boolean(filter));

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase text-muted">Active filters</span>
      {activeFilters.map((filter) => (
        <Link key={filter.label} href={filter.href} className="season-pill focus-ring hover:border-gold hover:text-navy">
          {filter.label}
          <span aria-hidden="true" className="ml-1">
            x
          </span>
        </Link>
      ))}
      <Link href="/library" className="text-link focus-ring text-sm">
        Clear all
      </Link>
    </div>
  );
}
