"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { buildFormationPlan, formatFormationPlanForCopy, getFormationPathRecommendations } from "@/lib/formation";

const recommendations = getFormationPathRecommendations();
const defaultNeed = recommendations[0]?.userNeed ?? "";

export function FormationPathwaySelector() {
  const [userNeed, setUserNeed] = useState(defaultNeed);
  const [copied, setCopied] = useState(false);
  const hasTrackedSelectionRef = useRef(false);

  const plan = useMemo(() => buildFormationPlan({ userNeed, createdAt: new Date().toISOString() }), [userNeed]);
  const planText = useMemo(
    () => formatFormationPlanForCopy({ userNeed, createdAt: new Date().toISOString() }),
    [userNeed],
  );

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(planText);
      trackEvent("formation_plan_copy", {
        user_need: userNeed,
        recommended_path: plan?.title,
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  useEffect(() => {
    if (!userNeed) return;
    if (!hasTrackedSelectionRef.current) {
      hasTrackedSelectionRef.current = true;
      return;
    }

    trackEvent("formation_path_start", {
      user_need: userNeed,
      recommended_path: plan?.title,
    });
  }, [plan?.title, userNeed]);

  return (
    <section id="formation-selector" className="scroll-mt-28">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Interactive tool</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Where should I begin?
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Choose the need that best describes where you are right now. This tool suggests learning
        paths only. For serious personal questions, bring them to your parish, priest, catechist,
        or spiritual director.
      </p>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_1fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose your current need</span>
            <select
              value={userNeed}
              onChange={(event) => setUserNeed(event.target.value)}
              className="form-field focus-ring"
            >
              {recommendations.map((recommendation) => (
                <option key={recommendation.id} value={recommendation.userNeed}>
                  {recommendation.userNeed}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this selector uses local state only and does not send your selection to a server.
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Recommended path</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{plan?.title ?? "Choose a path"}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{plan?.description}</p>
          <div className="mt-5 rounded-md border border-stone bg-ivory p-4 text-sm leading-7 text-muted">
            <p>
              <span className="font-semibold text-navy">First step:</span> {plan?.firstStep}
            </p>
            <p className="mt-3">
              <span className="font-semibold text-navy">Weekly practice:</span> {plan?.weeklyPractice}
            </p>
            <div className="mt-4">
              <p className="font-semibold text-navy">Daily Oratory tools</p>
              <ul className="mt-2 space-y-1">
                {plan?.links.map((link) => (
                  <li key={link.href}>• {link.label}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn btn-primary focus-ring justify-center">
              {copied ? "Formation plan copied" : "Copy My Formation Plan"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Plan
            </button>
            <button type="button" onClick={() => setUserNeed(defaultNeed)} className="btn btn-secondary focus-ring justify-center">
              Clear
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
