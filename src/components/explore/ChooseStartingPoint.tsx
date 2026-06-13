"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { getExploreRecommendation, getExploreStartingPoints } from "@/lib/explore";

export function ChooseStartingPoint() {
  const options = getExploreStartingPoints();
  const [selectedSlug, setSelectedSlug] = useState(options[0]?.slug ?? "");
  const recommendation = useMemo(() => getExploreRecommendation(selectedSlug), [selectedSlug]);

  return (
    <section>
      <SectionHeader
        eyebrow="Interactive guide"
        title="What Brings You Here?"
        summary="Choose a starting point. This tool uses local state only and does not send your selection to a server."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose what best fits you right now</span>
            <select
              value={selectedSlug}
              onChange={(event) => setSelectedSlug(event.target.value)}
              className="form-field focus-ring"
            >
              {options.map((option) => (
                <option key={option.id} value={option.slug}>
                  {option.title}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this guide uses local state only. It does not store or send your selection anywhere.
          </div>
        </form>
        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Recommended next step</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{recommendation?.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{recommendation?.description}</p>
          <div className="mt-5 rounded-md border border-stone bg-parchment p-4">
            <p className="text-sm font-semibold text-navy">First step</p>
            <p className="mt-2 text-sm leading-7 text-muted">{recommendation?.firstStep}</p>
          </div>
          <div className="mt-5 rounded-md border border-gold/30 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
            Prayer: {recommendation?.prayer}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {recommendation?.recommendedLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy">
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
