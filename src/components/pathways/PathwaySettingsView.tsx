"use client";

import { pathwayPaces, pathwayStages } from "@/data/pathways";
import { updatePathwaySettings, usePathwayProgressStore } from "@/lib/pathwayProgressStorage";
import type { PathwayPace, PathwaySettingsRecord } from "@/types/pathways";

const householdOptions: { value: PathwaySettingsRecord["household"]; label: string; description: string }[] = [
  { value: "not-sure", label: "Not sure", description: "Keep recommendations broad." },
  { value: "individual", label: "Individual", description: "For personal prayer and formation." },
  { value: "family", label: "Family", description: "For home prayer and family rhythms." },
  { value: "group", label: "Group", description: "For parish groups, prayer communities, or formation teams." },
];

const focusTagOptions = [
  "prayer",
  "confession",
  "rosary",
  "mass",
  "liturgical year",
  "virtue",
  "healing",
  "scripture",
  "adoration",
  "family",
  "mercy",
  "mission",
] as const;

export function PathwaySettingsView() {
  const store = usePathwayProgressStore();
  const settings = store.settings;

  function toggleTag(tag: string) {
    const tags = new Set(settings.focusTags);
    if (tags.has(tag)) {
      tags.delete(tag);
    } else {
      tags.add(tag);
    }
    updatePathwaySettings({ focusTags: Array.from(tags) });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <aside className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">How recommendations work</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Settings stay in localStorage on this device. They simply help sort pathways toward your current season, pace, and household.
        </p>
        <div className="mt-5 card-parchment p-4">
          <p className="text-xs font-bold uppercase text-burgundy">Current pace</p>
          <p className="mt-1 text-lg font-bold text-navy">{settings.availablePace}</p>
        </div>
      </aside>

      <div className="form-shell p-5 sm:p-6">
        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="form-label">Spiritual season</span>
            <select
              value={settings.spiritualSeason}
              onChange={(event) => updatePathwaySettings({ spiritualSeason: event.target.value as PathwaySettingsRecord["spiritualSeason"] })}
              className="form-field focus-ring"
            >
              {pathwayStages.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="form-helper">Choose the posture that best names your current place with the Lord.</span>
          </label>

          <label className="grid gap-2">
            <span className="form-label">Available pace</span>
            <select
              value={settings.availablePace}
              onChange={(event) => updatePathwaySettings({ availablePace: event.target.value as PathwayPace })}
              className="form-field focus-ring"
            >
              {pathwayPaces.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="form-helper">Gentle is best for most beginnings. Focused is useful for groups or retreat seasons.</span>
          </label>

          <fieldset className="grid gap-3">
            <legend className="form-label">Household</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {householdOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updatePathwaySettings({ household: option.value })}
                  className={`focus-ring rounded-md border p-4 text-left transition ${
                    settings.household === option.value ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                  }`}
                >
                  <span className="block text-sm font-bold text-navy">{option.label}</span>
                  <span className="mt-1 block text-sm leading-6">{option.description}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="grid gap-3">
            <legend className="form-label">Formation focus</legend>
            <div className="flex flex-wrap gap-2">
              {focusTagOptions.map((tag) => {
                const checked = settings.focusTags.includes(tag);

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`focus-ring rounded-md border px-3 py-2 text-sm font-bold transition ${
                      checked ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
            <p className="form-helper">Choose a few themes. You can change them anytime.</p>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
