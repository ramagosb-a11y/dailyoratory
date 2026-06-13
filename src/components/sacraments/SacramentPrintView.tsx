"use client";

import { sacramentCompanions } from "@/data/sacramentCompanion";
import {
  exportSacramentPreparationText,
  useSacramentPreparationStore,
} from "@/lib/sacramentPreparationStorage";

export function SacramentPrintView() {
  const store = useSacramentPreparationStore();
  const companion =
    sacramentCompanions.find((item) => item.slug === store.settings.selectedCompanionSlug) ?? sacramentCompanions[0];
  const text = exportSacramentPreparationText(store);

  function printPage() {
    window.print();
  }

  async function copyText() {
    await navigator.clipboard?.writeText(text);
  }

  function downloadJson() {
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "daily-oratory-sacrament-preparation.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <aside className="dashboard-card p-5 print:hidden">
        <p className="text-xs font-bold uppercase text-burgundy">Print/export plan</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Export is a local helper for parish conversations and personal preparation. Bring official requirements to your parish.
        </p>
        <div className="mt-5 grid gap-3">
          <button type="button" onClick={printPage} className="btn btn-primary focus-ring">
            Print
          </button>
          <button type="button" onClick={copyText} className="btn btn-secondary focus-ring">
            Copy text
          </button>
          <button type="button" onClick={downloadJson} className="btn btn-secondary focus-ring">
            Download JSON
          </button>
        </div>
      </aside>

      <article className="content-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase text-burgundy">Daily Oratory</p>
        <h1 className="font-display mt-2 text-5xl font-semibold leading-none text-navy">{companion?.title ?? "Sacrament Preparation"}</h1>
        <p className="mt-4 text-sm font-semibold leading-7 text-navy">{companion?.parishReminder}</p>
        <p className="mt-3 text-sm leading-7 text-muted">{companion?.decisionBoundary}</p>

        <section className="mt-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Parish checklist</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
            {companion?.parishChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Preparation plan</h2>
          <pre className="mt-3 whitespace-pre-wrap rounded-md border border-stone bg-background p-4 font-sans text-sm leading-7 text-navy">
            {text}
          </pre>
        </section>
      </article>
    </div>
  );
}
