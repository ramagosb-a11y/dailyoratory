"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { DIVINE_MERCY_CHAPLET_SOURCE, DIVINE_MERCY_CHAPLET_STEPS } from "@/data/divineMercyChaplet";
import {
  clearDivineMercyProgress,
  readDivineMercyProgress,
  saveDivineMercyProgress,
  type DivineMercySavedProgress,
} from "@/lib/divineMercyProgress";
import styles from "./DivineMercyChaplet.module.css";

type Screen = "start" | "prayer" | "complete" | "silence";
type TextScale = "small" | "standard" | "large" | "largest";

const speedOptions = [0.75, 1, 1.25] as const;
const textScaleOptions: Array<{ value: TextScale; label: string }> = [
  { value: "small", label: "A−" },
  { value: "standard", label: "A" },
  { value: "large", label: "A+" },
  { value: "largest", label: "A++" },
];

export function DivineMercyChaplet() {
  const steps = DIVINE_MERCY_CHAPLET_STEPS;
  const [screen, setScreen] = useState<Screen>("start");
  const [stepIndex, setStepIndex] = useState(0);
  const [textScale, setTextScale] = useState<TextScale>("standard");
  const [intention, setIntention] = useState("");
  const [intentionOpen, setIntentionOpen] = useState(false);
  const [exitOpen, setExitOpen] = useState(false);
  const [pathOpen, setPathOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [autoProgress, setAutoProgress] = useState(0);
  const [speed, setSpeed] = useState<(typeof speedOptions)[number]>(1);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [savedProgress, setSavedProgress] = useState<DivineMercySavedProgress | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const currentStep = steps[stepIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSavedProgress(readDivineMercyProgress(steps.length));
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [steps.length]);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setNow(new Date()), 0);
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const handleFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handleFullscreen);
    return () => document.removeEventListener("fullscreenchange", handleFullscreen);
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) setAutoAdvance(false);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const announceStep = useCallback(() => {
    window.requestAnimationFrame(() => stepHeadingRef.current?.focus({ preventScroll: true }));
  }, []);

  const goToStep = useCallback((nextIndex: number) => {
    const boundedIndex = Math.max(0, Math.min(nextIndex, steps.length - 1));
    setStepIndex(boundedIndex);
    setAutoProgress(0);
    saveDivineMercyProgress(boundedIndex, autoAdvance);
    setSavedProgress({ version: "1.0.2", stepIndex: boundedIndex, autoAdvance, updatedAt: Date.now() });
    announceStep();
  }, [announceStep, autoAdvance, steps.length]);

  const completeChaplet = useCallback(() => {
    clearDivineMercyProgress();
    setSavedProgress(null);
    setAutoAdvance(false);
    playChime(muted, "complete");
    setScreen("complete");
  }, [muted]);

  const nextStep = useCallback(() => {
    if (stepIndex >= steps.length - 1) {
      completeChaplet();
      return;
    }
    const next = steps[stepIndex + 1];
    if (next.bead === 0 || next.section === "conclusion") playChime(muted, "section");
    goToStep(stepIndex + 1);
  }, [completeChaplet, goToStep, muted, stepIndex, steps]);

  useEffect(() => {
    if (screen !== "prayer" || !autoAdvance) return;
    const duration = currentStep.durationSeconds / speed;
    const startedAt = performance.now();
    const interval = window.setInterval(() => {
      const elapsed = (performance.now() - startedAt) / 1000;
      setAutoProgress(Math.min(100, (elapsed / duration) * 100));
      if (elapsed >= duration) {
        window.clearInterval(interval);
        nextStep();
      }
    }, 250);
    return () => window.clearInterval(interval);
  }, [autoAdvance, currentStep.durationSeconds, nextStep, screen, speed, stepIndex]);

  useEffect(() => {
    if (screen !== "prayer" || intentionOpen || exitOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("button, a, input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        nextStep();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToStep(stepIndex - 1);
      } else if (event.key === "Escape") {
        setExitOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [exitOpen, goToStep, intentionOpen, nextStep, screen, stepIndex]);

  function beginChaplet(withAutoAdvance = false) {
    setStepIndex(0);
    setAutoAdvance(withAutoAdvance);
    setAutoProgress(0);
    saveDivineMercyProgress(0, withAutoAdvance);
    setSavedProgress({ version: "1.0.2", stepIndex: 0, autoAdvance: withAutoAdvance, updatedAt: Date.now() });
    setScreen("prayer");
    announceStep();
  }

  function resumeChaplet() {
    if (!savedProgress) return;
    setStepIndex(savedProgress.stepIndex);
    setAutoAdvance(false);
    setAutoProgress(0);
    setScreen("prayer");
    announceStep();
  }

  function resetProgress() {
    clearDivineMercyProgress();
    setSavedProgress(null);
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      setFullscreen(false);
    }
  }

  const mercyHour = now?.getHours() === 15;
  const shellClass = `${styles.shell} ${styles[`text-${textScale}`]}`;

  return (
    <div className={shellClass}>
      {screen === "start" ? (
        <StartScreen
          textScale={textScale}
          intention={intention}
          savedProgress={hydrated ? savedProgress : null}
          mercyHour={mercyHour}
          fullscreen={fullscreen}
          onTextScaleChange={setTextScale}
          onOpenIntention={() => setIntentionOpen(true)}
          onBegin={() => beginChaplet(false)}
          onBeginAuto={() => beginChaplet(true)}
          onResume={resumeChaplet}
          onReset={resetProgress}
          onSilence={() => setScreen("silence")}
          onFullscreen={toggleFullscreen}
        />
      ) : null}

      {screen === "prayer" ? (
        <main className={styles.player}>
          <CompanionHeader onPath={() => setPathOpen(true)} onSettings={() => setSettingsOpen(true)} />
          <section className={styles.prayerStage} aria-label="Current Chaplet prayer">
            <article className={styles.prayerCard}>
              <header className={styles.prayerCardHeader}>
                <div>
                  <p className={styles.eyebrow}>{formatSection(currentStep)}</p>
                  <h1 ref={stepHeadingRef} tabIndex={-1}>{currentStep.title}</h1>
                </div>
                <div className={styles.currentPrayerImage}>
                  <Image src="/images/divine-mercy/chaplet-immersive-v1.0.2.png" alt="Divine Mercy image" fill sizes="88px" className={styles.imageCover} />
                </div>
              </header>

              <p className={styles.instruction}>{currentStep.instruction}</p>

              {currentStep.section === "decade" ? <BeadProgress decade={currentStep.decade ?? 1} bead={currentStep.bead ?? 0} onSelect={goToStep} /> : null}

              {intention ? (
                <button type="button" className={styles.intentionBanner} onClick={() => setIntentionOpen(true)}>
                  <strong>Offered for:</strong> <span>{intention}</span>
                </button>
              ) : null}

              <div className={styles.prayerText}>
                <span aria-hidden="true">✝</span>
                <p>{currentStep.text}</p>
                {currentStep.repeat ? <small>Prayer {currentStep.repeat.current} of {currentStep.repeat.total}</small> : null}
              </div>

              <footer className={styles.prayerCardFooter}>
                <span>Pray slowly and with trust.</span>
                <a href={DIVINE_MERCY_CHAPLET_SOURCE} target="_blank" rel="noreferrer">Verify prayer source<span className="sr-only"> (opens in a new tab)</span></a>
              </footer>
            </article>
          </section>

          <PrayerControls
            stepIndex={stepIndex}
            stepCount={steps.length}
            autoAdvance={autoAdvance}
            autoProgress={autoProgress}
            speed={speed}
            muted={muted}
            fullscreen={fullscreen}
            onPrevious={() => goToStep(stepIndex - 1)}
            onNext={nextStep}
            onToggleAuto={() => { setAutoAdvance((value) => !value); setAutoProgress(0); }}
            onCycleSpeed={() => setSpeed(speedOptions[(speedOptions.indexOf(speed) + 1) % speedOptions.length])}
            onToggleMuted={() => setMuted((value) => !value)}
            onFullscreen={toggleFullscreen}
            onExit={() => setExitOpen(true)}
          />
        </main>
      ) : null}

      {screen === "complete" ? (
        <CompletionScreen intention={intention} onSilence={() => setScreen("silence")} onAgain={() => beginChaplet(false)} />
      ) : null}

      {screen === "silence" ? <SilentPrayerScreen intention={intention} onExit={() => setScreen("start")} /> : null}

      {intentionOpen ? <IntentionDialog value={intention} onSave={setIntention} onClose={() => setIntentionOpen(false)} /> : null}
      {pathOpen ? <PrayerPathDialog stepIndex={stepIndex} onSelect={(index) => { goToStep(index); setPathOpen(false); }} onClose={() => setPathOpen(false)} /> : null}
      {settingsOpen ? <SettingsDialog textScale={textScale} autoAdvance={autoAdvance} speed={speed} muted={muted} fullscreen={fullscreen} onTextScaleChange={setTextScale} onToggleAuto={() => { setAutoAdvance((value) => !value); setAutoProgress(0); }} onCycleSpeed={() => setSpeed(speedOptions[(speedOptions.indexOf(speed) + 1) % speedOptions.length])} onToggleMuted={() => setMuted((value) => !value)} onFullscreen={toggleFullscreen} onClose={() => setSettingsOpen(false)} /> : null}
      <ConfirmDialog
        open={exitOpen}
        title="Pause or exit the Chaplet?"
        description="Your prayer position is saved on this device for seven days. Your private intention is not saved."
        confirmLabel="Save and exit"
        onClose={() => setExitOpen(false)}
        onConfirm={() => { setAutoAdvance(false); setExitOpen(false); setScreen("start"); }}
      />
    </div>
  );
}

function StartScreen({
  textScale, intention, savedProgress, mercyHour, fullscreen,
  onTextScaleChange, onOpenIntention, onBegin, onBeginAuto, onResume, onReset, onSilence, onFullscreen,
}: {
  textScale: TextScale; intention: string; savedProgress: DivineMercySavedProgress | null;
  mercyHour: boolean; fullscreen: boolean;
  onTextScaleChange: (scale: TextScale) => void;
  onOpenIntention: () => void; onBegin: () => void; onBeginAuto: () => void; onResume: () => void;
  onReset: () => void; onSilence: () => void; onFullscreen: () => void;
}) {
  return (
    <main className={styles.startScreen}>
      <CompanionHeader />
      {mercyHour ? <div className={styles.mercyHourLive}><strong>The Hour of Great Mercy</strong><span>Pause with the Passion of Christ at three o’clock.</span></div> : null}
      <div className={styles.startExperience}>
        <aside className={styles.startArt} aria-label="Divine Mercy devotional image">
          <Image src="/images/divine-mercy/chaplet-immersive-v1.0.2.png" alt="Jesus of Divine Mercy in a sunlit chapel" fill sizes="(min-width: 860px) 44vw, 100vw" className={styles.imageCover} priority />
          <div className={styles.startArtVeil} />
          <div className={styles.startArtPrayer}><span aria-hidden="true">✦</span><p>Jesus, I trust in You.</p><small>For the whole world</small></div>
        </aside>
        <div className={styles.startPaper}>
          <div className={styles.mercyEmblem} aria-hidden="true"><span>✝</span><i /><b /></div>
          <div className={styles.startTitle}>
            <p className={styles.eyebrow}>Enter in peace</p>
            <h1>Divine Mercy<br />Chaplet</h1>
            <p>Bring your intention to the merciful Heart of Jesus.</p>
          </div>
          <div className={styles.startRule} aria-hidden="true"><span>✦</span></div>
          <button type="button" className={styles.intentionCard} onClick={onOpenIntention}>
            <span aria-hidden="true">♡</span><span><strong>{intention ? "Private intention set" : "Pray for an intention"}</strong><small>{intention || "Optional · kept only in this prayer session"}</small></span><b>{intention ? "Edit" : "Add +"}</b>
          </button>
          {savedProgress ? (
            <div className={styles.resumeCard}>
              <span><strong>Continue your Chaplet</strong><small>Prayer {savedProgress.stepIndex + 1} of {DIVINE_MERCY_CHAPLET_STEPS.length}</small></span>
              <button type="button" onClick={onReset}>Reset</button><button type="button" onClick={onResume}>Resume</button>
            </div>
          ) : null}
          <button type="button" className={styles.beginButton} onClick={onBegin}><span aria-hidden="true">▶</span><strong>Begin Chaplet</strong><small>Manual mode · tap Next when ready</small></button>
          <div className={styles.prayerJourney} aria-label="The Chaplet prayer journey">
            <span className={styles.journeyLine} aria-hidden="true" />
            <div><b>✝</b><small>Opening</small></div><div><b>1</b><small>First</small></div><div><b>2</b><small>Second</small></div><div><b>3</b><small>Third</small></div><div><b>✦</b><small>Mercy</small></div>
          </div>
          <div className={styles.startOptions}>
            <button type="button" onClick={onSilence}><span aria-hidden="true">☾</span>Silent prayer</button>
            <button type="button" onClick={onBeginAuto}><span aria-hidden="true">▷</span>Auto-advance</button>
            <button type="button" onClick={onFullscreen}><span aria-hidden="true">↗</span>{fullscreen ? "Exit full" : "Fullscreen"}</button>
          </div>
          <div className={styles.textSizeStart} role="group" aria-label="Prayer text size">{textScaleOptions.map((option) => <button type="button" key={option.value} aria-pressed={textScale === option.value} onClick={() => onTextScaleChange(option.value)}>{option.label}</button>)}</div>
          <footer className={styles.startFooter}><p>“For the sake of His sorrowful Passion, have mercy on us and on the whole world.”</p><span>Daily Oratory · Version 1.0.2</span></footer>
        </div>
      </div>
    </main>
  );
}

function CompanionHeader({ onPath, onSettings }: { onPath?: () => void; onSettings?: () => void }) {
  return (
    <header className={styles.masthead}>
      <Link href="/divine-mercy" className={styles.brand}><span aria-hidden="true" className={styles.brandMark}>✝</span><span><strong>Daily Oratory</strong><small>Divine Mercy Chaplet</small></span></Link>
      <div className={styles.headerActions}>
        <Link href="/divine-mercy/three-pm-prayer" className={styles.mercyHourButton}>3 PM Prayer</Link>
        {onPath ? <button type="button" onClick={onPath}>Prayer path</button> : null}
        {onSettings ? <button type="button" onClick={onSettings} aria-label="Prayer settings">Settings</button> : null}
      </div>
    </header>
  );
}

function ProgressNavigation({ stepIndex, onSelect }: { stepIndex: number; onSelect: (index: number) => void }) {
  const current = DIVINE_MERCY_CHAPLET_STEPS[stepIndex];
  const items = [
    { label: "Intro", index: 0, active: current.section === "opening" },
    ...Array.from({ length: 5 }, (_, index) => {
      const decade = index + 1;
      return { label: `${decade}`, index: DIVINE_MERCY_CHAPLET_STEPS.findIndex((step) => step.decade === decade && step.bead === 0), active: current.decade === decade };
    }),
    { label: "Amen", index: DIVINE_MERCY_CHAPLET_STEPS.findIndex((step) => step.section === "conclusion"), active: current.section === "conclusion" },
  ];
  return <nav className={styles.progressNav} aria-label="Chaplet sections">{items.map((item) => <button type="button" key={item.label} aria-current={item.active ? "step" : undefined} onClick={() => onSelect(item.index)}>{item.label}</button>)}</nav>;
}

function PrayerPathDialog({ stepIndex, onSelect, onClose }: { stepIndex: number; onSelect: (index: number) => void; onClose: () => void }) {
  return <DialogShell title="Prayer path" onClose={onClose}><p className={styles.pathIntro}>Move to a prayer section at any time. Your current bead is always preserved on this device.</p><ProgressNavigation stepIndex={stepIndex} onSelect={onSelect} /></DialogShell>;
}

function SettingsDialog({ textScale, autoAdvance, speed, muted, fullscreen, onTextScaleChange, onToggleAuto, onCycleSpeed, onToggleMuted, onFullscreen, onClose }: { textScale: TextScale; autoAdvance: boolean; speed: number; muted: boolean; fullscreen: boolean; onTextScaleChange: (scale: TextScale) => void; onToggleAuto: () => void; onCycleSpeed: () => void; onToggleMuted: () => void; onFullscreen: () => void; onClose: () => void }) {
  return <DialogShell title="Prayer settings" onClose={onClose}><div className={styles.settingsPanel}><span>Text size</span><div className={styles.textControls}>{textScaleOptions.map((option) => <button type="button" key={option.value} aria-pressed={textScale === option.value} onClick={() => onTextScaleChange(option.value)}>{option.label}</button>)}</div><button type="button" onClick={onToggleAuto}>{autoAdvance ? "Pause auto-advance" : "Use auto-advance"}</button><button type="button" onClick={onCycleSpeed}>Prayer pace: {speed}×</button><button type="button" onClick={onToggleMuted}>{muted ? "Turn prayer sounds on" : "Turn prayer sounds off"}</button><button type="button" onClick={onFullscreen}>{fullscreen ? "Exit fullscreen" : "Use fullscreen"}</button></div></DialogShell>;
}

function BeadProgress({ decade, bead, onSelect }: { decade: number; bead: number; onSelect: (index: number) => void }) {
  return (
    <div className={styles.beadProgress} role="group" aria-label={`Decade ${decade} beads`}>
      {Array.from({ length: 11 }, (_, index) => {
        const target = DIVINE_MERCY_CHAPLET_STEPS.findIndex((step) => step.decade === decade && step.bead === index);
        return <button type="button" key={index} aria-label={index === 0 ? "Large bead" : `Bead ${index}`} aria-current={bead === index ? "step" : undefined} onClick={() => onSelect(target)}>{index === 0 ? "✦" : index}</button>;
      })}
    </div>
  );
}

function PrayerControls({ stepIndex, stepCount, autoAdvance, autoProgress, speed, muted, fullscreen, onPrevious, onNext, onToggleAuto, onCycleSpeed, onToggleMuted, onFullscreen, onExit }: {
  stepIndex: number; stepCount: number; autoAdvance: boolean; autoProgress: number; speed: number; muted: boolean; fullscreen: boolean;
  onPrevious: () => void; onNext: () => void; onToggleAuto: () => void; onCycleSpeed: () => void; onToggleMuted: () => void; onFullscreen: () => void; onExit: () => void;
}) {
  return (
    <footer className={styles.controls}>
      <div className={styles.autoStatus}>{autoAdvance ? <><span>Auto-advance active · {speed}×</span><div><i style={{ width: `${autoProgress}%` }} /></div></> : <span>Manual mode · continue when ready</span>}</div>
      <div className={styles.primaryControls}>
        <button type="button" onClick={onPrevious} disabled={stepIndex === 0} aria-label="Previous prayer">←</button>
        <button type="button" className={styles.nextButton} onClick={onNext}>{stepIndex === stepCount - 1 ? "Complete Chaplet" : "Next Prayer"}<span aria-hidden="true">→</span></button>
        <button type="button" aria-pressed={autoAdvance} onClick={onToggleAuto}>{autoAdvance ? "Pause" : "Auto"}</button>
      </div>
      <div className={styles.utilityControls}>
        <div><button type="button" onClick={onCycleSpeed} aria-label={`Auto-advance speed ${speed} times`}>{speed}×</button><button type="button" onClick={onToggleMuted} aria-pressed={!muted}>{muted ? "Sound off" : "Sound on"}</button></div>
        <div><button type="button" onClick={onFullscreen}>{fullscreen ? "Exit full" : "Fullscreen"}</button><button type="button" onClick={onExit}>Exit</button></div>
      </div>
    </footer>
  );
}

function CompletionScreen({ intention, onSilence, onAgain }: { intention: string; onSilence: () => void; onAgain: () => void }) {
  return (
    <main className={styles.completion}>
      <div className={styles.completionImage}><Image src="/images/divine-mercy/christ-rays-v1.0.1.png" alt="Original devotional artwork of Christ with red and pale rays" fill sizes="280px" className={styles.imageCover} /></div>
      <p className={styles.eyebrow}>The Chaplet is complete</p><h1>Jesus, I trust in You.</h1>
      {intention ? <p className={styles.completedIntention}><strong>Offered for</strong><span>{intention}</span></p> : null}
      <p>Remain with Christ in silence, pray again, or return to the Divine Mercy guide.</p>
      <div className={styles.completionActions}><button type="button" onClick={onSilence}>Remain in silence</button><button type="button" onClick={onAgain}>Pray again</button><Link href="/divine-mercy">Return to Divine Mercy</Link></div>
    </main>
  );
}

function SilentPrayerScreen({ intention, onExit }: { intention: string; onExit: () => void }) {
  return <main className={styles.silence}><span aria-hidden="true">✝</span><p className={styles.eyebrow}>Silent prayer</p><h1>Be still before the mercy of Jesus.</h1>{intention ? <p>Hold this intention quietly: <strong>{intention}</strong></p> : <p>Rest in trust. No words are required.</p>}<button type="button" onClick={onExit}>Return to Chaplet menu</button></main>;
}

function IntentionDialog({ value, onSave, onClose }: { value: string; onSave: (value: string) => void; onClose: () => void }) {
  const [draft, setDraft] = useState(value);
  return (
    <DialogShell title="Pray for an intention" onClose={onClose}>
      <form onSubmit={(event) => { event.preventDefault(); onSave(draft.trim()); onClose(); }}>
        <p className={styles.privacyNote}>Your intention stays only in this prayer session. It is not saved, sent, or included in analytics.</p>
        <label htmlFor="divine-mercy-intention">Private intention <span>(optional)</span></label>
        <textarea id="divine-mercy-intention" rows={4} maxLength={280} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="For a person, a need, the dying, peace, conversion, or thanksgiving…" autoFocus />
        <small>{draft.length}/280</small>
        <div className={styles.dialogActions}><button type="button" onClick={() => { setDraft(""); onSave(""); }}>Clear</button><button type="button" onClick={onClose}>Cancel</button><button type="submit">Use this intention</button></div>
      </form>
    </DialogShell>
  );
}

function ConfirmDialog({ open, title, description, confirmLabel, onClose, onConfirm }: { open: boolean; title: string; description: string; confirmLabel: string; onClose: () => void; onConfirm: () => void }) {
  if (!open) return null;
  return <DialogShell title={title} onClose={onClose}><p>{description}</p><div className={styles.dialogActions}><button type="button" onClick={onClose}>Continue praying</button><button type="button" onClick={onConfirm}>{confirmLabel}</button></div></DialogShell>;
}

function DialogShell({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLElement>("button, textarea, input")?.focus();
    return () => previous?.focus();
  }, []);
  function onKeyDown(event: ReactKeyboardEvent) {
    if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
    if (event.key !== "Tab") return;
    const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button, textarea, input, a[href]") ?? []).filter((element) => !element.hasAttribute("disabled"));
    if (!focusable.length) return;
    const first = focusable[0]; const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  return <div className={styles.dialogBackdrop} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div ref={dialogRef} className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="divine-mercy-dialog-title" onKeyDown={onKeyDown}><button type="button" className={styles.dialogClose} onClick={onClose} aria-label="Close dialog">×</button><h2 id="divine-mercy-dialog-title">{title}</h2>{children}</div></div>;
}

function formatSection(step: (typeof DIVINE_MERCY_CHAPLET_STEPS)[number]) {
  if (step.section === "opening") return "Opening prayers";
  if (step.section === "conclusion") return "Concluding prayers";
  return `Decade ${step.decade} · ${step.bead === 0 ? "large bead" : `bead ${step.bead} of 10`}`;
}

function playChime(muted: boolean, type: "section" | "complete") {
  if (muted || typeof window === "undefined") return;
  try {
    const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const frequencies = type === "complete" ? [349.23, 440, 523.25] : [440, 660];
    frequencies.forEach((frequency, index) => {
      const oscillator = context.createOscillator(); const gain = context.createGain(); const start = context.currentTime + index * 0.12;
      oscillator.type = "sine"; oscillator.frequency.value = frequency; gain.gain.setValueAtTime(0.0001, start); gain.gain.exponentialRampToValueAtTime(0.08, start + 0.04); gain.gain.exponentialRampToValueAtTime(0.0001, start + 1.6); oscillator.connect(gain); gain.connect(context.destination); oscillator.start(start); oscillator.stop(start + 1.7);
    });
    window.setTimeout(() => void context.close(), 2400);
  } catch { /* Sound is optional. */ }
}
