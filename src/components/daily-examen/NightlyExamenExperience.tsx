"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  clearNightlyExamenData,
  completeNightlyExamen,
  saveNightlyExamenDraft,
  useNightlyExamenStore,
} from "@/lib/dailyExamenStorage";
import { trackEvent } from "@/lib/analytics";
import type { NightlyExamenDraft, NightlyExamenPace, NightlyExamenSession } from "@/types/dailyExamen";
import styles from "./NightlyExamenExperience.module.css";

type ExperienceView = "welcome" | "prayer" | "complete" | "grace-map";

const paceOptions: Array<{ id: NightlyExamenPace; title: string; time: string; description: string }> = [
  { id: "rest", title: "Rest", time: "about 2 minutes", description: "A quiet prayer without writing." },
  { id: "review", title: "Review", time: "about 7 minutes", description: "A gentle guided review of the day." },
  { id: "discern", title: "Discern", time: "about 12 minutes", description: "Stay longer with one significant movement." },
];

const stepMeta = [
  { id: "arrive", eyebrow: "Arrive", title: "Bring this day into the light." },
  { id: "gratitude", eyebrow: "Give thanks", title: "Receive the day as a gift." },
  { id: "review", eyebrow: "Review", title: "Walk backward through your day." },
  { id: "notice", eyebrow: "Notice", title: "What was moving within you?" },
  { id: "mercy", eyebrow: "Mercy", title: "Let truth meet the love of Christ." },
  { id: "tomorrow", eyebrow: "Tomorrow", title: "Ask for one grace and entrust the night." },
] as const;

type StepId = (typeof stepMeta)[number]["id"];

const gratitudeAreas = ["Relationships", "Daily bread", "Work", "Creation", "Protection", "Perseverance"];
const towardLove = ["Peace", "Gratitude", "Courage", "Connection"];
const towardUnrest = ["Agitation", "Fear", "Resistance", "Isolation"];
const tomorrowGraces = ["Faith", "Hope", "Charity", "Patience", "Courage", "Humility", "Wisdom", "Peace"];

