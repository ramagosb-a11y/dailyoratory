"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { angelsStudyPath } from "@/data/angelsPage";
import { formatAngelStudyPathForCopy } from "@/lib/angels";
import { trackEvent } from "@/lib/analytics";

export function AngelStudyPath() {
  const [copied, setCopied] = useState(false);

  async function copyPath() {
    try {
      await navigator.clipboard.writeText(formatAngelStudyPathForCopy());
      trackEvent("angels_study_path_copy", { page_path: "/angels" });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader eyebrow="Study path" title="A Simple Study Path" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {angelsStudyPath.map((step, index) => (
          <article key={step} className="card-parchment p-5 text-sm leading-7 text-muted">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Step {index + 1}</p>
            <p className="mt-3">{step}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyPath} className="btn liturgical-button focus-ring justify-center">
          {copied ? "Study path copied" : "Copy Study Path"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Study Path
        </button>
      </div>
    </section>
  );
}
