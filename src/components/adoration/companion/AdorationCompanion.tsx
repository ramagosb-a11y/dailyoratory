"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { companionArtwork } from '@/data/companionArtwork';
import { ContemplationArtwork } from './ContemplationArtwork';
import {
  catechismGuides,
  companionNavigation,
  companionPrayers,
  scriptureThemes,
  type CompanionPrayer,
  type CompanionSection,
} from "@/data/adorationCompanion";
import { companionMeditations as meditationParts, companionReadings as scriptureReadings, passageForReference, type CompanionMeditationPart as MeditationPart } from "@/data/companionReadings";
import { CompanionPassage } from './CompanionPassage';
import { getHolyHourGuide } from "@/lib/adoration";
import type { HolyHourGuideBlock, HolyHourSegment } from "@/types/adoration";
import styles from "./AdorationCompanion.module.css";

const USCCB_MASS_READINGS_URL = "https://bible.usccb.org/daily-bible-reading";
const DEFAULT_TIMER_SECONDS = 30 * 60;

type LanguageMode = "english" | "latin" | "both";

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function getPrayerCopy(prayer: CompanionPrayer, language: LanguageMode) {
  if (language === "latin" && prayer.latin) return `${prayer.title}\n\n${prayer.latin}`;
  if (language === "both" && prayer.latin) {
    return `${prayer.title}\n\nEnglish\n${prayer.english}\n\nLatin\n${prayer.latin}`;
  }
  return `${prayer.title}\n\n${prayer.english}`;
}

