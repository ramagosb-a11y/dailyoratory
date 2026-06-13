"use client";

import type { RuleOfLifeBuilderDraft, SavedRuleOfLife } from "@/types/ruleOfLife";
import {
  estimateDailyMinutes,
  getAvailableTime,
  getPracticesByIds,
  getReviewRhythm,
  getSpiritualSeason,
  getVirtueFocus,
} from "@/lib/ruleOfLifeStorage";

export function RuleSummary({ rule }: { rule: RuleOfLifeBuilderDraft | SavedRuleOfLife }) {
  const daily = getPracticesByIds(rule.dailyPracticeIds);
  const periodic = getPracticesByIds(rule.periodicPracticeIds);
  const virtue = getVirtueFocus(rule.virtueFocusId);
  const dailyMinutes = estimateDailyMinutes(rule);

  return (
    <div className="grid gap-5">
      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Your rhythm</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <SummaryFact label="Spiritual season" value={getSpiritualSeason(rule.spiritualSeason).label} />
          <SummaryFact label="Available time" value={getAvailableTime(rule.availableTime).label} />
          <SummaryFact label="Estimated daily time" value={`${dailyMinutes} minutes`} />
          <SummaryFact label="Review rhythm" value={getReviewRhythm(rule.reviewRhythm).label} />
        </div>
      </section>

      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Daily practices</p>
        <PracticeList practices={daily} empty="No daily practices selected yet." />
      </section>

      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Weekly and monthly practices</p>
        <PracticeList practices={periodic} empty="No weekly or monthly practices selected yet." />
      </section>

      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Virtue focus</p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{virtue.virtue}</h2>
        <p className="mt-2 text-sm leading-7 text-muted">{virtue.description}</p>
        <blockquote className="mt-4 border-l-4 border-gold pl-4 text-sm font-semibold leading-7 text-navy">
          {virtue.prayerPrompt}
        </blockquote>
      </section>
    </div>
  );
}

function SummaryFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-parchment p-4">
      <p className="text-xs font-bold uppercase text-burgundy">{label}</p>
      <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
    </div>
  );
}

function PracticeList({
  practices,
  empty,
}: {
  practices: ReturnType<typeof getPracticesByIds>;
  empty: string;
}) {
  if (!practices.length) {
    return <p className="mt-3 text-sm leading-7 text-muted">{empty}</p>;
  }

  return (
    <div className="mt-4 grid gap-3">
      {practices.map((practice) => (
        <article key={practice.id} className="card-parchment p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-sm font-bold text-navy">{practice.title}</h3>
            <span className="season-pill bg-ivory">{practice.cadence}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">{practice.description}</p>
          {practice.gentleNote ? <p className="mt-2 text-xs font-semibold text-burgundy">{practice.gentleNote}</p> : null}
        </article>
      ))}
    </div>
  );
}
