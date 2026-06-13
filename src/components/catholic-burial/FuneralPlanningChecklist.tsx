"use client";

import { useMemo, useState } from "react";
import { funeralPlanningChecklistItems } from "@/data/catholicBurial";
import { trackEvent } from "@/lib/analytics";

export function FuneralPlanningChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const checklistText = useMemo(
    () =>
      [
        "Catholic Funeral Planning Checklist",
        "",
        ...funeralPlanningChecklistItems.map((item) => `${checked[item.id] ? "[x]" : "[ ]"} ${item.label}`),
      ].join("\n"),
    [checked],
  );

  function toggle(id: string) {
    setChecked((current) => ({ ...current, [id]: !current[id] }));
  }

  async function copyChecklist() {
    try {
      await navigator.clipboard.writeText(checklistText);
      trackEvent("funeral_checklist_copy");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function printChecklist() {
    trackEvent("funeral_checklist_print");
    window.print();
  }

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Catholic Funeral Planning Checklist</h2>
      <div className="mt-6 grid gap-3">
        {funeralPlanningChecklistItems.map((item) => (
          <label key={item.id} className="flex items-start gap-3 rounded-2xl border border-stone bg-ivory/80 p-4">
            <input
              type="checkbox"
              checked={Boolean(checked[item.id])}
              onChange={() => toggle(item.id)}
              className="mt-1 h-4 w-4 accent-burgundy"
            />
            <span>
              <span className="daily-card-readable block text-base leading-7 text-muted">{item.label}</span>
              <span className="daily-readable-muted mt-1 block text-sm leading-6 text-muted">{item.description}</span>
            </span>
          </label>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={copyChecklist} className="btn btn-primary focus-ring daily-button-readable justify-center">
          {copied ? "Checklist copied." : "Copy Checklist"}
        </button>
        <button type="button" onClick={printChecklist} className="btn btn-secondary focus-ring daily-button-readable justify-center">
          Print Checklist
        </button>
      </div>
    </section>
  );
}

