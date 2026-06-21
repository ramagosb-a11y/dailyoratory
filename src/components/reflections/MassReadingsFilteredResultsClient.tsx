"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { MassReflectionFilters } from "@/components/reflections/MassReflectionFilters";
import { MassReflectionPostCard } from "@/components/reflections/MassReflectionPostCard";
import {
  filterMassReadingsReflections,
  hasMassReadingsFilters,
  parseMassReadingsSearchParams,
} from "@/lib/massReadingsFilters";
import type {
  MassReadingsFacetOptions,
  MassReadingsReflection,
} from "@/types/massReadingsReflections";

type MassReadingsFilteredResultsClientProps = {
  reflections: MassReadingsReflection[];
  facets: MassReadingsFacetOptions;
  action: string;
};

export function MassReadingsFilteredResultsClient({
  reflections,
  facets,
  action,
}: MassReadingsFilteredResultsClientProps) {
  const searchParams = useSearchParams();
  const stateKey = searchParams.toString();
  const state = useMemo(
    () =>
      parseMassReadingsSearchParams({
        q: searchParams.get("q"),
        type: searchParams.get("type"),
        season: searchParams.get("season"),
        cycleYear: searchParams.get("cycleYear"),
        weekdayCycle: searchParams.get("weekdayCycle"),
        lectionaryNumber: searchParams.get("lectionaryNumber"),
        scriptureReference: searchParams.get("scriptureReference"),
      }),
    [searchParams],
  );
  const hasFilters = hasMassReadingsFilters(state);
  const filtered = useMemo(
    () => filterMassReadingsReflections(state, { includeScheduled: true }, reflections),
    [reflections, state],
  );

  return (
    <>
      <div className="mt-7">
        <MassReflectionFilters key={`mass-filters-${stateKey}`} state={state} facets={facets} action={action} />
      </div>
      {hasFilters ? (
        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Filtered results</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy">
            {filtered.length} reflection{filtered.length === 1 ? "" : "s"} found
          </h2>
          {filtered.length > 0 ? (
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((reflection) => (
                <MassReflectionPostCard key={reflection.id} reflection={reflection} />
              ))}
            </div>
          ) : (
            <div className="card-parchment mt-7 p-6">
              <h2 className="font-display text-3xl font-semibold text-navy">No reflections found</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Try another combination of type, season, cycle, or reading reference.
              </p>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}
