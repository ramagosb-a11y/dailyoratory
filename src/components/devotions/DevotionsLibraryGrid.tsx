"use client";

import { useMemo, useState } from "react";
import { DevotionCard } from "@/components/devotions/DevotionCard";
import { DevotionFilters } from "@/components/devotions/DevotionFilters";
import { filterDevotions, getDevotionCategories, sortDevotions } from "@/lib/devotions";
import type { Devotion, DevotionFilterState, DevotionSortOption } from "@/types/devotions";

export function DevotionsLibraryGrid({ devotions }: { devotions: Devotion[] }) {
  const [filters, setFilters] = useState<DevotionFilterState>({});
  const [sort, setSort] = useState<DevotionSortOption>("featured");
  const categories = getDevotionCategories().map((category) => ({ label: category.title, value: category.slug }));

  const filtered = useMemo(() => sortDevotions(filterDevotions(filters), sort), [filters, sort]);

  return (
    <section id="devotions-library">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Devotions library</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Devotions library
        </h2>
      </div>
      <div className="mt-7">
        <DevotionFilters
          filters={filters}
          setFilters={setFilters}
          sort={sort}
          setSort={setSort}
          categories={categories}
        />
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((devotion) => (
          <DevotionCard key={devotion.id} devotion={devotion} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="card-parchment mt-7 p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">No devotions found</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Try a simpler search or fewer filters. The goal is to find one faithful starting point, not
            to search perfectly.
          </p>
        </div>
      ) : null}
    </section>
  );
}
