"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { catholicWeeklyRhythms } from "@/data/catholicLifeRoadmap";

export function WeeklyCatholicRhythm() {
  return (
    <section id="weekly-rhythm" className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">A simple weekly Catholic rhythm</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">A Simple Weekly Catholic Rhythm</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {catholicWeeklyRhythms.map((rhythm) => (
          <article key={rhythm.id} className="rounded-[1.5rem] border border-stone/70 bg-white/70 p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{rhythm.frequency}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {rhythm.practices.map((practice) => (
                <li key={practice} className="flex gap-3">
                  <span aria-hidden="true" className="text-burgundy">
                    •
                  </span>
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <TrackedLink
          href="/rule-of-life"
          className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
          eventName="catholic_life_weekly_rhythm_click"
          eventParams={{ destination: "/rule-of-life" }}
        >
          Build a Spiritual Plan
        </TrackedLink>
      </div>
    </section>
  );
}
