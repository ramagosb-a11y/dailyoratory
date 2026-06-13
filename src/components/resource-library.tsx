"use client";

import { useMemo, useState } from "react";
import { ResourceCard } from "@/components/resource-card";
import type { Resource } from "@/content/types";

export function ResourceLibrary({
  resources,
  categories,
  seasons,
  tags,
  initialQuery = "",
}: {
  resources: Resource[];
  categories: string[];
  seasons: string[];
  tags: string[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("All");
  const [season, setSeason] = useState("All");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesQuery =
        !normalizedQuery ||
        [resource.title, resource.description, resource.category, resource.format, resource.season, ...resource.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = category === "All" || resource.category === category;
      const matchesSeason = season === "All" || resource.season === season;
      const matchesTags =
        activeTags.length === 0 || activeTags.every((tag) => resource.tags.includes(tag));

      return matchesQuery && matchesCategory && matchesSeason && matchesTags;
    });
  }, [activeTags, category, query, resources, season]);

  function toggleTag(tag: string) {
    setActiveTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  }

  function clearFilters() {
    setQuery("");
    setCategory("All");
    setSeason("All");
    setActiveTags([]);
  }

  return (
    <section className="dashboard-card p-4 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <label htmlFor="resource-search" className="form-label">
            Search resources
          </label>
          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search prayers, devotions, saints, sacraments..."
            className="form-field focus-ring mt-2"
          />
        </div>
        <div>
          <label htmlFor="resource-category" className="form-label">
            Category
          </label>
          <select
            id="resource-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="form-field focus-ring mt-2"
          >
            <option>All</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="resource-season" className="form-label">
            Liturgical season
          </label>
          <select
            id="resource-season"
            value={season}
            onChange={(event) => setSeason(event.target.value)}
            className="form-field focus-ring mt-2"
          >
            <option>All</option>
            {seasons.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm font-bold text-navy">Tags</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.slice(0, 18).map((tag) => {
            const selected = activeTags.includes(tag);

            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`focus-ring rounded-md border px-3 py-2 text-xs font-bold transition ${
                  selected
                    ? "border-burgundy bg-burgundy text-ivory"
                    : "border-stone bg-background text-muted hover:border-gold hover:text-navy"
                }`}
                aria-pressed={selected}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-stone pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-muted">
          Showing <span className="text-navy">{filtered.length}</span> of {resources.length} resources
        </p>
        <button
          type="button"
          onClick={clearFilters}
          className="btn btn-secondary focus-ring"
        >
          Clear filters
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="card-parchment mt-6 p-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-navy">No resources found</h2>
          <p className="mt-2 text-sm text-muted">
            Try a broader search, a different season, or fewer selected tags.
          </p>
        </div>
      ) : null}
    </section>
  );
}
