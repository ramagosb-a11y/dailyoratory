"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { morningPrayers } from "@/data/morningPrayer";

type PersonalPrayerListKind = "deceased" | "intentions";
type PersonalPrayerEntry = { id: string; name: string };
type PersonalPrayerSnapshot = { entries: PersonalPrayerEntry[]; storageAvailable: boolean };

const personalPrayerChangeEvent = "daily-oratory-morning-prayer-list-change";
const personalPrayerSnapshotCache = new Map<string, { raw: string | null; snapshot: PersonalPrayerSnapshot }>();
const emptyPersonalPrayerSnapshot: PersonalPrayerSnapshot = { entries: [], storageAvailable: true };

const personalPrayerLists: Record<PersonalPrayerListKind, { storageKey: string; prompt: string; kicker: string; helper: string; label: string; placeholder: string }> = {
  deceased: {
    storageKey: "daily-oratory-morning-prayer-deceased-v1",
    prompt: "Remember loved ones who have passed away",
    kicker: "A name held in prayer",
    helper: "Keep their names close as you pray each morning.",
    label: "Loved one’s name",
    placeholder: "Enter a name",
  },
  intentions: {
    storageKey: "daily-oratory-morning-prayer-intentions-v1",
    prompt: "Add someone who is in need of prayer",
    kicker: "An intention to remember",
    helper: "Keep those in need present in your prayer.",
    label: "Name or intention",
    placeholder: "Enter a name or intention",
  },
};

function readPersonalPrayerSnapshot(key: string): PersonalPrayerSnapshot {
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    const cached = personalPrayerSnapshotCache.get(key);
    if (cached?.raw === null && !cached.snapshot.storageAvailable) return cached.snapshot;
    const snapshot = { entries: [], storageAvailable: false };
    personalPrayerSnapshotCache.set(key, { raw: null, snapshot });
    return snapshot;
  }

  const cached = personalPrayerSnapshotCache.get(key);
  if (cached?.raw === raw) return cached.snapshot;

  let value: unknown = [];
  try {
    value = JSON.parse(raw ?? "[]");
  } catch {
    // Ignore malformed saved data without preventing the prayer or future edits.
  }
  const entries = Array.isArray(value) ? value.filter((entry): entry is PersonalPrayerEntry =>
    typeof entry?.id === "string" && typeof entry?.name === "string" && entry.name.trim().length > 0,
  ).slice(0, 50) : [];
  const snapshot = { entries, storageAvailable: true };
  personalPrayerSnapshotCache.set(key, { raw, snapshot });
  return snapshot;
}

function subscribePersonalPrayerList(key: string, onChange: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === key || event.key === null) onChange();
  }
  function handleLocalChange(event: Event) {
    if ((event as CustomEvent<string>).detail === key) onChange();
  }
  window.addEventListener("storage", handleStorage);
  window.addEventListener(personalPrayerChangeEvent, handleLocalChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(personalPrayerChangeEvent, handleLocalChange);
  };
}

function emitPersonalPrayerListChange(key: string) {
  window.dispatchEvent(new CustomEvent(personalPrayerChangeEvent, { detail: key }));
}

