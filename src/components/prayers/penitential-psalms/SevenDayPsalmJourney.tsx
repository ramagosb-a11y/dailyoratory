"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { penitentialPsalmJourney } from "@/data/sevenPenitentialPsalms";

function buildPlanText() {
  return [
    "Seven-Day Penitential Psalm Journey",
    "",
    ...penitentialPsalmJourney.map(
      (day) => `Day ${day.dayNumber}: Psalm ${day.psalmNumber} - ${day.title}\nPractice: ${day.practice}`,
    ),
  ].join("\n\n");
}

export function SevenDayPsalmJourney() {
  const [copied, setCopied] = useState(false);
  const planText = buildPlanText();

  async function handleCopy() {
    await navigator.clipboard.writeText(planText);
    trackEvent("penitential_psalms_copy_plan", { section: "seven-day-journey" });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  function handlePrint() {
    trackEvent("penitential_psalms_print_plan", { section: "seven-day-journey" });
    window.print();
  }

  return (
    <section id="seven-day-journey" className="scroll-mt-28">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Seven-day practice</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Seven-Day Penitential Psalm Journey</h2>
      <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
        Pray one Penitential Psalm each day for a week. This can be used during Lent, before Confession, after
        a serious fall, during a retreat, or whenever you want to return to God with humility and hope.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {penitentialPsalmJourney.map((day) => (
          <article key={day.id} className="card-parchment p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Day {day.dayNumber}</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">
              Psalm {day.psalmNumber} — {day.title}
            </h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{day.practice}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={handleCopy} className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          {copied ? "Copied" : "Copy Seven-Day Plan"}
        </button>
        <button type="button" onClick={handlePrint} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Print Seven-Day Plan
        </button>
      </div>
    </section>
  );
}
