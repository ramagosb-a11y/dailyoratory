"use client";

import { virtueDefinitions } from "@/data/virtueTracker";
import { exportVirtueTrackerAsJson, exportVirtueTrackerAsText, clearVirtueTrackerData, updateVirtueTrackerSettings, useVirtueTrackerStore } from "@/lib/virtueTrackerStorage";
import type { VirtueName } from "@/types/virtueTracker";

export function VirtueTrackerSettingsView() {
  const store = useVirtueTrackerStore();

  function toggleDefaultVirtue(virtue: VirtueName) {
    const next = store.settings.defaultVirtueFocus.includes(virtue)
      ? store.settings.defaultVirtueFocus.filter((item) => item !== virtue)
      : [...store.settings.defaultVirtueFocus, virtue];
    updateVirtueTrackerSettings({ defaultVirtueFocus: next });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Local settings</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Choose a gentle review rhythm.</h1>
        <div className="mt-6 grid gap-5">
          <fieldset className="grid gap-3">
            <legend className="form-label">Default virtue focus</legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {virtueDefinitions.map((virtue) => (
                <label key={virtue.id} className="rounded-md border border-stone bg-ivory p-3 text-sm">
                  <input
                    type="checkbox"
                    checked={store.settings.defaultVirtueFocus.includes(virtue.virtue)}
                    onChange={() => toggleDefaultVirtue(virtue.virtue)}
                    className="mr-2 accent-gold"
                  />
                  <span className="font-bold text-navy">{virtue.title}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="grid gap-2">
            <span className="form-label">Review cadence</span>
            <select
              value={store.settings.reviewCadence}
              onChange={(event) => updateVirtueTrackerSettings({ reviewCadence: event.target.value as "daily" | "weekly" | "monthly" })}
              className="form-field focus-ring"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>

          <label className="flex gap-3 rounded-md border border-stone bg-parchment p-4">
            <input
              type="checkbox"
              checked={store.settings.includeConfessionPrepReminder}
              onChange={(event) => updateVirtueTrackerSettings({ includeConfessionPrepReminder: event.target.checked })}
              className="mt-1 h-4 w-4 accent-gold"
            />
            <span>
              <span className="block text-sm font-bold text-navy">Show confession prep reminder</span>
              <span className="mt-1 block text-sm leading-6 text-muted">Use gentle language that encourages speaking with a priest when unsure.</span>
            </span>
          </label>
        </div>
      </section>

      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Local data</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          You have {store.checkIns.length} private check-in{store.checkIns.length === 1 ? "" : "s"} saved in this browser.
        </p>
        <div className="mt-5 grid gap-3">
          <button type="button" onClick={() => download("daily-oratory-virtue-tracker.txt", exportVirtueTrackerAsText(store), "text/plain")} className="btn btn-secondary focus-ring">
            Export text
          </button>
          <button type="button" onClick={() => download("daily-oratory-virtue-tracker.json", exportVirtueTrackerAsJson(store), "application/json")} className="btn btn-secondary focus-ring">
            Export JSON
          </button>
          <button type="button" onClick={clearVirtueTrackerData} className="btn btn-secondary focus-ring">
            Delete local data
          </button>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted">Deleting local data removes it from this browser only. There is no server copy.</p>
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
