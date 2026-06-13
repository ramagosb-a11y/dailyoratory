"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { viceDefinitions, virtueDefinitions } from "@/data/virtueTracker";
import { getContraryVirtues, getViceLabel, getVirtueLabel } from "@/lib/virtueTracker";
import { saveVirtueCheckIn, useVirtueTrackerStore } from "@/lib/virtueTrackerStorage";
import type { PatternTenderness, ViceName, VirtueName } from "@/types/virtueTracker";

const tendernessOptions: { value: PatternTenderness; label: string; description: string }[] = [
  { value: "light", label: "Light", description: "A small temptation or passing pattern." },
  { value: "noticeable", label: "Noticeable", description: "Something worth bringing to prayer." },
  { value: "recurring", label: "Recurring", description: "A repeated pattern that may need confession, counsel, or a concrete boundary." },
];

export function VirtueCheckInForm() {
  const router = useRouter();
  const store = useVirtueTrackerStore();
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [date, setDate] = useState(today);
  const [virtueFocus, setVirtueFocus] = useState<VirtueName[]>(store.settings.defaultVirtueFocus);
  const [viceStruggles, setViceStruggles] = useState<ViceName[]>([]);
  const [patternTenderness, setPatternTenderness] = useState<PatternTenderness>("noticeable");
  const [graceReceived, setGraceReceived] = useState("");
  const [struggleNotes, setStruggleNotes] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [prayer, setPrayer] = useState("");
  const [confessionPrepNote, setConfessionPrepNote] = useState("");
  const [bringToConfession, setBringToConfession] = useState(false);

  const suggestedContraryVirtues = useMemo(
    () => Array.from(new Set(viceStruggles.flatMap(getContraryVirtues))),
    [viceStruggles],
  );

  function toggleVirtue(virtue: VirtueName) {
    setVirtueFocus((current) =>
      current.includes(virtue) ? current.filter((item) => item !== virtue) : [...current, virtue],
    );
  }

  function toggleVice(vice: ViceName) {
    setViceStruggles((current) =>
      current.includes(vice) ? current.filter((item) => item !== vice) : [...current, vice],
    );
  }

  function submitCheckIn() {
    saveVirtueCheckIn({
      date,
      virtueFocus,
      viceStruggles,
      patternTenderness,
      graceReceived,
      struggleNotes,
      nextStep,
      prayer,
      confessionPrepNote,
      bringToConfession,
    });
    router.push("/virtue-tracker/dashboard");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Gentle check-in</p>
        <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">Notice grace before struggle.</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          This is a private reflection aid, not a scorecard. Name what is true, ask for grace, and choose one next step.
        </p>
        {suggestedContraryVirtues.length ? (
          <div className="mt-5 rounded-md border border-stone bg-parchment p-4">
            <p className="text-xs font-bold uppercase text-burgundy">Contrary virtues to consider</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestedContraryVirtues.map((virtue) => (
                <button
                  key={virtue}
                  type="button"
                  onClick={() => toggleVirtue(virtue)}
                  className="season-pill focus-ring hover:border-gold hover:text-navy"
                >
                  {getVirtueLabel(virtue)}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </aside>

      <section className="dashboard-card p-5 sm:p-6">
        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="form-label">Date</span>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="form-field focus-ring" />
          </label>

          <fieldset className="grid gap-3">
            <legend className="form-label">Virtues I want to practice</legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {virtueDefinitions.map((virtue) => (
                <label key={virtue.id} className="focus-within:ring-gold rounded-md border border-stone bg-ivory p-3 text-sm">
                  <input
                    type="checkbox"
                    checked={virtueFocus.includes(virtue.virtue)}
                    onChange={() => toggleVirtue(virtue.virtue)}
                    className="mr-2 accent-gold"
                  />
                  <span className="font-bold text-navy">{virtue.title}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="grid gap-3">
            <legend className="form-label">Struggles or temptations noticed</legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {viceDefinitions.map((vice) => (
                <label key={vice.id} className="focus-within:ring-gold rounded-md border border-stone bg-ivory p-3 text-sm">
                  <input
                    type="checkbox"
                    checked={viceStruggles.includes(vice.vice)}
                    onChange={() => toggleVice(vice.vice)}
                    className="mr-2 accent-gold"
                  />
                  <span className="font-bold text-navy">{vice.title}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="grid gap-3">
            <legend className="form-label">How should I hold this pattern?</legend>
            <div className="grid gap-3 sm:grid-cols-3">
              {tendernessOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPatternTenderness(option.value)}
                  className={`focus-ring rounded-md border p-4 text-left transition ${
                    patternTenderness === option.value ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted hover:border-gold"
                  }`}
                >
                  <span className="block text-sm font-bold text-navy">{option.label}</span>
                  <span className="mt-1 block text-xs leading-5">{option.description}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <Field label="Grace received" value={graceReceived} onChange={setGraceReceived} placeholder="Where did grace arrive before effort?" />
          <Field label="Struggle notes" value={struggleNotes} onChange={setStruggleNotes} placeholder="What did I notice honestly, without panic?" />
          <Field label="One grace-filled next step" value={nextStep} onChange={setNextStep} placeholder="A small repair, prayer, boundary, or act of virtue." />
          <Field label="Prayer" value={prayer} onChange={setPrayer} placeholder="Lord, help me..." />

          <label className="flex gap-3 rounded-md border border-stone bg-parchment p-4">
            <input
              type="checkbox"
              checked={bringToConfession}
              onChange={(event) => setBringToConfession(event.target.checked)}
              className="mt-1 h-4 w-4 accent-gold"
            />
            <span>
              <span className="block text-sm font-bold text-navy">Keep this available for confession prep</span>
              <span className="mt-1 block text-sm leading-6 text-muted">This remains local only. It does not decide sin gravity.</span>
            </span>
          </label>

          {bringToConfession ? (
            <Field
              label="Confession prep note"
              value={confessionPrepNote}
              onChange={setConfessionPrepNote}
              placeholder={`Example: I should mention ${viceStruggles.map(getViceLabel).join(", ") || "this pattern"} and ask for guidance.`}
            />
          ) : null}

          <button type="button" onClick={submitCheckIn} className="btn btn-primary focus-ring justify-center">
            Save private check-in
          </button>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="form-label">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="form-field textarea-field focus-ring"
        placeholder={placeholder}
      />
    </label>
  );
}
