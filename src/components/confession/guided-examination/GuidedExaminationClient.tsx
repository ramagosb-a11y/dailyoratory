"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { trackEvent } from "@/lib/analytics";
import {
  guidedExaminationPaths,
  stateOfLifeCategories,
} from "@/data/guidedExamination";
import {
  buildGuidedExaminationReportText,
  clearAllGuidedExaminationData,
  emptyGuidedExamenStore,
  useGuidedExamenStore,
  useGuidedExaminationReport,
} from "@/lib/guidedExaminationStorage";
import type {
  GuidedExamenStore,
  GuidedExaminationPath,
  GuidedExaminationSection,
  GuidedPrompt,
} from "@/types/guidedExamination";

export function ExaminationOverview() {
  const [showHowTo, setShowHowTo] = useState(false);
  const [clearMessage, setClearMessage] = useState<string | null>(null);

  function clearAllPriorExaminationData() {
    clearAllGuidedExaminationData();
    setClearMessage("Prior examination data cleared from this browser.");
  }

  return (
    <div className="grid gap-10">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Guided Examination of Conscience</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Prepare for Confession with truth and peace.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            Choose a path, read each prompt prayerfully, mark what you may need to bring to Confession, and keep
            private notes only in this browser.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/confession/examination/ten-commandments"
              className="btn btn-primary focus-ring"
              eventName="confession_examination_start"
              eventParams={{
                path: "ten-commandments",
                entry_point: "overview-hero",
              }}
            >
              Start examination
            </TrackedLink>
            <button
              type="button"
              onClick={() => setShowHowTo((value) => !value)}
              className="btn btn-secondary focus-ring"
              aria-expanded={showHowTo}
              aria-controls="how-to-examination"
            >
              How to go
            </button>
            <button type="button" onClick={clearAllPriorExaminationData} className="btn btn-secondary focus-ring">
              Clear all prior examination data
            </button>
          </div>
          {clearMessage ? <p className="mt-3 text-sm leading-7 text-muted">{clearMessage}</p> : null}
        </div>
        <PrivacyNotice />
      </section>

      {showHowTo ? <HowToPanel /> : null}

      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Paths</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Choose a path through the examination.</h2>
          </div>
          <Link href="/confession/examination/review" className="btn btn-secondary focus-ring">
            Review marked items
          </Link>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guidedExaminationPaths.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </div>
      </section>

      <section id="report" aria-labelledby="confession-report-heading" className="scroll-mt-24 grid gap-5">
        <div className="dashboard-card p-5 sm:p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Saved report</p>
          <h2 id="confession-report-heading" className="font-display mt-2 text-4xl font-semibold text-navy">
            Confession Companion Report
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            This report gathers only the prompts you mark and the notes you write on this device. If nothing is saved
            yet, begin a path above and return here when you are ready.
          </p>
        </div>
        <ExaminationReviewHub embedded />
      </section>
    </div>
  );
}

