"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  companionExaminationGuides,
  openingPrayer,
} from "@/data/examinationCompanion";
import { actOfContrition } from "@/data/guidedExamination";
import {
  examinationCompanionStorageKey,
  useExaminationCompanionStore,
} from "@/lib/examinationCompanionStorage";
import type {
  CompanionGuideId,
  CompanionPromptStatus,
  CompanionSinDetails,
  CompanionSinFrequency,
} from "@/types/examinationCompanion";

type CompanionView = "examine" | "list" | "confessional" | "history" | "prayers";
type PromptFilter = "all" | "unreviewed" | "confess" | "clear";
type SelectedConfessionItem = {
  id: string;
  guideTitle: string;
  sectionTitle: string;
  text: string;
  note: string;
  sinDetails?: CompanionSinDetails;
};

const frequencyOptions: { value: CompanionSinFrequency; label: string }[] = [
  { value: "once", label: "Once" },
  { value: "few-times", label: "A few times (2–3)" },
  { value: "several-times", label: "Several times (4–10)" },
  { value: "habitual", label: "Habitual / Frequent" },
  { value: "daily", label: "Daily" },
  { value: "unsure", label: "Unsure" },
];

const frequencyLabels = Object.fromEntries(
  frequencyOptions.map((option) => [option.value, option.label]),
) as Record<CompanionSinFrequency, string>;

const navItems: { id: CompanionView; label: string; shortLabel: string; symbol: string }[] = [
  { id: "examine", label: "Examine Conscience", shortLabel: "Examine", symbol: "✦" },
  { id: "list", label: "Confession List", shortLabel: "My List", symbol: "✓" },
  { id: "confessional", label: "In the Confessional", shortLabel: "Confess", symbol: "†" },
  { id: "history", label: "Privacy & History", shortLabel: "Privacy", symbol: "◷" },
  { id: "prayers", label: "Prayers & Guide", shortLabel: "Prayers", symbol: "☰" },
];

