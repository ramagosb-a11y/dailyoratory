"use client";

import { useState } from "react";
import { getBibleReadingPlans, formatReadingPlanForCopy } from "@/lib/bible";
import { trackEvent } from "@/lib/analytics";
import { BibleSection } from "@/components/bible/BibleUi";

export function BibleReadingPlans() {
  const plans = getBibleReadingPlans();
  const [selectedPlanId, setSelectedPlanId] = useState(plans[0]?.id ?? "");
  const [copied, setCopied] = useState(false);
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[0];

  async function copyPlan() {
    if (!selectedPlan) return;

    try {
      await navigator.clipboard.writeText(formatReadingPlanForCopy(selectedPlan));
      trackEvent("bible_reading_plan_copy", {
        category: "reading-plan",
        item_slug: selectedPlan.slug,
        source: "/bible",
        destination: "clipboard",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  if (!selectedPlan) return null;

  return (
    <BibleSection
      eyebrow="Reading plans"
      title="Simple Catholic Bible Reading Plans"
      summary="Choose a plan that fits your season of life instead of forcing a pace that turns Scripture into pressure."
    >
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose a reading plan</span>
            <select
              value={selectedPlanId}
              onChange={(event) => setSelectedPlanId(event.target.value)}
              className="form-field focus-ring"
            >
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.title}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            This selector uses local state only and does not save your reading history.
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Selected plan</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{selectedPlan.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{selectedPlan.description}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
            {selectedPlan.days} day{selectedPlan.days === 1 ? "" : "s"} | {selectedPlan.audience.join(" | ")}
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {selectedPlan.references.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn btn-primary focus-ring justify-center">
              {copied ? "Plan copied" : "Copy Plan"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Plan
            </button>
          </div>
        </aside>
      </div>
    </BibleSection>
  );
}
