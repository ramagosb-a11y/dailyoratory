"use client";

import Link from "next/link";
import {
  resetPathwayProgress,
  setCurrentPathwayStep,
  startPathway,
  togglePathwayStep,
  usePathwayProgressStore,
} from "@/lib/pathwayProgressStorage";
import { getPathwayProgressPercent } from "@/lib/pathways";
import type { SpiritualGrowthPathwayRecord, PathwayStep } from "@/types/pathways";

export function PathwayStartControls({ pathway }: { pathway: SpiritualGrowthPathwayRecord }) {
  const store = usePathwayProgressStore();
  const progress = store.pathways[pathway.slug];
  const percent = getPathwayProgressPercent(pathway, progress?.completedStepSlugs ?? []);
  const firstStep = pathway.modules[0];
  const currentStep = pathway.modules.find((step) => step.slug === progress?.currentStepSlug) ?? firstStep;

  return (
    <div className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">Local progress</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-soft" aria-hidden="true">
        <div className="h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">
        {progress ? `${percent}% complete on this device.` : "No account required. Progress is saved only on this device."}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => startPathway(pathway.slug, firstStep?.slug)}
          className="btn btn-primary focus-ring"
        >
          {progress ? "Keep this pathway" : "Start pathway"}
        </button>
        {currentStep ? (
          <Link href={`/pathways/${pathway.slug}/steps/${currentStep.slug}`} className="btn btn-secondary focus-ring">
            {progress ? "Continue" : "Begin step one"}
          </Link>
        ) : null}
        {progress ? (
          <button type="button" onClick={() => resetPathwayProgress(pathway.slug)} className="btn btn-secondary focus-ring">
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function PathwayStepControls({
  pathway,
  step,
  nextStep,
}: {
  pathway: SpiritualGrowthPathwayRecord;
  step: PathwayStep;
  nextStep?: PathwayStep;
}) {
  const store = usePathwayProgressStore();
  const progress = store.pathways[pathway.slug];
  const completed = progress?.completedStepSlugs.includes(step.slug) ?? false;

  function handleStart() {
    setCurrentPathwayStep(pathway.slug, step.slug);
  }

  function handleToggle() {
    togglePathwayStep(pathway.slug, step.slug, nextStep?.slug ?? step.slug);
  }

  return (
    <div className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">Step progress</p>
      <p className="mt-2 text-sm leading-7 text-muted">
        Use this only as a quiet bookmark for your own formation. It is not a measure of holiness.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={handleStart} className="btn btn-secondary focus-ring">
          Save as current step
        </button>
        <button type="button" onClick={handleToggle} className="btn btn-primary focus-ring">
          {completed ? "Mark incomplete" : "Mark complete"}
        </button>
        {nextStep ? (
          <Link href={`/pathways/${pathway.slug}/steps/${nextStep.slug}`} className="btn btn-secondary focus-ring">
            Next step
          </Link>
        ) : (
          <Link href={`/pathways/${pathway.slug}`} className="btn btn-secondary focus-ring">
            Return to pathway
          </Link>
        )}
      </div>
    </div>
  );
}
