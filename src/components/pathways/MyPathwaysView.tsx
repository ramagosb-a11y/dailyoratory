"use client";

import Link from "next/link";
import { spiritualGrowthPathways } from "@/data/pathways";
import { clearAllPathwayProgress, resetPathwayProgress, usePathwayProgressStore } from "@/lib/pathwayProgressStorage";
import { getPathwayHref, getPathwayProgressPercent, getPathwayStepHref } from "@/lib/pathways";

export function MyPathwaysView() {
  const store = usePathwayProgressStore();
  const entries = Object.values(store.pathways)
    .map((progress) => {
      const pathway = spiritualGrowthPathways.find((item) => item.slug === progress.slug);
      return pathway ? { pathway, progress } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (entries.length === 0) {
    return (
      <div className="dashboard-card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">No saved pathways yet</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">Choose a gentle place to begin.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Start a pathway and Daily Oratory will remember your progress on this device only. No account is required.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/pathways/start" className="btn btn-primary focus-ring">
            Start a pathway
          </Link>
          <Link href="/pathways/recommended" className="btn btn-secondary focus-ring">
            View recommendations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-muted">Progress is stored locally on this device.</p>
        <button type="button" onClick={clearAllPathwayProgress} className="btn btn-secondary focus-ring">
          Clear local progress
        </button>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {entries.map(({ pathway, progress }) => {
          const percent = getPathwayProgressPercent(pathway, progress.completedStepSlugs);
          const currentStep =
            pathway.modules.find((step) => step.slug === progress.currentStepSlug) ??
            pathway.modules.find((step) => !progress.completedStepSlugs.includes(step.slug)) ??
            pathway.modules[0];

          return (
            <article key={pathway.slug} className="dashboard-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-burgundy">{pathway.estimatedDuration}</p>
                  <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">
                    <Link href={getPathwayHref(pathway)} className="focus-ring rounded-sm hover:text-burgundy">
                      {pathway.title}
                    </Link>
                  </h2>
                </div>
                <span className="season-pill bg-ivory">{percent}%</span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-stone-soft" aria-hidden="true">
                <div className="h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{pathway.spiritualGoal}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                {currentStep ? (
                  <Link href={getPathwayStepHref(pathway, currentStep)} className="btn btn-primary focus-ring">
                    Continue
                  </Link>
                ) : null}
                <Link href={getPathwayHref(pathway)} className="btn btn-secondary focus-ring">
                  View pathway
                </Link>
                <button type="button" onClick={() => resetPathwayProgress(pathway.slug)} className="btn btn-secondary focus-ring">
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
