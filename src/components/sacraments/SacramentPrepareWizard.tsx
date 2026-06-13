"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { sacramentCompanions } from "@/data/sacramentCompanion";
import {
  startSacramentPreparation,
  updateSacramentPreparationSettings,
  useSacramentPreparationStore,
} from "@/lib/sacramentPreparationStorage";
import type { SacramentPreparationRole, SacramentPreparationSettings } from "@/types/sacramentCompanion";

const steps = ["Choose preparation", "Choose role", "Add parish note", "Begin"] as const;

const roleOptions: { value: SacramentPreparationRole; label: string; description: string }[] = [
  { value: "candidate", label: "Candidate", description: "I am preparing for a sacrament or OCIA." },
  { value: "parent", label: "Parent", description: "I am helping a child prepare." },
  { value: "sponsor", label: "Sponsor", description: "I am accompanying a candidate." },
  { value: "godparent", label: "Godparent", description: "I am preparing for Baptism support." },
  { value: "spouse", label: "Engaged person", description: "We are preparing for Matrimony." },
  { value: "caregiver", label: "Caregiver", description: "I am seeking pastoral care for illness." },
  { value: "returning-catholic", label: "Returning Catholic", description: "I am returning to Mass, confession, or parish life." },
  { value: "all", label: "Not sure", description: "Show broad preparation guidance." },
];

const preparingForOptions: { value: SacramentPreparationSettings["preparingFor"]; label: string }[] = [
  { value: "myself", label: "Myself" },
  { value: "child", label: "A child" },
  { value: "family-member", label: "A family member" },
  { value: "couple", label: "A couple" },
  { value: "parish-group", label: "A parish group" },
  { value: "not-sure", label: "Not sure" },
];

export function SacramentPrepareWizard() {
  const router = useRouter();
  const store = useSacramentPreparationStore();
  const [stepIndex, setStepIndex] = useState(0);
  const selectedCompanion =
    sacramentCompanions.find((companion) => companion.slug === store.settings.selectedCompanionSlug) ??
    sacramentCompanions[0];
  const recommended = useMemo(() => getRecommendedCompanions(store.settings.role, store.settings.preparingFor), [
    store.settings.role,
    store.settings.preparingFor,
  ]);

  function begin() {
    if (!selectedCompanion) return;
    startSacramentPreparation(selectedCompanion.slug, selectedCompanion.preparationSteps[0]?.id);
    router.push("/sacraments/my-preparation");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Preparation wizard</p>
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
        <div className="mt-5 card-parchment p-4">
          <p className="text-xs font-bold uppercase text-burgundy">Selected</p>
          <p className="mt-1 text-lg font-bold text-navy">{selectedCompanion?.title}</p>
          <p className="mt-2 text-sm leading-6 text-muted">Progress saves only on this device.</p>
        </div>
      </aside>

      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Step {stepIndex + 1} of {steps.length}</p>
        <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">{steps[stepIndex]}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          This companion supports preparation and parish conversation. It does not decide sacramental eligibility or replace parish requirements.
        </p>

        <div className="mt-6">
          {stepIndex === 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {sacramentCompanions.map((companion) => (
                <button
                  key={companion.slug}
                  type="button"
                  onClick={() => updateSacramentPreparationSettings({ selectedCompanionSlug: companion.slug })}
                  className={`focus-ring rounded-md border p-4 text-left transition ${
                    selectedCompanion?.slug === companion.slug ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                  }`}
                >
                  <span className="block text-sm font-bold text-navy">{companion.sacrament}</span>
                  <span className="mt-1 block text-sm leading-6">{companion.description}</span>
                </button>
              ))}
            </div>
          ) : null}

          {stepIndex === 1 ? (
            <div className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {roleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateSacramentPreparationSettings({ role: option.value })}
                    className={`focus-ring rounded-md border p-4 text-left transition ${
                      store.settings.role === option.value ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                    }`}
                  >
                    <span className="block text-sm font-bold text-navy">{option.label}</span>
                    <span className="mt-1 block text-sm leading-6">{option.description}</span>
                  </button>
                ))}
              </div>
              <label className="grid gap-2">
                <span className="form-label">Who are you preparing for?</span>
                <select
                  value={store.settings.preparingFor}
                  onChange={(event) =>
                    updateSacramentPreparationSettings({
                      preparingFor: event.target.value as SacramentPreparationSettings["preparingFor"],
                    })
                  }
                  className="form-field focus-ring"
                >
                  {preparingForOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          {stepIndex === 2 ? (
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="form-label">Parish name or reminder</span>
                <input
                  value={store.settings.parishName ?? ""}
                  onChange={(event) => updateSacramentPreparationSettings({ parishName: event.target.value })}
                  className="form-field focus-ring"
                  placeholder="Optional: parish name, contact, or next appointment"
                />
              </label>
              <div className="card-parchment p-4">
                <p className="text-xs font-bold uppercase text-burgundy">Recommended companions</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {recommended.map((companion) => (
                    <span key={companion.slug} className="season-pill bg-ivory">
                      {companion.sacrament}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {stepIndex === 3 ? (
            <div className="grid gap-5">
              <div className="card-parchment p-5">
                <p className="text-xs font-bold uppercase text-burgundy">Ready to begin</p>
                <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{selectedCompanion?.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{selectedCompanion?.pastoralNote}</p>
              </div>
              <button type="button" onClick={begin} className="btn btn-primary focus-ring">
                Begin preparation
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

function getRecommendedCompanions(role: SacramentPreparationRole, preparingFor: SacramentPreparationSettings["preparingFor"]) {
  return sacramentCompanions
    .map((companion) => ({
      companion,
      score:
        companion.roleChecklists.filter((item) => item.role === role).length +
        (preparingFor === "child" && companion.audience.includes("families") ? 4 : 0) +
        (preparingFor === "couple" && companion.slug === "marriage" ? 8 : 0) +
        (role === "returning-catholic" && companion.slug === "returning-catholic" ? 8 : 0) +
        (companion.featured ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.companion.title.localeCompare(b.companion.title))
    .slice(0, 4)
    .map((item) => item.companion);
}
