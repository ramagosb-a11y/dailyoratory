"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { getChurchCouncils, getCouncilTimelineFilters } from "@/lib/councils";
import { trackEvent } from "@/lib/analytics";
import { CouncilCard } from "@/components/councils/CouncilCard";

export function CouncilsTimelineExplorer() {
  const filters = getCouncilTimelineFilters();
  const councils = getChurchCouncils();
  const [selectedFilter, setSelectedFilter] = useState(filters[0]?.slug ?? "");

  const activeFilter = filters.find((filter) => filter.slug === selectedFilter) ?? filters[0];
  const filteredCouncils = useMemo(
    () => councils.filter((council) => activeFilter?.councilIds.includes(council.id)),
    [activeFilter, councils],
  );

  return (
    <section>
      <SectionHeader
        eyebrow="Interactive tool"
        title="Explore Councils by Era"
        summary="Use this local-only explorer to move through the councils by historical period or topic."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose a filter</span>
            <select
              value={selectedFilter}
              onChange={(event) => {
                const next = event.target.value;
                setSelectedFilter(next);
                trackEvent("council_timeline_filter", { page_path: "/councils", filter_slug: next });
              }}
              className="form-field focus-ring"
            >
              {filters.map((filter) => (
                <option key={filter.id} value={filter.slug}>
                  {filter.title}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this explorer uses local state only. It does not store or send your selection anywhere.
          </div>
        </form>
        <aside className="grid gap-4">
          <div className="dashboard-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{activeFilter?.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{activeFilter?.description}</p>
          </div>
          {filteredCouncils.map((council) => (
            <CouncilCard key={council.id} council={council} compact />
          ))}
        </aside>
      </div>
    </section>
  );
}
