"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  ruleOfLifePracticeOptions,
  ruleOfLifeReviewRhythmOptions,
  ruleOfLifeSpiritualSeasonOptions,
  ruleOfLifeTimeOptions,
  ruleOfLifeVirtueFocusOptions,
} from "@/data/ruleOfLife";
import {
  createSavedRuleOfLife,
  defaultRuleDraft,
  estimateDailyMinutes,
  getAvailableTime,
  saveRuleOfLife,
  useSavedRuleOfLife,
} from "@/lib/ruleOfLifeStorage";
import type {
  RuleOfLifeAvailableTime,
  RuleOfLifeBuilderDraft,
  RuleOfLifeReviewRhythm,
  RuleOfLifeSpiritualSeason,
  SavedRuleOfLife,
} from "@/types/ruleOfLife";
import { RuleSummary } from "@/components/rule-of-life/RuleSummary";

const steps = [
  "Choose spiritual season",
  "Choose available time",
  "Choose daily practices",
  "Choose weekly/monthly practices",
  "Choose virtue focus",
  "Choose review rhythm",
  "Generate rule",
] as const;

export function RuleBuilder() {
  const router = useRouter();
  const savedRule = useSavedRuleOfLife();
  const savedDraft = savedRule ? toDraft(savedRule) : null;
  const [draftOverride, setDraftOverride] = useState<RuleOfLifeBuilderDraft | null>(null);
  const draft = draftOverride ?? savedDraft ?? defaultRuleDraft;
  const [stepIndex, setStepIndex] = useState(0);
  const dailyMinutes = estimateDailyMinutes(draft);
  const selectedTime = getAvailableTime(draft.availableTime);
  const isLastStep = stepIndex === steps.length - 1;

  function updateDraft(updater: (value: RuleOfLifeBuilderDraft) => RuleOfLifeBuilderDraft) {
    setDraftOverride(updater(draft));
  }

  const title = useMemo(() => {
    const season = ruleOfLifeSpiritualSeasonOptions.find((option) => option.id === draft.spiritualSeason);
    return season ? `${season.label} rule` : "My Daily Rule of Life";
  }, [draft.spiritualSeason]);

  function saveGeneratedRule() {
    const rule = createSavedRuleOfLife(draft, title);
    saveRuleOfLife(rule);
    router.push("/rule-of-life/my-rule");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Builder steps</p>
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
          <p className="text-xs font-bold uppercase text-burgundy">Estimated daily time</p>
          <p className="mt-1 text-2xl font-bold text-navy">{dailyMinutes} minutes</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Your chosen time is {selectedTime.label.toLowerCase()}. This estimate is a guide, not a measure of holiness.
          </p>
        </div>
      </aside>

      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Step {stepIndex + 1} of {steps.length}</p>
        <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">{steps[stepIndex]}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Build a daily rule with peace. Choose what helps you remain with Christ, and leave room for real life.
        </p>

        <div className="mt-6">
          {stepIndex === 0 ? <SpiritualSeasonStep draft={draft} setDraft={updateDraft} /> : null}
          {stepIndex === 1 ? <AvailableTimeStep draft={draft} setDraft={updateDraft} /> : null}
          {stepIndex === 2 ? (
            <PracticeStep
              title="Daily practices"
              description="Begin with a few simple daily practices. More can be added later if peace permits."
              practiceIds={draft.dailyPracticeIds}
              practices={ruleOfLifePracticeOptions.filter((practice) => practice.cadence === "daily")}
              onToggle={(id) => updateDraft((value) => ({ ...value, dailyPracticeIds: toggle(value.dailyPracticeIds, id) }))}
            />
          ) : null}
          {stepIndex === 3 ? (
            <PracticeStep
              title="Weekly and monthly practices"
              description="Choose anchors that keep the rule sacramental, communal, and merciful."
              practiceIds={draft.periodicPracticeIds}
              practices={ruleOfLifePracticeOptions.filter((practice) => practice.cadence !== "daily")}
              onToggle={(id) => updateDraft((value) => ({ ...value, periodicPracticeIds: toggle(value.periodicPracticeIds, id) }))}
            />
          ) : null}
          {stepIndex === 4 ? <VirtueStep draft={draft} setDraft={updateDraft} /> : null}
          {stepIndex === 5 ? <ReviewStep draft={draft} setDraft={updateDraft} /> : null}
          {stepIndex === 6 ? <RuleSummary rule={draft} /> : null}
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
          {isLastStep ? (
            <button type="button" onClick={saveGeneratedRule} className="btn btn-primary focus-ring">
              Save my rule
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStepIndex((value) => Math.min(steps.length - 1, value + 1))}
              className="btn btn-primary focus-ring"
            >
              Continue
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function SpiritualSeasonStep({
  draft,
  setDraft,
}: {
  draft: RuleOfLifeBuilderDraft;
  setDraft: (updater: (value: RuleOfLifeBuilderDraft) => RuleOfLifeBuilderDraft) => void;
}) {
  return (
    <OptionGrid>
      {ruleOfLifeSpiritualSeasonOptions.map((option) => (
        <OptionButton
          key={option.id}
          selected={draft.spiritualSeason === option.id}
          title={option.label}
          description={option.description}
          onClick={() => setDraft((value) => ({ ...value, spiritualSeason: option.id as RuleOfLifeSpiritualSeason }))}
        />
      ))}
    </OptionGrid>
  );
}

function AvailableTimeStep({
  draft,
  setDraft,
}: {
  draft: RuleOfLifeBuilderDraft;
  setDraft: (updater: (value: RuleOfLifeBuilderDraft) => RuleOfLifeBuilderDraft) => void;
}) {
  return (
    <OptionGrid>
      {ruleOfLifeTimeOptions.map((option) => (
        <OptionButton
          key={option.id}
          selected={draft.availableTime === option.id}
          title={option.label}
          description={option.description}
          onClick={() => setDraft((value) => ({ ...value, availableTime: option.id as RuleOfLifeAvailableTime }))}
        />
      ))}
    </OptionGrid>
  );
}

function VirtueStep({
  draft,
  setDraft,
}: {
  draft: RuleOfLifeBuilderDraft;
  setDraft: (updater: (value: RuleOfLifeBuilderDraft) => RuleOfLifeBuilderDraft) => void;
}) {
  return (
    <OptionGrid>
      {ruleOfLifeVirtueFocusOptions.map((option) => (
        <OptionButton
          key={option.id}
          selected={draft.virtueFocusId === option.id}
          title={option.label}
          description={`${option.description} Opposing vice: ${option.opposingVice}.`}
          onClick={() => setDraft((value) => ({ ...value, virtueFocusId: option.id }))}
        />
      ))}
    </OptionGrid>
  );
}

function ReviewStep({
  draft,
  setDraft,
}: {
  draft: RuleOfLifeBuilderDraft;
  setDraft: (updater: (value: RuleOfLifeBuilderDraft) => RuleOfLifeBuilderDraft) => void;
}) {
  return (
    <OptionGrid>
      {ruleOfLifeReviewRhythmOptions.map((option) => (
        <OptionButton
          key={option.id}
          selected={draft.reviewRhythm === option.id}
          title={option.label}
          description={option.description}
          onClick={() => setDraft((value) => ({ ...value, reviewRhythm: option.id as RuleOfLifeReviewRhythm }))}
        />
      ))}
    </OptionGrid>
  );
}

function PracticeStep({
  title,
  description,
  practices,
  practiceIds,
  onToggle,
}: {
  title: string;
  description: string;
  practices: typeof ruleOfLifePracticeOptions;
  practiceIds: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <p className="text-sm leading-7 text-muted">{description}</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {practices.map((practice) => {
          const selected = practiceIds.includes(practice.id);

          return (
            <label
              key={practice.id}
              className={`focus-within:outline-gold rounded-md border p-4 transition ${
                selected ? "border-gold bg-gold-soft/50" : "border-stone bg-ivory hover:border-gold"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => onToggle(practice.id)}
                  className="mt-1"
                  aria-label={`${selected ? "Remove" : "Add"} ${practice.title}`}
                />
                <span>
                  <span className="block text-sm font-bold text-navy">{practice.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{practice.description}</span>
                  <span className="mt-2 flex flex-wrap gap-2">
                    <span className="season-pill bg-background">{practice.cadence}</span>
                    {practice.suggestedDurationMinutes ? (
                      <span className="season-pill bg-background">{practice.suggestedDurationMinutes} min</span>
                    ) : null}
                  </span>
                </span>
              </div>
            </label>
          );
        })}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase text-burgundy">{title}</p>
    </div>
  );
}

function OptionGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 md:grid-cols-2">{children}</div>;
}

function OptionButton({
  selected,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring rounded-md border p-4 text-left transition ${
        selected ? "border-gold bg-gold-soft/50" : "border-stone bg-ivory hover:border-gold"
      }`}
    >
      <span className="block text-sm font-bold text-navy">{title}</span>
      <span className="mt-2 block text-sm leading-6 text-muted">{description}</span>
    </button>
  );
}

function toggle(items: string[], id: string) {
  return items.includes(id) ? items.filter((item) => item !== id) : [...items, id];
}

function toDraft(rule: SavedRuleOfLife): RuleOfLifeBuilderDraft {
  return {
    spiritualSeason: rule.spiritualSeason,
    availableTime: rule.availableTime,
    dailyPracticeIds: rule.dailyPracticeIds,
    periodicPracticeIds: rule.periodicPracticeIds,
    virtueFocusId: rule.virtueFocusId,
    reviewRhythm: rule.reviewRhythm,
  };
}
