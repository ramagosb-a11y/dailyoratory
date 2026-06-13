"use client";

import Link from "next/link";
import { dailyExamenSteps } from "@/data/ruleOfLife";
import {
  exportRuleAsText,
  getPracticesByIds,
  getReviewRhythm,
  getSpiritualSeason,
  getVirtueFocus,
  useSavedRuleOfLife,
} from "@/lib/ruleOfLifeStorage";

export function RulePrintView() {
  const rule = useSavedRuleOfLife();

  if (!rule) {
    return (
      <div className="dashboard-card p-6 text-center">
        <p className="text-xs font-bold uppercase text-burgundy">Nothing to print yet</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Create your rule first.</h1>
        <Link href="/rule-of-life/builder" className="btn btn-primary focus-ring mt-6">
          Open builder
        </Link>
      </div>
    );
  }

  const daily = getPracticesByIds(rule.dailyPracticeIds);
  const periodic = getPracticesByIds(rule.periodicPracticeIds);
  const virtue = getVirtueFocus(rule.virtueFocusId);

  return (
    <div>
      <div className="no-print mb-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => window.print()} className="btn btn-primary focus-ring">
          Print rule
        </button>
        <button type="button" onClick={() => copyText(exportRuleAsText(rule))} className="btn btn-secondary focus-ring">
          Copy text
        </button>
        <Link href="/rule-of-life/my-rule" className="btn btn-secondary focus-ring">
          Back to my rule
        </Link>
      </div>

      <article className="dashboard-card p-6 sm:p-10">
        <p className="text-xs font-bold uppercase text-burgundy">Daily Oratory</p>
        <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-navy">{rule.title}</h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          A simple Catholic rhythm of prayer, Scripture, virtue, sacraments, reflection, and works of mercy.
        </p>

        <section className="mt-8 border-t border-stone pt-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Rule summary</h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            <PrintFact label="Spiritual season" value={getSpiritualSeason(rule.spiritualSeason).label} />
            <PrintFact label="Review rhythm" value={getReviewRhythm(rule.reviewRhythm).label} />
            <PrintFact label="Virtue" value={virtue.virtue} />
            <PrintFact label="Prayer prompt" value={virtue.prayerPrompt} />
          </dl>
        </section>

        <PrintPracticeSection title="Daily practices" practices={daily} />
        <PrintPracticeSection title="Weekly and monthly practices" practices={periodic} />

        <section className="mt-8 border-t border-stone pt-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Daily Examen</h2>
          <ol className="mt-4 space-y-3">
            {dailyExamenSteps.map((step) => (
              <li key={step.id} className="text-sm leading-7 text-muted">
                <strong className="text-navy">{step.title}:</strong> {step.prompt}
              </li>
            ))}
          </ol>
        </section>
      </article>
    </div>
  );
}

function PrintFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-parchment p-4">
      <dt className="text-xs font-bold uppercase text-burgundy">{label}</dt>
      <dd className="mt-1 text-sm font-semibold leading-6 text-navy">{value}</dd>
    </div>
  );
}

function PrintPracticeSection({
  title,
  practices,
}: {
  title: string;
  practices: ReturnType<typeof getPracticesByIds>;
}) {
  return (
    <section className="mt-8 border-t border-stone pt-6">
      <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
      <ul className="mt-4 space-y-3">
        {practices.map((practice) => (
          <li key={practice.id} className="text-sm leading-7 text-muted">
            <strong className="text-navy">{practice.title}:</strong> {practice.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

async function copyText(text: string) {
  await navigator.clipboard?.writeText(text);
}
