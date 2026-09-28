"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  clearNightlyExamenData,
  completeNightlyExamen,
  saveNightlyExamenDraft,
  useNightlyExamenStore,
} from "@/lib/dailyExamenStorage";
import { trackEvent } from "@/lib/analytics";
import type { NightlyExamenDraft, NightlyExamenPace, NightlyExamenSession } from "@/types/dailyExamen";
import { nightlyJourneyOptionalIntro, nightlyJourneyPages } from "@/data/nightlyExamenJourney";
import styles from "./NightlyExamenExperience.module.css";

type ExperienceView = "welcome" | "prayer" | "complete" | "grace-map";

const paceOptions: Array<{ id: NightlyExamenPace; title: string; time: string; description: string }> = [
  { id: "rest", title: "A quiet examen", time: "about 5 minutes", description: "Move through the prayer without writing." },
  { id: "review", title: "A guided examen", time: "about 10 minutes", description: "Pause with the questions and write if you wish." },
  { id: "discern", title: "A spacious examen", time: "about 15 minutes", description: "Stay longer with one significant movement." },
];

const gratitudeAreas = ["Relationships", "Daily bread", "Work", "Creation", "Protection", "Perseverance"];
const towardLove = ["Peace", "Gratitude", "Courage", "Connection", "Compassion", "Generosity", "Patience", "Trust"];
const towardUnrest = ["Agitation", "Fear", "Resistance", "Isolation", "Resentment", "Discouragement", "Pride", "Envy"];
const tomorrowGraces = ["Faith", "Hope", "Charity", "Patience", "Courage", "Humility", "Wisdom", "Peace", "Purity", "Forgiveness", "Perseverance", "Gentleness", "Trust"];

function normalizeNotes(notes: unknown): string[] {
  return Array.from({ length: nightlyJourneyPages.length }, (_, index) =>
    Array.isArray(notes) && typeof notes[index] === "string" ? notes[index] : "",
  );
}

