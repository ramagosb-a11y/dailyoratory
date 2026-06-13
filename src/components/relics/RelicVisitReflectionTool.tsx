"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { relicVisitOptions } from "@/data/relicsPage";
import { trackEvent } from "@/lib/analytics";
import type { RelicVisitNeed } from "@/types/relics";
import { buildRelicVisitRecommendation, formatRelicVisitRecommendationForCopy } from "@/lib/relics";

export function RelicVisitReflectionTool() {
  const [need, setNeed] = useState<RelicVisitNeed>("visit-saints-relic");
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => buildRelicVisitRecommendation(need), [need]);

  function changeNeed(value: RelicVisitNeed) {
    setNeed(value);
    trackEvent("relic_visit_tool_use", { item_slug: value, destination: "/relics" });
  }

  async function copyRecommendation() {
    try {
      await navigator.clipboard.writeText(formatRelicVisitRecommendationForCopy(need));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Visit Tool"
        title="Prepare for a Relic Visit"
        summary="Choose a reason for your visit and get simple preparation steps, a prayer suggestion, a reflection question, and related Daily Oratory links."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="card-parchment p-5">
          <label htmlFor="relic-visit-tool" className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
            Visit need
          </label>
          <select
            id="relic-visit-tool"
            value={need}
            onChange={(event) => changeNeed(event.target.value as RelicVisitNeed)}
            className="focus-ring mt-3 w-full rounded-md border border-stone bg-ivory px-4 py-3 text-sm text-navy"
          >
            {relicVisitOptions.map((option) => (
              <option key={option.need} value={option.need}>
                {option.label}
              </option>
            ))}
          </select>
        </article>

        <article className="card-parchment liturgical-card-accent p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Preparation</h3>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {result.steps.map((step, index) => (
              <li key={step}>
                <span className="font-semibold text-navy">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">Prayer:</span> {result.prayer}
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            <span className="font-semibold text-navy">Reflection:</span> {result.reflectionQuestion}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {result.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={copyRecommendation} className="btn liturgical-button focus-ring justify-center">
              {copied ? "Preparation copied" : "Copy Relic Visit Preparation"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Relic Visit Preparation
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
