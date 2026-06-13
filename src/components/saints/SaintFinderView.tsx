"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SaintSaveButton } from "@/components/saints/SaintSaveButton";
import {
  formatFeastDate,
  getSaintFinderDefaults,
  getSaintFinderOptions,
  getSaintTypeLabel,
  recommendSaints,
} from "@/lib/saints";
import type { SaintFinderPreferences } from "@/types/saints";

const steps = ["Season of life", "Virtue", "State of life", "Saint type", "Recommendations"] as const;

export function SaintFinderView() {
  const options = getSaintFinderOptions();
  const [stepIndex, setStepIndex] = useState(0);
  const [preferences, setPreferences] = useState<SaintFinderPreferences>(getSaintFinderDefaults());
  const recommendations = useMemo(() => recommendSaints(preferences, 5), [preferences]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Finder steps</p>
        <ol className="mt-4 grid gap-2">
          {steps.map((step, index) => (
            <li key={step}>
              <button
                type="button"
                onClick={() => setStepIndex(index)}
                className={`focus-ring w-full rounded-md border px-3 py-2 text-left text-sm font-bold transition ${
                  index === stepIndex ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                }`}
              >
                <span className="mr-2 text-xs uppercase">{index + 1}</span>
                {step}
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm leading-7 text-muted">
          This is a directory-based guide. It suggests saints to consider praying with; it does not assign a saint to you.
        </p>
      </aside>

      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Step {stepIndex + 1} of {steps.length}</p>
        <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">{steps[stepIndex]}</h1>

        <div className="mt-6">
          {stepIndex === 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {options.lifeSituations.map((option) => (
                <ChoiceButton
                  key={option.value}
                  selected={preferences.lifeSituation === option.value}
                  title={option.label}
                  description={option.description}
                  onClick={() => setPreferences((current) => ({ ...current, lifeSituation: option.value }))}
                />
              ))}
            </div>
          ) : null}

          {stepIndex === 1 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {options.virtues.map((virtue) => (
                <button
                  key={virtue}
                  type="button"
                  onClick={() => setPreferences((current) => ({ ...current, virtue }))}
                  className={`focus-ring rounded-md border p-4 text-left text-sm font-bold capitalize transition ${
                    preferences.virtue === virtue ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                  }`}
                >
                  {virtue}
                </button>
              ))}
            </div>
          ) : null}

          {stepIndex === 2 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {options.statesOfLife.map((stateOfLife) => (
                <button
                  key={stateOfLife}
                  type="button"
                  onClick={() => setPreferences((current) => ({ ...current, stateOfLife }))}
                  className={`focus-ring rounded-md border p-4 text-left text-sm font-bold capitalize transition ${
                    preferences.stateOfLife === stateOfLife ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                  }`}
                >
                  {stateOfLife}
                </button>
              ))}
            </div>
          ) : null}

          {stepIndex === 3 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {options.saintTypes.map((option) => (
                <ChoiceButton
                  key={option.value}
                  selected={preferences.saintType === option.value}
                  title={option.label}
                  description={option.description}
                  onClick={() => setPreferences((current) => ({ ...current, saintType: option.value }))}
                />
              ))}
            </div>
          ) : null}

          {stepIndex === 4 ? (
            <div className="grid gap-4">
              <div className="card-parchment p-4">
                <p className="text-xs font-bold uppercase text-burgundy">Your selections</p>
                <p className="mt-2 text-sm leading-7 text-navy">
                  You asked for a saint to consider praying with in this season, with attention to{" "}
                  <span className="font-bold">{preferences.virtue}</span>,{" "}
                  <span className="font-bold">{preferences.stateOfLife}</span> life, and a{" "}
                  <span className="font-bold">{getSaintTypeLabel(preferences.saintType).toLowerCase()}</span>.
                </p>
              </div>
              {recommendations.map(({ saint, reasons }) => (
                <article key={saint.id} className="card p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase text-burgundy">A saint to consider praying with</p>
                      <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{saint.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-muted">{saint.encouragement}</p>
                    </div>
                    <span className="season-pill">{formatFeastDate(saint.feastDay)}</span>
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-navy">
                    {reasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-md border border-stone bg-parchment p-3 text-sm font-semibold leading-7 text-navy">
                    {saint.prayerPrompt}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <SaintSaveButton saintId={saint.id} />
                    <Link href={`/saints/${saint.slug}`} className="btn btn-secondary focus-ring">
                      View profile
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={() => setStepIndex((value) => Math.max(0, value - 1))}
            className="btn btn-secondary focus-ring"
            disabled={stepIndex === 0}
          >
            Back
          </button>
          {stepIndex < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => setStepIndex((value) => Math.min(steps.length - 1, value + 1))}
              className="btn btn-primary focus-ring"
            >
              Continue
            </button>
          ) : (
            <Link href="/saints/companions" className="btn btn-primary focus-ring">
              View saved companions
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

function ChoiceButton({
  selected,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring rounded-md border p-4 text-left transition ${
        selected ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
      }`}
    >
      <span className="block text-sm font-bold text-navy">{title}</span>
      <span className="mt-1 block text-sm leading-6">{description}</span>
    </button>
  );
}
