"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  examinationModeOptions,
  examinationPathOptions,
  examinationStateOfLifeOptions,
} from "@/data/examination";
import {
  startExaminationSession,
  updateExaminationSettings,
  useExaminationSession,
} from "@/lib/examinationSessionStorage";
import type { ExaminationMode, ExaminationPath, ExaminationStateOfLife } from "@/types/examination";

const steps = ["Choose mode", "Choose state of life", "Choose paths", "Begin"] as const;

export function ExaminationStartWizard() {
  const router = useRouter();
  const session = useExaminationSession();
  const [stepIndex, setStepIndex] = useState(0);

  function togglePath(path: ExaminationPath) {
    const paths = new Set(session.settings.selectedPaths);
    if (paths.has(path)) {
      paths.delete(path);
    } else {
      paths.add(path);
    }
    updateExaminationSettings({ selectedPaths: Array.from(paths) });
  }

  function begin() {
    startExaminationSession(session.settings);
    router.push("/confession/examination/review");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Examination setup</p>
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
        <p className="mt-5 text-sm leading-7 text-muted">Notes and marked items are stored locally only.</p>
      </aside>

      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Step {stepIndex + 1} of {steps.length}</p>
        <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">{steps[stepIndex]}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Choose a scope that helps you confess honestly without anxiety. The guide does not determine mortal or venial sin.
        </p>

        <div className="mt-6">
          {stepIndex === 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {examinationModeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateExaminationSettings({ mode: option.value as ExaminationMode })}
                  className={`focus-ring rounded-md border p-4 text-left transition ${
                    session.settings.mode === option.value ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                  }`}
                >
                  <span className="block text-sm font-bold text-navy">{option.label}</span>
                  <span className="mt-1 block text-sm leading-6">{option.description}</span>
                </button>
              ))}
            </div>
          ) : null}

          {stepIndex === 1 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {examinationStateOfLifeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateExaminationSettings({ stateOfLife: option.value as ExaminationStateOfLife })}
                  className={`focus-ring rounded-md border p-4 text-left text-sm font-bold transition ${
                    session.settings.stateOfLife === option.value ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : null}

          {stepIndex === 2 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {examinationPathOptions.map((option) => {
                const checked = session.settings.selectedPaths.includes(option.value);

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => togglePath(option.value)}
                    className={`focus-ring rounded-md border p-4 text-left transition ${
                      checked ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                    }`}
                  >
                    <span className="block text-sm font-bold text-navy">{option.label}</span>
                    <span className="mt-1 block text-sm leading-6">{option.description}</span>
                  </button>
                );
              })}
            </div>
          ) : null}

          {stepIndex === 3 ? (
            <div className="card-parchment p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Ready</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Begin privately and review gently.</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                You can mark prompts, add private notes, review them, and print a simple preparation aid.
              </p>
              <button type="button" onClick={begin} className="btn btn-primary focus-ring mt-5">
                Begin examination
              </button>
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
          ) : null}
        </div>
      </section>
    </div>
  );
}
