"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { starterSacramentals } from "@/data/sacramentalsPage";
import { formatStarterSacramentalsForCopy } from "@/lib/sacramentals";

export function StarterSacramentals() {
  const [copied, setCopied] = useState(false);

  async function copyList() {
    try {
      await navigator.clipboard.writeText(formatStarterSacramentalsForCopy(starterSacramentals));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Beginners"
        title="Starter Sacramentals for a Catholic Home"
        summary="Start simply. A home does not need many items. Choose sacramentals that help you pray and grow closer to Christ."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {starterSacramentals.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyList} className="btn liturgical-button focus-ring justify-center">
          {copied ? "Starter list copied" : "Copy Starter List"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Starter Sacramentals List
        </button>
      </div>
    </section>
  );
}