function PersonalPrayerList({ kind }: { kind: PersonalPrayerListKind }) {
  const config = personalPrayerLists[kind];
  const snapshot = useSyncExternalStore(
    (onChange) => subscribePersonalPrayerList(config.storageKey, onChange),
    () => readPersonalPrayerSnapshot(config.storageKey),
    () => emptyPersonalPrayerSnapshot,
  );
  const { entries, storageAvailable } = snapshot;
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  function persist(nextEntries: PersonalPrayerEntry[]) {
    try {
      window.localStorage.setItem(config.storageKey, JSON.stringify(nextEntries));
      personalPrayerSnapshotCache.delete(config.storageKey);
    } catch {
      let raw: string | null = null;
      try {
        raw = window.localStorage.getItem(config.storageKey);
      } catch {
        // Keep the in-memory change visible when storage access itself is blocked.
      }
      personalPrayerSnapshotCache.set(config.storageKey, {
        raw,
        snapshot: { entries: nextEntries, storageAvailable: false },
      });
    }
    emitPersonalPrayerListChange(config.storageKey);
  }

  function saveEntry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = draft.trim();
    if (!name) return;
    if (editingId) {
      persist(entries.map((entry) => entry.id === editingId ? { ...entry, name } : entry));
    } else if (entries.length < 50) {
      persist([...entries, { id: crypto.randomUUID(), name }]);
    }
    setDraft("");
    setEditingId(null);
  }

  function beginEdit(entry: PersonalPrayerEntry) {
    setEditingId(entry.id);
    setDraft(entry.name);
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft("");
  }

  return (
    <section className="mt-10 overflow-hidden rounded-[1.75rem] border border-[#D8CDB9] bg-[#FFFDF7] shadow-[0_12px_32px_rgba(13,32,56,0.08)]" aria-label={config.prompt}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
        className="focus-ring group flex min-h-12 w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#F3EAD8]/45 sm:px-6 sm:py-6"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#BD8A2F]/30 bg-[radial-gradient(circle_at_35%_30%,#fffdf7_0%,#f3ead8_72%)] shadow-inner">
            <span className="h-2.5 w-2.5 rounded-full bg-[#BD8A2F] shadow-[0_0_0_5px_rgba(189,138,47,0.12)]" />
          </span>
          <span className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A6A1B]">{config.kicker}</span>
            <span className="mt-1 block font-serif text-xl font-semibold leading-tight text-[#0D2038] sm:text-2xl">{config.prompt}</span>
            <span className="mt-1.5 block text-sm leading-5 text-[#5B5145]">{config.helper}</span>
          </span>
        </span>
        <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#D8CDB9] font-serif text-xl leading-none text-[#7A2533] transition-colors group-hover:border-[#BD8A2F] group-hover:bg-[#F3EAD8]/70">
          {expanded ? "−" : "+"}
        </span>
      </button>
      {expanded ? (
        <div className="border-t border-[#D8CDB9]/80 bg-gradient-to-b from-[#F3EAD8]/50 to-[#FFFDF7] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-serif text-lg font-semibold text-[#0D2038]">Your prayer list</h2>
            <span className="rounded-full border border-[#D8CDB9] bg-[#FFFDF7]/80 px-3 py-1 text-[11px] font-semibold text-[#5B5145]">
              Saved in this browser
            </span>
          </div>
          {!storageAvailable ? <p role="status" className="mb-3 rounded-xl border border-[#BD8A2F]/35 bg-[#FFFDF7] px-4 py-3 text-sm text-[#5B5145]">Browser storage is unavailable. Your changes will not be saved after you leave this page.</p> : null}
          {entries.length > 0 ? (
            <ul className="mb-5 space-y-2.5">
              {entries.map((entry) => (
                <li key={entry.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#E6DDCD] bg-[#FFFDF7] px-4 py-3.5 text-[#172033] shadow-[0_3px_12px_rgba(13,32,56,0.04)] sm:px-5">
                  <span className="flex min-w-0 flex-1 items-center gap-3 break-words font-medium">
                    <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F3EAD8]"><span className="h-1.5 w-1.5 rounded-full bg-[#BD8A2F]" /></span>
                    {entry.name}
                  </span>
                  <span className="flex shrink-0 gap-2">
                    <button type="button" onClick={() => beginEdit(entry)} className="focus-ring min-h-10 rounded-full px-3 text-sm font-semibold text-[#7A2533] transition-colors hover:bg-[#F3EAD8]">Edit <span className="sr-only">{entry.name}</span></button>
                    <button type="button" onClick={() => { persist(entries.filter((item) => item.id !== entry.id)); if (editingId === entry.id) cancelEdit(); }} className="focus-ring min-h-10 rounded-full px-3 text-sm font-semibold text-[#5B5145] transition-colors hover:bg-[#F3EAD8] hover:text-[#7A2533]">Remove <span className="sr-only">{entry.name}</span></button>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mb-5 flex items-center gap-3 rounded-2xl border border-dashed border-[#D8CDB9] bg-[#FFFDF7]/70 px-4 py-4 text-sm text-[#5B5145]">
              <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F3EAD8]"><span className="h-1.5 w-1.5 rounded-full bg-[#BD8A2F]" /></span>
              <span>Your list is ready when you are. Add a name to keep it close in prayer.</span>
            </div>
          )}
          <form onSubmit={saveEntry} className="rounded-2xl border border-[#E6DDCD] bg-[#FFFDF7] p-3 shadow-[0_4px_16px_rgba(13,32,56,0.05)] sm:flex sm:items-end sm:gap-3 sm:p-4">
            <div className="flex-1">
              <label htmlFor={`personal-prayer-${kind}`} className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#5B5145]">{config.label}</label>
              <input
                id={`personal-prayer-${kind}`}
                value={draft}
                onChange={(event) => setDraft(event.target.value.slice(0, 120))}
                maxLength={120}
                placeholder={config.placeholder}
                required
                className="focus-ring min-h-12 w-full rounded-xl border border-[#C9B99E] bg-white px-4 py-3 text-base text-[#172033] placeholder:text-[#746B60] shadow-inner shadow-[#0D2038]/[0.025]"
              />
            </div>
            <div className="mt-2 flex gap-2 sm:mt-0">
              {editingId ? <button type="button" onClick={cancelEdit} className="focus-ring min-h-12 rounded-full border border-[#D8CDB9] px-5 py-3 text-sm font-semibold text-[#0D2038] transition-colors hover:bg-[#F3EAD8]">Cancel</button> : null}
              <button type="submit" disabled={!editingId && entries.length >= 50} className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#7A2533] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_12px_rgba(122,37,51,0.18)] transition hover:bg-[#65202B] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none">
                {editingId ? "Save changes" : "Add to list"}
              </button>
            </div>
          </form>
          {entries.length >= 50 && !editingId ? <p className="mt-3 text-sm text-[#5B5145]">You can save up to 50 entries in this list.</p> : null}
          <p className="mt-3 text-center text-xs leading-5 text-[#5B5145]">Private to this browser · Not sent to Daily Oratory</p>
        </div>
      ) : null}
    </section>
  );
}

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MorningPrayerExperience() {
  const [currentPrayer, setCurrentPrayer] = useState(0);
  const [silenceSeconds, setSilenceSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isSilence = currentPrayer === morningPrayers.length;
  const prayer = !isSilence ? morningPrayers[currentPrayer] : null;

  const moveTo = useCallback((index: number) => {
    setCurrentPrayer(Math.max(0, Math.min(index, morningPrayers.length)));
  }, []);

  const next = useCallback(() => moveTo(currentPrayer + 1), [currentPrayer, moveTo]);
  const previous = useCallback(() => moveTo(currentPrayer - 1), [currentPrayer, moveTo]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    window.requestAnimationFrame(() => headingRef.current?.focus({ preventScroll: true }));
  }, [currentPrayer]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isSilence && (event.key === "ArrowRight" || event.key === "PageDown")) {
        event.preventDefault();
        next();
      } else if (!isSilence && (event.key === "ArrowLeft" || event.key === "PageUp")) {
        event.preventDefault();
        previous();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSilence, next, previous]);

  useEffect(() => {
    if (!timerRunning || silenceSeconds <= 0) return;
    const timer = window.setInterval(() => {
      setSilenceSeconds((seconds) => {
        if (seconds <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return seconds - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [silenceSeconds, timerRunning]);

  function beginSilence(minutes: number) {
    setSilenceSeconds(minutes * 60);
    setTimerRunning(true);
  }

  if (isSilence) {
    const minutes = Math.floor(silenceSeconds / 60);
    const seconds = silenceSeconds % 60;
    return (
      <div className="flex min-h-[100svh] flex-col bg-[#08182A] px-5 text-center text-[#FFFDF7] sm:px-8">
        <div className="flex items-center justify-between py-5">
          <span className="font-serif text-lg uppercase tracking-[0.2em] text-[#D6AA54]">Daily Oratory</span>
          <Link href="/" className="focus-ring rounded-md text-sm font-semibold text-[#FFFDF7]/75 hover:text-white">Exit Prayer</Link>
        </div>
        <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center py-12">
          <div className="grid h-24 w-24 place-items-center rounded-full border border-[#BD8A2F]/45 bg-[#162E4E] shadow-[0_0_50px_rgba(189,138,47,0.2)]">
            <span aria-hidden="true" className="font-serif text-5xl text-[#BD8A2F]">✦</span>
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.32em] text-[#D6AA54]">Sacred Silence</p>
          <h1 ref={headingRef} tabIndex={-1} className="mt-4 font-serif text-4xl font-semibold outline-none sm:text-6xl">The day has been offered.</h1>
          <p className="mt-5 max-w-lg font-serif text-xl italic leading-8 text-[#F3EAD8]/75">Remain with the Lord, then go forward in the peace of Christ.</p>
          {timerRunning ? (
            <div className="mt-10 rounded-full border border-[#BD8A2F]/40 bg-[#162E4E] px-8 py-5 font-serif text-4xl tabular-nums text-[#FFFDF7]" aria-live="polite">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </div>
          ) : (
            <div className="mt-10 flex flex-wrap justify-center gap-3" aria-label="Choose a silence timer">
              {[1, 3, 5].map((minute) => (
                <button key={minute} onClick={() => beginSilence(minute)} className="focus-ring min-h-12 rounded-full border border-[#BD8A2F]/45 px-6 py-3 text-sm font-semibold text-[#F3EAD8] hover:bg-[#162E4E]">
                  {minute} {minute === 1 ? "minute" : "minutes"}
                </button>
              ))}
            </div>
          )}
          <div className="mt-12 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Link href="/" className="focus-ring inline-flex min-h-14 flex-1 items-center justify-center rounded-full border border-[#D8CDB9]/40 px-6 py-3 text-center text-sm font-semibold">
              Return to Home Page
            </Link>
            <a
              href="https://bible.usccb.org/daily-bible-reading"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-14 flex-1 items-center justify-center rounded-full bg-[#BD8A2F] px-6 py-3 text-center text-sm font-bold text-[#0D2038]"
            >
              Daily Readings
            </a>
          </div>
        </main>
      </div>
    );
  }

  if (!prayer) return null;

  return (
    <div className="min-h-[100svh] bg-[#0D2038] text-[#0D2038]">
      <header className="sticky top-0 z-40 flex min-h-16 items-center justify-between border-b border-[#BD8A2F]/25 bg-[#0D2038]/95 px-4 py-3 text-[#FFFDF7] backdrop-blur sm:px-6 lg:px-10">
        <span className="font-serif text-sm uppercase tracking-[0.18em] text-[#D6AA54] sm:text-lg">Daily Oratory</span>
        <Link href="/" className="focus-ring rounded-md px-2 py-2 text-sm font-semibold text-[#FFFDF7]/80 hover:text-white">Exit Prayer</Link>
      </header>

      <main className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-[1500px] lg:grid-cols-[minmax(0,0.88fr)_minmax(34rem,1.12fr)] lg:gap-7 lg:px-7 lg:py-7 xl:gap-10 xl:px-10">
        <section aria-label={`${prayer.title} sacred artwork`} className="relative h-[34svh] min-h-64 overflow-hidden border-b border-[#BD8A2F]/50 bg-[#08182A] lg:sticky lg:top-[5.75rem] lg:h-[calc(100svh-7.5rem)] lg:min-h-[38rem] lg:rounded-[2rem] lg:border-2 lg:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(189,138,47,0.18),transparent_58%)]" />
          <div className="absolute inset-0">
            <Image
              key={prayer.image}
              src={prayer.image}
              alt={prayer.imageAlt}
              fill
              loading="eager"
              sizes="(max-width: 1023px) 100vw, 44vw"
              className="object-cover object-[center_32%] lg:object-contain lg:p-5 xl:p-7"
            />
          </div>
          <div className="pointer-events-none absolute inset-2 rounded-[1.5rem] border border-[#D6AA54]/45 lg:inset-4" aria-hidden="true" />
        </section>

        <section className="relative z-10 -mt-7 flex min-h-[66svh] flex-col rounded-t-[2rem] border-t-2 border-[#BD8A2F] bg-[#FFFDF7] shadow-[0_-18px_45px_rgba(0,0,0,0.2)] lg:mt-0 lg:min-h-[calc(100svh-7.5rem)] lg:rounded-[2rem] lg:border-2 lg:shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
          <div className="pointer-events-none absolute inset-2 rounded-[1.55rem] border border-[#BD8A2F]/35" aria-hidden="true" />
          <article key={prayer.id} className="relative flex-1 px-6 pb-12 pt-9 sm:px-10 sm:pt-12 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9A6A1B]">Morning Prayer · {prayer.stage}</p>
                <p className="text-sm font-semibold text-[#7A2533]">Prayer {currentPrayer + 1} of {morningPrayers.length}</p>
              </div>
              <div className="mt-5 flex gap-1.5" aria-label={`Prayer ${currentPrayer + 1} of ${morningPrayers.length}`}>
                {morningPrayers.map((item, index) => (
                  <span key={item.id} aria-hidden="true" className={`h-1.5 flex-1 rounded-full ${index === currentPrayer ? "bg-[#BD8A2F]" : index < currentPrayer ? "bg-[#0D2038]/35" : "bg-[#D8CDB9]"}`} />
                ))}
              </div>
              {prayer.optionalNote ? <p className="mt-7 inline-flex rounded-full border border-[#D8CDB9] bg-[#F3EAD8]/65 px-3 py-1 text-xs font-semibold text-[#5B5145]">{prayer.optionalNote}</p> : null}
              <h1 ref={headingRef} tabIndex={-1} className="mt-7 font-serif text-4xl font-semibold leading-[1.03] text-[#0D2038] outline-none sm:text-5xl xl:text-6xl">{prayer.title}</h1>
              <div className="my-7 flex items-center gap-3" aria-hidden="true"><span className="h-px flex-1 bg-[#D8CDB9]" /><span className="text-[#BD8A2F]">✦</span><span className="h-px flex-1 bg-[#D8CDB9]" /></div>
              <p className="whitespace-pre-line font-serif text-[1.35rem] leading-[1.75] text-[#172033] sm:text-[1.55rem] sm:leading-[1.8] xl:text-[1.65rem]">{prayer.text}</p>
              {prayer.id === "offering-of-indulgences" ? <PersonalPrayerList kind="deceased" /> : null}
              {prayer.id === "special-intentions" ? <PersonalPrayerList kind="intentions" /> : null}
            </div>
          </article>

          <nav aria-label="Morning prayer navigation" className="sticky bottom-0 z-30 border-t border-[#D8CDB9] bg-[#FFFDF7]/96 px-4 pt-3 shadow-[0_-12px_28px_rgba(13,32,56,0.1)] backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] sm:px-8 lg:rounded-b-[2rem] lg:px-10">
            <div className="mx-auto flex max-w-3xl gap-3">
              <button onClick={previous} disabled={currentPrayer === 0} className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#BD8A2F] px-4 py-3 text-sm font-semibold text-[#0D2038] hover:bg-[#F3EAD8] disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-14 sm:px-7">
                <Arrow direction="left" /> Previous
              </button>
              <button onClick={next} className="focus-ring inline-flex min-h-12 flex-[1.2] items-center justify-center gap-2 rounded-full bg-[#7A2533] px-4 py-3 text-sm font-bold text-white shadow-md hover:bg-[#65202B] sm:min-h-14 sm:px-8">
                {currentPrayer === morningPrayers.length - 1 ? "Enter Silence" : "Continue"} <Arrow />
              </button>
            </div>
          </nav>
        </section>
      </main>
    </div>
  );
}
