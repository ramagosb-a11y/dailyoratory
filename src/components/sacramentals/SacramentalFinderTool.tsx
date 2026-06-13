"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { sacramentalFinderOptions } from "@/data/sacramentalsPage";
import type { SacramentalFinderNeed } from "@/types/sacramentals";
import { buildSacramentalFinderRecommendation, formatSacramentalFinderRecommendationForCopy } from "@/lib/sacramentals";

export function SacramentalFinderTool() {
  const [need, setNeed] = useState<SacramentalFinderNeed>("daily-prayer");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => buildSacramentalFinderRecommendation(need), [need]);

  async function copyRecommendation() {
    try {
      await navigator.clipboard.writeText(formatSacramentalFinderRecommendationForCopy(need));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function handleChange(value: SacramentalFinderNeed) {
    setNeed(value);
    trackEvent("sacramental_finder_use", { item_slug: value, source: "/sacramentals" });
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Finder"
        title="Which Sacramental Can Help Me Pray?"
        summary="Choose a prayer need and get a simple sacramental recommendation, prayer suggestion, related Daily Oratory links, purchase guidance, and blessing note."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="card-parchment p-5">
          <label htmlFor="sacramental-finder" className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
            Prayer need
          </label>
          <select
            id="sacramental-finder"
            value={need}
            onChange={(event) => handleChange(event.target.value as SacramentalFinderNeed)}
            className="focus-ring mt-3 w-full rounded-md border border-stone bg-ivory px-4 py-3 text-sm text-navy"
          >
            {sacramentalFinderOptions.map((option) => (
              <option key={option.need} value={option.need}>
                {option.label}
              </option>
            ))}
          </select>
        </article>

        <article className="card-parchment liturgical-card-accent p-6">
          {result ? (
            <>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Recommended sacramental</p>
              <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{result.sacramental.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{result.recommendation.explanation}</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">How to use it:</span> {result.sacramental.howToUse}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">Prayer suggestion:</span> {result.recommendation.prayer}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">Purchase guidance:</span> {result.recommendation.purchaseGuidance}
              </p>
              {result.sacramental.blessingNote ? (
                <p className="mt-4 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                  <span className="font-semibold text-navy">Blessing note:</span> {result.sacramental.blessingNote}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-3">
                {result.recommendation.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
                    {link.label}
                  </Link>
                ))}
              </div>
              <button type="button" onClick={copyRecommendation} className="btn liturgical-button focus-ring mt-6 justify-center">
                {copied ? "Recommendation copied" : "Copy Sacramental Finder Recommendation"}
              </button>
            </>
          ) : (
            <p className="text-sm leading-7 text-muted">No recommendation is available for that need yet.</p>
          )}
        </article>
      </div>
    </section>
  );
}
