"use client";

import Link from "next/link";
import { getRecentCheckIns, getViceLabel, getVirtueLabel } from "@/lib/virtueTracker";
import { useVirtueTrackerStore } from "@/lib/virtueTrackerStorage";

export function VirtueConfessionPrepView() {
  const store = useVirtueTrackerStore();
  const confessionItems = getRecentCheckIns(store.checkIns.filter((checkIn) => checkIn.bringToConfession), 20);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <aside className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Confession prep</p>
        <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">Bring patterns simply and honestly.</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          This page gathers only check-ins you marked. It does not decide mortal or venial sin. If unsure, ask the priest.
        </p>
        <Link href="/confession/examination" className="btn btn-primary focus-ring mt-5">
          Open guided examination
        </Link>
      </aside>

      <section className="dashboard-card p-5">
        <h1 className="font-display text-4xl font-semibold text-navy">Marked for confession preparation</h1>
        {confessionItems.length ? (
          <div className="mt-6 grid gap-4">
            {confessionItems.map((checkIn) => (
              <article key={checkIn.id} className="card p-4">
                <p className="text-xs font-bold uppercase text-burgundy">{checkIn.date}</p>
                <h2 className="mt-2 text-sm font-bold leading-6 text-navy">
                  {checkIn.viceStruggles.map(getViceLabel).join(", ") || "Pattern to bring simply"}
                </h2>
                {checkIn.confessionPrepNote ? <p className="mt-3 text-sm leading-7 text-navy">{checkIn.confessionPrepNote}</p> : null}
                {checkIn.struggleNotes ? <p className="mt-2 text-sm leading-7 text-muted">{checkIn.struggleNotes}</p> : null}
                {checkIn.virtueFocus.length ? (
                  <p className="mt-2 text-sm leading-7 text-muted">Contrary virtue focus: {checkIn.virtueFocus.map(getVirtueLabel).join(", ")}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 card-parchment p-5">
            <p className="text-sm leading-7 text-muted">
              Nothing is marked yet. You can still make a good confession and ask the priest for help if you are unsure where to begin.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