export function ExaminationCompanion() {
  const { clearStore, ready, storageAvailable, store, updateStore } = useExaminationCompanionStore();
  const [view, setView] = useState<CompanionView>("examine");
  const [filter, setFilter] = useState<PromptFilter>("all");
  const [search, setSearch] = useState("");
  const [customText, setCustomText] = useState("");
  const [confessedIds, setConfessedIds] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [view]);

  const activeGuide =
    companionExaminationGuides.find((guide) => guide.id === store.activeGuideId) ?? companionExaminationGuides[0];
  const activePrompts = useMemo(
    () =>
      activeGuide.sections.flatMap((section) =>
        section.prompts.map((prompt) => ({ ...prompt, sectionId: section.id, sectionTitle: section.title })),
      ),
    [activeGuide],
  );
  const reviewedCount = activePrompts.filter((prompt) => store.statusByPromptId[prompt.id]).length;
  const selectedItems = useMemo(() => {
    const standardItems = companionExaminationGuides.flatMap((guide) =>
      guide.sections.flatMap((section) =>
        section.prompts
          .filter((prompt) => store.statusByPromptId[prompt.id] === "confess")
          .map((prompt) => ({
            id: prompt.id,
            guideTitle: guide.shortTitle,
            sectionTitle: section.title,
            text: prompt.text,
            note: store.noteByPromptId[prompt.id] ?? "",
            sinDetails: store.sinDetailsByPromptId[prompt.id],
          })),
      ),
    );
    const customItems = store.customReflections
      .filter((reflection) => reflection.status === "confess")
      .map((reflection) => ({
        id: reflection.id,
        guideTitle: "Personal reflection",
        sectionTitle: "Custom reflection",
        text: reflection.text,
        note: store.noteByPromptId[reflection.id] ?? "",
        sinDetails: store.sinDetailsByPromptId[reflection.id],
      }));

    return [...standardItems, ...customItems];
  }, [store.customReflections, store.noteByPromptId, store.sinDetailsByPromptId, store.statusByPromptId]);
  const lastConfessionSummary = formatLastConfession(store.lastConfessionDate);

  function changeGuide(guideId: CompanionGuideId) {
    updateStore((current) => ({ ...current, activeGuideId: guideId }));
    setFilter("all");
    setSearch("");
  }

  function updateLastConfessionDate(lastConfessionDate: string) {
    updateStore((current) => ({ ...current, lastConfessionDate }));
    setView("examine");
  }

  function setPromptStatus(promptId: string, status: CompanionPromptStatus) {
    updateStore((current) => {
      const currentStatus = current.statusByPromptId[promptId];
      const statusByPromptId = { ...current.statusByPromptId };
      const sinDetailsByPromptId = { ...current.sinDetailsByPromptId };
      if (currentStatus === status) delete statusByPromptId[promptId];
      else statusByPromptId[promptId] = status;
      if (status !== "confess" || currentStatus === status) delete sinDetailsByPromptId[promptId];

      return {
        ...current,
        sinDetailsByPromptId,
        statusByPromptId,
        customReflections: current.customReflections.map((reflection) =>
          reflection.id === promptId
            ? { ...reflection, status: currentStatus === status ? undefined : status }
            : reflection,
        ),
      };
    });
  }

  function saveSinDetails(promptId: string, details: CompanionSinDetails, note: string) {
    updateStore((current) => ({
      ...current,
      noteByPromptId: { ...current.noteByPromptId, [promptId]: note.slice(0, 1200) },
      sinDetailsByPromptId: { ...current.sinDetailsByPromptId, [promptId]: details },
      statusByPromptId: { ...current.statusByPromptId, [promptId]: "confess" },
      customReflections: current.customReflections.map((reflection) =>
        reflection.id === promptId ? { ...reflection, status: "confess" } : reflection,
      ),
    }));
  }

  function saveNote(promptId: string, note: string) {
    updateStore((current) => ({
      ...current,
      noteByPromptId: { ...current.noteByPromptId, [promptId]: note.slice(0, 1200) },
    }));
  }

  function addCustomReflection() {
    const text = customText.trim();
    if (!text) return;
    const id = `companion-custom-${Date.now()}`;
    updateStore((current) => ({
      ...current,
      customReflections: [...current.customReflections, { id, text: text.slice(0, 300) }].slice(-20),
    }));
    setCustomText("");
  }

  function removeCustomReflection(id: string) {
    updateStore((current) => {
      const statusByPromptId = { ...current.statusByPromptId };
      const sinDetailsByPromptId = { ...current.sinDetailsByPromptId };
      const noteByPromptId = { ...current.noteByPromptId };
      delete statusByPromptId[id];
      delete sinDetailsByPromptId[id];
      delete noteByPromptId[id];
      return {
        ...current,
        customReflections: current.customReflections.filter((reflection) => reflection.id !== id),
        noteByPromptId,
        sinDetailsByPromptId,
        statusByPromptId,
      };
    });
  }

  function finishConfession() {
    if (!selectedItems.length) return;
    const confirmed = window.confirm(
      "Finish this confession? This will add a private summary to history, set today as your last confession date, and clear the active confession list.",
    );
    if (!confirmed) return;

    const completedAt = new Date().toISOString();
    const guideTitles = Array.from(new Set(selectedItems.map((item) => item.guideTitle)));
    updateStore((current) => ({
      ...current,
      lastConfessionDate: completedAt.slice(0, 10),
      statusByPromptId: {},
      sinDetailsByPromptId: {},
      noteByPromptId: {},
      customReflections: current.customReflections.map((reflection) => ({
        id: reflection.id,
        text: reflection.text,
      })),
      history: [
        {
          id: `companion-history-${Date.now()}`,
          completedAt,
          itemCount: selectedItems.length,
          guideTitles,
        },
        ...current.history,
      ].slice(0, 12),
    }));
    setConfessedIds([]);
    setView("history");
  }

  function clearAllData() {
    const confirmed = window.confirm(
      "Clear all Examination Companion data from this browser? This cannot be undone and does not affect the current Daily Oratory examination tool.",
    );
    if (!confirmed) return;
    clearStore();
    setConfessedIds([]);
    setFilter("all");
    setSearch("");
    setView("examine");
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-32 pt-6 sm:px-6 sm:pt-8 md:pb-12 lg:px-10">
      <header className="dashboard-card overflow-hidden">
        <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded border border-gold/30 bg-parchment px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-burgundy">
                ◷ Interval: {lastConfessionSummary}
              </span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">V1.0 preview</span>
            </div>
            <p className="font-display mt-3 border-l-2 border-gold pl-4 text-lg italic leading-8 text-navy sm:text-xl">
              “Bless me, Father, for I have sinned. It has been {formatConfessionInterval(store.lastConfessionDate)} since my last confession.”
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              The Church encourages regular confession for ongoing spiritual renewal, pardon, and peace.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex">
            <button type="button" onClick={() => setView("history")} className="btn btn-secondary focus-ring min-h-12 justify-center">
              Update date
            </button>
            <button type="button" onClick={() => setView("prayers")} className="btn btn-primary focus-ring min-h-12 justify-center">
              Confessional guide →
            </button>
          </div>
        </div>
        <nav aria-label="Examination Companion" className="hidden border-t border-stone bg-navy p-2 md:grid md:grid-cols-5">
          {navItems.map((item) => (
            <NavButton key={item.id} active={view === item.id} item={item} onSelect={() => setView(item.id)} />
          ))}
        </nav>
      </header>

      {!storageAvailable ? (
        <div className="mt-5 rounded-xl border border-burgundy/30 bg-parchment p-4 text-sm leading-6 text-burgundy" role="status">
          Private browser storage is unavailable. You can use the guide, but progress may not remain after refresh.
        </div>
      ) : null}

      <main className="mt-6 min-w-0" aria-busy={!ready}>
        {view === "examine" ? (
          <ExamineView
            activeGuideId={activeGuide.id}
            customReflections={store.customReflections}
            filter={filter}
            noteByPromptId={store.noteByPromptId}
            sinDetailsByPromptId={store.sinDetailsByPromptId}
            reviewedCount={reviewedCount}
            search={search}
            statusByPromptId={store.statusByPromptId}
            totalCount={activePrompts.length}
            customText={customText}
            onAddCustom={addCustomReflection}
            onChangeGuide={changeGuide}
            onCustomTextChange={setCustomText}
            onFilterChange={setFilter}
            onOpenList={() => setView("list")}
            onRemoveCustom={removeCustomReflection}
            onSaveSinDetails={saveSinDetails}
            onSearchChange={setSearch}
            onSetStatus={setPromptStatus}
          />
        ) : null}
        {view === "list" ? (
          <ConfessionListView
            items={selectedItems}
            onOpenConfessional={() => setView("confessional")}
            onSaveNote={saveNote}
            onSetStatus={setPromptStatus}
          />
        ) : null}
        {view === "confessional" ? (
          <ConfessionalView
            confessedIds={confessedIds}
            items={selectedItems}
            lastConfessionSummary={lastConfessionSummary}
            onFinish={finishConfession}
            onToggle={(id) =>
              setConfessedIds((current) =>
                current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
              )
            }
          />
        ) : null}
        {view === "history" ? (
          <PrivacyHistoryView
            history={store.history}
            lastConfessionDate={store.lastConfessionDate}
            onChangeDate={updateLastConfessionDate}
            onClearAll={clearAllData}
          />
        ) : null}
        {view === "prayers" ? <PrayersGuideView onReturnToExamination={() => setView("examine")} /> : null}
      </main>

      {view === "examine" && selectedItems.length ? (
        <aside
          className="fixed bottom-[5.75rem] right-3 z-50 text-ivory md:bottom-6 md:left-4 md:right-4 md:mx-auto md:max-w-lg"
          aria-live="polite"
        >
          <button
            type="button"
            onClick={() => setView("list")}
            className="focus-ring flex min-h-11 items-center gap-2 rounded-full border border-gold/30 bg-navy px-4 text-sm font-bold shadow-[0_8px_24px_rgba(22,35,55,0.28)] md:hidden"
          >
            Review sin list
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gold px-1.5 text-xs text-navy">
              {selectedItems.length}
            </span>
            <span aria-hidden="true">→</span>
          </button>
          <div className="hidden items-center gap-3 rounded-xl border border-navy/15 bg-navy p-3 shadow-[0_12px_32px_rgba(22,35,55,0.3)] md:flex">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
              {selectedItems.length}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-semibold">
                {selectedItems.length} {selectedItems.length === 1 ? "sin" : "sins"} ready
              </p>
              <p className="text-xs text-ivory/65">In your private confession list</p>
            </div>
            <button
              type="button"
              onClick={() => setView("list")}
              className="focus-ring min-h-11 shrink-0 rounded-lg bg-gold px-3 text-xs font-bold uppercase tracking-wide text-navy sm:px-4"
            >
              Review sin list →
            </button>
          </div>
        </aside>
      ) : null}

      <p className="mt-8 text-center text-xs leading-6 text-muted">
        Preview route only. The current examination tool and its saved data are unchanged. Storage key: {examinationCompanionStorageKey}.
      </p>

      <nav
        aria-label="Mobile Examination Companion"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-stone bg-ivory/95 px-1 pt-2 shadow-[0_-8px_24px_rgba(22,35,55,0.12)] backdrop-blur md:hidden [padding-bottom:calc(0.5rem+env(safe-area-inset-bottom))]"
      >
        {navItems.map((item) => (
          <NavButton key={item.id} active={view === item.id} item={item} mobile onSelect={() => setView(item.id)} />
        ))}
      </nav>
    </div>
  );
}

