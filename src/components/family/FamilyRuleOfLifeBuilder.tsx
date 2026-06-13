"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { buildFamilyRuleOfLifePlan, familyFocusOptions, familyStages, familyTimeOptions, formatFamilyRuleForCopy } from "@/lib/family";
import type { FamilyStage } from "@/types/family";

export function FamilyRuleOfLifeBuilder() {
  const [familyStage, setFamilyStage] = useState<FamilyStage>("married-couple");
  const [timeAvailable, setTimeAvailable] = useState<string>("5 minutes daily");
  const [focus, setFocus] = useState<string>("prayer");
  const [copied, setCopied] = useState(false);
  const [started, setStarted] = useState(false);

  const plan = useMemo(
    () =>
      buildFamilyRuleOfLifePlan({
        familyStage,
        timeAvailable,
        focus,
        createdAt: new Date().toISOString(),
      }),
    [familyStage, timeAvailable, focus],
  );

  function markStarted() {
    if (started) return;
    setStarted(true);
    trackEvent("family_rule_builder_start", { page_path: "/family" });
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(formatFamilyRuleForCopy(plan));
      setCopied(true);
      trackEvent("family_rule_builder_complete", {
        page_path: "/family",
        family_stage: familyStage,
        focus,
        time_available: timeAvailable,
      });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearPlan() {
    setFamilyStage("married-couple");
    setTimeAvailable("5 minutes daily");
    setFocus("prayer");
    setCopied(false);
    setStarted(false);
  }

  return (
    <section id="family-rule-of-life" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Rule of life"
        title="Build a Family Rule of Life"
        summary="Choose a simple, realistic rhythm for prayer, Mass, Scripture, mercy, service, and rest."
      />
      <div className="mt-7 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="card-parchment p-6">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Family stage
              <select
                value={familyStage}
                onChange={(event) => {
                  markStarted();
                  setFamilyStage(event.target.value as FamilyStage);
                }}
                className="rounded-md border border-stone bg-ivory px-3 py-3 text-sm font-normal text-navy"
              >
                {familyStages.map((stage) => (
                  <option key={stage.value} value={stage.value}>
                    {stage.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Time available
              <select
                value={timeAvailable}
                onChange={(event) => {
                  markStarted();
                  setTimeAvailable(event.target.value);
                }}
                className="rounded-md border border-stone bg-ivory px-3 py-3 text-sm font-normal text-navy"
              >
                {familyTimeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Focus
              <select
                value={focus}
                onChange={(event) => {
                  markStarted();
                  setFocus(event.target.value);
                }}
                className="rounded-md border border-stone bg-ivory px-3 py-3 text-sm font-normal text-navy"
              >
                {familyFocusOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="mt-5 text-sm leading-7 text-muted">
            This tool uses local state only. It does not require login or collect personal family details.
          </p>
        </div>
        <div className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Your Family Rule of Life</h3>
          <div className="mt-5 grid gap-4">
            <RuleLine label="Daily prayer practice" value={plan.dailyPrayerPractice} />
            <RuleLine label="Weekly worship or formation practice" value={plan.weeklyPractice} />
            <RuleLine label="Family virtue" value={plan.familyVirtue} />
            <RuleLine label="Mercy practice" value={plan.mercyPractice} />
            <RuleLine label="Home environment practice" value={plan.homePractice} />
            <RuleLine label="Conversation prompt" value={plan.conversationPrompt} />
            <RuleLine label="Blessing or prayer" value={plan.blessingPrayer} />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring justify-center">
              {copied ? "Family rule copied" : "Copy Family Rule"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Family Rule
            </button>
            <button type="button" onClick={clearPlan} className="btn btn-secondary focus-ring justify-center">
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RuleLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-stone bg-ivory px-4 py-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{label}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{value}</p>
    </div>
  );
}
