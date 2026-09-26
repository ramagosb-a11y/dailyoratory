"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  getLocalCalendarDate,
  saveScriptureJournalEntry,
  useScriptureJournalStore,
  type ScriptureJournalEntry,
} from "@/lib/scriptureJournalStorage";
import styles from "./ScriptureJournal.module.css";

const prayerId = "prayer-before-scripture";
const readingGuideId = "daily-scripture-reading-guide";

export function DailyReadingsJournalStep() {
  const [expandedGuide, setExpandedGuide] = useState(false);
  const [expandedPrayer, setExpandedPrayer] = useState(false);

  return (
    <section className={styles.stepPanel} aria-labelledby="daily-readings-title" data-guided-flow-card>
      <div className={styles.bookSpine} aria-hidden="true" />
      <div className={styles.stepInner}>
        <p className={styles.stepEyebrow}>Step 1 · Pause · Pray · Listen</p>
        <h1 id="daily-readings-title" className={styles.stepTitle}>Daily Readings</h1>

        <div className={styles.guideDisclosure}>
          <button
            type="button"
            className={`focus-ring ${styles.prayerToggle}`}
            aria-expanded={expandedGuide}
            aria-controls={readingGuideId}
            onClick={() => setExpandedGuide((expanded) => !expanded)}
          >
            <span>Read today’s Scripture intentionally.</span>
            <span className={`${styles.chevron} ${expandedGuide ? styles.chevronOpen : ""}`} aria-hidden="true">⌄</span>
          </button>
          <div id={readingGuideId} className={styles.introductionCopy} hidden={!expandedGuide}>
            <p>
              <strong>Expect God to speak to you through His Word.</strong> As you read, look for a <strong>word or phrase</strong> that draws your attention, stays with you, or seems meant for you today. God wants to speak to your heart.
            </p>
            <p>Don’t rush. Read slowly and listen.</p>
            <p>
              When a word or phrase stands out, sit with it for a moment. Then come back and write it down along with a short reflection on what God may be inviting you to notice, receive, or do.
            </p>
          </div>
        </div>

        <div className={styles.prayerDisclosure}>
          <button
            type="button"
            className={`focus-ring ${styles.prayerToggle}`}
            aria-expanded={expandedPrayer}
            aria-controls={prayerId}
            onClick={() => setExpandedPrayer((expanded) => !expanded)}
          >
            <span>Prayer Before Scripture</span>
            <span className={`${styles.chevron} ${expandedPrayer ? styles.chevronOpen : ""}`} aria-hidden="true">⌄</span>
          </button>
          <p id={prayerId} className={styles.prayerText} hidden={!expandedPrayer}>
            Come, Holy Spirit, open my heart to God’s Word. Help me discern what You are saying and return to Your Word throughout this day. Give me the grace to follow where You lead. Amen.
          </p>
        </div>

        <div className={styles.readingLinkRow}>
          <a
            className="btn btn-secondary focus-ring"
            href="https://bible.usccb.org/daily-bible-reading"
            target="_blank"
            rel="noopener noreferrer"
          >
            USCCB Daily Readings
          </a>
        </div>

        <span className={styles.edgeMark} aria-hidden="true">✣</span>
      </div>
    </section>
  );
}

