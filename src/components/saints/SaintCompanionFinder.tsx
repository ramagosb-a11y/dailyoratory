"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { buildSaintCompanionPlan, formatSaintCompanionPlanForCopy } from "@/lib/saints";

const needOptions = [
  "prayer",
  "courage",
  "purity",
  "humility",
  "patience",
  "grief",
  "anxiety or fear",
  "family life",
  "work",
  "sickness",
  "forgiveness",
  "discernment",
  "technology and media",
  "study",
  "Eucharistic devotion",
  "Marian devotion",
  "service to the poor",
  "missionary zeal",
  "confession and conversion",
  "perseverance",
] as const;

const stateOptions = [
  "child",
  "teen",
  "young adult",
  "parent",
  "married",
  "single",
  "student",
  "worker",
  "teacher",
  "caregiver",
  "convert/inquirer",
  "returning Catholic",
  "grieving",
  "sick or homebound",
  "discerning vocation",
] as const;

const needToSlug: Record<(typeof needOptions)[number], string> = {
  prayer: "prayer",
  courage: "courage",
  purity: "purity",
  humility: "humility",
  patience: "patience",
  grief: "grief",
  "anxiety or fear": "anxiety-or-fear",
  "family life": "family-life",
  work: "work",
  sickness: "sickness",
  forgiveness: "forgiveness",
  discernment: "discernment",
  "technology and media": "technology-and-media",
  study: "study",
  "Eucharistic devotion": "eucharistic-devotion",
  "Marian devotion": "marian-devotion",
  "service to the poor": "service-to-the-poor",
  "missionary zeal": "missionary-zeal",
  "confession and conversion": "confession-and-conversion",
  perseverance: "perseverance",
};

export function SaintCompanionFinder() {
  const [need, setNeed] = useState<(typeof needOptions)[number]>("prayer");
  const [state, setState] = useState<(typeof stateOptions)[number]>("young adult");
  const [copied, setCopied] = useState(false);
  const trackedStartRef = useRef(false);

  const plan = useMemo(
    () =>
      buildSaintCompanionPlan({
        needSlug: needToSlug[need],
        stateSlug: state,
        createdAt: new Date().toISOString(),
      }),
    [need, state],
  );

  const copyText = useMemo(
    () => formatSaintCompanionPlanForCopy({ needSlug: needToSlug[need], stateSlug: state }),
    [need, state],
  );

  function handleNeedChange(value: (typeof needOptions)[number]) {
    if (!trackedStartRef.current) {
      trackedStartRef.current = true;
      trackEvent("saint_companion_start", { need_slug: needToSlug[value], page_path: "/saints/finder" });
    }

    setNeed(value);
    trackEvent("saint_companion_complete", {
      need_slug: needToSlug[value],
      state_slug: state,
      primary_saint: plan?.primarySaint.name,
    });
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="saint-companion-finder" className="mt-16 scroll-mt-28">
      <p className="liturgical-section-eyebrow">Interactive tool</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Find a Saint Companion
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Choose the need and state of life that best fit your season right now. This local-only tool
        suggests saints for prayer and imitation; it does not make spiritual decisions for you.
      </p>
      <div className="mt-7 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">I need help with</span>
            <select
              value={need}
              onChange={(event) => handleNeedChange(event.target.value as (typeof needOptions)[number])}
              className="form-field focus-ring"
            >
              {needOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-semibold text-navy">I am</span>
            <select
              value={state}
              onChange={(event) => setState(event.target.value as (typeof stateOptions)[number])}
              className="form-field focus-ring"
            >
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this tool uses local state only. Your selections are not sent to a server.
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
            Your Saint Companion Plan
          </p>
          {plan ? (
            <>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <SaintSuggestionCard label="Primary saint" title={plan.primarySaint.name} why={plan.recommendation.explanation} virtue={plan.primarySaint.keyVirtues[0] ?? "faithfulness"} prayer={plan.primarySaint.prayer} href={`/saints/${plan.primarySaint.slug}`} />
                <SaintSuggestionCard label="Companion saint" title={plan.companionSaint.name} why={plan.companionSaint.whyMatters} virtue={plan.companionSaint.keyVirtues[0] ?? "faithfulness"} prayer={plan.companionSaint.prayer} href={`/saints/${plan.companionSaint.slug}`} />
                <SaintSuggestionCard label="Stretch saint" title={plan.stretchSaint.name} why={plan.stretchSaint.whyMatters} virtue={plan.stretchSaint.keyVirtues[0] ?? "faithfulness"} prayer={plan.stretchSaint.prayer} href={`/saints/${plan.stretchSaint.slug}`} />
              </div>

              <div className="mt-6 rounded-2xl border border-stone bg-ivory p-5 text-sm leading-7 text-muted">
                <p>
                  <span className="font-semibold text-navy">Virtue to imitate:</span>{" "}
                  {plan.recommendation.virtuePractice}
                </p>
                <p className="mt-3">
                  <span className="font-semibold text-navy">Prayer prompt:</span>{" "}
                  {plan.recommendation.prayerPrompt}
                </p>
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm leading-7 text-muted">
              Choose a need to see a saint companion plan.
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring justify-center">
              {copied ? "Saint plan copied" : "Copy My Saint Companion Plan"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Plan
            </button>
            <button
              type="button"
              onClick={() => {
                setNeed("prayer");
                setState("young adult");
              }}
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

function SaintSuggestionCard({
  label,
  title,
  why,
  virtue,
  prayer,
  href,
}: {
  label: string;
  title: string;
  why: string;
  virtue: string;
  prayer: string;
  href: string;
}) {
  return (
    <article className="card-parchment liturgical-card-accent p-5">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{label}</p>
      <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{why}</p>
      <p className="mt-4 text-sm leading-7 text-muted">
        <span className="font-semibold text-navy">Virtue:</span> {virtue}
      </p>
      <p className="mt-3 line-clamp-4 text-sm leading-7 text-muted">{prayer}</p>
      <Link href={href} className="mt-5 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
        Learn more
      </Link>
    </article>
  );
}

