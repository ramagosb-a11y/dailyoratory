"use client";

import { useState } from "react";
import { dailyExamenGuideSubtitle } from "@/data/dailyExamenPage";
import { getDailyExamenSteps, formatDailyExamenGuideForCopy } from "@/lib/dailyExamen";
import { trackEvent } from "@/lib/analytics";
import { ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function DailyExamenGuide() {
  const steps = getDailyExamenSteps();
  const [copied, setCopied] = useState(false);

  async function copyGuide() {
    try {
      await navigator.clipboard.writeText(formatDailyExamenGuideForCopy());
      trackEvent("daily_examen_guide_copy", {
        category: "guide",
        item_slug: "daily-examen-guide",
        source: "/daily-examen",
        destination: "clipboard",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <ExamenSection
      id="daily-examen-guide"
      eyebrow="Step-by-step guide"
      title="Pray the Daily Examen"
      summary={dailyExamenGuideSubtitle}
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-gold/30 bg-ivory/95 shadow-soft">
        <ol className="divide-y divide-stone/70">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="grid gap-5 px-5 py-6 sm:px-6 sm:py-7 lg:grid-cols-[3.5rem_1fr] lg:gap-6 lg:px-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-parchment text-lg font-semibold text-navy">
                {index + 1}
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-8 text-muted sm:text-base">{step.guide}</p>
                <blockquote className="mt-5 rounded-2xl border border-gold/35 bg-parchment px-4 py-4 text-sm font-semibold leading-7 text-navy sm:px-5">
                  {step.prayer}
                </blockquote>
              </div>
            </li>
          ))}
        </ol>

        <div className="border-t border-stone/70 bg-parchment/75 px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyGuide} className="btn btn-primary focus-ring justify-center">
              {copied ? "Guide copied" : "Copy Examen Guide"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Examen Guide
            </button>
          </div>
        </div>
      </div>
    </ExamenSection>
  );
}

