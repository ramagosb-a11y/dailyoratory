"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatCouncilStudyPathForCopy, getCouncilStudyPath } from "@/lib/councils";
import { trackEvent } from "@/lib/analytics";

export function CouncilsStudyPath() {
  const [copied, setCopied] = useState(false);
  const steps = getCouncilStudyPath();

  async function copyStudyPath() {
    try {
      await navigator.clipboard.writeText(formatCouncilStudyPathForCopy());
      setCopied(true);
      trackEvent("council_study_path_copy", { page_path: "/councils", section: "council-study-path" });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader eyebrow="Study path" title="A Simple Councils Study Path" />
      <div className="mt-7 grid gap-4">
        {steps.map((step, index) => (
          <article key={step.title} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.focus}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyStudyPath} className="btn liturgical-button focus-ring justify-center">
          {copied ? "Study path copied" : "Copy Study Path"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Study Path
        </button>
      </div>
    </section>
  );
}