export function NightlyExamenExperience({ standalone = false }: { standalone?: boolean }) {
  const store = useNightlyExamenStore();
  const [view, setView] = useState<ExperienceView>("welcome");
  const [pace, setPace] = useState<NightlyExamenPace>("review");
  const [draft, setDraft] = useState<NightlyExamenDraft | null>(null);
  const [completedSession, setCompletedSession] = useState<NightlyExamenSession | null>(null);
  const [storageMessage, setStorageMessage] = useState<string | null>(null);
  const topRef = useRef<HTMLElement | null>(null);
  const resumableDraft = store.draft?.localDate === getLocalDate() ? store.draft : null;

  const focusCurrentHeading = useCallback(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = window.requestAnimationFrame(() => {
      const container = topRef.current;
      container?.scrollTo({ top: 0, left: 0, behavior: "auto" });
      if (!standalone) container?.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
      document.getElementById("nightly-examen-current-heading")?.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [standalone]);

  useEffect(() => focusCurrentHeading(), [draft?.stepIndex, focusCurrentHeading, view]);

  function begin(writingEnabled: boolean) {
    if (resumableDraft && !window.confirm("Start a new Examen? This replaces the unfinished draft saved for tonight.")) return;
    setStorageMessage(null);
    const now = new Date();
    const nextDraft: NightlyExamenDraft = {
      localDate: getLocalDate(now),
      startedAt: now.toISOString(),
      pace,
      writingEnabled: writingEnabled && pace !== "rest",
      stepIndex: 0,
      gratitude: "",
      gratitudeArea: "",
      significantMoment: "",
      movementTags: [],
      mercy: "",
      tomorrowGrace: "",
      notes: Array.from({ length: nightlyJourneyPages.length }, () => ""),
      resolution: "",
    };
    setDraft(nextDraft);
    if (!saveNightlyExamenDraft(nextDraft)) {
      setStorageMessage("Browser storage is unavailable. You can still pray, but this session may not resume after you leave.");
    }
    setView("prayer");
    trackEvent("daily_examen_start");
  }

  function resume() {
    if (!resumableDraft) return;
    const restored = { ...resumableDraft, notes: normalizeNotes(resumableDraft.notes) };
    setPace(restored.pace);
    setDraft(restored);
    setStorageMessage(null);
    setView("prayer");
    trackEvent("daily_examen_resume", { step: nightlyJourneyPages[restored.stepIndex]?.id });
  }

  function updateDraft(patch: Partial<NightlyExamenDraft>) {
    if (!draft) return;
    const nextDraft = { ...draft, ...patch, notes: normalizeNotes(patch.notes ?? draft.notes) };
    setDraft(nextDraft);
    if (!saveNightlyExamenDraft(nextDraft)) {
      setStorageMessage("Browser storage is unavailable. Your notes remain on this page for now and may not resume after you leave.");
    }
  }

  function setPageNote(index: number, note: string) {
    if (!draft) return;
    const notes = normalizeNotes(draft.notes);
    notes[index] = note.slice(0, 5000);
    const pageId = nightlyJourneyPages[index].id;
    const legacyField: Partial<NightlyExamenDraft> =
      pageId === "gratitude" ? { gratitude: notes[index] } :
      pageId === "review" ? { significantMoment: notes[index] } :
      pageId === "mercy" ? { mercy: notes[index] } : {};
    updateDraft({ notes, ...legacyField, ...(pageId === "resolution" ? { resolution: notes[index] } : {}) });
  }

  function previousStep() {
    if (!draft) return;
    if (draft.stepIndex === 0) {
      setView("welcome");
      return;
    }
    updateDraft({ stepIndex: draft.stepIndex - 1 });
  }

  function nextStep() {
    if (!draft) return;
    const page = nightlyJourneyPages[draft.stepIndex];
    trackEvent("daily_examen_step_complete", { step: page.id });
    if (draft.stepIndex < nightlyJourneyPages.length - 1) {
      updateDraft({ stepIndex: draft.stepIndex + 1 });
      return;
    }

    const completedAt = new Date();
    const startedAt = new Date(draft.startedAt).getTime();
    const durationMinutes = Math.max(1, Math.round((completedAt.getTime() - startedAt) / 60_000));
    const session: NightlyExamenSession = {
      ...draft,
      notes: normalizeNotes(draft.notes),
      id: `examen-${draft.localDate}-${completedAt.getTime()}`,
      completedAt: completedAt.toISOString(),
      durationMinutes,
    };
    const saved = completeNightlyExamen(session);
    setStorageMessage(saved ? null : "This prayer is complete, but browser storage is unavailable, so it was not added to your saved Examen history.");
    setCompletedSession(session);
    setDraft(null);
    setView("complete");
    trackEvent("daily_examen_complete");
  }

  function updatePace(nextPace: NightlyExamenPace) {
    setPace(nextPace);
    if (draft) updateDraft({ pace: nextPace });
  }

  function toggleMovement(movement: string) {
    if (!draft) return;
    const selected = new Set(draft.movementTags);
    if (selected.has(movement)) selected.delete(movement);
    else if (selected.size < 2) selected.add(movement);
    updateDraft({ movementTags: Array.from(selected) });
  }

  function clearPrivateData() {
    if (!window.confirm("Clear this browser’s saved Nightly Examen draft and completed-session history? This cannot be undone.")) return;
    const cleared = clearNightlyExamenData();
    setDraft(null);
    setCompletedSession(null);
    setView("welcome");
    setStorageMessage(cleared
      ? "The saved Nightly Examen draft and completed-session history were cleared from this browser."
      : "This browser prevented the saved Nightly Examen data from being cleared. You can keep praying, but the stored entries remain on this device.");
    trackEvent("daily_examen_clear_private_data");
  }

  return (
    <section
      ref={topRef}
      id="nightly-examen"
      aria-label="The Last Light: a guided Nightly Examen"
      className={`${standalone ? styles.standalone : ""} scroll-mt-24`}
    >
      <div className={styles.shell}>
        <Link href="/" className={`${styles.homeLink} focus-ring`} aria-label="Return to Daily Oratory home">Daily Oratory <span aria-hidden="true">⌂</span></Link>
        {view === "welcome" ? (
          <WelcomeView
            onBegin={begin}
            onResume={resumableDraft ? resume : undefined}
            onOpenMap={store.sessions.length ? () => setView("grace-map") : undefined}
            hasSavedDraft={Boolean(store.draft)}
            onClear={clearPrivateData}
            pace={pace}
            onPaceChange={updatePace}
            storageMessage={storageMessage}
            sessionCount={store.sessions.length}
          />
        ) : null}
        {view === "prayer" && draft ? (
          <PrayerView
            draft={draft}
            onUpdate={updateDraft}
            onSetNote={setPageNote}
            onToggleMovement={toggleMovement}
            onPrevious={previousStep}
            onNext={nextStep}
            storageMessage={storageMessage}
          />
        ) : null}
        {view === "complete" && completedSession ? (
          <CompleteView
            session={completedSession}
            storageMessage={storageMessage}
            onRestart={() => begin(true)}
            onOpenMap={() => setView("grace-map")}
          />
        ) : null}
        {view === "grace-map" ? (
          <GraceMapView
            sessions={store.sessions}
            onBack={() => setView("welcome")}
            onClear={clearPrivateData}
          />
        ) : null}
      </div>
    </section>
  );
}

function WelcomeView({
  onBegin,
  onResume,
  onOpenMap,
  hasSavedDraft,
  onClear,
  pace,
  onPaceChange,
  storageMessage,
  sessionCount,
}: {
  onBegin: (writingEnabled: boolean) => void;
  onResume?: () => void;
  onOpenMap?: () => void;
  hasSavedDraft: boolean;
  onClear: () => void;
  pace: NightlyExamenPace;
  onPaceChange: (pace: NightlyExamenPace) => void;
  storageMessage: string | null;
  sessionCount: number;
}) {
  return (
    <main className={styles.welcome}>
      <PrayerImage pageIndex={0} priority />
      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <p className={styles.kicker}>Daily Oratory <span aria-hidden="true">✦</span> Evening Prayer</p>
          <p className={styles.brandTitle}>The Last Light</p>
          <p className={styles.brandSubtitle}>A Nightly Examen</p>
          <div className={styles.brandRule} aria-hidden="true"><span>✦</span></div>
          <div className={styles.progressMeta}>
            <span>Become present</span><span>1 of 6</span>
          </div>
          <ProgressSegments current={0} />
          <h1 id="nightly-examen-current-heading" tabIndex={-1} className={styles.welcomeTitle}>Come before the God who is already here.</h1>
          <p className={styles.welcomeSubtitle}>A quiet guide to gratitude, honest reflection, mercy, and rest in God.</p>
          <div className={styles.actions}>
            {onResume ? (
              <button type="button" onClick={onResume} className={`${styles.primaryButton} focus-ring`}>Resume tonight&apos;s Examen</button>
            ) : (
              <button type="button" onClick={() => onBegin(pace !== "rest")} className={`${styles.primaryButton} focus-ring`}>Begin the Examen</button>
            )}
            <button type="button" onClick={() => onBegin(false)} className={`${styles.secondaryButton} focus-ring`}>Pray without journaling</button>
          </div>
          <p className={styles.optionalCopy}>You may reflect silently. You do not need to answer every question.</p>
          <details className={styles.paceDetails}>
            <summary className={`${styles.disclosure} focus-ring`}>Choose a prayer pace <span aria-hidden="true">＋</span></summary>
            <fieldset className={styles.paceChoices}>
              <legend className="sr-only">Choose a prayer pace</legend>
              {paceOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={pace === option.id}
                  onClick={() => onPaceChange(option.id)}
                  className={`${styles.choiceButton} ${pace === option.id ? styles.choiceSelected : ""} focus-ring`}
                >
                  <span>{option.title}</span><small>{option.time} · {option.description}</small>
                </button>
              ))}
            </fieldset>
          </details>
          {onOpenMap ? <button type="button" onClick={onOpenMap} className={`${styles.textButton} focus-ring`}>View your saved Examen history ({sessionCount})</button> : null}
          {(sessionCount > 0 || hasSavedDraft) ? <button type="button" onClick={onClear} className={`${styles.textButton} focus-ring`}>Clear saved Examen data</button> : null}
          <StorageNotice message={storageMessage} />
          <p className={styles.privacyNote}>Notes and completed Examen sessions stay in this browser&apos;s local storage. They are not encrypted; anyone with access to this browser profile may be able to read them. Up to 90 completed sessions are kept until you clear them.</p>
        </div>
      </div>
    </main>
  );
}

