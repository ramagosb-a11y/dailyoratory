"use client";

import { useEffect, useMemo, useState } from "react";
import { commonIndulgencedWorks } from "@/data/commonIndulgencedWorks";
import { buildIndulgencePlanText, validateIndulgencePlan } from "@/lib/indulgences";
import type { IndulgenceOfferingTarget, IndulgencePlan, IndulgencedWorkSlug } from "@/types/indulgences";

const STORAGE_KEY = "daily-oratory-indulgence-plan";

const emptyPlan: IndulgencePlan = {
  selectedWork: "rosary",
  intentionType: "my-own-soul",
  intentionName: "",
  confessionPlannedOrCompleted: false,
  communionPlannedOrCompleted: false,
  prayedForPopeIntentions: false,
  prayedForDetachment: false,
  workCompletedOrPlanned: false,
  createdAt: new Date().toISOString(),
};

const intentionOptions: { value: IndulgenceOfferingTarget; label: string }[] = [
  { value: "my-own-soul", label: "My own soul" },
  { value: "deceased-loved-one", label: "A deceased loved one" },
  { value: "holy-souls-in-purgatory", label: "The holy souls in purgatory" },
  { value: "soul-most-in-need", label: "The soul most in need of mercy" },
];

export function IndulgenceBuilder() {
  const [plan, setPlan] = useState<IndulgencePlan>(emptyPlan);
  const [copied, setCopied] = useState(false);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<IndulgencePlan>;
        setPlan((current) => ({ ...current, ...parsed }));
      }
      setStorageReady(true);
    } catch {
      setStorageReady(false);
    }
  }, []);

  useEffect(() => {
    if (!storageReady) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    } catch {
      // Keep the builder functional even if storage is unavailable.
    }
  }, [plan, storageReady]);

  const validation = validateIndulgencePlan(plan);
  const planText = useMemo(() => buildIndulgencePlanText(plan), [plan]);

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
    setPlan({ ...emptyPlan, createdAt: new Date().toISOString() });
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  return (
    <section id="indulgence-builder" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Interactive tool</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Build Today&apos;s Indulgence Plan
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        A local-only tool to help you choose a work, name an intention, and remember the usual conditions.
      </p>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">What indulgenced work will you complete today?</span>
              <select
                value={plan.selectedWork}
                onChange={(event) => setPlan((current) => ({ ...current, selectedWork: event.target.value as IndulgencedWorkSlug }))}
                className="form-field focus-ring"
                aria-label="What indulgenced work will you complete today?"
              >
                {commonIndulgencedWorks.map((work) => (
                  <option key={work.id} value={work.slug}>
                    {work.title}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">For whom do you intend to offer it?</span>
              <select
                value={plan.intentionType}
                onChange={(event) => setPlan((current) => ({ ...current, intentionType: event.target.value as IndulgenceOfferingTarget }))}
                className="form-field focus-ring"
                aria-label="For whom do you intend to offer it?"
              >
                {intentionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Name or intention (optional)</span>
              <input
                type="text"
                value={plan.intentionName}
                onChange={(event) => setPlan((current) => ({ ...current, intentionName: event.target.value }))}
                className="form-field focus-ring"
                aria-label="Name or intention"
                placeholder="Optional"
              />
            </label>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-semibold text-navy">Usual conditions checklist</legend>
              <ChecklistToggle
                label="Confession completed or planned"
                checked={plan.confessionPlannedOrCompleted}
                onChange={(checked) => setPlan((current) => ({ ...current, confessionPlannedOrCompleted: checked }))}
              />
              <ChecklistToggle
                label="Holy Communion completed or planned"
                checked={plan.communionPlannedOrCompleted}
                onChange={(checked) => setPlan((current) => ({ ...current, communionPlannedOrCompleted: checked }))}
              />
              <ChecklistToggle
                label="Prayer for the Holy Father's intentions"
                checked={plan.prayedForPopeIntentions}
                onChange={(checked) => setPlan((current) => ({ ...current, prayedForPopeIntentions: checked }))}
              />
              <ChecklistToggle
                label="Prayer for detachment from sin"
                checked={plan.prayedForDetachment}
                onChange={(checked) => setPlan((current) => ({ ...current, prayedForDetachment: checked }))}
              />
              <ChecklistToggle
                label="Indulgenced work completed or planned"
                checked={plan.workCompletedOrPlanned}
                onChange={(checked) => setPlan((current) => ({ ...current, workCompletedOrPlanned: checked }))}
              />
            </fieldset>

            <div className="rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
              Privacy note: stored only in this browser if saved.
            </div>
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Your plan</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">Your Indulgence Plan for Today</h3>
          {!validation.valid ? (
            <ul className="mt-4 space-y-2 text-sm leading-7 text-burgundy">
              {validation.errors.map((error) => (
                <li key={error}>• {error}</li>
              ))}
            </ul>
          ) : null}
          <pre className="mt-5 overflow-x-auto whitespace-pre-wrap rounded-md border border-stone bg-ivory p-4 text-sm leading-7 text-muted">
            {planText}
          </pre>
          <p className="mt-4 text-xs leading-6 text-muted">
            This tool helps you prepare. It does not determine or guarantee whether a plenary indulgence
            has been gained.
          </p>
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

function ChecklistToggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-stone text-burgundy focus:ring-gold"
      />
      <span>{label}</span>
    </label>
  );
}