export function NightlyExamenExperience({ standalone = false }: { standalone?: boolean }) {
  const store = useNightlyExamenStore();
  const [view, setView] = useState<ExperienceView>("welcome");
  const [pace, setPace] = useState<NightlyExamenPace>("review");
  const [draft, setDraft] = useState<NightlyExamenDraft | null>(null);
  const [completedSession, setCompletedSession] = useState<NightlyExamenSession | null>(null);
  const [storageMessage, setStorageMessage] = useState<string | null>(null);
  const topRef = useRef<HTMLElement | null>(null);
  const resumableDraft = store.draft?.localDate === getLocalDate() ? store.draft : null;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const container = topRef.current;
      if (!container) return;

      container.scrollTo({ top: 0, left: 0, behavior: "auto" });
      if (!standalone) container.scrollIntoView({ block: "start", behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [draft?.stepIndex, standalone, view]);

  function begin(writingEnabled: boolean) {
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
    };
    setDraft(nextDraft);
    const saved = saveNightlyExamenDraft(nextDraft);
    if (!saved) setStorageMessage("Browser storage is unavailable. You can still pray, but this session may not resume after you leave.");
    setView("prayer");
    trackEvent("daily_examen_mode_select", { pace, writing_enabled: nextDraft.writingEnabled });
    trackEvent("daily_examen_start", { category: "nightly-examen", item_slug: pace, source: "/daily-examen/nightly" });
  }

  function resume() {
    if (!resumableDraft) return;
    setPace(resumableDraft.pace);
    setDraft(resumableDraft);
    setView("prayer");
    trackEvent("daily_examen_resume", { pace: resumableDraft.pace, step: stepMeta[resumableDraft.stepIndex]?.id });
  }

  function updateDraft(patch: Partial<NightlyExamenDraft>) {
    if (!draft) return;
    const nextDraft = { ...draft, ...patch };
    setDraft(nextDraft);
    const saved = saveNightlyExamenDraft(nextDraft);
    if (!saved) setStorageMessage("Browser storage is unavailable. You can still pray, but this session may not resume after you leave.");
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
    const step = stepMeta[draft.stepIndex];
    trackEvent("daily_examen_step_complete", { pace: draft.pace, step: step.id });

    if (draft.stepIndex < stepMeta.length - 1) {
      updateDraft({ stepIndex: draft.stepIndex + 1 });
      return;
    }

    const completedAt = new Date();
    const startedAt = new Date(draft.startedAt).getTime();
    const durationMinutes = Math.max(1, Math.round((completedAt.getTime() - startedAt) / 60_000));
    const session: NightlyExamenSession = {
      localDate: draft.localDate,
      startedAt: draft.startedAt,
      pace: draft.pace,
      writingEnabled: draft.writingEnabled,
      gratitude: draft.gratitude,
      gratitudeArea: draft.gratitudeArea,
      significantMoment: draft.significantMoment,
      movementTags: draft.movementTags,
      mercy: draft.mercy,
      tomorrowGrace: draft.tomorrowGrace,
      id: `examen-${draft.localDate}-${completedAt.getTime()}`,
      completedAt: completedAt.toISOString(),
      durationMinutes,
    };
    const saved = completeNightlyExamen(session);
    setStorageMessage(saved ? null : "This prayer was completed, but browser storage is unavailable, so it was not added to your Grace Map.");
    setCompletedSession(session);
    setDraft(null);
    setView("complete");
    trackEvent("daily_examen_complete", { pace: session.pace, duration_minutes: durationMinutes });
  }

  function toggleMovement(movement: string) {
    if (!draft) return;
    const selected = new Set(draft.movementTags);
    if (selected.has(movement)) selected.delete(movement);
    else if (selected.size < 2) selected.add(movement);
    updateDraft({ movementTags: Array.from(selected) });
  }

  function clearPrivateData() {
    clearNightlyExamenData();
    setDraft(null);
    setCompletedSession(null);
    setView("welcome");
    setStorageMessage("Your saved Examen reflections and rhythm have been cleared from this browser.");
    trackEvent("daily_examen_clear_private_data", { source: "nightly-examen" });
  }

  return (
    <section
      ref={topRef}
      id="nightly-examen"
      aria-labelledby="nightly-examen-title"
      className={`${standalone ? styles.standalone : ""} scroll-mt-24`}
    >
      <div className={styles.shell}>
        <div className={styles.content}>
          {view === "welcome" ? (
            <WelcomeView
              onBegin={begin}
              onResume={resumableDraft ? resume : undefined}
              onOpenMap={store.sessions.length ? () => setView("grace-map") : undefined}
              storageMessage={storageMessage}
            />
          ) : null}
          {view === "prayer" && draft ? (
            <PrayerView
              draft={draft}
              onUpdate={updateDraft}
              onToggleMovement={toggleMovement}
              onPrevious={previousStep}
              onNext={nextStep}
            />
          ) : null}
          {view === "complete" && completedSession ? (
            <CompleteView
              session={completedSession}
              storageMessage={storageMessage}
              onOpenMap={() => setView("grace-map")}
              onPrayAgain={() => setView("welcome")}
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
      </div>
    </section>
  );
}

function WelcomeView({
  onBegin,
  onResume,
  onOpenMap,
  storageMessage,
}: {
  onBegin: (writingEnabled: boolean) => void;
  onResume?: () => void;
  onOpenMap?: () => void;
  storageMessage: string | null;
}) {
  return (
    <div className={`${styles.welcome} mx-auto grid justify-items-center text-center`}>
      <div className={styles.brandLockup}>
        <div className={styles.sunburst} aria-hidden="true"><span className={styles.brandCross} /></div>
        <p className={styles.brandTitle}>The Last Light</p>
        <p className={styles.brandSubtitle}>A Nightly Examen</p>
        <div className={styles.brandRule} aria-hidden="true"><span>◆</span></div>
      </div>

      <div className={styles.photoScene} aria-hidden="true">
        <Image
          src="/images/daily-examen/last-light-candle-v2.png"
          alt=""
          fill
          priority
          sizes="(max-width: 520px) 100vw, 430px"
        />
      </div>

      <div className={`${styles.stepMarker} mt-2`}>
        <span aria-hidden="true" />
        <p className={styles.eyebrow}>Arrive · 1 of 6</p>
        <span aria-hidden="true" />
      </div>
      <h2 id="nightly-examen-title" className={`${styles.heading} mt-5`}>
        Bring this day into the light.
      </h2>
      <div className={styles.headingOrnament} aria-hidden="true"><span>✦</span></div>
      <p className={`${styles.body} mt-5 max-w-2xl`}>
        You do not have to solve the day.<br />Simply bring it before God.
      </p>

      <div className={`${styles.welcomeActions} mt-7 flex w-full flex-col justify-center gap-3 sm:flex-row sm:flex-wrap`}>
        {onResume ? (
          <button type="button" onClick={onResume} className={`${styles.goldButton} focus-ring`}>
            <span className={styles.crossIcon} aria-hidden="true" /> Resume tonight&apos;s Examen
          </button>
        ) : (
          <button type="button" onClick={() => onBegin(true)} className={`${styles.goldButton} focus-ring`}>
            <span className={styles.crossIcon} aria-hidden="true" /> Begin in God&apos;s presence
          </button>
        )}
        <button type="button" onClick={() => onBegin(false)} className={`${styles.textButton} focus-ring`}>
          Pray without writing
        </button>
        {onOpenMap ? (
          <button type="button" onClick={onOpenMap} className={`${styles.textButton} focus-ring`}>
            View my Grace Map
          </button>
        ) : null}
      </div>
      {storageMessage ? <p className="mt-3 text-sm text-gold-soft" aria-live="polite">{storageMessage}</p> : null}
    </div>
  );
}

function PrayerView({
  draft,
  onUpdate,
  onToggleMovement,
  onPrevious,
  onNext,
}: {
  draft: NightlyExamenDraft;
  onUpdate: (patch: Partial<NightlyExamenDraft>) => void;
  onToggleMovement: (movement: string) => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const step = stepMeta[draft.stepIndex];
  const progress = ((draft.stepIndex + 1) / stepMeta.length) * 100;

  useEffect(() => {
    trackEvent("daily_examen_step_view", { pace: draft.pace, step: step.id });
  }, [draft.pace, step.id]);

  return (
    <div className={styles.prayerView} aria-live="polite">
      <div className="flex items-center justify-between gap-4">
        <p className={styles.eyebrow}>{step.eyebrow} · {draft.stepIndex + 1} of {stepMeta.length}</p>
        <span className="text-xs text-ivory/45">{paceOptions.find((item) => item.id === draft.pace)?.title}</span>
      </div>
      <div className={`${styles.progressTrack} mt-3`} aria-hidden="true">
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <h2 className={`${styles.subheading} mt-8`}>{step.title}</h2>
      <StepVisual step={step.id} />
      <div className={`${styles.stepContent} mt-6`}>
        {draft.stepIndex === 0 ? <ArriveStep pace={draft.pace} /> : null}
        {draft.stepIndex === 1 ? <GratitudeStep draft={draft} onUpdate={onUpdate} /> : null}
        {draft.stepIndex === 2 ? <ReviewStep draft={draft} onUpdate={onUpdate} /> : null}
        {draft.stepIndex === 3 ? <NoticeStep draft={draft} onToggle={onToggleMovement} /> : null}
        {draft.stepIndex === 4 ? <MercyStep draft={draft} onUpdate={onUpdate} /> : null}
        {draft.stepIndex === 5 ? <TomorrowStep draft={draft} onUpdate={onUpdate} /> : null}
      </div>

      <div className={styles.prayerActions}>
        <button type="button" onClick={onPrevious} className={`${styles.quietButton} focus-ring`}>
          {draft.stepIndex === 0 ? "Leave for now" : "Previous"}
        </button>
        <button type="button" onClick={onNext} className={`${styles.goldButton} focus-ring`}>
          {draft.stepIndex === stepMeta.length - 1 ? "Place this day in God's hands" : nextButtonLabel(draft.stepIndex)}
        </button>
      </div>
    </div>
  );
}

function ArriveStep({ pace }: { pace: NightlyExamenPace }) {
  return (
    <div className={styles.arriveLayout}>
      <div className={`${styles.card} ${styles.arriveCard}`}>
        <p className="font-display text-2xl leading-9 text-ivory">
          Make the Sign of the Cross. Take one slow breath and become aware that God is already here.
        </p>
        <p className={`${styles.body} mt-4`}>
          Holy Spirit, help me see this day with God&apos;s eyes—with truth, gratitude, and mercy.
        </p>
        {pace === "discern" ? (
          <p className="mt-4 text-sm leading-7 text-gold-soft">Remain in silence until you feel ready to look back.</p>
        ) : null}
      </div>
    </div>
  );
}

function GratitudeStep({ draft, onUpdate }: { draft: NightlyExamenDraft; onUpdate: (patch: Partial<NightlyExamenDraft>) => void }) {
  return (
    <div className={styles.stepStack}>
      <p className={styles.body}>
        What gift might have passed unnoticed—a person, a protection, daily bread, beauty, or strength to endure?
      </p>
      <div className="flex flex-wrap gap-2">
        {gratitudeAreas.map((area) => (
          <ChoiceChip key={area} label={area} selected={draft.gratitudeArea === area} onClick={() => onUpdate({ gratitudeArea: area })} />
        ))}
      </div>
      {draft.writingEnabled ? (
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-gold-soft">One gift I receive with gratitude</span>
          <textarea
            value={draft.gratitude}
            onChange={(event) => onUpdate({ gratitude: event.target.value.slice(0, 600) })}
            className={`${styles.field} focus-ring`}
            placeholder="Thank You, Lord, for…"
          />
        </label>
      ) : (
        <PrayerCard>Lord, thank You for the gifts You gave me today, including those I did not notice.</PrayerCard>
      )}
    </div>
  );
}

function ReviewStep({ draft, onUpdate }: { draft: NightlyExamenDraft; onUpdate: (patch: Partial<NightlyExamenDraft>) => void }) {
  return (
    <div className={styles.reviewLayout}>
      <div className={styles.timeline} aria-label="Review the day from evening to morning">
        <div className={`${styles.timelineItem} ${styles.timelineActive}`}><strong>Evening</strong><br /><span className="text-sm">Where you are now</span></div>
        <div className={styles.timelineItem}><strong>Afternoon</strong><br /><span className="text-sm">Earlier today</span></div>
        <div className={styles.timelineItem}><strong>Morning</strong><br /><span className="text-sm">The beginning</span></div>
      </div>
      <div className={styles.card}>
        <p className="font-display text-2xl leading-9 text-ivory">Recall one moment that still carries gratitude, tension, joy, or sorrow.</p>
        <p className={`${styles.body} mt-3`}>
          Do not analyze the whole day. Stay with the one scene that seems to ask for prayer.
        </p>
        {draft.writingEnabled ? (
          <textarea
            value={draft.significantMoment}
            onChange={(event) => onUpdate({ significantMoment: event.target.value.slice(0, 900) })}
            className={`${styles.field} focus-ring mt-5`}
            placeholder="The moment I want to bring before God…"
            aria-label="A significant moment from today"
          />
        ) : null}
      </div>
    </div>
  );
}

function NoticeStep({ draft, onToggle }: { draft: NightlyExamenDraft; onToggle: (movement: string) => void }) {
  return (
    <div className={styles.stepStack}>
      <p className={styles.body}>
        Notice what the moment stirred and where it seemed to lead. These are invitations to prayer, not scores or final judgments.
      </p>
      <MovementGroup title="Toward faith, hope, and love" items={towardLove} selected={draft.movementTags} onToggle={onToggle} />
      <MovementGroup title="Toward withdrawal or unrest" items={towardUnrest} selected={draft.movementTags} onToggle={onToggle} />
      <p className="text-sm leading-7 text-ivory/55">Choose up to two, or simply notice them silently.</p>
    </div>
  );
}

function MercyStep({ draft, onUpdate }: { draft: NightlyExamenDraft; onUpdate: (patch: Partial<NightlyExamenDraft>) => void }) {
  return (
    <div className={styles.stepStack}>
      <PrayerCard>
        Jesus, show me where I received love, where I offered it, and where I resisted it. Let what is true lead me toward Your mercy, never away from it.
      </PrayerCard>
      <p className={styles.body}>
        If something needs forgiveness or repair, name it simply. You do not need to rehearse it or punish yourself.
      </p>
      {draft.writingEnabled ? (
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-gold-soft">Something to release, confess, or repair</span>
          <textarea
            value={draft.mercy}
            onChange={(event) => onUpdate({ mercy: event.target.value.slice(0, 700) })}
            className={`${styles.field} focus-ring`}
            placeholder="Lord Jesus, have mercy and help me begin again…"
          />
        </label>
      ) : null}
      <p className="text-sm leading-7 text-ivory/55">
        This Examen does not determine mortal or venial sin. Bring serious concerns to Confession and ask a priest when unsure.
      </p>
    </div>
  );
}

function TomorrowStep({ draft, onUpdate }: { draft: NightlyExamenDraft; onUpdate: (patch: Partial<NightlyExamenDraft>) => void }) {
  return (
    <div className={styles.stepStack}>
      <p className={styles.body}>
        Look gently toward what awaits you. Ask for one grace—not a perfect plan—and place everything unfinished in God&apos;s care.
      </p>
      <div className="flex flex-wrap gap-2">
        {tomorrowGraces.map((grace) => (
          <ChoiceChip key={grace} label={grace} selected={draft.tomorrowGrace === grace} onClick={() => onUpdate({ tomorrowGrace: grace })} />
        ))}
      </div>
      <PrayerCard>
        Father, give me the grace I need tomorrow. Into Your hands I place my work, my worries, the people I love, and this night.
      </PrayerCard>
      <p className="text-center font-display text-2xl text-gold-soft">Jesus, I trust in You.</p>
    </div>
  );
}

function CompleteView({
  session,
  storageMessage,
  onOpenMap,
  onPrayAgain,
}: {
  session: NightlyExamenSession;
  storageMessage: string | null;
  onOpenMap: () => void;
  onPrayAgain: () => void;
}) {
  return (
    <div className="mx-auto grid max-w-3xl justify-items-center text-center">
      <p className={styles.eyebrow}>The Last Light</p>
      <CandleScene compact />
      <h2 className={styles.heading}>This day is now in God&apos;s hands.</h2>
      <p className="mt-6 font-display text-2xl leading-9 text-gold-soft">
        Into Your hands, Lord,<br />{" "}I place this day and this night.
      </p>
      <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-ivory/50">
        Examen complete · {session.durationMinutes} {session.durationMinutes === 1 ? "minute" : "minutes"}
      </p>
      <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={onOpenMap} className={`${styles.goldButton} focus-ring`}>View my Grace Map</button>
        <Link href="/liturgy-of-the-hours" className={`${styles.quietButton} focus-ring inline-flex items-center justify-center`}>Continue to Night Prayer</Link>
        <button type="button" onClick={onPrayAgain} className={`${styles.quietButton} focus-ring`}>Return to the beginning</button>
      </div>
      <p className="mt-6 text-xs leading-6 text-ivory/48" aria-live="polite">
        {storageMessage ?? "Your private reflection remains only in this browser."}
      </p>
    </div>
  );
}

function GraceMapView({ sessions, onBack, onClear }: { sessions: NightlyExamenSession[]; onBack: () => void; onClear: () => void }) {
  const days = useMemo(() => buildWeekDays(sessions), [sessions]);
  const gratitude = mostFrequent(sessions.map((session) => session.gratitudeArea)) || "Still unfolding";
  const movement = mostFrequent(sessions.flatMap((session) => session.movementTags)) || "Still unfolding";
  const grace = mostFrequent(sessions.map((session) => session.tomorrowGrace)) || "Still unfolding";

  return (
    <div className="mx-auto max-w-3xl">
      <button type="button" onClick={onBack} className={`${styles.quietButton} focus-ring`}>Back to tonight</button>
      <div className="mt-7 text-center">
        <p className={styles.eyebrow}>Private Grace Map</p>
        <h2 className={`${styles.subheading} mt-4`}>What you have noticed in prayer</h2>
        <p className={`${styles.body} mx-auto mt-4 max-w-2xl`}>A gentle memory of your own reflections—never a score and never a claim about God&apos;s will.</p>
      </div>
      <div className={styles.weekMap} aria-label="Examen rhythm during the last seven days">
        {days.map((day) => (
          <div key={day.key} className={`${styles.day} ${day.complete ? styles.dayComplete : ""}`}>
            <span className={styles.dayLight} aria-hidden="true" />
            <span>{day.label}</span>
            <span className="sr-only">{day.complete ? "Examen completed" : "No saved Examen"}</span>
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <InsightCard label="Grace received" value={gratitude} />
        <InsightCard label="Movement noticed" value={movement} />
        <InsightCard label="Grace requested" value={grace} />
      </div>
      <div className="mt-7 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ivory/55">Saved only on this device · {sessions.length} prayer {sessions.length === 1 ? "evening" : "evenings"}</p>
        <button type="button" onClick={onClear} className={`${styles.quietButton} focus-ring`}>Clear private Examen data</button>
      </div>
    </div>
  );
}

function MovementGroup({ title, items, selected, onToggle }: { title: string; items: string[]; selected: string[]; onToggle: (item: string) => void }) {
  return (
    <fieldset className={`${styles.card} ${styles.movementCard}`}>
      <legend className="px-2 font-display text-2xl text-gold-soft">{title}</legend>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => <ChoiceChip key={item} label={item} selected={selected.includes(item)} onClick={() => onToggle(item)} />)}
      </div>
    </fieldset>
  );
}

function ChoiceChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`${styles.chip} ${selected ? styles.chipSelected : ""} focus-ring`} aria-pressed={selected}>
      {label}
    </button>
  );
}

function PrayerCard({ children }: { children: React.ReactNode }) {
  return <blockquote className={`${styles.parchmentCard} font-display text-2xl leading-9`}>{children}</blockquote>;
}

function StepVisual({ step }: { step: StepId }) {
  const visualClass = {
    arrive: styles.stepVisualArrive,
    gratitude: styles.stepVisualGratitude,
    review: styles.stepVisualReview,
    notice: styles.stepVisualNotice,
    mercy: styles.stepVisualMercy,
    tomorrow: styles.stepVisualTomorrow,
  }[step];
  const symbol = {
    arrive: "",
    gratitude: "✦",
    review: "◷",
    notice: "◉",
    mercy: "",
    tomorrow: "✦",
  }[step];

  return (
    <div className={`${styles.stepVisual} ${visualClass}`} aria-hidden="true">
      <Image
        src="/images/daily-examen/last-light-candle-v2.png"
        alt=""
        fill
        sizes="(max-width: 520px) 100vw, 430px"
      />
      <span className={styles.stepSigil}>
        {step === "arrive" || step === "mercy" ? <span className={styles.sigilCross} /> : symbol}
      </span>
    </div>
  );
}

function CandleScene({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.candleScene} ${compact ? styles.candleSceneCompact : ""}`} aria-hidden="true">
      <span className={styles.archWindow} />
      <span className={styles.lightAura} />
      <span className={styles.tableSurface} />
      <span className={styles.candleAssembly}>
        <span className={styles.candle} />
        <span className={styles.candleCup} />
        <span className={styles.candleTray} />
        <span className={styles.candleStem} />
        <span className={styles.candleFoot} />
      </span>
    </div>
  );
}

function InsightCard({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.parchmentCard}>
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold text-navy">{value}</p>
    </div>
  );
}

function nextButtonLabel(stepIndex: number) {
  return ["Receive the day", "Review the day", "Notice this movement", "Bring it to mercy", "Look toward tomorrow"][stepIndex] ?? "Continue";
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
