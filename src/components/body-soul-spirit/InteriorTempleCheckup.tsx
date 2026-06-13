"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  buildInteriorTempleCheckupResult,
  formatInteriorTempleReflectionForCopy,
  getInteriorTempleCheckupQuestions,
} from "@/lib/bodySoulSpirit";
import type {
  InteriorTempleCheckupInput,
  InteriorTempleCheckupResult,
  InteriorTempleCheckupSelection,
} from "@/types/bodySoulSpirit";
import { BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

const emptyResult: InteriorTempleCheckupResult | null = null;

export function InteriorTempleCheckup() {
  const questions = getInteriorTempleCheckupQuestions();
  const [responses, setResponses] = useState<InteriorTempleCheckupInput>({});
  const [result, setResult] = useState<InteriorTempleCheckupResult | null>(emptyResult);
  const [copied, setCopied] = useState(false);
  const [started, setStarted] = useState(false);

  function updateResponse(id: string, value: InteriorTempleCheckupSelection) {
    if (!started) {
      trackEvent("interior_temple_checkup_start", {
        section: "interior-temple-checkup",
      });
      setStarted(true);
    }

    setResponses((current) => ({
      ...current,
      [id]: value,
    }));
  }

  function generateReflection() {
    const nextResult = buildInteriorTempleCheckupResult(responses);
    setResult(nextResult);
    trackEvent("interior_temple_checkup_complete", {
      section: "interior-temple-checkup",
    });
  }

  async function copyReflection() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(formatInteriorTempleReflectionForCopy(result));
      trackEvent("interior_temple_reflection_copy", {
        section: "interior-temple-checkup",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearForm() {
    setResponses({});
    setResult(emptyResult);
    setCopied(false);
    setStarted(false);
  }

  return (
    <BodySoulSpiritSection
      eyebrow="Local-only reflection tool"
      title="Interior Temple Checkup"
      summary="Use this as a prayerful reflection, not as a judgment of your soul. Let the Holy Spirit reveal where light, healing, and mercy are needed."
    >
      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <p className="text-sm leading-7 text-muted">
            Your reflection stays on this device unless you choose to copy or print it.
          </p>
          <div className="mt-5 grid gap-4">
            {questions.map((question) => (
              <label key={question.id} className="grid gap-2">
                <span className="text-sm font-semibold text-navy">{question.question}</span>
                <select
                  value={responses[question.id] ?? ""}
                  onChange={(event) =>
                    updateResponse(
                      question.id,
                      event.target.value as InteriorTempleCheckupSelection,
                    )
                  }
                  className="form-field focus-ring"
                >
                  <option value="">Choose gently</option>
                  <option value="steady-light">I see grace here</option>
                  <option value="needs-mercy">This needs mercy</option>
                  <option value="needs-strengthening">This needs strengthening</option>
                  <option value="not-sure">I am not sure</option>
                </select>
              </label>
            ))}
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
            Gentle reflection
          </p>
          {result ? (
            <div className="mt-4 grid gap-4">
              <div className="rounded-2xl border border-stone bg-ivory p-4">
                <p className="text-sm font-bold text-navy">One area to thank God for</p>
                <p className="mt-2 text-sm leading-7 text-muted">{result.gratitude}</p>
              </div>
              <div className="rounded-2xl border border-stone bg-ivory p-4">
                <p className="text-sm font-bold text-navy">One area to bring to mercy</p>
                <p className="mt-2 text-sm leading-7 text-muted">{result.mercyArea}</p>
              </div>
              <div className="rounded-2xl border border-stone bg-ivory p-4">
                <p className="text-sm font-bold text-navy">One virtue to practice</p>
                <p className="mt-2 text-sm leading-7 text-muted">{result.virtue}</p>
              </div>
              <div className="rounded-2xl border border-stone bg-ivory p-4">
                <p className="text-sm font-bold text-navy">One next step</p>
                <p className="mt-2 text-sm leading-7 text-muted">{result.nextStep}</p>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-sm leading-7 text-muted">
              Choose a few responses, then generate a gentle reflection rooted in gratitude,
              mercy, virtue, and one simple next step.
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={generateReflection}
              className="btn btn-primary focus-ring justify-center"
            >
              Generate Reflection
            </button>
            <button
              type="button"
              onClick={copyReflection}
              disabled={!result}
              className="btn btn-secondary focus-ring justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              {copied ? "Reflection copied" : "Copy Reflection"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn btn-secondary focus-ring justify-center"
            >
              Print Reflection
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="btn btn-secondary focus-ring justify-center"
            >
              Clear
            </button>
          </div>
        </aside>
      </div>
    </BodySoulSpiritSection>
  );
}