export function DailyScriptureJournalEditor() {
  const storeSnapshot = useScriptureJournalStore();
  const [today, setToday] = useState<string | null>(null);
  const [wordOrPhrase, setWordOrPhrase] = useState("");
  const [reflection, setReflection] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const appliedEntryKey = useRef("");
  const todayEntry = today ? storeSnapshot.store.entries[today] : undefined;
  const storageUnavailable = storeSnapshot.status !== "ready";

  useEffect(() => {
    const updateToday = () => setToday(getLocalCalendarDate());
    updateToday();
    const interval = window.setInterval(updateToday, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!today) return;
    const key = `${today}:${todayEntry?.updatedAt ?? "empty"}`;
    if (appliedEntryKey.current === key) return;
    appliedEntryKey.current = key;
    setWordOrPhrase(todayEntry?.wordOrPhrase ?? "");
    setReflection(todayEntry?.reflection ?? "");
    setSaveMessage("");
  }, [today, todayEntry]);

  function saveToday(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!today) return;
    const result = saveScriptureJournalEntry({ date: today, wordOrPhrase, reflection });
    if (!result.ok) {
      setSaveMessage(result.reason === "corrupt"
        ? "Your saved journal could not be read, so saving is paused to protect its contents."
        : "This journal could not be saved in this browser. Your writing is still here; you can copy it before leaving.");
      return;
    }
    setSaveMessage("Saved for today. Return to this word throughout your day.");
  }

  return (
    <section className={`${styles.stepPanel} ${styles.dailyJournalPanel}`} aria-labelledby="today-journal-title" data-guided-flow-card>
      <div className={styles.bookSpine} aria-hidden="true" />
      <div className={styles.stepInner}>
        <details id="today-journal-disclosure" className={styles.journalDisclosure} open>
          <summary className={`focus-ring ${styles.journalSummaryToggle}`} aria-controls="today-journal-fields">
            <span>
              <span className={styles.stepEyebrow}>Step 2 · Write · Remember · Return</span>
              <span id="today-journal-title" className={styles.stepTitle}>My Scripture Journal for Today</span>
              <span className={styles.editorSummary}>One entry per local calendar day. Your words stay on this device; review past entries in your journal history.</span>
            </span>
            <span className={styles.chevron} aria-hidden="true">⌄</span>
          </summary>

          <div id="today-journal-fields" className={styles.journalFields}>
            {storageUnavailable && (
              <p className={styles.storageNotice} role="status">
                {storeSnapshot.status === "corrupt"
                  ? "Your saved journal could not be read. Saving is paused to protect its contents."
                  : "Browser storage is unavailable. You can still write here, but this journal cannot be saved on this device right now."}
              </p>
            )}

            <form className={styles.form} onSubmit={saveToday}>
              <div className={styles.field}>
                <label htmlFor="my-word-or-phrase">My Word or Phrase</label>
                <span className={styles.fieldPrompt}>What word or phrase stays with me?</span>
                <input id="my-word-or-phrase" name="wordOrPhrase" type="text" maxLength={60} placeholder="Enter the word or phrase that stayed with you…" value={wordOrPhrase} onChange={(event) => { setWordOrPhrase(event.target.value); setSaveMessage(""); }} />
              </div>
              <div className={styles.field}>
                <label htmlFor="my-reflection">My Reflection</label>
                <span className={styles.fieldPrompt}>What do I notice about God? What might God be inviting me to notice, receive, or do today?</span>
                <textarea id="my-reflection" name="reflection" maxLength={500} rows={3} placeholder="What might God be inviting you to notice, receive, or do today?" value={reflection} onChange={(event) => { setReflection(event.target.value); setSaveMessage(""); }} />
              </div>
              <div className={styles.saveRow}>
                <button type="submit" className="btn btn-primary focus-ring" disabled={!today || storageUnavailable || (!wordOrPhrase.trim() && !reflection.trim())}>
                  {todayEntry ? "Update Today’s Journal" : "Save Today’s Journal"}
                </button>
              </div>
              <JournalHistoryButton />
              <p aria-live="polite" className={styles.saveStatus}>{saveMessage}</p>
            </form>
          </div>
        </details>
        <span className={styles.edgeMark} aria-hidden="true">✣</span>
      </div>
    </section>
  );
}

export function JournalHistoryButton() {
  return (
    <div className={styles.historyJumpRow}>
      <a className={`btn btn-secondary focus-ring ${styles.historyLink}`} href="#journal-history">
        View Journal History ↓
      </a>
    </div>
  );
}