export function AdorationCompanion({
  initialSection = "meditation",
}: {
  initialSection?: CompanionSection;
}) {
  const [section, setSection] = useState<CompanionSection>(initialSection);
  const [timerOpen, setTimerOpen] = useState(false);
  const [guidedMode, setGuidedMode] = useState(true);
  const [partIndex, setPartIndex] = useState(0);
  const [theme, setTheme] = useState("all");
  const [readingId, setReadingId] = useState(scriptureReadings[0].id);
  const [prayerId, setPrayerId] = useState(companionPrayers[0].id);
  const [language, setLanguage] = useState<LanguageMode>("both");
  const [timerSeconds, setTimerSeconds] = useState(DEFAULT_TIMER_SECONDS);
  const [timerRunning, setTimerRunning] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);
  const [journalText, setJournalText] = useState("");
  const [copied, setCopied] = useState(false);
  const [cccQuery, setCccQuery] = useState("");

  const playChime = useCallback(() => {
    const AudioContextClass = window.AudioContext ??
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 2.3);
    gain.connect(context.destination);

    [523.25, 659.25, 783.99].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      oscillator.start(context.currentTime + index * 0.12);
      oscillator.stop(context.currentTime + 2.35);
    });

    window.setTimeout(() => void context.close(), 2600);
  }, []);

  useEffect(() => {
    if (!timerRunning) return;

    const interval = window.setInterval(() => {
      setTimerSeconds((current) => {
        if (current <= 1) {
          setTimerRunning(false);
          window.setTimeout(playChime, 0);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [playChime, timerRunning]);

  const filteredReadings = useMemo(
    () => (theme === "all" ? scriptureReadings : scriptureReadings.filter((reading) => reading.theme === theme)),
    [theme],
  );
  const selectedReading = scriptureReadings.find((reading) => reading.id === readingId) ?? scriptureReadings[0];
  const selectedPrayer = companionPrayers.find((prayer) => prayer.id === prayerId) ?? companionPrayers[0];
  const filteredCatechism = useMemo(() => {
    const query = cccQuery.trim().toLowerCase();
    if (!query) return catechismGuides;
    return catechismGuides.filter((guide) =>
      `${guide.title} ${guide.paragraphs} ${guide.summary}`.toLowerCase().includes(query),
    );
  }, [cccQuery]);

  function chooseTheme(nextTheme: string) {
    setTheme(nextTheme);
    const firstReading =
      nextTheme === "all" ? scriptureReadings[0] : scriptureReadings.find((reading) => reading.theme === nextTheme);
    if (firstReading) setReadingId(firstReading.id);
  }

  function chooseTimer(minutes: number) {
    setTimerRunning(false);
    setTimerSeconds(minutes * 60);
  }

  function chooseSection(nextSection: CompanionSection) {
    setSection(nextSection);
    window.requestAnimationFrame(() => {
      document.getElementById("companion-content")?.focus({ preventScroll: true });
      document.getElementById("companion-content")?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    });
  }

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(getPrayerCopy(selectedPrayer, language));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.shell}>
      <header className={styles.masthead}>
        <div>
          <p className={styles.brandEyebrow}>Daily Oratory</p>
          <h1>Adoration Companion</h1>
          <p>Scripture, prayer, sacred silence, and faithful Catholic guidance for time before the Eucharistic Lord.</p>
        </div>
        <div className={styles.homeLinks}><Link href="/">Home</Link></div>
      </header>

      <nav className={styles.focusNav} aria-label="Adoration Companion sections">
        {companionNavigation.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => chooseSection(item.id)}
            aria-current={section === item.id ? "page" : undefined}
            className={section === item.id ? styles.modeActive : undefined}
          >
            <span className={styles.longLabel}>{item.label}</span>
            <span className={styles.shortLabel}>{item.shortLabel}</span>
          </button>
        ))}
      </nav>

      <div className={styles.externalLinks}>
        <a href={USCCB_MASS_READINGS_URL} target="_blank" rel="noreferrer">
          <span className={styles.longLabel}>Today&apos;s Mass Readings</span>
          <span className={styles.shortLabel}>Mass Readings</span>
          <span className={styles.externalBadge}>USCCB · external site</span>
          <span className="sr-only"> (opens the USCCB website in a new tab)</span>
        </a>
      </div>

      <div className={`${styles.workspace} ${section === 'silence' ? styles.fullReadingWorkspace : ''}`}>
        <main id="companion-content" tabIndex={-1} className={styles.content}>
          {section === "meditation" ? (
            <MeditationView
              guidedMode={guidedMode}
              partIndex={partIndex}
              onModeChange={setGuidedMode}
              onPartChange={setPartIndex}
              onFinish={() => chooseSection('silence')}
            />
          ) : null}
          {section === "scripture" ? (
            <ScriptureView
              theme={theme}
              readingId={readingId}
              filteredReadings={filteredReadings}
              selectedReading={selectedReading}
              onThemeChange={chooseTheme}
              onReadingChange={setReadingId}
              onOpenJournal={() => setJournalOpen(true)}
            />
          ) : null}
          {section === "prayers" ? (
            <PrayerView
              prayer={selectedPrayer}
              prayerId={prayerId}
              language={language}
              copied={copied}
              onPrayerChange={(id) => {
                setPrayerId(id);
                if (!companionPrayers.find((prayer) => prayer.id === id)?.latin) setLanguage("english");
              }}
              onLanguageChange={setLanguage}
              onChime={playChime}
              onCopy={copyPrayer}
              onOpenJournal={() => setJournalOpen(true)}
            />
          ) : null}
          {section === "silence" ? <HolyHourView /> : null}
          {section === "catechism" ? (
            <CatechismView query={cccQuery} onQueryChange={setCccQuery} guides={filteredCatechism} />
          ) : null}
        </main>

        <aside className={styles.sidebar} aria-label="Prayer timer and session tools">
          {section !== "silence" ? <div className={styles.timerTools}>
          <button className={styles.timerDisclosure} onClick={() => setTimerOpen(!timerOpen)} aria-expanded={timerOpen} aria-controls="companion-timer"><span>Prayer timer · {formatTime(timerSeconds)} · {timerRunning ? 'Running' : 'Paused'}</span><span>{timerOpen ? 'Hide' : 'Show'}</span></button>
          <div id="companion-timer" className={timerOpen ? styles.timerExpanded : styles.timerCollapsed}><TimerCard
            seconds={timerSeconds}
            running={timerRunning}
            onPreset={chooseTimer}
            onToggle={() => setTimerRunning((value) => !value)}
            onReset={() => chooseTimer(30)}
            onChime={playChime}
          /></div></div> : null}
        </aside>
      </div>

      {journalOpen ? (
        <JournalPanel text={journalText} onTextChange={setJournalText} onClose={() => setJournalOpen(false)} />
      ) : null}

      <footer className={styles.rightsNote}>
        <p>
          Scripture quotations: Douay–Rheims 1899 American Edition, Challoner Revision. Public domain. Text source:{" "}
          <a href="https://ebible.org/engDRA/copyright.htm" target="_blank" rel="noreferrer">
            eBible.org<span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
        <p>
          Catechism cards are original Daily Oratory summaries. Official paragraph text is not reproduced; links open
          the Vatican website.
        </p>
        <p>
          Prayer and hymn provenance is documented item by item. “Verified” identifies use or publication by an
          official Catholic source; it does not imply that Daily Oratory itself is an ecclesiastically approved publisher.
        </p>
      </footer>
    </div>
  );
}

