"use client";

import { useMemo } from "react";
import { getTodaysOAntiphon } from "@/data/oAntiphons";

export function TodayOAntiphonCard() {
  const today = useMemo(() => getTodaysOAntiphon(new Date()), []);

  return (
    <section id="today-o-antiphon" className="card-parchment scroll-mt-28 p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Today&apos;s O Antiphon</p>
      {today ? (
        <>
          <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-semibold text-navy">{today.title}</h2>
              <p className="daily-readable-muted mt-2 text-base italic leading-8 text-muted">{today.latinTitle}</p>
            </div>
            <span className="season-pill bg-ivory px-3 py-2 text-navy">
              December {today.dateDay}
            </span>
          </div>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">{today.theme}</p>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">{today.reflection}</p>
          <div className="mt-5 rounded-2xl border border-stone bg-ivory/80 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Prayer</p>
            <p className="daily-prayer-readable mt-3 text-base leading-8 text-navy">{today.prayer}</p>
          </div>
          <p className="daily-card-readable mt-5 text-base leading-8 text-muted">
            <span className="font-semibold text-navy">Heart question:</span> {today.heartQuestion}
          </p>
        </>
      ) : (
        <>
          <h2 className="font-display mt-4 text-4xl font-semibold text-navy">Outside the traditional dates</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The O Antiphons are traditionally prayed from December 17 through December 23. You can still
            explore each antiphon below and use them to prepare your heart for Christmas.
          </p>
        </>
      )}
    </section>
  );
}
