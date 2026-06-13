"use client";

import { useState } from "react";

const weeklyRhythm = [
  "Sunday: Mass and reflection",
  "Monday: Doctrine study",
  "Tuesday: Virtue practice",
  "Wednesday: Scripture prayer",
  "Thursday: Eucharistic Adoration or spiritual reading",
  "Friday: Examination of conscience or work of mercy",
  "Saturday: Rosary, saint study, or family faith practice",
];

export function WeeklyFormationPlan() {
  const [copied, setCopied] = useState(false);

  async function copyWeeklyRhythm() {
    try {
      await navigator.clipboard.writeText(["A Simple Weekly Formation Rhythm", "", ...weeklyRhythm].join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Weekly rhythm</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        A simple weekly formation rhythm
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {weeklyRhythm.map((item) => (
          <article key={item} className="rounded-md border border-stone/70 bg-parchment px-4 py-4">
            <p className="text-sm leading-7 text-muted">{item}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        This is only a suggested rhythm. Start small and adapt it to your state in life.
      </p>
      <button type="button" onClick={copyWeeklyRhythm} className="btn btn-secondary focus-ring mt-5 justify-center">
        {copied ? "Weekly rhythm copied" : "Copy Weekly Rhythm"}
      </button>
    </section>
  );
}
