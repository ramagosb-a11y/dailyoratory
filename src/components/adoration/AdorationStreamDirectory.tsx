"use client";

import { useMemo, useState } from "react";
import { adorationLanguageOptions } from "@/data/adoration";
import { filterAdorationStreams, getAdorationFacetOptions } from "@/lib/adoration";
import type { AdorationStreamLanguage, AdorationStreamStatus, LiveAdorationStreamRecord } from "@/types/adoration";
import { AdorationStreamCard } from "./AdorationStreamCard";

const statusOptions: Array<{ value: "all" | AdorationStreamStatus; label: string }> = [
  { value: "all", label: "All statuses" },
  { value: "live-now", label: "Live now" },
  { value: "available-24-7", label: "24/7" },
  { value: "scheduled", label: "Scheduled" },
  { value: "offline", label: "Offline" },
  { value: "needs-review", label: "Needs review" },
];

export function AdorationStreamDirectory({
  initialStreams,
  liveOnly = false,
  compactFilters = false,
}: {
  initialStreams: LiveAdorationStreamRecord[];
  liveOnly?: boolean;
  compactFilters?: boolean;
}) {
  const facets = getAdorationFacetOptions();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | AdorationStreamStatus>("all");
  const [language, setLanguage] = useState<"all" | AdorationStreamLanguage>("all");
  const [country, setCountry] = useState("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [twentyFourSevenOnly, setTwentyFourSevenOnly] = useState(liveOnly ? false : false);
  const scopeLabel = liveOnly ? "Live and 24/7 streams" : "All reviewed streams";

  const results = useMemo(() => {
    const filtered = filterAdorationStreams({
      query,
      status,
      language,
      country,
      verifiedOnly,
      twentyFourSevenOnly,
    });
    const allowedIds = new Set(initialStreams.map((stream) => stream.id));
    return filtered.filter((stream) => allowedIds.has(stream.id));
  }, [country, initialStreams, language, query, status, twentyFourSevenOnly, verifiedOnly]);

  function resetFilters() {
    setQuery("");
    setStatus("all");
    setLanguage("all");
    setCountry("all");
    setVerifiedOnly(false);
    setTwentyFourSevenOnly(false);
  }

  const advancedFilters = <>
        <label className="mt-4 grid gap-2">
          <span className="form-label">Recorded status</span>
          <select value={status} onChange={(event) => setStatus(event.target.value as "all" | AdorationStreamStatus)} className="form-field focus-ring">
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value === "live-now" ? "Live at last check" : option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="mt-4 grid gap-2">
          <span className="form-label">Language</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value as "all" | AdorationStreamLanguage)} className="form-field focus-ring">
            <option value="all">All languages</option>
            {adorationLanguageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="mt-4 grid gap-2">
          <span className="form-label">Country</span>
          <select value={country} onChange={(event) => setCountry(event.target.value)} className="form-field focus-ring">
            <option value="all">All countries</option>
            {facets.countries.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="mt-5 flex items-start gap-3 text-sm font-semibold text-navy">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(event) => setVerifiedOnly(event.target.checked)}
            className="mt-1 h-4 w-4 accent-[var(--gold)]"
          />
          Verified streams only
        </label>
        <label className="mt-3 flex items-start gap-3 text-sm font-semibold text-navy">
          <input
            type="checkbox"
            checked={twentyFourSevenOnly}
            onChange={(event) => setTwentyFourSevenOnly(event.target.checked)}
            className="mt-1 h-4 w-4 accent-[var(--gold)]"
          />
          24/7 streams only
        </label>

    <p className="mt-4 text-sm leading-7 text-muted">Status reflects the recorded review, not a real-time uptime check.</p>
  </>;

  return (
    <div className="grid gap-8 lg:grid-cols-[19rem_1fr] lg:items-start">
      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">{scopeLabel}</p>
        <label className="mt-4 grid gap-2">
          <span className="form-label">Search</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="form-field focus-ring"
            placeholder="Chapel, country, language..."
          />
        </label>
        {compactFilters ? <details className="mt-5 border-y border-stone py-2"><summary className="focus-ring cursor-pointer py-3 font-semibold text-navy">More filters</summary>{advancedFilters}</details> : advancedFilters}
        <p role="status" className="mt-5 text-sm leading-7 text-muted">
          {results.length} stream{results.length === 1 ? "" : "s"} shown
        </p>
        <button type="button" onClick={resetFilters} className="btn btn-secondary focus-ring mt-4 w-full justify-center">Clear filters</button>
      </aside>

      <section>
        {results.length ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {results.map((stream) => (
              <AdorationStreamCard key={stream.id} stream={stream} />
            ))}
          </div>
        ) : (
          <div className="dashboard-card p-8 text-center">
            <p className="text-xs font-bold uppercase text-burgundy">No streams found</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Try a broader filter.</h2>
            <p className="mt-3 text-sm leading-7 text-muted">Try another search, remove a filter, or clear filters to see all reviewed streams.</p>
          </div>
        )}
      </section>
    </div>
  );
}
