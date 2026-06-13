"use client";

import { useState } from "react";
import { formatQuickExamenForCopy, getQuickExamenSteps } from "@/lib/dailyExamen";
import { trackEvent } from "@/lib/analytics";
import { ExamenCardGrid, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function QuickExamen() {
  const steps = getQuickExamenSteps();
  const [copied, setCopied] = useState(false);

  async function copyQuickExamen() {
    try {
      await navigator.clipboard.writeText(formatQuickExamenForCopy());
      trackEvent("quick_examen_copy", {
        category: "quick-examen",
        item_slug: "quick-examen",
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
      id="quick-examen"
      eyebrow="5-minute version"
      title="A 5-Minute Daily Examen"
      summary="For tired nights when you need something simple."
    >
      <div className="card-parchment p-6 sm:p-8">
        <ExamenCardGrid columns="md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.id} className="rounded-[1.5rem] border border-stone bg-ivory/85 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Step {index + 1}</p>
              <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.guide}</p>
            </article>
          ))}
        </ExamenCardGrid>
        <div className="mt-6">
          <button type="button" onClick={copyQuickExamen} className="btn btn-primary focus-ring justify-center">
            {copied ? "5-minute Examen copied" : "Copy 5-Minute Examen"}
          </button>
        </div>
      </div>
    </ExamenSection>
  );
}