function MeditationView({
  guidedMode,
  partIndex,
  onModeChange,
  onPartChange,
  onFinish,
}: {
  guidedMode: boolean;
  partIndex: number;
  onModeChange: (guided: boolean) => void;
  onPartChange: (index: number) => void;
  onFinish: () => void;
}) {
  const displayedParts = guidedMode ? [meditationParts[partIndex]] : meditationParts;

  function navigatePart(index: number) {
    onPartChange(index);
    window.requestAnimationFrame(() => {
      const heading = document.getElementById(`part-heading-${meditationParts[index].id}`);
      heading?.focus({ preventScroll: true });
      document.getElementById(`part-${meditationParts[index].id}`)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    });
  }

  return (
    <div>
      <div className={`${styles.segmented} ${styles.meditationMode}`} aria-label="Meditation reading mode">
        <button type="button" className={guidedMode ? styles.segmentedActive : undefined} onClick={() => onModeChange(true)}>
          Guided Steps
        </button>
        <button type="button" className={!guidedMode ? styles.segmentedActive : undefined} onClick={() => onModeChange(false)}>
          Continuous Reading
        </button>
      </div>

      <label className={styles.partSelector}>Choose a meditation part<select value={partIndex} onChange={event => navigatePart(Number(event.target.value))}>{meditationParts.map((part, index) => <option key={part.id} value={index}>{index + 1}. {part.title}</option>)}</select></label>

      <div id="meditation-part-top" className={styles.stack}>
        {displayedParts.map((part) => (
          <MeditationPartCard
            key={part.id}
            part={part}
            partNumber={meditationParts.findIndex((item) => item.id === part.id) + 1}
            onNavigate={navigatePart}
            onFinish={onFinish}
          />
        ))}
      </div>

      {(guidedMode ? partIndex === meditationParts.length - 1 : true) ? <AboutMeditation /> : null}

    </div>
  );
}

function AboutMeditation() {
  return (
    <details className={styles.aboutMeditation}>
      <summary>About This Meditation</summary>
      <div>
        <p>This Eucharistic meditation is original Daily Oratory devotional material, prayerfully inspired by Sacred Scripture and the Catholic tradition of Eucharistic adoration.</p>
        <p>The passages written in the voice of Jesus are intended as guided meditation and should not be understood as private revelation, additional Scripture, or literal words spoken by Christ beyond those recorded in Sacred Scripture.</p>
        <p>Scripture used by Daily Oratory should use the public-domain Douay-Rheims Bible unless otherwise indicated.</p>
      </div>
    </details>
  );
}

function PartNavigation({ index, position, onNavigate, onFinish }: { index: number; position: 'top' | 'bottom'; onNavigate: (index: number) => void; onFinish: () => void }) {
  const last = index === meditationParts.length - 1;
  return <nav className={styles.partNav} aria-label={`Part ${index + 1} ${position} navigation`}>
    <button type="button" disabled={index === 0} onClick={() => onNavigate(index - 1)}>← Previous</button>
    <span>Part {index + 1} of {meditationParts.length}</span>
    <button type="button" className={styles.goldButton} onClick={() => last ? onFinish() : onNavigate(index + 1)}>{last ? 'Continue to Holy Hour →' : 'Next Part →'}</button>
  </nav>;
}

