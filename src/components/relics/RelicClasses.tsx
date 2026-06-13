"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatRelicClassesSummaryForCopy, getRelicClasses } from "@/lib/relics";

export function RelicClasses() {
  const classes = getRelicClasses();
  const [copied, setCopied] = useState(false);

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(formatRelicClassesSummaryForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="classes-of-relics">
      <SectionHeader
        eyebrow="Classes"
        title="The Classes of Relics"
        summary="First class: part of the saint. Second class: something used by the saint. Third class: something touched to a relic or holy site."
      />
      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        {classes.map((item) => (
          <article key={item.id} className="card-parchment p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Examples:</span> {item.examples.join(", ")}
            </p>
            <p className="mt-4 rounded-xl border border-gold/25 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Reverence:</span> {item.reverenceNote}
            </p>
            <p className="mt-4 text-sm leading-7 text-burgundy">{item.cautionNote}</p>
          </article>
        ))}
      </div>
      <button type="button" onClick={copySummary} className="btn liturgical-button focus-ring mt-6 justify-center">
        {copied ? "Relic classes copied" : "Copy Relic Classes Summary"}
      </button>
    </section>
  );
}
