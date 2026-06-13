"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { getCatechismReadingPlan } from "@/lib/catechism";

function formatReadingPlanForCopy() {
  return getCatechismReadingPlan()
    .map((week) => [week.week, week.title, ...week.sections.map((section) => `- ${section}`), `Reflect: ${week.prompt}`].join("\n"))
    .join("\n\n");
}

export function CatechismReadingPlan() {
  const weeks = getCatechismReadingPlan();
  const [copied, setCopied] = useState(false);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(formatReadingPlanForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Reading plan"
        title="A Simple Catechism Reading Plan"
        summary="This plan is a starting point, not a complete course."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {weeks.map((week) => (
          <article key={week.week} className="card-parchment p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{week.week}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{week.title}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
              {week.sections.map((section) => (
                <li key={section} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                  {section}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-muted">Reflect: {week.prompt}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring justify-center">
          {copied ? "Reading plan copied" : "Copy Reading Plan"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Reading Plan
        </button>
      </div>
    </section>
  );
}
