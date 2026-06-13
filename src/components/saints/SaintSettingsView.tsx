"use client";

import { getSaintAdminSchemaRows } from "@/lib/saints";
import {
  clearSaintCompanions,
  exportSaintCompanionsAsJson,
  exportSaintCompanionsAsText,
  useSaintCompanionStore,
} from "@/lib/saintCompanionStorage";

export function SaintSettingsView() {
  const store = useSaintCompanionStore();

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Admin schema</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Google Sheets saint content fields</h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          Use these fields for a future no-CMS saint content export. Multi-value fields can be comma-separated in Sheets and parsed during import.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-stone text-xs uppercase text-burgundy">
                <th className="py-3 pr-4">Field</th>
                <th className="py-3 pr-4">Notes</th>
              </tr>
            </thead>
            <tbody>
              {getSaintAdminSchemaRows().map((row) => (
                <tr key={row.field} className="border-b border-stone">
                  <td className="py-3 pr-4 font-bold text-navy">{row.field}</td>
                  <td className="py-3 pr-4 leading-6 text-muted">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Local companions</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          You have {store.companions.length} saved saint companion{store.companions.length === 1 ? "" : "s"} in this browser.
        </p>
        <div className="mt-5 grid gap-3">
          <button type="button" onClick={() => download("daily-oratory-saint-companions.txt", exportSaintCompanionsAsText(store), "text/plain")} className="btn btn-secondary focus-ring">
            Export text
          </button>
          <button type="button" onClick={() => download("daily-oratory-saint-companions.json", exportSaintCompanionsAsJson(store), "application/json")} className="btn btn-secondary focus-ring">
            Export JSON
          </button>
          <button type="button" onClick={clearSaintCompanions} className="btn btn-secondary focus-ring">
            Delete local companions
          </button>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted">Saved companions stay in this browser only. There is no server copy.</p>
      </aside>
    </div>
  );
}

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
