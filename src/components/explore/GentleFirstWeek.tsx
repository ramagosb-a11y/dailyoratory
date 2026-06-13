"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { firstWeekPlan } from "@/data/explorePage";
import { formatFirstWeekPlanForCopy } from "@/lib/explore";

export function GentleFirstWeek() {
  const [copied, setCopied] = useState(false);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(formatFirstWeekPlanForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader eyebrow="First week" title="A Gentle First Week" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {firstWeekPlan.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring justify-center">
          {copied ? "First week plan copied" : "Copy First Week Plan"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Plan
        </button>
      </div>
    </section>
  );
}
