"use client";

import { useState } from "react";

const checklistItems = [
  "Pray to the Holy Spirit",
  "Review sins honestly",
  "Identify mortal sins if any",
  "Note repeated patterns",
  "Ask for contrition",
  "Decide one concrete change",
  "Go to Confession",
  "Receive absolution",
  "Do penance",
  "Begin again",
];

export function ConfessionPreparationChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  function saveChecklist() {
    window.localStorage.setItem("daily-oratory-confession-preparation-checklist", JSON.stringify(checked));
  }

  function loadChecklist() {
    const value = window.localStorage.getItem("daily-oratory-confession-preparation-checklist");
    if (!value) return;
    try {
      setChecked(JSON.parse(value));
    } catch {
      setChecked({});
    }
  }

  function toggle(item: string) {
    setChecked((current) => ({ ...current, [item]: !current[item] }));
  }

  async function copyChecklist() {
    const text = ["Confession Preparation Checklist", "", ...checklistItems.map((item) => `${checked[item] ? "[x]" : "[ ]"} ${item}`)].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function clearChecklist() {
    setChecked({});
    setCopied(false);
  }

  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Checklist</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Confession preparation checklist</h2>
      <div className="mt-6 grid gap-3">
        {checklistItems.map((item) => (
          <label key={item} className="flex items-start gap-3 rounded-2xl border border-stone bg-ivory/80 p-4">
            <input type="checkbox" checked={Boolean(checked[item])} onChange={() => toggle(item)} className="mt-1 h-4 w-4 accent-burgundy" />
            <span className="daily-card-readable text-base leading-7 text-muted">{item}</span>
          </label>
        ))}
      </div>
      <p className="mt-5 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
        This reflection is stored only in this browser if saved. Daily Oratory does not receive it.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={copyChecklist} className="btn btn-primary focus-ring daily-button-readable justify-center">
          {copied ? "Copied" : "Copy Checklist"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring daily-button-readable justify-center">
          Print Checklist
        </button>
        <button type="button" onClick={saveChecklist} className="btn btn-secondary focus-ring daily-button-readable justify-center">
          Save in browser
        </button>
        <button type="button" onClick={loadChecklist} className="btn btn-secondary focus-ring daily-button-readable justify-center">
          Load saved
        </button>
        <button type="button" onClick={clearChecklist} className="btn btn-secondary focus-ring daily-button-readable justify-center">
          Clear
        </button>
      </div>
    </section>
  );
}
