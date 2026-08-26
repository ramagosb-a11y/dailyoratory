"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { actOfContrition, guidedExaminationPaths, openingPrayer } from "@/data/guidedExamination";
import {
  examinationCompanionStorageKey,
  useExaminationCompanionStore,
} from "@/lib/examinationCompanionStorage";
import type { CompanionPromptStatus } from "@/types/examinationCompanion";
import type { GuidedExaminationPathId } from "@/types/guidedExamination";

type CompanionView = "examine" | "list" | "confessional" | "history" | "prayers";
type PromptFilter = "all" | "unreviewed" | "confess" | "clear";

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

  const activeGuide =
    guidedExaminationPaths.find((guide) => guide.id === store.activeGuideId) ?? guidedExaminationPaths[0];
  const activePrompts = useMemo(
    () =>
      activeGuide.sections.flatMap((section) =>
        section.prompts.map((prompt) => ({ ...prompt, sectionId: section.id, sectionTitle: section.title })),
      ),
    [activeGuide],
  );
  const reviewedCount = activePrompts.filter((prompt) => store.statusByPromptId[prompt.id]).length;
  const selectedItems = useMemo(() => {
    const standardItems = guidedExaminationPaths.flatMap((guide) =>
      guide.sections.flatMap((section) =>
        section.prompts
          .filter((prompt) => store.statusByPromptId[prompt.id] === "confess")
          .map((prompt) => ({
            id: prompt.id,
            guideTitle: guide.shortTitle,
            sectionTitle: section.title,
            text: prompt.text,
            note: store.noteByPromptId[prompt.id] ?? "",
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
      }));

    return [...standardItems, ...customItems];
  }, [store.customReflections, store.noteByPromptId, store.statusByPromptId]);
  const lastConfessionSummary = formatLastConfession(store.lastConfessionDate);

  function changeGuide(guideId: GuidedExaminationPathId) {
    updateStore((current) => ({ ...current, activeGuideId: guideId }));
    setFilter("all");
    setSearch("");
  }

  function setPromptStatus(promptId: string, status: CompanionPromptStatus) {
    updateStore((current) => {
      const currentStatus = current.statusByPromptId[promptId];
      const statusByPromptId = { ...current.statusByPromptId };
      if (currentStatus === status) delete statusByPromptId[promptId];
      else statusByPromptId[promptId] = status;

      return {
        ...current,
        statusByPromptId,
        customReflections: current.customReflections.map((reflection) =>
          reflection.id === promptId
            ? { ...reflection, status: currentStatus === status ? undefined : status }
            : reflection,
        ),
      };
    });
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
      const noteByPromptId = { ...current.noteByPromptId };
      delete statusByPromptId[id];
      delete noteByPromptId[id];
      return {
        ...current,
        customReflections: current.customReflections.filter((reflection) => reflection.id !== id),
        noteByPromptId,
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
      <header className="overflow-hidden rounded-[1.5rem] border border-stone bg-navy text-ivory shadow-soft">
        <div className="p-5 sm:p-7 lg:flex lg:items-end lg:justify-between lg:gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold-light">
              <span>Sacrament of Reconciliation</span>
              <span className="rounded-full border border-gold/40 px-2 py-1">V1.0 preview</span>
            </div>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Examination of Conscience
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-ivory/80 sm:text-base">
              Prepare prayerfully, keep a simple confession list, and carry only what you choose into the confessional.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setView("history")}
            className="focus-ring mt-5 min-h-12 w-full rounded-xl border border-ivory/25 bg-ivory/10 px-4 py-3 text-left text-sm font-semibold lg:mt-0 lg:w-auto lg:min-w-52"
          >
            <span className="block text-[0.65rem] uppercase tracking-[0.16em] text-gold-light">Last Confession</span>
            <span className="mt-1 block">{lastConfessionSummary}</span>
          </button>
        </div>
        <nav aria-label="Examination Companion" className="hidden border-t border-ivory/15 bg-black/10 p-2 md:grid md:grid-cols-5">
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
            onSaveNote={saveNote}
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
            onChangeDate={(lastConfessionDate) => updateStore((current) => ({ ...current, lastConfessionDate }))}
            onClearAll={clearAllData}
          />
        ) : null}
        {view === "prayers" ? <PrayersGuideView /> : null}
      </main>

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
  onSaveNote,
  onSearchChange,
  onSetStatus,
}: {
  activeGuideId: GuidedExaminationPathId;
  customReflections: { id: string; text: string; status?: CompanionPromptStatus }[];
  customText: string;
  filter: PromptFilter;
  noteByPromptId: Record<string, string>;
  reviewedCount: number;
  search: string;
  statusByPromptId: Record<string, CompanionPromptStatus>;
  totalCount: number;
  onAddCustom: () => void;
  onChangeGuide: (guideId: GuidedExaminationPathId) => void;
  onCustomTextChange: (value: string) => void;
  onFilterChange: (filter: PromptFilter) => void;
  onOpenList: () => void;
  onRemoveCustom: (id: string) => void;
  onSaveNote: (id: string, note: string) => void;
  onSearchChange: (value: string) => void;
  onSetStatus: (id: string, status: CompanionPromptStatus) => void;
}) {
  const activeGuide = guidedExaminationPaths.find((guide) => guide.id === activeGuideId) ?? guidedExaminationPaths[0];
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
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Choose an examination guide</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl">Begin with prayer and honesty.</h2>
          </div>
          <button type="button" onClick={onOpenList} className="btn btn-primary focus-ring min-h-12 justify-center">
            View confession list ({selectedCount})
          </button>
        </div>
        <label className="mt-6 grid gap-2">
          <span className="form-label">Examination guide</span>
          <select
            value={activeGuideId}
            onChange={(event) => onChangeGuide(event.target.value as GuidedExaminationPathId)}
            className="form-field focus-ring min-h-12 w-full"
          >
            {guidedExaminationPaths.map((guide) => (
              <option key={guide.id} value={guide.id}>{guide.title}</option>
            ))}
          </select>
        </label>
        <p className="mt-3 text-sm leading-7 text-muted">{activeGuide.description}</p>
        <div className="mt-5 rounded-xl border border-gold/30 bg-parchment p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Opening prayer</p>
          <p className="mt-2 text-sm leading-7 text-navy">{openingPrayer}</p>
        </div>
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
              <h2 className="font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl">{section.title}</h2>
              {section.scripture ? <p className="mt-2 font-display text-lg italic text-burgundy">{section.scripture}</p> : null}
              <p className="mt-2 text-sm leading-7 text-muted">{section.reflection}</p>
            </div>
            <div className="grid gap-3 p-3 sm:p-5">
              {section.prompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  id={prompt.id}
                  text={prompt.text}
                  note={noteByPromptId[prompt.id] ?? ""}
                  status={statusByPromptId[prompt.id]}
                  onSaveNote={onSaveNote}
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

      <section className="dashboard-card min-w-0 p-5 sm:p-6">
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
                  status={reflection.status}
                  onSaveNote={onSaveNote}
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

function PromptCard({ id, note, status, text, onSaveNote, onSetStatus }: {
  id: string;
  note: string;
  status?: CompanionPromptStatus;
  text: string;
  onSaveNote: (id: string, note: string) => void;
  onSetStatus: (id: string, status: CompanionPromptStatus) => void;
}) {
  return (
    <article className={`rounded-xl border p-4 ${status === "confess" ? "border-burgundy/40 bg-parchment" : status === "clear" ? "border-green-700/30 bg-green-50/60" : "border-stone bg-ivory"}`}>
      <p className="text-base font-semibold leading-7 text-navy">{text}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onSetStatus(id, "confess")}
          aria-pressed={status === "confess"}
          className={`focus-ring min-h-12 rounded-lg border px-3 text-sm font-bold ${status === "confess" ? "border-burgundy bg-burgundy text-ivory" : "border-burgundy/30 bg-ivory text-burgundy"}`}
        >
          {status === "confess" ? "✓ To confess" : "Confess"}
        </button>
        <button
          type="button"
          onClick={() => onSetStatus(id, "clear")}
          aria-pressed={status === "clear"}
          className={`focus-ring min-h-12 rounded-lg border px-3 text-sm font-bold ${status === "clear" ? "border-green-800 bg-green-800 text-white" : "border-stone bg-ivory text-navy"}`}
        >
          {status === "clear" ? "✓ Reviewed" : "Clear"}
        </button>
      </div>
      <details className="mt-3">
        <summary className="focus-ring min-h-11 cursor-pointer py-2 text-sm font-semibold text-burgundy">Optional private note</summary>
        <label className="mt-2 grid gap-2">
          <span className="sr-only">Private note for {text}</span>
          <textarea
            value={note}
            onChange={(event) => onSaveNote(id, event.target.value)}
            maxLength={1200}
            rows={3}
            placeholder="Stored only in this browser"
            className="form-field textarea-field focus-ring"
          />
        </label>
      </details>
    </article>
  );
}

function ConfessionListView({ items, onOpenConfessional, onSaveNote, onSetStatus }: {
  items: { id: string; guideTitle: string; sectionTitle: string; text: string; note: string }[];
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
  items: { id: string; text: string; note: string }[];
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
          <input type="date" value={lastConfessionDate} max={new Date().toISOString().slice(0, 10)} onChange={(event) => onChangeDate(event.target.value)} className="form-field focus-ring min-h-12" />
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

function PrayersGuideView() {
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
        <Link href="/confession/prayers" className="btn btn-primary focus-ring mt-6 min-h-12 justify-center">Open more Confession prayers</Link>
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

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown date";
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
}