export function MyScriptureJournal() {
  const snapshot = useScriptureJournalStore();
  const [today, setToday] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState("");
  const sortedEntries = useMemo(
    () => Object.values(snapshot.store.entries).sort((a, b) => b.date.localeCompare(a.date)),
    [snapshot.store.entries],
  );

  useEffect(() => {
    const updateToday = () => setToday(getLocalCalendarDate());
    updateToday();
    const interval = window.setInterval(updateToday, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  async function copyText(text: string, success: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        copyWithSelection(text);
      }
      setCopyMessage(success);
    } catch {
      try {
        copyWithSelection(text);
        setCopyMessage(success);
      } catch {
        setCopyMessage("Copy was not available. Select and copy the reflection text instead.");
      }
    }
  }

  return (
    <section className={styles.journalSection} aria-labelledby="scripture-journal-title" id="journal-history" data-guided-flow-card tabIndex={-1}>
      <div className={styles.historyContent}>
        <div className={styles.journalHeadingRow}>
          <div>
            <p className={styles.journalEyebrow}>A record of listening</p>
            <h2 id="scripture-journal-title" className={styles.journalTitle}>Journal History</h2>
            <p className={styles.journalSummary}>Your saved words and reflections are stored privately on this device, newest first.</p>
          </div>
          {sortedEntries.length > 0 && (
            <button
              type="button"
              className={`btn btn-secondary focus-ring ${styles.copyAllButton}`}
              onClick={() => void copyText(formatEntriesForCopy(sortedEntries), "Journal copied to clipboard.")}
            >
              Copy all reflections
            </button>
          )}
        </div>
        {snapshot.status === "corrupt" && (
          <p className={styles.storageNotice} role="status">Your saved journal could not be read. Its contents have been left untouched.</p>
        )}
        {snapshot.status === "unavailable" && (
          <p className={styles.storageNotice} role="status">Browser storage is unavailable, so saved entries cannot be shown right now.</p>
        )}
        {sortedEntries.length === 0 && snapshot.status === "ready" ? (
          <p className={styles.emptyState}>Your saved words and reflections will appear here as you pray with Scripture each day.</p>
        ) : (
          <div className={styles.entryList} id="scripture-journal-entries">
            {sortedEntries.map((entry) => (
              <JournalEntryCard
                key={entry.date}
                entry={entry}
                isToday={entry.date === today}
                onEdit={() => {
                  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                  const editorDisclosure = document.getElementById("today-journal-disclosure");
                  if (editorDisclosure instanceof HTMLDetailsElement) editorDisclosure.open = true;
                  document.getElementById("today-journal-title")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
                  window.setTimeout(() => document.getElementById("my-word-or-phrase")?.focus(), 120);
                }}
                onCopy={() => void copyText(formatEntryForCopy(entry), "Reflection copied to clipboard.")}
              />
            ))}
          </div>
        )}

        <p aria-live="polite" className={styles.copyStatus}>{copyMessage}</p>
      </div>
    </section>
  );
}

function JournalEntryCard({
  entry,
  isToday,
  onEdit,
  onCopy,
}: {
  entry: ScriptureJournalEntry;
  isToday: boolean;
  onEdit: () => void;
  onCopy: () => void;
}) {
  return (
    <article className={styles.entryCard}>
      <div className={styles.entryDateRow}>
        <h3>{formatEntryDate(entry.date)}</h3>
        <button type="button" className={`focus-ring ${styles.copyEntryButton}`} onClick={onCopy}>Copy this reflection</button>
      </div>
      {entry.wordOrPhrase && <p className={styles.entryWord}><strong>Word:</strong> {entry.wordOrPhrase}</p>}
      {entry.reflection && <p className={styles.entryReflection}>{entry.reflection}</p>}
      {isToday && <button type="button" className={`focus-ring ${styles.editTodayButton}`} onClick={onEdit}>Edit today’s reflection</button>}
    </article>
  );
}

function formatEntryDate(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat(undefined, { month: "long", day: "numeric", year: "numeric" }).format(new Date(year, month - 1, day, 12));
}

function formatEntryForCopy(entry: ScriptureJournalEntry) {
  return [
    formatEntryDate(entry.date),
    entry.wordOrPhrase ? `Word: ${entry.wordOrPhrase}` : "",
    entry.reflection,
  ].filter(Boolean).join("\n\n");
}

function formatEntriesForCopy(entries: ScriptureJournalEntry[]) {
  return ["My Scripture Journal", "", ...entries.map(formatEntryForCopy)].join("\n\n---\n\n");
}

function copyWithSelection(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  textArea.style.pointerEvents = "none";
  document.body.append(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();
  if (!copied) throw new Error("Clipboard copy failed");
}
