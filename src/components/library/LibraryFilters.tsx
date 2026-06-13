import type { ReactNode } from "react";
import Link from "next/link";
import type { LibrarySearchState } from "@/lib/search";

export type LibraryFacetOptions = {
  categories: readonly string[];
  types: string[];
  seasons: string[];
  tags: string[];
};

export function LibraryFilters({
  state,
  facets,
  variant = "desktop",
}: {
  state: LibrarySearchState;
  facets: LibraryFacetOptions;
  variant?: "desktop" | "mobile";
}) {
  const tagLimit = variant === "mobile" ? 28 : 36;

  return (
    <form action="/library" className="grid gap-6">
      <input type="hidden" name="q" value={state.q} />
      <input type="hidden" name="sort" value={state.sort} />
      <FilterGroup label="Category">
        <RadioOption name="category" label="All categories" value="" checked={!state.category} />
        {facets.categories.map((category) => (
          <RadioOption key={category} name="category" label={category} value={category} checked={state.category === category} />
        ))}
      </FilterGroup>
      <FilterGroup label="Content type">
        <RadioOption name="type" label="All types" value="" checked={!state.type} />
        {facets.types.map((type) => (
          <RadioOption key={type} name="type" label={type} value={type} checked={state.type === type} />
        ))}
      </FilterGroup>
      <FilterGroup label="Liturgical season">
        <RadioOption name="season" label="All seasons" value="" checked={!state.season} />
        {facets.seasons.map((season) => (
          <RadioOption key={season} name="season" label={season} value={season} checked={state.season === season} />
        ))}
      </FilterGroup>
      <FilterGroup label="Tags">
        <div className="flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1">
          {facets.tags.slice(0, tagLimit).map((tag) => {
            const checked = state.tags.includes(tag);

            return (
              <label
                key={tag}
                className={`focus-within:outline-gold rounded-md border px-3 py-2 text-xs font-bold ${
                  checked ? "border-burgundy bg-burgundy text-ivory" : "border-stone bg-background text-muted"
                }`}
              >
                <input type="checkbox" name="tags" value={tag} defaultChecked={checked} className="sr-only" />
                {tag}
              </label>
            );
          })}
        </div>
      </FilterGroup>
      <div className="grid gap-2">
        <button type="submit" className="btn btn-primary focus-ring">
          Apply filters
        </button>
        <Link href="/library" className="btn btn-secondary focus-ring">
          Clear all
        </Link>
      </div>
    </form>
  );
}

function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <fieldset className="grid gap-3">
      <legend className="text-xs font-bold uppercase text-burgundy">{label}</legend>
      {children}
    </fieldset>
  );
}

function RadioOption({
  name,
  value,
  label,
  checked,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
}) {
  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-navy">
      <input type="radio" name={name} value={value} defaultChecked={checked} className="accent-burgundy" />
      <span>{label}</span>
    </label>
  );
}
