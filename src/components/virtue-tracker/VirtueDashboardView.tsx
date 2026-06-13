"use client";

import Link from "next/link";
import { getRecentCheckIns, getViceLabel, getVirtueLabel, summarizeVirtuePatterns } from "@/lib/virtueTracker";
import { deleteVirtueCheckIn, useVirtueTrackerStore } from "@/lib/virtueTrackerStorage";

export function VirtueDashboardView() {
  const store = useVirtueTrackerStore();
  const recent = getRecentCheckIns(store.checkIns, 5);
  const patterns = summarizeVirtuePatterns(store.checkIns);

  if (store.checkIns.length === 0) {
    return (
      <div className="dashboard-card p-6 text-center">
        <p className="text-xs font-bold uppercase text-burgundy">No check-ins yet</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Begin with one honest moment.</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
          The tracker saves privately on this device. Start with grace, name one struggle if needed, and choose one next step.
        </p>
        <Link href="/virtue-tracker/check-in" className="btn btn-primary focus-ring mt-6">
          Start check-in
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_20rem] lg:items-start">
      <section className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Fact label="Private check-ins" value={String(patterns.totalCheckIns)} />
          <Fact label="For confession prep" value={String(patterns.confessionItems)} />
          <Fact label="Review rhythm" value={store.settings.reviewCadence} />
        </div>

        <div className="dashboard-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-burgundy">Recent reflections</p>
              <h2 className="font-display mt-2 text-4xl font-semibold text-navy">What you have noticed lately</h2>
            </div>
            <Link href="/virtue-tracker/check-in" className="btn btn-primary focus-ring">
              New check-in
            </Link>
          </div>

          <div className="mt-6 grid gap-4">
            {recent.map((checkIn) => (
              <article key={checkIn.id} className="card p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase text-burgundy">{checkIn.date}</p>
                    <h3 className="mt-2 text-sm font-bold leading-6 text-navy">
                      {checkIn.virtueFocus.map(getVirtueLabel).join(", ") || "Open reflection"}
                    </h3>
                  </div>
                  <button type="button" onClick={() => deleteVirtueCheckIn(checkIn.id)} className="btn btn-secondary focus-ring min-h-10 px-3 py-2 text-xs">
                    Delete
                  </button>
                </div>
                {checkIn.viceStruggles.length ? (
                  <p className="mt-3 text-sm leading-7 text-muted">Struggles noticed: {checkIn.viceStruggles.map(getViceLabel).join(", ")}</p>
                ) : null}
                {checkIn.graceReceived ? <p className="mt-2 text-sm leading-7 text-navy">{checkIn.graceReceived}</p> : null}
                {checkIn.nextStep ? <p className="mt-2 text-sm leading-7 text-muted">Next step: {checkIn.nextStep}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Private actions</p>
        <div className="mt-4 grid gap-3">
          <Link href="/virtue-tracker/patterns" className="btn btn-secondary focus-ring">
            View patterns
          </Link>
          <Link href="/virtue-tracker/confession-prep" className="btn btn-secondary focus-ring">
            Confession prep
          </Link>
          <Link href="/virtue-tracker/settings" className="btn btn-secondary focus-ring">
            Export/delete data
          </Link>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted">No account, no public sharing, no streaks, no holiness score.</p>
      </aside>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">{label}</p>
      <p className="font-display mt-2 text-4xl font-semibold capitalize text-navy">{value}</p>
    </div>
  );
}
