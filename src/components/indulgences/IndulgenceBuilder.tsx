"use client";

import { useEffect, useRef, useState } from "react";
import { commonIndulgencedWorks } from "@/data/commonIndulgencedWorks";
import { buildIndulgencePlanText, validateIndulgencePlan, isWithinJubilee2025, isWithinYearOfSaintFrancis2026 } from "@/lib/indulgences";
import { parseStoredIndulgencePlan } from "./planStorage";
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
  const [copyError, setCopyError] = useState(false);
  const [storageReady, setStorageReady] = useState(false);
  const changedByUser = useRef(false);
  const [storageMessage, setStorageMessage] = useState("");
  const availableWorks = commonIndulgencedWorks.filter((work) =>
    (work.slug !== "jubilee-pilgrimage" || isWithinJubilee2025()) &&
    (work.slug !== "saint-francis-pilgrimage" || isWithinYearOfSaintFrancis2026()),
  );

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = parseStoredIndulgencePlan(raw, [...commonIndulgencedWorks.map((work) => work.slug), "other"]);
          if (parsed) {
            const expired = (parsed.selectedWork === "jubilee-pilgrimage" && !isWithinJubilee2025()) ||
              (parsed.selectedWork === "saint-francis-pilgrimage" && !isWithinYearOfSaintFrancis2026());
            setPlan(expired ? { ...parsed, selectedWork: "other" } : parsed);
            if (expired) setStorageMessage("The saved special-year work has ended. Choose a currently available work; your other preparation notes are retained.");
          } else setStorageMessage("The saved plan could not be read. You can begin a new plan below.");
        }
        setStorageReady(true);
      } catch {
        setStorageReady(false);
        setStorageMessage("Browser storage is unavailable. Your plan can still be used here, but changes will not be saved.");
      }
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!storageReady || !changedByUser.current) return;
    let cancelled = false;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    } catch {
      queueMicrotask(() => {
        if (!cancelled) setStorageMessage("Your changes could not be saved in this browser. You can still use or copy the plan.");
      });
    }
    return () => { cancelled = true; };
  }, [plan, storageReady]);

  const validation = validateIndulgencePlan(plan);
  const planText = buildIndulgencePlanText(plan);

  async function copyPlan() {
    try {
      setCopyError(false);
      await navigator.clipboard.writeText(planText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  function clearPlan() {
    changedByUser.current = false;
    setPlan({ ...emptyPlan, createdAt: new Date().toISOString() });
    setCopied(false);
    setCopyError(false);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      setStorageMessage("Plan cleared from this browser.");
    } catch {
      setStorageMessage("Plan reset. Browser storage is unavailable, so saved data could not be cleared.");
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
        <form className="dashboard-card p-6 sm:p-8" onChangeCapture={() => { changedByUser.current = true; setStorageMessage(""); }} onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">What indulgenced work will you complete today?</span>
              <select
                value={plan.selectedWork}
                onChange={(event) => setPlan((current) => ({ ...current, selectedWork: event.target.value as IndulgencedWorkSlug }))}
                className="form-field focus-ring"
                aria-label="What indulgenced work will you complete today?"
              >
                {availableWorks.map((work) => (
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
                maxLength={500}
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
                label="Prayer for the Holy Father’s intentions"
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
              Changes are saved automatically in this browser when storage is available. Clear Plan removes this browser’s saved plan. Copying or printing creates a separate copy you manage.
            </div>
            <p role="status" className="text-sm leading-7 text-muted">{storageMessage}</p>
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
          <p role="status" className="mt-3 text-sm leading-7 text-muted">
            {copyError ? "Copy is unavailable. You can select and copy the plan text manually." : copied ? "Plan copied to clipboard." : ""}
          </p>
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
