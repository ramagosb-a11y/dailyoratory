"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatPapalReadingMethodForCopy, getPapalReadingMethod } from "@/lib/pope";
import { trackEvent } from "@/lib/analytics";

export function ReadPapalDocumentsPrayerfully() {
  const [copied, setCopied] = useState(false);
  const steps = getPapalReadingMethod();

  async function copyMethod() {
    try {
      await navigator.clipboard.writeText(formatPapalReadingMethodForCopy());
      setCopied(true);
      trackEvent("papal_reading_method_copy", { page_path: "/pope", section: "papal-reading-method" });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader eyebrow="Reading method" title="How to Read a Papal Document" />
      <div className="card-parchment mt-7 p-6">
        <ol className="space-y-3 text-sm leading-7 text-muted">
          {steps.map((step, index) => (
            <li key={step} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
              <span className="font-semibold text-navy">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyMethod} className="btn liturgical-button focus-ring justify-center">
          {copied ? "Reading method copied" : "Copy Reading Method"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Reading Method
        </button>
      </div>
    </section>
  );
}
