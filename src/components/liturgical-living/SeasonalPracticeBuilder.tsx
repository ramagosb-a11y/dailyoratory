"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { seasonalPracticeOptions } from "@/data/liturgicalSeasonPractices";
import { buildSeasonalPracticePlan, formatSeasonalPracticePlanForCopy } from "@/lib/liturgicalSeasonsGuide";
import type { SeasonalPracticePlan, SeasonGuideSlug } from "@/types/liturgicalSeasonsGuide";

const defaultPlan: SeasonalPracticePlan = {
  season: "advent",
  timeAvailable: seasonalPracticeOptions.timeAvailable[1],
  householdType: seasonalPracticeOptions.householdType[0],
  prayerFocus: seasonalPracticeOptions.prayerFocus[0],
  sacramentalFocus: seasonalPracticeOptions.sacramentalFocus[0],
  workOfMercy: seasonalPracticeOptions.workOfMercy[0],
  homePractice: seasonalPracticeOptions.homePractice[0],
  createdAt: new Date().toISOString(),
};

export function SeasonalPracticeBuilder() {
  const [plan, setPlan] = useState<SeasonalPracticePlan>(defaultPlan);
  const [copied, setCopied] = useState(false);
  const builtPlan = useMemo(() => buildSeasonalPracticePlan(plan), [plan]);
  const planText = useMemo(() => formatSeasonalPracticePlanForCopy(builtPlan), [builtPlan]);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(planText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearPlan() {
    setPlan({ ...defaultPlan, createdAt: new Date().toISOString() });
  }

  return (
    <section id="seasonal-practice-builder" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Interactive tool</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Build a Seasonal Practice
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Choose a season and a few concrete focuses, then generate a simple practice plan for home,
        parish, or personal prayer. This tool uses local state only and does not send data to a server.
      </p>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Season">
              <select
                value={plan.season}
                onChange={(event) => setPlan((current) => ({ ...current, season: event.target.value as SeasonGuideSlug }))}
                className="form-field focus-ring"
              >
                {seasonalPracticeOptions.seasons.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Time available">
              <select
                value={plan.timeAvailable}
                onChange={(event) => setPlan((current) => ({ ...current, timeAvailable: event.target.value }))}
                className="form-field focus-ring"
              >
                {seasonalPracticeOptions.timeAvailable.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Individual or family">
              <select
                value={plan.householdType}
                onChange={(event) => setPlan((current) => ({ ...current, householdType: event.target.value }))}
                className="form-field focus-ring"
              >
                {seasonalPracticeOptions.householdType.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Prayer focus">
              <select
                value={plan.prayerFocus}
                onChange={(event) => setPlan((current) => ({ ...current, prayerFocus: event.target.value }))}
                className="form-field focus-ring"
              >
                {seasonalPracticeOptions.prayerFocus.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Sacramental focus">
              <select
                value={plan.sacramentalFocus}
                onChange={(event) => setPlan((current) => ({ ...current, sacramentalFocus: event.target.value }))}
                className="form-field focus-ring"
              >
                {seasonalPracticeOptions.sacramentalFocus.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Work of mercy">
              <select
                value={plan.workOfMercy}
                onChange={(event) => setPlan((current) => ({ ...current, workOfMercy: event.target.value }))}
                className="form-field focus-ring"
              >
                {seasonalPracticeOptions.workOfMercy.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field label="Home practice">
                <select
                  value={plan.homePractice}
                  onChange={(event) => setPlan((current) => ({ ...current, homePractice: event.target.value }))}
                  className="form-field focus-ring"
                >
                  {seasonalPracticeOptions.homePractice.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </div>
          <p className="mt-5 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy: this builder uses local state only. Nothing is sent to the server.
          </p>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Your seasonal plan</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">Your Seasonal Practice Plan</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{builtPlan.introduction}</p>
          <ul className="mt-5 space-y-3">
            {builtPlan.suggestedSteps.map((step, index) => (
              <li key={`${step}-${index}`} className="card-parchment px-4 py-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">{index + 1}.</span> {step}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-muted">{builtPlan.encouragement}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={copyPlan} className="btn btn-primary focus-ring justify-center">
              {copied ? "Plan copied." : "Copy Plan"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Plan
            </button>
            <button type="button" onClick={clearPlan} className="btn btn-secondary focus-ring justify-center">
              Clear Plan
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-navy">{label}</span>
      {children}
    </label>
  );
}