function PrayerView({
  draft,
  onUpdate,
  onSetNote,
  onToggleMovement,
  onPrevious,
  onNext,
  storageMessage,
}: {
  draft: NightlyExamenDraft;
  onUpdate: (patch: Partial<NightlyExamenDraft>) => void;
  onSetNote: (index: number, value: string) => void;
  onToggleMovement: (movement: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  storageMessage: string | null;
}) {
  const index = Math.min(draft.stepIndex, nightlyJourneyPages.length - 1);
  const page = nightlyJourneyPages[index];
  const notes = normalizeNotes(draft.notes);
  const journalingEnabled = draft.writingEnabled && draft.pace !== "rest";

  useEffect(() => {
    trackEvent("daily_examen_step_view", { step: page.id });
  }, [page.id]);

  const noteValue = page.id === "resolution" && draft.resolution ? draft.resolution : notes[index];

  return (
    <main className={styles.prayerJourney}>
      <PrayerImage key={page.image} pageIndex={index} priority={index === 0} />
      <div className={styles.panel}>
        <article className={styles.panelInner}>
          <div className={styles.progressMeta}>
            <span>{page.eyebrow}</span><span>{index + 1} of {nightlyJourneyPages.length}</span>
          </div>
          <ProgressSegments current={index} />
          <p className={styles.kicker}>The Last Light <span aria-hidden="true">✦</span> A Nightly Examen</p>
          <h1 id="nightly-examen-current-heading" tabIndex={-1} className={styles.pageTitle}>{page.title}</h1>
          <p className={styles.guide}>{page.guide}</p>
          <blockquote className={styles.prayerCard}>
            <p>{page.prayer}</p>
            {page.id === "surrender" ? (
              <div className={styles.closingPrayer}>
                <p>Jesus, I trust in You.</p>
                <p className={styles.signOfCross}>Make the Sign of the Cross.</p>
              </div>
            ) : null}
          </blockquote>

          <details className={styles.deepReflection}>
            <summary className={`${styles.disclosure} focus-ring`}>Go Deeper <span aria-hidden="true">＋</span></summary>
            <div className={styles.deepBody}>
              <p className={styles.optionalCopy}>{nightlyJourneyOptionalIntro}</p>
              <ul className={styles.questions}>{page.questions.map((question) => <li key={question}>{question}</li>)}</ul>
              {page.note ? <p className={styles.catholicNote}>{page.note}</p> : null}
              {journalingEnabled && page.id === "gratitude" ? (
                <ChoiceGroup label="A gift I noticed" values={gratitudeAreas} selected={draft.gratitudeArea} onSelect={(value) => onUpdate({ gratitudeArea: value })} />
              ) : null}
              {journalingEnabled && page.id === "review" ? (
                <div className={styles.legacySelections}>
                  <ChoiceGroup label="Movements toward faith, hope, and love" values={towardLove} selected={draft.movementTags.filter((value) => towardLove.includes(value))} onSelect={onToggleMovement} multiple />
                  <ChoiceGroup label="Movements toward withdrawal or unrest" values={towardUnrest} selected={draft.movementTags.filter((value) => towardUnrest.includes(value))} onSelect={onToggleMovement} multiple />
                  <p className={styles.fieldHint}>Choose up to two in total, or simply notice them silently.</p>
                </div>
              ) : null}
              {journalingEnabled && page.id === "resolution" ? (
                <div className={styles.legacySelections}>
                  <ChoiceGroup label="A virtue to ask for tomorrow" values={tomorrowGraces} selected={draft.tomorrowGrace} onSelect={(value) => onUpdate({ tomorrowGrace: value })} />
                  <p className={styles.suggestedHeading}>Suggested resolutions</p>
                  <div className={styles.resolutionChoices}>
                    {page.resolutions?.map((resolution) => (
                      <button
                        key={resolution}
                        type="button"
                        aria-pressed={noteValue === resolution}
                        onClick={() => onSetNote(index, resolution)}
                        className={`${styles.choiceButton} ${noteValue === resolution ? styles.choiceSelected : ""} focus-ring`}
                      >{resolution}</button>
                    ))}
                  </div>
                </div>
              ) : null}
              <label className={styles.journalField}>
                <span>{page.journalLabel} <small>(optional)</small></span>
                <textarea
                  value={noteValue}
                  onChange={(event) => onSetNote(index, event.target.value)}
                  maxLength={5000}
                  rows={4}
                  disabled={!journalingEnabled}
                  placeholder={journalingEnabled ? "Write a few words, or leave this empty and continue praying." : "You chose to pray without journaling. You can continue without writing."}
                  className="focus-ring"
                />
                <small className={styles.fieldHint}>You do not need to write or answer every question to continue.</small>
              </label>
              {page.id === "presence" ? (
                <details className={styles.paceDetails}>
                  <summary className={`${styles.disclosure} focus-ring`}>Prayer pace: {paceOptions.find((option) => option.id === draft.pace)?.title} <span aria-hidden="true">＋</span></summary>
                  <fieldset className={styles.paceChoices}>
                    <legend className="sr-only">Change prayer pace</legend>
                    {paceOptions.map((option) => (
                      <button key={option.id} type="button" aria-pressed={draft.pace === option.id} onClick={() => onUpdate({ pace: option.id })} className={`${styles.choiceButton} ${draft.pace === option.id ? styles.choiceSelected : ""} focus-ring`}>
                        <span>{option.title}</span><small>{option.time} · {option.description}</small>
                      </button>
                    ))}
                  </fieldset>
                </details>
              ) : null}
            </div>
          </details>
          <StorageNotice message={storageMessage} />
        </article>
        <nav aria-label="Nightly Examen page navigation" className={styles.navigation}>
          <button type="button" onClick={onPrevious} className={`${styles.secondaryButton} focus-ring`}>{index === 0 ? "Leave for now" : "Back"}</button>
          <button type="button" onClick={onNext} className={`${styles.primaryButton} focus-ring`}>
            {index === nightlyJourneyPages.length - 1 ? "Complete the Examen" : "Continue"}
          </button>
        </nav>
      </div>
    </main>
  );
}

function PrayerImage({ pageIndex, priority = false }: { pageIndex: number; priority?: boolean }) {
  const page = nightlyJourneyPages[pageIndex];
  const [failed, setFailed] = useState(false);
  return (
    <figure className={styles.photoPanel} aria-label={`${page.eyebrow} devotional image`}>
      {!failed ? (
        <Image
          src={page.image}
          alt={page.imageAlt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 899px) 100vw, 48vw"
          className={styles.photo}
          onError={() => setFailed(true)}
        />
      ) : <div className={styles.imageFallback} role="img" aria-label={page.imageAlt} />}
      <figcaption className={styles.photoCaption}>The Last Light <span aria-hidden="true">✦</span> A Nightly Examen</figcaption>
    </figure>
  );
}

function CompleteView({
  session,
  storageMessage,
  onRestart,
  onOpenMap,
}: {
  session: NightlyExamenSession;
  storageMessage: string | null;
  onRestart: () => void;
  onOpenMap: () => void;
}) {
  return (
    <main className={styles.completeShell}>
      <PrayerImage pageIndex={5} />
      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <p className={styles.kicker}>The Last Light <span aria-hidden="true">✦</span> Examen complete</p>
          <h1 id="nightly-examen-current-heading" tabIndex={-1} className={styles.pageTitle}>This day is now in God&apos;s hands.</h1>
          <blockquote className={styles.prayerCard}>
            <p>Into Your hands, Lord, I place this day and this night.</p>
            <p className={styles.completionText}>The day is finished. Receive what was good with gratitude. Entrust what needs mercy and what remains unfinished to God.</p>
            <p className={styles.closingPrayer}>Jesus, I trust in You.</p>
            <p className={styles.signOfCross}>Make the Sign of the Cross.</p>
          </blockquote>
          <p className={styles.optionalCopy}>You may rest now. You do not have to solve tomorrow tonight.</p>
          <div className={styles.completionActions}>
            <button type="button" onClick={onRestart} className={`${styles.primaryButton} focus-ring`}>Begin a new Examen</button>
            <button type="button" onClick={onOpenMap} className={`${styles.secondaryButton} focus-ring`}>View saved Examen history</button>
            <Link href="/night-prayer" className={`${styles.secondaryButton} focus-ring`}>Continue to Night Prayer</Link>
            <Link href="/" className={`${styles.secondaryButton} focus-ring`}>Return to Home Page</Link>
          </div>
          <p className={styles.completionMeta}>Completed in {session.durationMinutes} {session.durationMinutes === 1 ? "minute" : "minutes"}.</p>
          <StorageNotice message={storageMessage} />
          <p className={styles.privacyNote}>Your notes remain in this browser&apos;s local storage, not encrypted. Anyone with access to this browser profile may be able to read them. Up to 90 completed sessions are retained until you clear them.</p>
        </div>
      </div>
    </main>
  );
}

function GraceMapView({ sessions, onBack, onClear }: { sessions: NightlyExamenSession[]; onBack: () => void; onClear: () => void }) {
  const days = useMemo(() => buildWeekDays(sessions), [sessions]);
  const gratitude = mostFrequent(sessions.map((session) => session.gratitudeArea)) || "Still unfolding";
  const movement = mostFrequent(sessions.flatMap((session) => session.movementTags)) || "Still unfolding";
  const grace = mostFrequent(sessions.map((session) => session.tomorrowGrace)) || "Still unfolding";
  return (
    <main className={styles.historyShell}>
      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <button type="button" onClick={onBack} className={`${styles.textButton} focus-ring`}>Back to tonight</button>
          <p className={styles.kicker}>The Last Light <span aria-hidden="true">✦</span> Saved on this device</p>
          <h1 id="nightly-examen-current-heading" tabIndex={-1} className={styles.pageTitle}>What you have noticed in prayer</h1>
          <p className={styles.guide}>A gentle memory of your own reflections—never a score and never a claim about God&apos;s will.</p>
          <div className={styles.weekMap} aria-label="Examen rhythm during the last seven days">
            {days.map((day) => (
              <div key={day.key} className={`${styles.day} ${day.complete ? styles.dayComplete : ""}`}>
                <span className={styles.dayLight} aria-hidden="true" /><span>{day.label}</span>
                <span className="sr-only">{day.complete ? "Examen completed" : "No saved Examen"}</span>
              </div>
            ))}
          </div>
          <div className={styles.insightGrid}>
            <InsightCard label="Grace received" value={gratitude} />
            <InsightCard label="Movement noticed" value={movement} />
            <InsightCard label="Grace requested" value={grace} />
          </div>
          <p className={styles.privacyNote}>Saved in this browser only · {sessions.length} completed {sessions.length === 1 ? "session" : "sessions"}. Notes are not encrypted. Up to 90 sessions are kept until cleared.</p>
          <button type="button" onClick={onClear} className={`${styles.clearButton} focus-ring`}>Clear saved Examen data</button>
        </div>
      </div>
    </main>
  );
}

function ProgressSegments({ current }: { current: number }) {
  return (
    <div className={styles.progressTrack} role="progressbar" aria-valuemin={1} aria-valuemax={nightlyJourneyPages.length} aria-valuenow={current + 1} aria-label={`Page ${current + 1} of ${nightlyJourneyPages.length}`}>
      {nightlyJourneyPages.map((page, index) => <span key={page.id} className={index <= current ? styles.progressSegmentActive : styles.progressSegment} aria-hidden="true" />)}
    </div>
  );
}

function ChoiceGroup({
  label,
  values,
  selected,
  onSelect,
  multiple = false,
}: {
  label: string;
  values: string[];
  selected: string | string[];
  onSelect: (value: string) => void;
  multiple?: boolean;
}) {
  const selectedValues = Array.isArray(selected) ? selected : selected ? [selected] : [];
  return (
    <fieldset className={styles.choiceGroup}>
      <legend>{label} <span>(optional)</span></legend>
      <div className={styles.chipList}>
        {values.map((value) => (
          <button key={value} type="button" aria-pressed={selectedValues.includes(value)} onClick={() => onSelect(value)} className={`${styles.chip} ${selectedValues.includes(value) ? styles.chipSelected : ""} focus-ring`}>
            {value}
          </button>
        ))}
      </div>
      {multiple ? <span className="sr-only">You may select up to two options.</span> : null}
    </fieldset>
  );
}

function StorageNotice({ message }: { message: string | null }) {
  return message ? <p className={styles.storageMessage} role="status" aria-live="polite">{message}</p> : null;
}

function InsightCard({ label, value }: { label: string; value: string }) {
  return <div className={styles.insightCard}><p>{label}</p><strong>{value}</strong></div>;
}

function getLocalDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function buildWeekDays(sessions: NightlyExamenSession[]) {
  const completed = new Set(sessions.map((session) => session.localDate));
  const today = new Date();
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    const key = getLocalDate(date);
    return { key, label: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date), complete: completed.has(key) };
  });
}

function mostFrequent(values: string[]) {
  const counts = new Map<string, number>();
  values.filter(Boolean).forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1));
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
}
