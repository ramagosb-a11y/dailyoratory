"use client";

import { useState } from "react";
import { formatExamenJournalEntryForCopy } from "@/lib/dailyExamen";
import { ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function ExamenJournalTool() {
  const [gratitude, setGratitude] = useState("");
  const [godsPresence, setGodsPresence] = useState("");
  const [mercy, setMercy] = useState("");
  const [graceForTomorrow, setGraceForTomorrow] = useState("");
  const [surrender, setSurrender] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyReflection() {
    try {
      await navigator.clipboard.writeText(
        formatExamenJournalEntryForCopy({
          gratitude,
          godsPresence,
          mercy,
          graceForTomorrow,
          surrender,
        }),
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearForm() {
    setGratitude("");
    setGodsPresence("");
    setMercy("");
    setGraceForTomorrow("");
    setSurrender("");
    setCopied(false);
  }

  return (
    <ExamenSection
      eyebrow="Local-only tool"
      title="My Examen Reflection"
      summary="Your reflection stays on this device unless you choose to copy or print it."
    >
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Gratitude</span>
              <textarea value={gratitude} onChange={(event) => setGratitude(event.target.value)} className="form-field focus-ring min-h-24" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">God&apos;s presence</span>
              <textarea value={godsPresence} onChange={(event) => setGodsPresence(event.target.value)} className="form-field focus-ring min-h-24" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Need for mercy</span>
              <textarea value={mercy} onChange={(event) => setMercy(event.target.value)} className="form-field focus-ring min-h-24" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Grace for tomorrow</span>
              <textarea value={graceForTomorrow} onChange={(event) => setGraceForTomorrow(event.target.value)} className="form-field focus-ring min-h-24" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Surrender</span>
              <textarea value={surrender} onChange={(event) => setSurrender(event.target.value)} className="form-field focus-ring min-h-24" />
            </label>
            <div className="rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
              Privacy note: your journal text stays in local state only for this page view. It is not sent to the server or analytics.
            </div>
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Generated reflection</p>
          <pre className="mt-4 whitespace-pre-wrap text-sm leading-7 text-muted">
            {formatExamenJournalEntryForCopy({
              gratitude,
              godsPresence,
              mercy,
              graceForTomorrow,
              surrender,
            })}
          </pre>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyReflection} className="btn btn-primary focus-ring justify-center">
              {copied ? "Reflection copied" : "Copy Reflection"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Reflection
            </button>
            <button type="button" onClick={clearForm} className="btn btn-secondary focus-ring justify-center">
              Clear
            </button>
          </div>
        </aside>
      </div>
    </ExamenSection>
  );
}

