"use client";

import Link from "next/link";
import {
  resetSacramentPreparation,
  startSacramentPreparation,
  toggleSacramentChecklistItem,
  toggleSacramentStep,
  useSacramentPreparationStore,
} from "@/lib/sacramentPreparationStorage";
import { getSacramentProgressPercent } from "@/lib/sacraments";
import type { SacramentCompanionRecord } from "@/types/sacramentCompanion";

export function SacramentPreparationControls({ companion }: { companion: SacramentCompanionRecord }) {
  const store = useSacramentPreparationStore();
  const progress = store.preparations[companion.slug];
  const percent = getSacramentProgressPercent(
    companion,
    progress?.completedStepIds ?? [],
    progress?.completedChecklistItemIds ?? [],
  );

  return (
    <div className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">Local preparation</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-soft" aria-hidden="true">
        <div className="h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">
        {progress ? `${percent}% of visible steps and checklist items marked on this device.` : "No account required. Progress saves only on this device."}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => startSacramentPreparation(companion.slug, companion.preparationSteps[0]?.id)}
          className="btn btn-primary focus-ring"
        >
          {progress ? "Keep preparing" : "Start preparation"}
        </button>
        <Link href="/sacraments/my-preparation" className="btn btn-secondary focus-ring">
          My preparation
        </Link>
        {progress ? (
          <button type="button" onClick={() => resetSacramentPreparation(companion.slug)} className="btn btn-secondary focus-ring">
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function SacramentChecklistControls({ companion }: { companion: SacramentCompanionRecord }) {
  const store = useSacramentPreparationStore();
  const progress = store.preparations[companion.slug];
  const completedSteps = new Set(progress?.completedStepIds ?? []);
  const completedChecklist = new Set(progress?.completedChecklistItemIds ?? []);

  return (
    <div className="grid gap-6">
      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Preparation path</p>
        <div className="mt-4 grid gap-3">
          {companion.preparationSteps.map((step, index) => {
            const nextStep = companion.preparationSteps[index + 1];
            const checked = completedSteps.has(step.id);

            return (
              <label key={step.id} className="card flex gap-3 p-4">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleSacramentStep(companion.slug, step.id, nextStep?.id)}
                  className="mt-1 h-4 w-4 accent-gold"
                />
                <span>
                  <span className="block text-sm font-bold text-navy">{step.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{step.description}</span>
                  <span className="mt-1 block text-xs font-bold uppercase text-burgundy">{step.timeframe}</span>
                </span>
              </label>
            );
          })}
        </div>
      </section>

      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Role-based checklist</p>
        <div className="mt-4 grid gap-3">
          {companion.roleChecklists.map((item) => (
            <label key={item.id} className="card flex gap-3 p-4">
              <input
                type="checkbox"
                checked={completedChecklist.has(item.id)}
                onChange={() => toggleSacramentChecklistItem(companion.slug, item.id)}
                className="mt-1 h-4 w-4 accent-gold"
              />
              <span>
                <span className="block text-sm font-bold text-navy">{item.title}</span>
                <span className="mt-1 block text-sm leading-6 text-muted">{item.description}</span>
                <span className="mt-1 block text-xs font-bold uppercase text-burgundy">{item.role} / {item.category}</span>
              </span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
