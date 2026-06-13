"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { formatTraditionStudyPathForCopy, getTraditionStudyPath } from "@/lib/tradition";
import { trackEvent } from "@/lib/analytics";

export function TraditionStudyPath() {
  const [copied, setCopied] = useState(false);
  const steps = getTraditionStudyPath();

  async function copyStudyPath() {
    try {
      await navigator.clipboard.writeText(formatTraditionStudyPathForCopy());
      setCopied(true);
      trackEvent("tradition_study_path_copy", { page_path: "/tradition", section: "tradition-study-path" });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Study path"
        title="A Simple Study Path"
        summary="A beginner-friendly way to connect Sacred Tradition with Scripture, worship, sacraments, and the Church's memory."
      />
      <div className="mt-7 grid gap-4">
        {steps.map((step, index) => (
          <Link key={step.href} href={step.href} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{step.title}</h3>
          </Link>
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