function ExamineView({
  activeGuideId,
  customReflections,
  customText,
  filter,
  noteByPromptId,
  sinDetailsByPromptId,
  reviewedCount,
  search,
  statusByPromptId,
  totalCount,
  onAddCustom,
  onChangeGuide,
  onCustomTextChange,
  onFilterChange,
  onOpenList,
  onRemoveCustom,
  onSaveSinDetails,
  onSearchChange,
  onSetStatus,
}: {
  activeGuideId: CompanionGuideId;
  customReflections: { id: string; text: string; status?: CompanionPromptStatus }[];
  customText: string;
  filter: PromptFilter;
  noteByPromptId: Record<string, string>;
  sinDetailsByPromptId: Record<string, CompanionSinDetails>;
  reviewedCount: number;
  search: string;
  statusByPromptId: Record<string, CompanionPromptStatus>;
  totalCount: number;
  onAddCustom: () => void;
  onChangeGuide: (guideId: CompanionGuideId) => void;
  onCustomTextChange: (value: string) => void;
  onFilterChange: (filter: PromptFilter) => void;
  onOpenList: () => void;
  onRemoveCustom: (id: string) => void;
  onSaveSinDetails: (id: string, details: CompanionSinDetails, note: string) => void;
  onSearchChange: (value: string) => void;
  onSetStatus: (id: string, status: CompanionPromptStatus) => void;
}) {
  const activeGuide = companionExaminationGuides.find((guide) => guide.id === activeGuideId) ?? companionExaminationGuides[0];
  const normalizedSearch = search.trim().toLowerCase();
  const visibleSections = activeGuide.sections
    .map((section) => ({
      ...section,
      prompts: section.prompts.filter((prompt) => {
        const status = statusByPromptId[prompt.id];
        const searchMatch = !normalizedSearch || `${prompt.text} ${section.title}`.toLowerCase().includes(normalizedSearch);
        const filterMatch = filter === "all" || (filter === "unreviewed" ? !status : status === filter);
        return searchMatch && filterMatch;
      }),
    }))
    .filter((section) => section.prompts.length);
  const selectedCount = Object.values(statusByPromptId).filter((status) => status === "confess").length;

  return (
    <div className="grid min-w-0 gap-6">
      <section className="dashboard-card min-w-0 p-5 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">USCCB examination framework</p>
            <h1 className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl">Select Examination Guide</h1>
          </div>
          <button
            type="button"
            onClick={() => document.getElementById("custom-reflection")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="btn btn-primary focus-ring min-h-12 justify-center"
          >
            + Add custom reflection
          </button>
        </div>
        <div className="mt-5 h-px bg-stone" />
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4" aria-label="USCCB examination guides">
          {companionExaminationGuides.map((guide) => {
            const active = guide.id === activeGuideId;
            return (
              <button
                key={guide.id}
                type="button"
                onClick={() => onChangeGuide(guide.id)}
                aria-pressed={active}
                className={`focus-ring relative min-h-24 rounded-lg border p-3 text-left transition ${
                  active ? "border-gold bg-parchment shadow-sm" : "border-stone bg-ivory hover:border-gold/60"
                }`}
              >
                <span className="block pr-5 font-display text-base font-semibold leading-6 text-navy">{guide.title}</span>
                <span className="mt-1 block text-[0.68rem] leading-5 text-muted">{guide.attribution}</span>
                {active ? <span aria-hidden="true" className="absolute right-3 top-3 text-gold">●</span> : null}
              </button>
            );
          })}
        </div>
        <div className="mt-5 grid gap-4 rounded-xl border border-gold/30 bg-parchment p-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{activeGuide.title}</p>
            <p className="mt-2 text-sm leading-7 text-navy">{activeGuide.description}</p>
          </div>
          <a href={activeGuide.sourceUrl} target="_blank" rel="noreferrer" className="focus-ring text-sm font-bold text-burgundy underline underline-offset-4">
            View official USCCB source ↗
          </a>
        </div>
        <div className="mt-4 rounded-xl border border-stone bg-ivory p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Opening prayer</p>
          <p className="mt-2 text-sm leading-7 text-navy">{openingPrayer}</p>
        </div>
        <button type="button" onClick={onOpenList} className="btn btn-primary focus-ring mt-4 min-h-12 w-full justify-center sm:w-auto">
          View confession list ({selectedCount})
        </button>
      </section>

      <section className="dashboard-card min-w-0 p-4 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="form-label">Search this guide</span>
            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search prayer, Mass, speech, charity…"
              className="form-field focus-ring min-h-12 w-full"
            />
          </label>
          <p className="text-sm font-semibold text-navy" aria-live="polite">
            Reviewed {reviewedCount} of {totalCount}
          </p>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label="Filter prompts">
          {(["all", "unreviewed", "confess", "clear"] as PromptFilter[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onFilterChange(value)}
              aria-pressed={filter === value}
              className={`focus-ring min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold capitalize ${
                filter === value ? "border-navy bg-navy text-ivory" : "border-stone bg-ivory text-navy"
              }`}
            >
              {value === "all" ? `All (${totalCount})` : value}
            </button>
          ))}
        </div>
      </section>

      {visibleSections.length ? (
        visibleSections.map((section) => (
          <section key={section.id} className="dashboard-card min-w-0 overflow-hidden">
            <div className="border-b border-stone bg-parchment p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl">{section.title}</h2>
                  {section.scripture ? <p className="mt-2 font-display text-lg italic text-burgundy">{section.scripture}</p> : null}
                </div>
                {section.reference ? (
                  <span className="shrink-0 rounded border border-stone bg-ivory px-3 py-2 text-xs font-semibold text-muted">
                    {section.reference}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-7 text-muted">{section.reflection}</p>
            </div>
            <div className="grid gap-3 p-3 sm:p-5">
              {section.prompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  id={prompt.id}
                  text={prompt.text}
                  graveMatterNote={prompt.graveMatterNote}
                  pastoralReflection={prompt.pastoralReflection}
                  note={noteByPromptId[prompt.id] ?? ""}
                  sinDetails={sinDetailsByPromptId[prompt.id]}
                  status={statusByPromptId[prompt.id]}
                  onSaveSinDetails={onSaveSinDetails}
                  onSetStatus={onSetStatus}
                />
              ))}
            </div>
          </section>
        ))
      ) : (
        <section className="dashboard-card min-w-0 p-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-navy">No prompts match this view.</h2>
          <button type="button" onClick={() => { onSearchChange(""); onFilterChange("all"); }} className="btn btn-secondary focus-ring mt-5">
            Show all prompts
          </button>
        </section>
      )}

      <section id="custom-reflection" className="dashboard-card min-w-0 scroll-mt-5 p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Personal reflection</p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Add something you want to remember.</h2>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            value={customText}
            onChange={(event) => onCustomTextChange(event.target.value)}
            onKeyDown={(event) => { if (event.key === "Enter") onAddCustom(); }}
            maxLength={300}
            placeholder="Private reflection stored only in this browser"
            className="form-field focus-ring min-h-12 flex-1"
          />
          <button type="button" onClick={onAddCustom} className="btn btn-primary focus-ring min-h-12 justify-center">Add reflection</button>
        </div>
        {customReflections.length ? (
          <div className="mt-5 grid gap-3">
            {customReflections.map((reflection) => (
              <div key={reflection.id} className="rounded-xl border border-stone bg-ivory p-4">
                <PromptCard
                  id={reflection.id}
                  text={reflection.text}
                  note={noteByPromptId[reflection.id] ?? ""}
                  sinDetails={sinDetailsByPromptId[reflection.id]}
                  status={reflection.status}
                  onSaveSinDetails={onSaveSinDetails}
                  onSetStatus={onSetStatus}
                />
                <button type="button" onClick={() => onRemoveCustom(reflection.id)} className="focus-ring mt-3 min-h-11 text-sm font-semibold text-burgundy underline underline-offset-4">
                  Remove reflection
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

function PromptCard({ graveMatterNote, id, note, pastoralReflection, sinDetails, status, text, onSaveSinDetails, onSetStatus }: {
  graveMatterNote?: string;
  id: string;
  note: string;
  pastoralReflection?: string;
  sinDetails?: CompanionSinDetails;
  status?: CompanionPromptStatus;
  text: string;
  onSaveSinDetails: (id: string, details: CompanionSinDetails, note: string) => void;
  onSetStatus: (id: string, status: CompanionPromptStatus) => void;
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [frequency, setFrequency] = useState<CompanionSinFrequency>(sinDetails?.frequency ?? "once");
  const [graveMatter, setGraveMatter] = useState(sinDetails?.graveMatter ?? false);
  const [reminder, setReminder] = useState(note);

  function openDetails() {
    setFrequency(sinDetails?.frequency ?? "once");
    setGraveMatter(sinDetails?.graveMatter ?? false);
    setReminder(note);
    setDetailsOpen(true);
  }

  return (
    <article className={`rounded-xl border p-4 ${status === "confess" ? "border-burgundy/40 bg-parchment" : status === "clear" ? "border-green-700/30 bg-green-50/60" : "border-stone bg-ivory"}`}>
      <p className="text-base font-semibold leading-7 text-navy">{text}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={openDetails}
          aria-pressed={status === "confess"}
          className={`focus-ring min-h-12 rounded-lg border px-3 text-sm font-bold ${status === "confess" ? "border-burgundy bg-burgundy text-ivory" : "border-burgundy/30 bg-ivory text-burgundy"}`}
        >
          {status === "confess" ? "✓ Saved" : "+ Confess"}
        </button>
        <button
          type="button"
          onClick={() => { setDetailsOpen(false); onSetStatus(id, "clear"); }}
          aria-pressed={status === "clear"}
          className={`focus-ring min-h-12 rounded-lg border px-3 text-sm font-bold ${status === "clear" ? "border-green-800 bg-green-800 text-white" : "border-stone bg-ivory text-navy"}`}
        >
          {status === "clear" ? "✓ Cleared" : "Clear"}
        </button>
      </div>
      {detailsOpen ? (
        <form
          className="mt-4 rounded-lg border border-stone bg-ivory p-4"
          onSubmit={(event) => {
            event.preventDefault();
            onSaveSinDetails(id, { frequency, graveMatter }, reminder);
            setDetailsOpen(false);
          }}
        >
          <div className="flex items-center justify-between gap-3 border-b border-stone pb-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Specify sin details for confession</p>
            <button type="button" onClick={() => setDetailsOpen(false)} className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg text-xl text-muted" aria-label="Close sin details">×</button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <label className="grid gap-2">
              <span className="form-label">Approximate frequency</span>
              <select value={frequency} onChange={(event) => setFrequency(event.target.value as CompanionSinFrequency)} className="form-field focus-ring min-h-12 w-full">
                {frequencyOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
            <label className="flex min-h-12 cursor-pointer items-center gap-2 rounded-lg border border-stone px-3 text-sm text-navy">
              <input type="checkbox" checked={graveMatter} onChange={(event) => setGraveMatter(event.target.checked)} className="h-5 w-5 accent-burgundy" />
              Grave matter
            </label>
          </div>
          <label className="mt-4 grid gap-2">
            <span className="form-label">Private reminder note <span className="font-normal normal-case text-muted">(optional, for your eyes only)</span></span>
            <input value={reminder} onChange={(event) => setReminder(event.target.value.slice(0, 1200))} maxLength={1200} placeholder="e.g. A brief reminder of the occasion" className="form-field focus-ring min-h-12 w-full" />
          </label>
          <p className="mt-3 text-xs leading-5 text-muted">This information remains only in this browser. Marking “grave matter” is a reminder, not a judgment about personal culpability.</p>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => setDetailsOpen(false)} className="btn btn-secondary focus-ring min-h-11 justify-center">Cancel</button>
            <button type="submit" className="btn btn-primary focus-ring min-h-11 justify-center">Save to sin list</button>
          </div>
        </form>
      ) : null}
      {pastoralReflection ? (
        <details className="mt-3">
          <summary className="focus-ring min-h-11 cursor-pointer py-2 text-sm font-semibold text-burgundy">
            Moral Guidance &amp; Context
          </summary>
          <div className="rounded-lg border border-stone bg-parchment p-4 text-sm leading-6 text-navy">
            {graveMatterNote ? (
              <p className="text-burgundy">
                <strong>Grave matter note:</strong> {graveMatterNote}
              </p>
            ) : null}
            <p className={graveMatterNote ? "mt-3" : ""}>
              <strong>Pastoral reflection:</strong> {pastoralReflection}
            </p>
            <p className="mt-3 text-xs leading-5 text-muted">
              Mortal sin also requires full knowledge and deliberate consent. When uncertain, bring the matter simply to a priest.
            </p>
          </div>
        </details>
      ) : null}
      {status === "clear" ? (
        <p className="mt-3 text-sm font-semibold text-green-800">✓ Clear / No sin identified in this area</p>
      ) : null}
    </article>
  );
}

function ConfessionListView({ items, onOpenConfessional, onSaveNote, onSetStatus }: {
  items: SelectedConfessionItem[];
  onOpenConfessional: () => void;
  onSaveNote: (id: string, note: string) => void;
  onSetStatus: (id: string, status: CompanionPromptStatus) => void;
}) {
  return (
    <section className="dashboard-card p-5 sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Private confession list</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy">What you marked to confess</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Bring what is clear simply and honestly. You do not need perfect wording.</p>
        </div>
        <button type="button" onClick={onOpenConfessional} disabled={!items.length} className="btn btn-primary focus-ring min-h-12 justify-center disabled:cursor-not-allowed disabled:opacity-50">
          Enter confessional mode
        </button>
      </div>
      {items.length ? (
        <ol className="mt-6 grid gap-4">
          {items.map((item, index) => (
            <li key={item.id} className="rounded-xl border border-stone bg-ivory p-4 sm:p-5">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-ivory">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">{item.guideTitle}</p>
                  <p className="mt-2 text-base font-semibold leading-7 text-navy">{item.text}</p>
                  {item.sinDetails ? (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="rounded-full border border-stone bg-parchment px-3 py-1.5 text-navy">Frequency: {frequencyLabels[item.sinDetails.frequency]}</span>
                      {item.sinDetails.graveMatter ? <span className="rounded-full border border-burgundy/30 bg-burgundy/5 px-3 py-1.5 text-burgundy">Marked grave matter</span> : null}
                    </div>
                  ) : null}
                  <label className="mt-3 grid gap-2">
                    <span className="form-label">Optional frequency or brief note</span>
                    <textarea value={item.note} onChange={(event) => onSaveNote(item.id, event.target.value)} rows={2} maxLength={1200} className="form-field textarea-field focus-ring" />
                  </label>
                  <button type="button" onClick={() => onSetStatus(item.id, "confess")} className="focus-ring mt-3 min-h-11 text-sm font-semibold text-burgundy underline underline-offset-4">Remove from list</button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-6 rounded-xl border border-stone bg-parchment p-6 text-center">
          <p className="font-display text-2xl font-semibold text-navy">Your confession list is empty.</p>
          <p className="mt-2 text-sm leading-7 text-muted">Return to Examine and mark only what you need to bring.</p>
        </div>
      )}
    </section>
  );
}

function ConfessionalView({ confessedIds, items, lastConfessionSummary, onFinish, onToggle }: {
  confessedIds: string[];
  items: SelectedConfessionItem[];
  lastConfessionSummary: string;
  onFinish: () => void;
  onToggle: (id: string) => void;
}) {
  const confessionInterval = lastConfessionSummary === "Date not set" ? "some time" : lastConfessionSummary;

  return (
    <section className="mx-auto max-w-3xl overflow-hidden rounded-[1.5rem] border border-stone bg-navy text-ivory shadow-soft">
      <div className="border-b border-ivory/15 p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">Discreet confessional mode</p>
        <h2 className="font-display mt-2 text-4xl font-semibold">Speak simply and trust God’s mercy.</h2>
        <p className="mt-3 text-sm leading-7 text-ivory/75">{lastConfessionSummary}</p>
      </div>
      <div className="p-5 sm:p-7">
        <div className="rounded-xl border border-gold/30 bg-ivory/10 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-light">Begin</p>
          <p className="font-display mt-2 text-xl leading-8">“Bless me, Father, for I have sinned. It has been {confessionInterval.toLowerCase()}.”</p>
        </div>
        {items.length ? (
          <ol className="mt-5 grid gap-3">
            {items.map((item) => (
              <li key={item.id}>
                <label className={`flex min-h-14 cursor-pointer gap-3 rounded-xl border p-4 ${confessedIds.includes(item.id) ? "border-gold/60 bg-ivory/10" : "border-ivory/20 bg-black/10"}`}>
                  <input type="checkbox" checked={confessedIds.includes(item.id)} onChange={() => onToggle(item.id)} className="mt-1 h-5 w-5 shrink-0 accent-gold" />
                  <span>
                    <span className={`block text-sm font-semibold leading-6 ${confessedIds.includes(item.id) ? "text-ivory/55 line-through" : "text-ivory"}`}>{item.text}</span>
                    {item.sinDetails ? <span className="mt-2 block text-xs uppercase tracking-wide text-gold-light">{frequencyLabels[item.sinDetails.frequency]}{item.sinDetails.graveMatter ? " · Marked grave matter" : ""}</span> : null}
                    {item.note ? <span className="mt-2 block text-sm leading-6 text-gold-light">{item.note}</span> : null}
                  </span>
                </label>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-5 rounded-xl border border-ivory/20 p-5 text-sm leading-7 text-ivory/75">No items are selected. You may still ask the priest for help beginning your confession.</p>
        )}
        <details className="mt-5 rounded-xl border border-ivory/20 bg-black/10 p-4">
          <summary className="focus-ring min-h-11 cursor-pointer py-2 font-semibold text-gold-light">Act of Contrition</summary>
          <p className="mt-3 text-sm leading-7 text-ivory/80">{actOfContrition}</p>
        </details>
        <button type="button" onClick={onFinish} disabled={!items.length} className="focus-ring mt-6 min-h-14 w-full rounded-xl bg-gold px-5 py-3 font-bold text-navy disabled:cursor-not-allowed disabled:opacity-50">
          Finish confession and clear list
        </button>
      </div>
    </section>
  );
}

function PrivacyHistoryView({ history, lastConfessionDate, onChangeDate, onClearAll }: {
  history: { id: string; completedAt: string; itemCount: number; guideTitles: string[] }[];
  lastConfessionDate: string;
  onChangeDate: (date: string) => void;
  onClearAll: () => void;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="dashboard-card p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Privacy</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Your preparation stays here.</h2>
        <p className="mt-4 text-sm leading-7 text-muted">This companion stores your selections, notes, and history only in this browser. It does not send confession details to Daily Oratory or analytics.</p>
        <label className="mt-6 grid gap-2">
          <span className="form-label">Date of last Confession</span>
          <input type="date" value={lastConfessionDate} max={new Date().toISOString().slice(0, 10)} onInput={(event) => onChangeDate(event.currentTarget.value)} className="form-field focus-ring min-h-12" />
        </label>
        <button type="button" onClick={onClearAll} className="focus-ring mt-6 min-h-12 w-full rounded-xl border border-burgundy/40 bg-ivory px-4 py-3 text-sm font-bold text-burgundy">Clear all Companion data</button>
        <p className="mt-3 text-xs leading-6 text-muted">This does not clear or modify the current Daily Oratory examination tool.</p>
      </section>
      <section className="dashboard-card p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Local history</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Completed confessions</h2>
        <p className="mt-3 text-sm leading-7 text-muted">History keeps only the date, item count, and guide names—not the sins or notes.</p>
        {history.length ? (
          <ol className="mt-5 grid gap-3">
            {history.map((entry) => (
              <li key={entry.id} className="rounded-xl border border-stone bg-ivory p-4">
                <p className="font-semibold text-navy">{formatDate(entry.completedAt)}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{entry.itemCount} item{entry.itemCount === 1 ? "" : "s"} · {entry.guideTitles.join(", ")}</p>
              </li>
            ))}
          </ol>
        ) : <p className="mt-5 rounded-xl border border-stone bg-parchment p-5 text-sm leading-7 text-muted">No completed confession history is stored yet.</p>}
      </section>
    </div>
  );
}

function PrayersGuideView({ onReturnToExamination }: { onReturnToExamination: () => void }) {
  const steps = [
    "Make the Sign of the Cross and say how long it has been since your last Confession.",
    "Confess your sins simply, including number or frequency when you reasonably can.",
    "Listen to the priest’s counsel and accept the penance given.",
    "Pray an Act of Contrition when invited.",
    "Receive absolution and complete your penance afterward.",
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="dashboard-card p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Confessional guide</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">How to go to Confession</h2>
        <ol className="mt-5 grid gap-3">
          {steps.map((step, index) => <li key={step} className="flex gap-3 rounded-xl border border-stone bg-ivory p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-ivory">{index + 1}</span><span className="text-sm leading-7 text-navy">{step}</span></li>)}
        </ol>
        <Link href="/confession/how-to-go" className="btn btn-secondary focus-ring mt-6 min-h-12 justify-center">Read the full Confession guide</Link>
      </section>
      <section className="dashboard-card p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Act of Contrition</h2>
        <p className="mt-5 rounded-xl border border-gold/30 bg-parchment p-5 font-display text-xl leading-9 text-navy">{actOfContrition}</p>
        <p className="mt-5 text-sm leading-7 text-muted">This guide does not decide whether a sin is mortal or venial. When unsure, speak simply and honestly with a priest.</p>
        <button
          type="button"
          onClick={onReturnToExamination}
          className="btn btn-primary focus-ring mt-6 min-h-12 justify-center"
        >
          Return to examination
        </button>
      </section>
    </div>
  );
}

function NavButton({ active, item, mobile = false, onSelect }: {
  active: boolean;
  item: (typeof navItems)[number];
  mobile?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active ? "page" : undefined}
      className={`focus-ring flex min-h-12 items-center justify-center rounded-lg font-semibold transition ${mobile ? "flex-col gap-0.5 px-1 text-[0.68rem]" : "gap-2 px-3 text-sm"} ${active ? mobile ? "bg-navy text-ivory" : "bg-ivory text-navy" : mobile ? "text-navy" : "text-ivory/75 hover:bg-ivory/10"}`}
    >
      <span aria-hidden="true" className={mobile ? "text-base leading-none" : ""}>{item.symbol}</span>
      <span>{mobile ? item.shortLabel : item.label}</span>
    </button>
  );
}

function formatLastConfession(value: string) {
  if (!value) return "Date not set";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "Date not set";
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const days = Math.max(0, Math.floor((todayStart.getTime() - date.getTime()) / 86_400_000));
  if (days === 0) return "today";
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

function formatConfessionInterval(value: string) {
  if (!value) return "some time";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "some time";
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const days = Math.max(0, Math.floor((todayStart.getTime() - date.getTime()) / 86_400_000));
  if (days === 0) return "less than a day";
  if (days < 14) return `${days} day${days === 1 ? "" : "s"}`;
  const weeks = Math.floor(days / 7);
  if (days < 60) return `${weeks} week${weeks === 1 ? "" : "s"}`;
  const months = Math.floor(days / 30);
  if (days < 730) return `${months} month${months === 1 ? "" : "s"}`;
  const years = Math.floor(days / 365);
  return `${years} year${years === 1 ? "" : "s"}`;
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown date";
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
}
