"use client";

import type { DevotionFilterState, DevotionSortOption } from "@/types/devotions";

export function DevotionFilters({
  filters,
  setFilters,
  sort,
  setSort,
  categories,
}: {
  filters: DevotionFilterState;
  setFilters: (next: DevotionFilterState) => void;
  sort: DevotionSortOption;
  setSort: (next: DevotionSortOption) => void;
  categories: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-4 rounded-md border border-stone bg-parchment p-5 lg:grid-cols-4">
      <label className="grid gap-2 text-sm text-muted">
        <span className="font-semibold text-navy">Search</span>
        <input
          value={filters.q ?? ""}
          onChange={(event) => setFilters({ ...filters, q: event.target.value })}
          className="focus-ring rounded-md border border-stone bg-ivory px-3 py-2 text-navy"
          placeholder="Rosary, mercy, Mary..."
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        <span className="font-semibold text-navy">Category</span>
        <select
          value={filters.category ?? ""}
          onChange={(event) => setFilters({ ...filters, category: event.target.value })}
          className="focus-ring rounded-md border border-stone bg-ivory px-3 py-2 text-navy"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-muted">
        <span className="font-semibold text-navy">Beginner-friendly</span>
        <select
          value={filters.beginnerFriendly ?? ""}
          onChange={(event) => setFilters({ ...filters, beginnerFriendly: event.target.value })}
          className="focus-ring rounded-md border border-stone bg-ivory px-3 py-2 text-navy"
        >
          <option value="">Any level</option>
          <option value="yes">Yes</option>
          <option value="moderate">Moderate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm text-muted">
        <span className="font-semibold text-navy">Sort</span>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value as DevotionSortOption)}
          className="focus-ring rounded-md border border-stone bg-ivory px-3 py-2 text-navy"
        >
          <option value="featured">Featured</option>
          <option value="beginner-friendly">Beginner-friendly</option>
          <option value="time-needed">Time needed</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="seasonal">Seasonal</option>
        </select>
      </label>
      <div className="flex flex-wrap items-center gap-3 lg:col-span-4">
        {[
          { key: "marian", label: "Marian" },
          { key: "eucharistic", label: "Eucharistic" },
          { key: "reparation", label: "Reparation" },
          { key: "familyFriendly", label: "Family-friendly" },
        ].map((toggle) => {
          const value = Boolean(filters[toggle.key as keyof DevotionFilterState]);
          return (
            <button
              key={toggle.key}
              type="button"
              onClick={() => setFilters({ ...filters, [toggle.key]: !value })}
              className={`focus-ring rounded-sm border px-3 py-1.5 text-sm ${
                value ? "border-gold bg-gold/10 text-navy" : "border-stone bg-ivory text-muted"
              }`}
            >
              {toggle.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
