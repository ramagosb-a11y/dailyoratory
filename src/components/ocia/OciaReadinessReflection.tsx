"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import {
  buildOciaNextStepPlan,
  formatOciaNextStepPlanForCopy,
  getOciaPossibleNextSteps,
  getOciaReadinessPrompts,
} from "@/lib/ocia";

export function OciaReadinessReflection() {
  const prompts = getOciaReadinessPrompts();
  const nextStepOptions = getOciaPossibleNextSteps();
  const [selectedSteps, setSelectedSteps] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const plan = useMemo(
    () => buildOciaNextStepPlan({ interests: selectedSteps }),
    [selectedSteps],
  );

  function toggleStep(stepId: string) {
    setSelectedSteps((current) => {
      const next = current.includes(stepId)
        ? current.filter((item) => item !== stepId)
        : [...current, stepId];

      trackEvent(next.length > 0 ? "ocia_next_step_complete" : "ocia_next_step_start", {
        selection_count: next.length,
        page_path: "/ocia",
      });

      return next;
    });
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(formatOciaNextStepPlanForCopy(plan));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Interactive tool"
        title="Am I Ready to Take the Next Step?"
        summary="This local-only reflection tool helps you name a practical next step without making eligibility decisions for you."
      />

      <div className="mt-7 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="dashboard-card p-6 sm:p-8">
          <p className="text-sm font-semibold text-navy">Reflect on these prompts</p>
          <ul className="mt-4 space-y-3">
            {prompts.map((prompt) => (
              <li key={prompt} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                {prompt}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">Choose possible next steps</p>
            <div className="mt-3 grid gap-3">
              {nextStepOptions.map((option) => (
                <label key={option.id} className="flex items-start gap-3 rounded-md border border-stone bg-parchment px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedSteps.includes(option.id)}
                    onChange={() => toggleStep(option.id)}
                    className="mt-1"
                  />
                  <span className="text-sm leading-7 text-muted">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this reflection uses local state only. Do not enter personal marriage,
            baptismal, or sacramental details here. Bring those questions to a parish.
          </div>
        </div>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Your next step plan</p>
          <ul className="mt-4 space-y-3 rounded-md border border-stone bg-ivory p-4 text-sm leading-7 text-muted">
            {plan.nextSteps.map((step) => (
              <li key={step} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                {step}
              </li>
            ))}
          </ul>
          {plan.relatedLinks.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {plan.relatedLinks.map((link, index) => (
                <a
                  key={`${link.href}-${index}`}
                  href={link.href}
                  className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring justify-center">
              {copied ? "Next step plan copied" : "Copy Next Step Plan"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Next Step Plan
            </button>
            <button
              type="button"
              onClick={() => setSelectedSteps([])}
              className="btn btn-secondary focus-ring justify-center"
            >
              Clear
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
