"use client";

import { useMemo, useState } from "react";
import { emergencyChecklist } from "@/data/sacramentalEmergency";
import { trackEvent } from "@/lib/analytics";

export function SacramentalEmergencyChecklist() {
  const [copied, setCopied] = useState(false);
  const copyText = useMemo(
    () =>
      ["Catholic Sacramental Emergency Checklist", ...emergencyChecklist.map((item) => `- ${item.label}`)].join("\n"),
    [],
  );

  async function handleCopy() {
    await navigator.clipboard.writeText(copyText);
    trackEvent("sacramental_emergency_checklist_copy", { item_count: emergencyChecklist.length });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function handlePrint() {
    trackEvent("sacramental_emergency_checklist_print", { item_count: emergencyChecklist.length });
    window.print();
  }

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Catholic Sacramental Emergency Checklist</h2>
      <ul className="mt-6 space-y-3">
        {emergencyChecklist.map((item) => (
          <li key={item.id} className="rounded-[1.2rem] border border-stone/70 bg-white/70 px-4 py-4">
            <p className="daily-readable text-base leading-7 text-navy">{item.label}</p>
            <p className="daily-readable-muted mt-1 text-sm leading-6 text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={handleCopy} className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          {copied ? "Copied." : "Copy Checklist"}
        </button>
        <button type="button" onClick={handlePrint} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Print Checklist
        </button>
      </div>
    </section>
  );
}