export function GuidedExaminationPathClient({ path }: { path: GuidedExaminationPath }) {
  const [store, setStore, storageAvailable] = useGuidedExamenStore(path.storageKey);
  const [stepIndex, setStepIndex] = useState(0);
  const [view, setView] = useState<"select" | "step" | "review">(path.id === "state-of-life" ? "select" : "step");
  const contentTopRef = useRef<HTMLElement | null>(null);
  const hasRenderedRef = useRef(false);

  const selectedStateCategories = useMemo(() => {
    if (path.id !== "state-of-life") return path.sections;
    const selectedIds = store.selectedCategoryIds?.length
      ? store.selectedCategoryIds
      : ["general-christian-duties"];
    return stateOfLifeCategories.filter((category) => selectedIds.includes(category.id));
  }, [path.id, path.sections, store.selectedCategoryIds]);

  const sections = path.id === "state-of-life" ? selectedStateCategories : path.sections;
  const safeStepIndex = Math.min(stepIndex, Math.max(0, sections.length - 1));
  const currentSection = sections[safeStepIndex];
  const totalPrompts = sections.reduce((sum, section) => sum + section.prompts.length, 0);
  const completedPrompts = sections.reduce(
    (sum, section) =>
      sum +
      section.prompts.filter((prompt) => store.markedPromptIds.includes(prompt.id) || store.notesByPromptId[prompt.id])
        .length,
    0,
  );

  useEffect(() => {
    if (!hasRenderedRef.current) {
      hasRenderedRef.current = true;
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    contentTopRef.current?.scrollIntoView({
      block: "start",
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [stepIndex, view]);

  function toggleCategory(categoryId: string) {
    const selected = new Set(store.selectedCategoryIds ?? []);
    if (selected.has(categoryId)) selected.delete(categoryId);
    else selected.add(categoryId);
    setStore({ ...store, selectedCategoryIds: Array.from(selected) });
  }

  function togglePrompt(promptId: string) {
    const marked = new Set(store.markedPromptIds);
    if (marked.has(promptId)) marked.delete(promptId);
    else marked.add(promptId);
    setStore({ ...store, markedPromptIds: Array.from(marked) });
  }

  function saveNote(promptId: string, note: string) {
    setStore({
      ...store,
      notesByPromptId: {
        ...store.notesByPromptId,
        [promptId]: note.slice(0, 1200),
      },
    });
  }

  function clearAllPriorExaminationData() {
    clearAllGuidedExaminationData();
    setStore(emptyGuidedExamenStore, true);
    setStepIndex(0);
    setView(path.id === "state-of-life" ? "select" : "step");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <Link href="/confession/examination" className="text-link focus-ring text-sm">
          Back to paths
        </Link>
        <p className="mt-5 text-xs font-bold uppercase text-burgundy">Examination path</p>
        <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">{path.title}</h1>
        <p className="mt-3 text-sm leading-7 text-muted">{path.description}</p>
        <div className="mt-5 card-parchment p-4">
          <p className="text-xs font-bold uppercase text-burgundy">Opening prayer</p>
          <p className="mt-2 text-sm leading-7 text-navy">{path.openingPrayer}</p>
        </div>
        <ProgressMeter completed={completedPrompts} total={totalPrompts} />
        <div className="mt-5 grid gap-3">
          <button type="button" onClick={clearAllPriorExaminationData} className="btn btn-secondary focus-ring">
            Clear all prior examination data
          </button>
        </div>
        {!storageAvailable ? (
          <p className="mt-4 rounded-md border border-burgundy/30 bg-parchment p-3 text-sm leading-6 text-burgundy">
            LocalStorage is unavailable, so marks and notes may not persist after refresh.
          </p>
        ) : null}
      </aside>

      <section ref={contentTopRef} className="dashboard-card scroll-mt-24 p-5 sm:p-6">
        {path.id === "state-of-life" && view === "select" ? (
          <StateCategorySelector
            selectedIds={store.selectedCategoryIds ?? []}
            onToggle={toggleCategory}
            onBegin={() => {
              if (!(store.selectedCategoryIds ?? []).length) {
                setStore({ ...store, selectedCategoryIds: ["general-christian-duties"] });
              }
              setView("step");
              setStepIndex(0);
            }}
          />
        ) : null}

        {view === "step" && currentSection ? (
          <PromptStep
            section={currentSection}
            pathTitle={path.shortTitle}
            stepIndex={safeStepIndex}
            totalSteps={sections.length}
            markedPromptIds={store.markedPromptIds}
            notesByPromptId={store.notesByPromptId}
            onTogglePrompt={togglePrompt}
            onSaveNote={saveNote}
            onBackToCategories={() => setView("select")}
            onPrevious={() => setStepIndex((value) => Math.max(0, value - 1))}
            onNext={() =>
              safeStepIndex === sections.length - 1 ? setView("review") : setStepIndex((value) => value + 1)
            }
            showCategoryBack={path.id === "state-of-life"}
          />
        ) : null}

        {view === "review" ? (
          <ReviewPanel
            path={path}
            sections={sections}
            store={store}
            onBack={() => setView("step")}
            onClear={clearAllPriorExaminationData}
          />
        ) : null}

        <div className="mt-8 rounded-md border border-stone bg-ivory p-4">
          <p className="text-xs font-bold uppercase text-burgundy">How to move through this</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Read each section prayerfully, mark anything you may need to confess, and use
            <span className="font-semibold text-navy"> Next</span> to keep going. The review is
            meant for the end of the path so it is easier to finish the prompts before moving on.
          </p>
        </div>
      </section>
    </div>
  );
}

export function ExaminationReviewHub({ embedded = false }: { embedded?: boolean }) {
  const [resetKey, setResetKey] = useState(0);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const report = useGuidedExaminationReport();

  function clearAllPrivateData() {
    clearAllGuidedExaminationData();
    setResetKey((value) => value + 1);
  }

  async function copyReportText() {
    try {
      await navigator.clipboard.writeText(buildGuidedExaminationReportText(report));
      setCopyMessage("Report text copied from this device.");
    } catch {
      setCopyMessage("Unable to copy report text on this browser.");
    }
  }

  return (
    <div className="grid gap-8">
      {embedded ? null : <PrivacyNotice />}
      {embedded ? (
        <section className="card-parchment p-5 sm:p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Private report actions</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">Open a clean page for intentional printing or copying.</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Open a clean page for intentional printing or copying. The report stays on this device.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/confession/examination/print" className="btn btn-primary focus-ring min-h-12 justify-center">
              Open print-safe page
            </Link>
            <button type="button" onClick={copyReportText} className="btn btn-secondary focus-ring min-h-12">
              Copy text
            </button>
          </div>
          <p aria-live="polite" className="mt-3 text-sm leading-7 text-muted">
            {copyMessage ?? ""}
          </p>
        </section>
      ) : null}
      <section className="dashboard-card p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">
              {embedded ? "Pastoral note" : "Opening prayer"}
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-navy">
              {embedded
                ? "If you are unsure how to confess something, speak simply and honestly with a priest. This report remains only on this device."
                : guidedExaminationPaths[0]?.openingPrayer}
            </p>
          </div>
          <button type="button" onClick={clearAllPrivateData} className="btn btn-secondary focus-ring">
            Clear all prior examination data
          </button>
        </div>
      </section>

      <div className="grid gap-5">
        {guidedExaminationPaths.map((path) => (
          <ReviewPathSummary key={`${path.id}-${resetKey}`} path={path} />
        ))}
      </div>

      <section className="dashboard-card p-5 sm:p-6">
        <p className="text-sm font-bold leading-7 text-navy">
          Confess honestly to a priest, and ask for guidance when you are unsure. This guide does not determine mortal
          or venial sin.
        </p>
        <div className="mt-5 card-parchment p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Act of Contrition</p>
          <p className="mt-2 text-sm leading-7 text-navy">{guidedExaminationPaths[0]?.actOfContrition}</p>
        </div>
      </section>
    </div>
  );
}

function ReviewPathSummary({ path }: { path: GuidedExaminationPath }) {
  const [store] = useGuidedExamenStore(path.storageKey);
  const selectedSections = useMemo(() => {
    if (path.id !== "state-of-life") return path.sections;
    const selectedIds = store.selectedCategoryIds?.length ? store.selectedCategoryIds : stateOfLifeCategories.map((category) => category.id);
    return stateOfLifeCategories.filter((category) => selectedIds.includes(category.id));
  }, [path.id, path.sections, store.selectedCategoryIds]);
  const marked = new Set(store.markedPromptIds);
  const visibleSections = selectedSections
    .map((section) => ({
      section,
      prompts: section.prompts.filter((prompt) => marked.has(prompt.id) || store.notesByPromptId[prompt.id]),
    }))
    .filter((group) => group.prompts.length);

  return (
    <section className="card p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">{path.shortTitle}</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{path.title}</h2>
        </div>
        <Link href={path.href} className="btn btn-secondary focus-ring">
          Open path
        </Link>
      </div>
      {visibleSections.length ? (
        <div className="mt-5 grid gap-4">
          {visibleSections.map(({ section, prompts }) => (
            <div key={section.id} className="rounded-md border border-stone bg-ivory p-4">
              <h3 className="font-display text-2xl font-semibold text-navy">{section.title}</h3>
              <ul className="mt-3 grid gap-3">
                {prompts.map((prompt) => (
                  <li key={prompt.id} className="rounded-md border border-stone bg-parchment p-3">
                    {marked.has(prompt.id) ? <p className="text-sm font-bold leading-6 text-navy">{prompt.text}</p> : null}
                    {store.notesByPromptId[prompt.id] ? (
                      <p className="mt-2 text-sm leading-7 text-muted">
                        <span className="font-bold text-burgundy">Note: </span>
                        {store.notesByPromptId[prompt.id]}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm leading-7 text-muted">
          No report is saved for this path yet. Begin the examination when you are ready, and any marked prompts or
          notes will appear here on this device.
        </p>
      )}
    </section>
  );
}

function PathCard({ path, label = "Open path" }: { path: GuidedExaminationPath; label?: string }) {
  return (
    <TrackedLink
      href={path.href}
      className="card resource-card focus-ring block p-5"
      eventName="confession_examination_start"
      eventParams={{
        path: path.id,
        entry_point: "path-card",
      }}
    >
      <span className="text-xs font-bold uppercase text-burgundy">{path.shortTitle}</span>
      <h3 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{path.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{path.description}</p>
      <span className="mt-5 inline-flex text-sm font-bold text-burgundy">{label}</span>
    </TrackedLink>
  );
}

function PrivacyNotice() {
  return (
    <aside className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">Private local preparation</p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Your notes stay on this device.</h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        Marked prompts and private notes are saved only in browser localStorage for this site. They are not sent to a
        server. Use the clear all prior examination data button when you want to remove them.
      </p>
      <p className="mt-3 text-sm leading-7 text-muted">
        This guide does not determine mortal or venial sin. When unsure, speak simply and honestly with a priest.
      </p>
    </aside>
  );
}

function HowToPanel() {
  const steps = [
    "Choose a path.",
    "Read each prompt prayerfully.",
    "Mark items to bring to Confession.",
    "Add private notes if helpful.",
    "Review, pray the Act of Contrition, then go to Confession.",
  ];

  return (
    <section id="how-to-examination" className="dashboard-card p-5 sm:p-6">
      <p className="text-xs font-bold uppercase text-burgundy">How to go</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Use the guide simply.</h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step} className="card-parchment p-4 text-sm font-semibold leading-6 text-navy">
            <span className="mb-2 block text-xs font-bold uppercase text-burgundy">Step {index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}

function StateCategorySelector({
  selectedIds,
  onToggle,
  onBegin,
}: {
  selectedIds: string[];
  onToggle: (categoryId: string) => void;
  onBegin: () => void;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase text-burgundy">State of life</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">
        Which duties or relationships apply to your current state of life?
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        Select one or more categories. The guided review will show only the categories you choose.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {stateOfLifeCategories.map((category) => {
          const checked = selectedIds.includes(category.id);
          return (
            <label
              key={category.id}
              className={`focus-within:ring-focus rounded-md border p-4 transition ${
                checked ? "border-gold bg-gold-soft" : "border-stone bg-ivory hover:border-gold"
              }`}
            >
              <span className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(category.id)}
                  className="mt-1 h-4 w-4 accent-gold"
                  aria-describedby={`${category.id}-description`}
                />
                <span>
                  <span className="block text-sm font-bold text-navy">{category.title}</span>
                  <span id={`${category.id}-description`} className="mt-1 block text-sm leading-6 text-muted">
                    {category.reflection}
                  </span>
                </span>
              </span>
            </label>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => {
          trackEvent("confession_examination_start", {
            path: "state-of-life",
            entry_point: "state-category-selector",
            selected_categories: selectedIds.length || 1,
          });
          onBegin();
        }}
        className="btn btn-primary focus-ring mt-6"
      >
        Begin selected categories
      </button>
    </div>
  );
}

function PromptStep({
  section,
  pathTitle,
  stepIndex,
  totalSteps,
  markedPromptIds,
  notesByPromptId,
  onTogglePrompt,
  onSaveNote,
  onBackToCategories,
  onPrevious,
  onNext,
  showCategoryBack,
}: {
  section: GuidedExaminationSection;
  pathTitle: string;
  stepIndex: number;
  totalSteps: number;
  markedPromptIds: string[];
  notesByPromptId: Record<string, string>;
  onTogglePrompt: (promptId: string) => void;
  onSaveNote: (promptId: string, note: string) => void;
  onBackToCategories: () => void;
  onPrevious: () => void;
  onNext: () => void;
  showCategoryBack: boolean;
}) {
  const marked = new Set(markedPromptIds);
  const isLastStep = stepIndex === totalSteps - 1;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase text-burgundy">{pathTitle}</p>
        <span className="season-pill">
          Step {stepIndex + 1} of {totalSteps}
        </span>
      </div>
      <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy">{section.title}</h2>
      {section.scripture ? (
        <p className="mt-4 rounded-md border border-stone bg-parchment p-4 font-display text-2xl leading-8 text-navy">
          {section.scripture}
        </p>
      ) : null}
      <p className="mt-4 text-sm leading-7 text-muted">{section.reflection}</p>

      <div className="mt-6 grid gap-4">
        {section.prompts.map((prompt) => (
          <PromptChecklistItem
            key={prompt.id}
            prompt={prompt}
            checked={marked.has(prompt.id)}
            note={notesByPromptId[prompt.id] ?? ""}
            onToggle={() => onTogglePrompt(prompt.id)}
            onSaveNote={(note) => onSaveNote(prompt.id, note)}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {showCategoryBack ? (
          <button type="button" onClick={onBackToCategories} className="btn btn-secondary focus-ring">
            Back to categories
          </button>
        ) : (
          <Link href="/confession/examination" className="btn btn-secondary focus-ring">
            Back to paths
          </Link>
        )}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={onPrevious} disabled={stepIndex === 0} className="btn btn-secondary focus-ring">
            Previous
          </button>
          <button type="button" onClick={onNext} className="btn btn-primary focus-ring">
            {isLastStep ? "Final review" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

function PromptChecklistItem({
  prompt,
  checked,
  note,
  onToggle,
  onSaveNote,
}: {
  prompt: GuidedPrompt;
  checked: boolean;
  note: string;
  onToggle: () => void;
  onSaveNote: (note: string) => void;
}) {
  return (
    <article className="card p-4">
      <label className="flex gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="mt-1 h-4 w-4 accent-gold"
          aria-describedby={`${prompt.id}-note-label`}
        />
        <span className="text-sm font-bold leading-6 text-navy">
          <span className="block text-xs uppercase text-burgundy">Mark for confession</span>
          {prompt.text}
        </span>
      </label>
      <label className="mt-4 grid gap-2" id={`${prompt.id}-note-label`}>
        <span className="form-label">Private note for this prompt</span>
        <textarea
          value={note}
          onChange={(event) => onSaveNote(event.target.value)}
          className="form-field textarea-field focus-ring"
          placeholder="Optional note. Stored locally only."
          aria-label={`Private note for: ${prompt.text}`}
        />
      </label>
    </article>
  );
}

function ReviewPanel({
  path,
  sections,
  store,
  onBack,
  onClear,
}: {
  path: GuidedExaminationPath;
  sections: GuidedExaminationSection[];
  store: GuidedExamenStore;
  onBack: () => void;
  onClear: () => void;
}) {
  const marked = new Set(store.markedPromptIds);
  const pathIndex = guidedExaminationPaths.findIndex((item) => item.id === path.id);
  const nextPath = pathIndex >= 0 ? guidedExaminationPaths[pathIndex + 1] : undefined;
  const hasContent = sections.some((section) =>
    section.prompts.some((prompt) => marked.has(prompt.id) || store.notesByPromptId[prompt.id]),
  );

  return (
    <div>
      <p className="text-xs font-bold uppercase text-burgundy">Final review</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Bring this to prayer and Confession.</h2>
      <div className="mt-5 card-parchment p-4">
        <p className="text-xs font-bold uppercase text-burgundy">Opening prayer</p>
        <p className="mt-2 text-sm leading-7 text-navy">{path.openingPrayer}</p>
      </div>

      <div className="mt-6 grid gap-5">
        {hasContent ? (
          sections.map((section) => {
            const visiblePrompts = section.prompts.filter(
              (prompt) => marked.has(prompt.id) || store.notesByPromptId[prompt.id],
            );
            if (!visiblePrompts.length) return null;

            return (
              <section key={section.id} className="card p-4">
                <h3 className="font-display text-3xl font-semibold text-navy">{section.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {visiblePrompts.map((prompt) => (
                    <li key={prompt.id} className="rounded-md border border-stone bg-ivory p-4">
                      {marked.has(prompt.id) ? (
                        <p className="text-sm font-bold leading-6 text-navy">{prompt.text}</p>
                      ) : null}
                      {store.notesByPromptId[prompt.id] ? (
                        <p className="mt-2 text-sm leading-7 text-muted">
                          <span className="font-bold text-burgundy">Note: </span>
                          {store.notesByPromptId[prompt.id]}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })
        ) : (
          <div className="card p-5">
            <p className="text-sm leading-7 text-muted">
              No prompts or notes are saved for this path yet. You can still make a simple confession and ask the priest
              for help.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 card-parchment p-5">
        <p className="text-sm font-bold leading-7 text-navy">{path.reviewEncouragement}</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          This guide does not determine mortal or venial sin. Confess honestly to a priest, and ask for guidance when
          unsure.
        </p>
      </div>

      <div className="mt-6 card-parchment p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Act of Contrition</p>
        <p className="mt-2 text-sm leading-7 text-navy">{path.actOfContrition}</p>
      </div>

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={onBack} className="btn btn-secondary focus-ring">
            Back to prompts
          </button>
          <button type="button" onClick={onClear} className="btn btn-secondary focus-ring">
            Clear all prior examination data
          </button>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/confession/examination/print" className="btn btn-secondary focus-ring">
            Open print-safe page
          </Link>
          <Link href="/confession/examination/review" className="btn btn-secondary focus-ring">
            View full review
          </Link>
          {nextPath ? (
            <Link href={nextPath.href} className="btn btn-primary focus-ring">
              Continue to {nextPath.shortTitle}
            </Link>
          ) : (
            <Link href="/confession/examination/review" className="btn btn-primary focus-ring">
              Finish with full review
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function ProgressMeter({ completed, total }: { completed: number; total: number }) {
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase text-burgundy">Progress</p>
        <p className="text-sm font-bold text-navy">
          {completed} / {total} prompts
        </p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone">
        <div className="h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
