"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatShortVisitGuideForCopy, getShortAdorationVisitGuides } from "@/lib/adoration";

export function ShortAdorationVisitGuide() {
  const guides = getShortAdorationVisitGuides();
  const [copied, setCopied] = useState(false);

  async function copyGuide() {
    try {
      await navigator.clipboard.writeText(formatShortVisitGuideForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Short visits"
        title="Only Have 5, 10, or 15 Minutes?"
        summary="Even a brief visit can become real prayer when you stay close to Jesus."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <article key={guide.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{guide.title}</h3>
            <ul className="mt-4 grid gap-2">
              {guide.steps.map((step) => (
                <li key={step} className="rounded-md border border-stone bg-ivory px-3 py-2 text-sm leading-7 text-muted">
                  {step}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <button type="button" onClick={copyGuide} className="btn btn-secondary focus-ring mt-6 justify-center">
        {copied ? "Short visit guide copied" : "Copy Short Visit Guide"}
      </button>
    </section>
  );
}
