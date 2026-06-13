"use client";

import Link from "next/link";
import { sacramentCompanions } from "@/data/sacramentCompanion";
import { ParishReminder } from "@/components/sacraments/ParishReminder";
import {
  clearAllSacramentPreparation,
  resetSacramentPreparation,
  useSacramentPreparationStore,
} from "@/lib/sacramentPreparationStorage";
import { getSacramentProgressPercent } from "@/lib/sacraments";

export function MySacramentPreparationView() {
  const store = useSacramentPreparationStore();
  const entries = Object.values(store.preparations)
    .map((progress) => {
      const companion = sacramentCompanions.find((item) => item.slug === progress.companionSlug);
      return companion ? { companion, progress } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (entries.length === 0) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="dashboard-card p-6">
          <p className="text-xs font-bold uppercase text-burgundy">No saved preparation yet</p>
          <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">Begin with your parish in view.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Choose a sacrament companion and Daily Oratory will remember visible checklist progress on this device only.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/sacraments/prepare" className="btn btn-primary focus-ring">
              Start preparation
            </Link>
            <Link href="/sacraments/companion" className="btn btn-secondary focus-ring">
              Browse companions
            </Link>
          </div>
        </div>
        <ParishReminder />
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-muted">Progress is stored locally on this device.</p>
        <button type="button" onClick={clearAllSacramentPreparation} className="btn btn-secondary focus-ring">
          Clear local progress
        </button>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {entries.map(({ companion, progress }) => {
          const percent = getSacramentProgressPercent(
            companion,
            progress.completedStepIds,
            progress.completedChecklistItemIds,
          );

          return (
            <article key={companion.slug} className="dashboard-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-burgundy">{companion.sacrament}</p>
                  <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">
                    <Link href={companion.route} className="focus-ring rounded-sm hover:text-burgundy">
                      {companion.title}
                    </Link>
                  </h2>
                </div>
                <span className="season-pill bg-ivory">{percent}%</span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-stone-soft" aria-hidden="true">
                <div className="h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{companion.description}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href={companion.route} className="btn btn-primary focus-ring">
                  Continue
                </Link>
                <Link href="/sacraments/print" className="btn btn-secondary focus-ring">
                  Print/export
                </Link>
                <button type="button" onClick={() => resetSacramentPreparation(companion.slug)} className="btn btn-secondary focus-ring">
                  Reset
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
