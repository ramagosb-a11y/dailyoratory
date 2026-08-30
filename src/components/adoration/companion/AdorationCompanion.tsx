"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
import {
  catechismGuides,
  companionNavigation,
  companionPrayers,
  meditationParts,
  scriptureReadings,
  scriptureThemes,
  type CompanionPrayer,
  type CompanionSection,
  type MeditationPart,
} from "@/data/adorationCompanion";
import { formatHolyHourGuideForCopy, getHolyHourGuide } from "@/lib/adoration";
import type { HolyHourGuideBlock } from "@/types/adoration";
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

export function AdorationCompanion() {
  const [section, setSection] = useState<CompanionSection>("meditation");
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
        <span className={styles.version}>Adoration Companion v1.0.2</span>
      </header>

      <nav className={styles.modeNav} aria-label="Adoration Companion sections">
        {companionNavigation.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => chooseSection(item.id)}
            aria-current={section === item.id ? "page" : undefined}
            className={section === item.id ? styles.modeActive : undefined}
          >
            <span aria-hidden="true">{item.icon}</span>
            <span className={styles.longLabel}>{item.label}</span>
            <span className={styles.shortLabel}>{item.shortLabel}</span>
          </button>
        ))}
        <a href={USCCB_MASS_READINGS_URL} target="_blank" rel="noreferrer">
          <span aria-hidden="true">↗</span>
          <span className={styles.longLabel}>Today&apos;s Mass Readings</span>
          <span className={styles.shortLabel}>Mass Readings</span>
          <span className={styles.externalBadge}>USCCB</span>
          <span className="sr-only"> (opens the USCCB website in a new tab)</span>
        </a>
      </nav>

      <div className={styles.workspace}>
        <main id="companion-content" tabIndex={-1} className={styles.content}>
          {section === "meditation" ? (
            <MeditationView
              guidedMode={guidedMode}
              partIndex={partIndex}
              onModeChange={setGuidedMode}
              onPartChange={setPartIndex}
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
          {section !== "silence" ? <TimerCard
            seconds={timerSeconds}
            running={timerRunning}
            onPreset={chooseTimer}
            onToggle={() => setTimerRunning((value) => !value)}
            onReset={() => chooseTimer(30)}
            onChime={playChime}
          /> : null}
          <section className={styles.sessionNote}>
            <p>Devotional note</p>
            <span>
              Original Daily Oratory meditations support personal prayer. They are not private revelation and do not
              claim to record words spoken directly by Jesus.
            </span>
          </section>
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
}: {
  guidedMode: boolean;
  partIndex: number;
  onModeChange: (guided: boolean) => void;
  onPartChange: (index: number) => void;
}) {
  const displayedParts = guidedMode ? [meditationParts[partIndex]] : meditationParts;

  useEffect(() => {
    if (!guidedMode) return;
    document.getElementById("meditation-part-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [guidedMode, partIndex]);

  return (
    <div>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>The Blessed Sacrament Meditation</p>
        <h2>A Conversation With Jesus</h2>
        <blockquote>
          “It is not necessary, My child, to know much in order to please Me; it is enough that you love Me much.
          Speak to Me here as you would with your most intimate friend.”
        </blockquote>
        <div className={styles.segmented} aria-label="Meditation reading mode">
          <button type="button" className={guidedMode ? styles.segmentedActive : undefined} onClick={() => onModeChange(true)}>
            Guided Steps
          </button>
          <button type="button" className={!guidedMode ? styles.segmentedActive : undefined} onClick={() => onModeChange(false)}>
            Continuous Reading
          </button>
        </div>
      </section>

      <div id="meditation-part-top" className={styles.stack}>
        {displayedParts.map((part) => (
          <MeditationPartCard
            key={part.id}
            part={part}
            partNumber={meditationParts.findIndex((item) => item.id === part.id) + 1}
          />
        ))}
      </div>

      {guidedMode ? (
        <nav className={styles.partNav} aria-label="Meditation part navigation">
          <button type="button" disabled={partIndex === 0} onClick={() => onPartChange(partIndex - 1)}>
            ← Previous Part
          </button>
          <span>Part {partIndex + 1} of {meditationParts.length}</span>
          <button
            type="button"
            disabled={partIndex === meditationParts.length - 1}
            onClick={() => onPartChange(partIndex + 1)}
            className={styles.goldButton}
          >
            Continue to Next Part →
          </button>
        </nav>
      ) : null}
    </div>
  );
}

function MeditationPartCard({
  part,
  partNumber,
}: {
  part: MeditationPart;
  partNumber: number;
}) {
  return (
    <article className={styles.featureCard}>
      <header className={styles.cardHeader}>
        <div>
          <p className={styles.eyebrow}>Part {partNumber} of {meditationParts.length}</p>
          <h3>{part.title}</h3>
          <em>{part.subtitle}</em>
        </div>
        <span>{part.duration}</span>
      </header>

      <div className={styles.referenceRow}>
        <a href="https://ebible.org/engDRA/index.htm" target="_blank" rel="noreferrer">▤ {part.scriptureReference}</a>
        <a href="https://www.vatican.va/content/catechism/en.html" target="_blank" rel="noreferrer">▣ {part.catechismReference}</a>
      </div>

      <section className={styles.meditationText}>
        <p className={styles.eyebrow}>Jesus Speaks to Your Heart</p>
        {part.meditation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className={styles.questions}>
        <p className={styles.eyebrow}>Questions for Heartfelt Contemplation</p>
        <ul>{part.questions.map((question) => <li key={question}>{question}</li>)}</ul>
      </section>

      <section className={styles.prayerPrompt}>
        <p className={styles.eyebrow}>Suggested Vocal or Mental Prayer</p>
        <blockquote>“{part.prayer}”</blockquote>
      </section>

      <div className={styles.pauseRow}>
        <div><strong>Suggested silent time</strong><span>Rest in quiet adoration for a few minutes before continuing.</span></div>
      </div>
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
        <aside className={styles.libraryNav}>
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
          <section className={styles.scriptureText} aria-label={`${selectedReading.reference}, Douay-Rheims 1899`}>
            <p className={styles.eyebrow}>Sacred Scripture Passage</p>
            {selectedReading.verses.map((verse) => <p key={verse.number}><sup>{verse.number}</sup>{verse.text}</p>)}
          </section>
          <p className={styles.sourceLine}>Douay–Rheims 1899 American Edition · Public domain · <a href={selectedReading.sourceUrl} target="_blank" rel="noreferrer">Verify at eBible.org</a></p>
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
        <aside className={styles.libraryNav}>
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
              <button type="button" onClick={onChime} aria-label="Play a gentle generated chime">♬ Chime</button>
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
  const segments = getHolyHourGuide();
  const [copied, setCopied] = useState(false);

  async function copyGuide() {
    try {
      await navigator.clipboard.writeText(formatHolyHourGuideForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Eucharistic Adoration</p>
        <h2>A Simple Holy Hour Guide</h2>
        <p>A peaceful structure for spending one hour with Jesus through adoration, thanksgiving, mercy, Scripture, intercession, and surrender.</p>
      </section>
      <section className={styles.holyHourGrid} aria-label="Holy Hour outline">
        {segments.map((segment, index) => (
          <article key={segment.id}>
            <span>{index + 1}</span>
            <p className={styles.eyebrow}>{segment.startMinute}-{segment.endMinute} minutes</p>
            <h3>{segment.title}</h3>
            <p>{segment.description}</p>
            <blockquote>“{segment.prayerPrompt}”</blockquote>
          </article>
        ))}
      </section>
      <div className={styles.holyHourDetails}>
        {segments.map((segment, index) => (
          <details key={`${segment.id}-details`} open={index === 0}>
            <summary><span>{segment.startMinute}-{segment.endMinute} minutes</span><strong>{segment.title}</strong><em>View prayer details</em></summary>
            <div>
              {segment.sourceNote ? <p className={styles.quietNote}>{segment.sourceNote}</p> : null}
              {segment.scripture ? <blockquote className={styles.holyHourScripture}><strong>{segment.scripture.reference}</strong><span>“{segment.scripture.text}”</span></blockquote> : null}
              <div className={styles.holyHourBlocks}>{(segment.guide ?? []).map((block, blockIndex) => <HolyHourBlock key={`${segment.id}-${blockIndex}`} block={block} />)}</div>
            </div>
          </details>
        ))}
      </div>
      <div className={styles.holyHourActions}>
        <button type="button" className={styles.goldButton} onClick={copyGuide}>{copied ? "Holy Hour copied" : "Copy Holy Hour Guide"}</button>
        <button type="button" onClick={() => window.print()}>Print Holy Hour Guide</button>
      </div>
    </div>
  );
}

function HolyHourBlock({ block }: { block: HolyHourGuideBlock }) {
  switch (block.kind) {
    case "heading": return <h4>{block.text}</h4>;
    case "paragraph": return <p>{block.text}</p>;
    case "breath": return <div className={styles.holyHourBreath}><span><b>Inhale slowly</b>“{block.inhale}”</span><span><b>Exhale slowly</b>“{block.exhale}”</span>{block.repeat ? <em>{block.repeat}</em> : null}</div>;
    case "prayer": return <blockquote className={styles.holyHourPrayer}>{block.title ? <b>{block.title}</b> : null}<span>“{block.text}”</span></blockquote>;
    case "scripture": return <blockquote className={styles.holyHourScripture}><strong>{block.reference}</strong><span>“{block.text}”</span></blockquote>;
    case "reflect": return <div><b>{block.title ?? "Reflect"}</b><ul>{block.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul></div>;
    case "list": return <div><b>{block.title}</b><ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
    case "invocation": return <blockquote className={styles.holyHourPrayer}>{block.title ? <b>{block.title}</b> : null}{block.lines.map((line) => <span key={line}>“{line}”</span>)}</blockquote>;
    case "pause": return <p className={styles.holyHourPause}>{block.text ?? "Pause in silence."}</p>;
  }
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