function MeditationPartCard({
  part,
  partNumber,
  onNavigate,
  onFinish,
}: {
  part: MeditationPart;
  partNumber: number;
  onNavigate: (index: number) => void;
  onFinish: () => void;
}) {
  return (
    <article id={`part-${part.id}`} className={styles.featureCard}>
      <PartNavigation index={partNumber - 1} position="top" onNavigate={onNavigate} onFinish={onFinish} />
      <ContemplationArtwork artwork={companionArtwork[part.id]} title={part.title} />
      <header className={styles.cardHeader}>
        <div>
          <p className={styles.eyebrow}>Part {partNumber} of {meditationParts.length}</p>
          <h3 id={`part-heading-${part.id}`} tabIndex={-1}>{part.title}</h3>
        </div>
      </header>

      <div className={styles.referenceRow}>
        <a href="https://www.vatican.va/content/catechism/en.html" target="_blank" rel="noreferrer">{part.catechismReference} · Vatican ↗</a>
      </div>

      <section className={styles.meditationText}>
        <p className={styles.eyebrow}>Remain With Me</p>
        {part.meditation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className={styles.questions}>
        <p className={styles.eyebrow}>Pause With Jesus</p>
        <div className={styles.pausePrompts}>{part.pausePrompts.map((prompt) => <p key={prompt}>{prompt}</p>)}</div>
        {part.gratitudeResponses ? (
          <ol className={styles.gratitudeList}>
            {Array.from({ length: part.gratitudeResponses }, (_, index) => (
              <li key={index}>
                <span>Name one gift quietly before Jesus.</span>
                <strong>Thank You, Jesus.</strong>
              </li>
            ))}
          </ol>
        ) : null}
      </section>

      <section className={styles.prayerPrompt}>
        <p className={styles.eyebrow}>{part.id === "departure" ? "Final Prayer" : "Prayer"}</p>
        <blockquote>{part.prayer}</blockquote>
      </section>

      <div className={styles.pauseRow}>
        <div><strong>Suggested silent time</strong><span>Rest in quiet adoration for a few minutes before continuing.</span></div>
      </div>

      <section className={styles.scriptureCollection} aria-label={`Scripture for ${part.title}`}>
        <div className={styles.scriptureCollectionHeader}>
          <p className={styles.eyebrow}>Sacred Scripture</p>
          <p>Read these passages slowly in the approved public-domain Douay-Rheims translation.</p>
        </div>
        {part.scripturePassageIds.map(passageId => <CompanionPassage key={passageId} passageId={passageId} />)}
      </section>
      <PartNavigation index={partNumber - 1} position="bottom" onNavigate={onNavigate} onFinish={onFinish} />
    </article>
  );
}

function ScriptureView({
  theme,
  readingId,
  filteredReadings,
  selectedReading,
  onThemeChange,
  onReadingChange,
  onOpenJournal,
}: {
  theme: string;
  readingId: string;
  filteredReadings: typeof scriptureReadings;
  selectedReading: (typeof scriptureReadings)[number];
  onThemeChange: (theme: string) => void;
  onReadingChange: (id: string) => void;
  onOpenJournal: () => void;
}) {
  return (
    <div>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Sacred Reading in Adoration</p>
        <h2>Word of God in Adoration</h2>
        <p>Read slowly, receive one line, and let the Word lead you toward worship and silence.</p>
      </section>

      <div className={styles.libraryLayout}>
        <div className={styles.mobileReadingSelector}>
          <label>Scripture theme<select aria-label="Scripture theme" value={theme} onChange={event => onThemeChange(event.target.value)}>{scriptureThemes.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
          <label>Choose a passage<select aria-label="Choose a passage" value={readingId} onChange={event => onReadingChange(event.target.value)}>{filteredReadings.map(item => <option key={item.id} value={item.id}>{item.reference} · {item.title}</option>)}</select></label>
        </div>
        <aside className={`${styles.libraryNav} ${styles.scriptureLibrary}`}>
          <p className={styles.eyebrow}>Themes of the Eucharist</p>
          {scriptureThemes.map((item) => {
            const count = item.id === "all" ? scriptureReadings.length : scriptureReadings.filter((reading) => reading.theme === item.id).length;
            return (
              <button key={item.id} type="button" className={theme === item.id ? styles.libraryActive : undefined} onClick={() => onThemeChange(item.id)}>
                <span><strong>{item.label}</strong><small>{count}</small></span>
                <small className={styles.themeDescription}>{item.description}</small>
              </button>
            );
          })}
          <p className={styles.libraryCount}>Passages ({filteredReadings.length})</p>
          {filteredReadings.map((reading) => (
            <button key={reading.id} type="button" className={readingId === reading.id ? styles.passageActive : styles.passageButton} onClick={() => onReadingChange(reading.id)}>
              <small>{reading.reference}</small><strong>{reading.title}</strong><em>{reading.description}</em>
            </button>
          ))}
        </aside>

        <article className={styles.readingCard}>
          <header className={styles.cardHeader}>
            <div><p className={styles.eyebrow}>{selectedReading.reference}</p><h3>{selectedReading.title}</h3><em>{selectedReading.description}</em></div>
            <span>DRA 1899</span>
          </header>
          <section className={styles.prayerPrompt}>
            <p className={styles.eyebrow}>Introductory Prayer</p>
            <blockquote>“{selectedReading.prayer}”</blockquote>
          </section>
          <CompanionPassage passageId={selectedReading.passageId} />
          <section className={styles.contemplationCard}>
            <p className={styles.eyebrow}>Concluding Contemplative Question</p>
            <blockquote>“{selectedReading.question}”</blockquote>
          </section>
          <section className={styles.insightCard}><p className={styles.eyebrow}>Theological Insight</p><p>{selectedReading.insight}</p></section>
          <button type="button" onClick={onOpenJournal} className={styles.journalButton}>Journal what stood out</button>
        </article>
      </div>
    </div>
  );
}

function PrayerView({
  prayer,
  prayerId,
  language,
  copied,
  onPrayerChange,
  onLanguageChange,
  onChime,
  onCopy,
  onOpenJournal,
}: {
  prayer: CompanionPrayer;
  prayerId: string;
  language: LanguageMode;
  copied: boolean;
  onPrayerChange: (id: string) => void;
  onLanguageChange: (mode: LanguageMode) => void;
  onChime: () => void;
  onCopy: () => void;
  onOpenJournal: () => void;
}) {
  const canShowLatin = Boolean(prayer.latin);

  return (
    <div>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Devotions & Eucharistic Hymns</p>
        <h2>Traditional Catholic Adoration Prayers</h2>
        <p>Traditional prayers and Eucharistic hymns whose Catholic use is documented by Vatican or USCCB sources.</p>
        <div className={styles.segmented} aria-label="Prayer language">
          <button type="button" className={language === "english" ? styles.segmentedActive : undefined} onClick={() => onLanguageChange("english")}>English</button>
          <button type="button" disabled={!canShowLatin} className={language === "latin" ? styles.segmentedActive : undefined} onClick={() => onLanguageChange("latin")}>Latin</button>
          <button type="button" disabled={!canShowLatin} className={language === "both" ? styles.segmentedActive : undefined} onClick={() => onLanguageChange("both")}>Side-by-side</button>
        </div>
      </section>

      <div className={styles.libraryLayout}>
        <div className={styles.mobileReadingSelector}><label>Choose prayer or hymn<select aria-label="Choose prayer or hymn" value={prayerId} onChange={event => onPrayerChange(event.target.value)}>{companionPrayers.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label></div>
        <aside className={`${styles.libraryNav} ${styles.scriptureLibrary}`}>
          <p className={styles.eyebrow}>Select Prayer or Hymn</p>
          {companionPrayers.map((item) => (
            <button key={item.id} type="button" className={prayerId === item.id ? styles.passageActive : styles.passageButton} onClick={() => onPrayerChange(item.id)}>
              <small>{item.kind === "hymn" ? "Eucharistic hymn" : "Adoration prayer"}</small>
              <strong>{item.title}</strong>
              <em>{item.whenToUse}</em>
            </button>
          ))}
        </aside>

        <article className={styles.readingCard}>
          <header className={styles.cardHeader}>
            <div><p className={styles.eyebrow}>{prayer.whenToUse}</p><h3>{prayer.title}</h3>{prayer.latinTitle ? <em>{prayer.latinTitle}</em> : null}</div>
            <div className={styles.iconActions}>
              <button type="button" onClick={onChime} aria-label="Play a gentle generated chime">Chime</button>
              <button type="button" onClick={onCopy}>{copied ? "Copied" : "Copy"}</button>
            </div>
          </header>
          <div className={`${styles.prayerColumns} ${language !== "both" ? styles.singleColumn : ""}`}>
            {language !== "latin" ? <section><p className={styles.eyebrow}>English</p><div className={styles.prayerText}>{prayer.english}</div></section> : null}
            {language !== "english" && prayer.latin ? <section><p className={styles.eyebrow}>Latin</p><div className={`${styles.prayerText} ${styles.latinText}`}>{prayer.latin}</div></section> : null}
          </div>
          <div className={styles.prayerVerification}>
            <span>{prayer.verification}</span>
            <p>{prayer.sourceNote}</p>
            <a href={prayer.sourceUrl} target="_blank" rel="noreferrer">
              Verify with the official Catholic source ↗
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <button type="button" onClick={onOpenJournal} className={styles.journalButton}>Journal intentions from this prayer</button>
        </article>
      </div>
    </div>
  );
}

function HolyHourView() {
  const segments = useMemo(() => getHolyHourGuide(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const stageHeadingRef = useRef<HTMLHeadingElement>(null);
  const overviewHeadingRef = useRef<HTMLHeadingElement>(null);
  const completionHeadingRef = useRef<HTMLHeadingElement>(null);
  const timelineButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const navigationRequestedRef = useRef(false);
  const activeSegment = segments[activeIndex];

  const focusAndReveal = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    element.focus({ preventScroll: true });
    element.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  }, []);

  const revealTimelineStage = useCallback((index: number) => {
    timelineButtonRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, []);

  useEffect(() => {
    if (!navigationRequestedRef.current) return;
    navigationRequestedRef.current = false;
    revealTimelineStage(activeIndex);
    focusAndReveal(stageHeadingRef.current);
  }, [activeIndex, focusAndReveal, revealTimelineStage]);

  function navigateStage(index: number) {
    if (index < 0 || index >= segments.length) return;
    setCompleted(false);
    setAnnouncement(`Stage ${index + 1} of ${segments.length}: ${segments[index].title}`);

    if (index === activeIndex) {
      revealTimelineStage(index);
      focusAndReveal(stageHeadingRef.current);
      return;
    }

    navigationRequestedRef.current = true;
    setActiveIndex(index);
  }

  function completeHolyHour() {
    setCompleted(true);
    setAnnouncement("Holy Hour complete");
    window.requestAnimationFrame(() => focusAndReveal(completionHeadingRef.current));
  }

  function returnToOverview() {
    setCompleted(false);
    setActiveIndex(0);
    setAnnouncement("Returned to the Holy Hour overview");
    window.requestAnimationFrame(() => {
      revealTimelineStage(0);
      focusAndReveal(overviewHeadingRef.current);
    });
  }

  return (
    <div className={styles.holyHourView}>
      <section className={styles.holyHourHero}>
        <div className={styles.holyHourHeroImage}>
          <Image
            src="/images/adoration/holy-hour-guide-background.webp"
            alt="Devotional illustration of Eucharistic adoration before a monstrance."
            fill
            fetchPriority="high"
            quality={85}
            sizes="(max-width: 760px) 100vw, 54rem"
            className={styles.holyHourHeroArtwork}
          />
          <span className={styles.holyHourHeroShade} aria-hidden="true" />
        </div>
        <div className={styles.holyHourHeroCopy}>
          <p className={styles.eyebrow}>Eucharistic Adoration</p>
          <h2>A Simple Holy Hour Guide</h2>
          <p>A peaceful structure for spending one hour with Jesus through adoration, thanksgiving, mercy, Scripture, intercession, and surrender.</p>
        </div>
      </section>

      <div className={styles.holyHourInteractive} data-holy-hour-interactive>
        <section className={styles.holyHourOverview} aria-labelledby="holy-hour-overview-heading">
          <div className={styles.holyHourOverviewHeader}>
            <p className={styles.eyebrow}>The hour at a glance</p>
            <h3 id="holy-hour-overview-heading" ref={overviewHeadingRef} tabIndex={-1}>Six movements of prayer</h3>
          </div>
          <nav aria-label="Holy Hour stages">
            <ol className={styles.holyHourTimeline}>
              {segments.map((segment, index) => (
                <li key={segment.id}>
                  <button
                    type="button"
                    ref={(node) => { timelineButtonRefs.current[index] = node; }}
                    className={index === activeIndex ? styles.holyHourTimelineActive : undefined}
                    aria-current={index === activeIndex ? "step" : undefined}
                    onClick={() => navigateStage(index)}
                  >
                    <span className={styles.holyHourTimelineNumber}>{index + 1}</span>
                    <span className={styles.holyHourTimelineMinutes}>{segment.startMinute}-{segment.endMinute} min</span>
                    <strong>{segment.title}</strong>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </section>

      <article className={styles.holyHourStagePanel} aria-labelledby={`holy-hour-stage-${activeSegment.id}`}>
        <header className={styles.holyHourStageHeader}>
          <div>
            <p className={styles.holyHourStageKicker}>Stage {activeIndex + 1} of {segments.length}</p>
            <p className={styles.holyHourStageMinutes}>{activeSegment.startMinute}-{activeSegment.endMinute} minutes</p>
          </div>
          <h3 id={`holy-hour-stage-${activeSegment.id}`} ref={stageHeadingRef} tabIndex={-1}>{activeSegment.title}</h3>
          <p>{activeSegment.description}</p>
        </header>

        <HolyHourStageNavigation
          index={activeIndex}
          segments={segments}
          position="top"
          onNavigate={navigateStage}
          onComplete={completeHolyHour}
        />

        <div className={styles.holyHourStageBody}>
          {activeSegment.scripture ? (
            <HolyHourScripture
              reference={activeSegment.scripture.reference}
              connection={activeSegment.scripture.connection}
            />
          ) : null}
          <div className={styles.holyHourBlocks}>
            {(activeSegment.guide ?? []).map((block, blockIndex) => (
              <HolyHourBlock key={`${activeSegment.id}-${blockIndex}`} block={block} />
            ))}
          </div>
          <HolyHourRelatedScriptures
            key={activeSegment.id}
            title={activeSegment.title}
            scriptures={activeSegment.relatedScriptures}
          />
          {activeSegment.sourceNote ? <p className={styles.holyHourSourceNote}>{activeSegment.sourceNote}</p> : null}
        </div>

        <HolyHourStageNavigation
          index={activeIndex}
          segments={segments}
          position="bottom"
          onNavigate={navigateStage}
          onComplete={completeHolyHour}
        />
      </article>

      {completed ? (
        <section className={styles.holyHourCompletion} aria-labelledby="holy-hour-completion-heading">
          <p className={styles.eyebrow}>Remain as long as you wish</p>
          <h3 id="holy-hour-completion-heading" ref={completionHeadingRef} tabIndex={-1}>Holy Hour complete</h3>
          <div className={styles.holyHourActions}>
            <button type="button" onClick={returnToOverview}>Return to Holy Hour overview</button>
            <Link href="/" className={styles.goldButton}>Return to Homepage</Link>
          </div>
        </section>
      ) : null}

      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      </div>

      <noscript>
        <style>{"[data-holy-hour-interactive]{display:none!important}"}</style>
        <HolyHourNoScript segments={segments} />
      </noscript>
    </div>
  );
}

function HolyHourNoScript({ segments }: { segments: ReturnType<typeof getHolyHourGuide> }) {
  return (
    <div className={styles.holyHourNoScript}>
      <p className={styles.eyebrow}>Complete Holy Hour Guide</p>
      {segments.map((segment, index) => (
        <section key={`${segment.id}-no-script`} aria-labelledby={`${segment.id}-no-script-heading`}>
          <header>
            <p>Stage {index + 1} of {segments.length} · {segment.startMinute}-{segment.endMinute} minutes</p>
            <h3 id={`${segment.id}-no-script-heading`}>{segment.title}</h3>
            <p>{segment.description}</p>
          </header>
          {segment.scripture ? (
            <HolyHourScripture reference={segment.scripture.reference} connection={segment.scripture.connection} />
          ) : null}
          <div className={styles.holyHourBlocks}>
            {(segment.guide ?? []).map((block, blockIndex) => (
              <HolyHourBlock key={`${segment.id}-no-script-${blockIndex}`} block={block} />
            ))}
          </div>
          <HolyHourRelatedScriptures title={segment.title} scriptures={segment.relatedScriptures} />
          {segment.sourceNote ? <p className={styles.holyHourSourceNote}>{segment.sourceNote}</p> : null}
        </section>
      ))}
    </div>
  );
}

function HolyHourStageNavigation({
  index,
  segments,
  position,
  onNavigate,
  onComplete,
}: {
  index: number;
  segments: ReturnType<typeof getHolyHourGuide>;
  position: "top" | "bottom";
  onNavigate: (index: number) => void;
  onComplete: () => void;
}) {
  const last = index === segments.length - 1;
  const nextLabel = last ? "Complete Holy Hour" : `Continue to ${segments[index + 1].title}`;

  return (
    <nav className={styles.holyHourStageNav} aria-label={`Holy Hour stage ${position} navigation`}>
      {index > 0 ? (
        <button type="button" className={styles.holyHourPrevious} onClick={() => onNavigate(index - 1)}>
          Previous
        </button>
      ) : <span className={styles.holyHourNavSpacer} aria-hidden="true" />}
      <span className={styles.holyHourStageStatus}>Stage {index + 1} of {segments.length}</span>
      <button
        type="button"
        className={styles.holyHourContinue}
        onClick={() => last ? onComplete() : onNavigate(index + 1)}
      >
        {nextLabel}
      </button>
    </nav>
  );
}

function HolyHourBlock({ block }: { block: HolyHourGuideBlock }) {
  switch (block.kind) {
    case "heading": return <h4>{block.text}</h4>;
    case "paragraph": return <p>{block.text}</p>;
    case "breath": return <div className={styles.holyHourBreath}><span><b>Inhale slowly</b>“{block.inhale}”</span><span><b>Exhale slowly</b>“{block.exhale}”</span>{block.repeat ? <em>{block.repeat}</em> : null}</div>;
    case "prayer": return <blockquote className={styles.holyHourPrayer}>{block.title ? <b>{block.title}</b> : null}<span>“{block.text}”</span></blockquote>;
    case "scripture": return <HolyHourScripture reference={block.reference} connection={block.connection} />;
    case "reflect": return <div><b>{block.title ?? "Reflect"}</b><ul>{block.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul></div>;
    case "list": return <div><b>{block.title}</b><ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
    case "invocation": return <blockquote className={styles.holyHourPrayer}>{block.title ? <b>{block.title}</b> : null}{block.lines.map((line) => <span key={line}>“{line}”</span>)}</blockquote>;
    case "pause": return <p className={styles.holyHourPause}>{block.text ?? "Pause in silence."}</p>;
  }
}

function HolyHourScripture({ reference, connection }: { reference: string; connection: string }) {
  return (
    <section className={styles.holyHourScriptureMoment} aria-label={`${reference} and connection to this movement`}>
      <CompanionPassage passageId={passageForReference(reference).id} />
      <aside className={styles.holyHourScriptureConnection}>
        <p className={styles.eyebrow}>Connection to this movement</p>
        <p>{connection}</p>
      </aside>
    </section>
  );
}

function HolyHourRelatedScriptures({
  title,
  scriptures,
}: {
  title: string;
  scriptures: HolyHourSegment["relatedScriptures"];
}) {
  return (
    <section className={styles.holyHourRelated} aria-label={`Related Scripture for ${title}`}>
      <details>
        <summary>
          <span>
            <b>Continue with Sacred Scripture</b>
            <small>Two additional readings for unhurried prayer</small>
          </span>
          <span className={styles.holyHourRelatedAction} aria-hidden="true">Open readings</span>
        </summary>
        <div className={styles.holyHourRelatedReadings}>
          {scriptures.map((scripture) => (
            <HolyHourScripture
              key={scripture.reference}
              reference={scripture.reference}
              connection={scripture.connection}
            />
          ))}
        </div>
      </details>
      <ul className={styles.holyHourRelatedPrint} aria-hidden="true">
        {scriptures.map((scripture) => <li key={`${scripture.reference}-print`}>{scripture.reference}</li>)}
      </ul>
    </section>
  );
}

function CatechismView({ query, onQueryChange, guides }: { query: string; onQueryChange: (query: string) => void; guides: typeof catechismGuides }) {
  return (
    <div>
      <section className={styles.hero}><p className={styles.eyebrow}>Catechism Guide</p><h2>Study the Eucharist With the Church</h2><p>Search original Daily Oratory summaries, then open the official Catechism text at the Vatican.</p></section>
      <label className={styles.searchLabel}><span>Search topics or paragraph numbers</span><input type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Try ‘Real Presence’ or ‘1378’" /></label>
      <div className={styles.cccGrid}>
        {guides.map((guide) => (
          <article key={guide.id}>
            <p className={styles.eyebrow}>{guide.paragraphs}</p><h3>{guide.title}</h3><p>{guide.summary}</p>
            <a href={guide.vaticanUrl} target="_blank" rel="noreferrer">Open this section in the official CCC ↗<span className="sr-only"> (opens the Vatican website in a new tab)</span></a>
          </article>
        ))}
      </div>
      {guides.length === 0 ? <p className={styles.emptyState}>No guide matches that search. Try a topic or CCC paragraph number.</p> : null}
      <p className={styles.quietNote}>These summaries are for spiritual study and do not replace the official text of the Catechism of the Catholic Church.</p>
    </div>
  );
}

function TimerCard({ seconds, running, onPreset, onToggle, onReset, onChime }: { seconds: number; running: boolean; onPreset: (minutes: number) => void; onToggle: () => void; onReset: () => void; onChime: () => void }) {
  return (
    <section className={styles.timerCard}>
      <p className={styles.eyebrow}>Continuous Silent Prayer Timer</p>
      <time dateTime={`PT${seconds}S`}>{formatTime(seconds)}</time>
      <div className={styles.presetRow}>{[5, 15, 30, 45].map((minutes) => <button key={minutes} type="button" onClick={() => onPreset(minutes)}>{minutes}m</button>)}</div>
      <button type="button" className={styles.goldButton} onClick={onToggle}>{running ? "Pause" : "Start Silent Prayer"}</button>
      <div className={styles.miniActions}><button type="button" onClick={onReset}>Reset</button><button type="button" onClick={onChime}>Chime</button></div>
    </section>
  );
}

function JournalPanel({ text, onTextChange, onClose }: { text: string; onTextChange: (text: string) => void; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  async function copyJournal() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className={styles.journalPanel} aria-labelledby="journal-heading">
      <div><p className={styles.eyebrow}>Private Prayer Notes</p><h2 id="journal-heading">Journal intentions and graces</h2><p>Your words remain only in this page’s temporary state. They are not saved, transmitted, or included in analytics.</p></div>
      <textarea value={text} onChange={(event) => onTextChange(event.target.value)} placeholder="Write a name, intention, grace, resolution, or phrase to carry into silence…" />
      <div><button type="button" onClick={copyJournal} disabled={!text.trim()}>{copied ? "Copied" : "Copy Notes"}</button><button type="button" onClick={onClose} className={styles.goldButton}>Return to Prayer</button></div>
    </section>
  );
}
