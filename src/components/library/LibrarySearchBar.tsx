import type { LibrarySearchState } from "@/lib/search";
import { librarySortOptions } from "@/lib/search";

export function LibrarySearchBar({ state, resultCount }: { state: LibrarySearchState; resultCount: number }) {
  return (
    <form action="/library" className="dashboard-card grid w-full min-w-0 gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end">
      <div className="min-w-0">
        <label htmlFor="library-search" className="form-label">
          Search Daily Oratory
        </label>
        <input
          id="library-search"
          name="q"
          type="search"
          defaultValue={state.q}
          placeholder="Search prayers, saints, confession, Adoration..."
          className="form-field focus-ring mt-2 min-w-0"
        />
      </div>
      <div className="min-w-0">
        <label htmlFor="library-sort" className="form-label">
          Sort
        </label>
        <select id="library-sort" name="sort" defaultValue={state.sort} className="form-field focus-ring mt-2 min-w-0 lg:w-56">
          {librarySortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <input type="hidden" name="category" value={state.category} />
      <input type="hidden" name="type" value={state.type} />
      <input type="hidden" name="season" value={state.season} />
      {state.tags.map((tag) => (
        <input key={tag} type="hidden" name="tags" value={tag} />
      ))}
      <button type="submit" className="btn btn-primary focus-ring w-full lg:w-auto">
        Search
      </button>
      <p className="text-sm font-semibold text-muted lg:col-span-3">
        Showing <span className="text-navy">{resultCount}</span> resources for prayer, reflection, formation, and Catholic community.
      </p>
    </form>
  );
}
