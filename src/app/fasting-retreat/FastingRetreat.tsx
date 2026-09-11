"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  chapters,
  steps,
  stepById,
  companions,
  dailyLitany,
  type RetreatStep,
} from "@/content/fasting-retreat";
import { readings } from "@/content/fasting-retreat-scripture";
import {
  RETREAT_STORAGE_KEY,
  RETREAT_HANDOFF_KEY,
  decodeProgress,
  decodeRoute,
  makeRouteHash,
  type RetreatProgress,
  type RetreatRoute,
} from "@/lib/fastingRetreatState";
import s from "./retreat.module.css";
import { RetreatIntentions, useRetreatIntentions } from "./RetreatIntentions";
import { RetreatPassage } from "./RetreatPassage";

const validSteps = new Set(steps.map((x) => x.id));
const stepChapters = new Map(steps.map((x) => [x.id, x.chapter]));
const validChapters = new Set(chapters.map((x) => x.id));
const empty: RetreatProgress = {
  version: 1,
  lastStep: null,
  positions: {},
  largeText: false,
};
function Art({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 700px) 100vw, 60vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1536}
      sizes={sizes}
      quality={85}
      priority={priority}
      className={className}
    />
  );
}
function Silence() {
  const [seconds, setSeconds] = useState(180),
    [running, setRunning] = useState(false),
    [duration, setDuration] = useState(180);
  const deadline = useRef(0);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const next = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000),
      );
      setSeconds(next);
      if (!next) setRunning(false);
    }, 250);
    return () => clearInterval(id);
  }, [running]);
  return (
    <aside className={s.silence} aria-label="Optional silent prayer timer">
      <div>
        <span className={s.eyebrow}>A moment of stillness</span>
        <p>Rest in His presence. There is no hurry.</p>
      </div>
      <div className={s.timer}>
        {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
      </div>
      <div className={s.timerControls}>
        <select
          aria-label="Silence duration"
          value={duration}
          disabled={running}
          onChange={(e) => {
            const n = Number(e.target.value);
            setDuration(n);
            setSeconds(n);
          }}
        >
          <option value={60}>1 minute</option>
          <option value={180}>3 minutes</option>
          <option value={300}>5 minutes</option>
        </select>
        <button
          onClick={() => {
            if (running) setRunning(false);
            else {
              const n = seconds || duration;
              setSeconds(n);
              deadline.current = Date.now() + n * 1000;
              setRunning(true);
            }
          }}
        >
          {running ? "Pause" : seconds === 0 ? "Begin again" : "Begin silence"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setSeconds(duration);
          }}
        >
          Reset
        </button>
      </div>
      <span className={s.srOnly} role="status">
        {seconds === 0 ? "Your silent prayer timer has ended." : ""}
      </span>
    </aside>
  );
}
export default function FastingRetreat() {
  const intentions = useRetreatIntentions();
  const [route, setRoute] = useState<RetreatRoute>({
    chapter: "welcome",
    step: null,
    view: "overview",
  });
  const [progress, setProgress] = useState<RetreatProgress>(empty);
  const [saving, setSaving] = useState(true),
    [ready, setReady] = useState(false);
  const [outline, setOutline] = useState(false);
  const pendingNavigation = useRef<number | null>(null);
  useLayoutEffect(() => {
    if (pendingNavigation.current === null) return;
    document.getElementById("retreat-title")?.focus({ preventScroll: true });
    window.scrollTo({ top: pendingNavigation.current, behavior: "instant" });
    pendingNavigation.current = null;
  }, [route]);
  const progressRef = useRef<RetreatProgress>(empty),
    routeRef = useRef(route),
    dialog = useRef<HTMLDialogElement>(null);
  const chapter = chapters.find((x) => x.id === route.chapter) || chapters[0];
  const active = route.step ? stepById.get(route.step) : undefined;
  const chapterSteps = steps.filter((x) => x.chapter === chapter.id);
  const activeIndex = active ? steps.indexOf(active) : -1;
  const last = progress.lastStep ? stepById.get(progress.lastStep) : undefined;
  function persist(value: RetreatProgress) {
    progressRef.current = value;
    setProgress(value);
    try {
      localStorage.setItem(RETREAT_STORAGE_KEY, JSON.stringify(value));
      setSaving(true);
    } catch {
      setSaving(false);
    }
  }
  function savePosition() {
    const id = routeRef.current.step;
    if (id) {
      const p = progressRef.current;
      persist({
        ...p,
        lastStep: id,
        positions: { ...p.positions, [id]: window.scrollY },
      });
    }
  }
  function navigate(next: RetreatRoute, restore = false) {
    savePosition();
    pendingNavigation.current = restore && next.step ? progressRef.current.positions[next.step] || 0 : 0;
    routeRef.current = next;
    setRoute(next);
    history.pushState(null, "", makeRouteHash(next));
    setOutline(false);
    if (next.step) persist({ ...progressRef.current, lastStep: next.step });
  }
  function openStep(step: RetreatStep, restore = false) {
    navigate(
      { chapter: step.chapter, step: step.id, view: "overview" },
      restore,
    );
  }
  function overview(id = chapter.id) {
    navigate({ chapter: id, step: null, view: "overview" });
  }
  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      let loaded = empty;
      try {
        loaded = decodeProgress(
          localStorage.getItem(RETREAT_STORAGE_KEY),
          validSteps,
        );
      } catch {
        setSaving(false);
      }
      progressRef.current = loaded;
      setProgress(loaded);
      const fallback = loaded.lastStep
        ? stepChapters.get(loaded.lastStep) || "welcome"
        : "welcome";
      const next = decodeRoute(
        location.hash,
        stepChapters,
        validChapters,
        fallback,
      );
      routeRef.current = next;
      setRoute(next);
      setReady(true);
      if (next.step) {
        const p = { ...loaded, lastStep: next.step };
        progressRef.current = p;
        setProgress(p);
        try {
          localStorage.setItem(RETREAT_STORAGE_KEY, JSON.stringify(p));
        } catch {
          setSaving(false);
        }
      }
      try {
        sessionStorage.removeItem(RETREAT_HANDOFF_KEY);
      } catch {}
      requestAnimationFrame(() => {
        if (next.step) window.scrollTo(0, loaded.positions[next.step] || 0);
      });
    });
    const onHistory = () => {
      const next = decodeRoute(location.hash, stepChapters, validChapters);
      routeRef.current = next;
      setRoute(next);
      requestAnimationFrame(() =>
        window.scrollTo(
          0,
          next.step ? progressRef.current.positions[next.step] || 0 : 0,
        ),
      );
    };
    let timeout: ReturnType<typeof setTimeout>;
    const writeScroll = () => {
      const id = routeRef.current.step;
      if (!id) return;
      const p = progressRef.current;
      const next = {
        ...p,
        lastStep: id,
        positions: { ...p.positions, [id]: window.scrollY },
      };
      progressRef.current = next;
      try {
        localStorage.setItem(RETREAT_STORAGE_KEY, JSON.stringify(next));
      } catch {
        setSaving(false);
      }
    };
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(writeScroll, 250);
    };
    window.addEventListener("popstate", onHistory);
    window.addEventListener("hashchange", onHistory);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", writeScroll);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      window.removeEventListener("popstate", onHistory);
      window.removeEventListener("hashchange", onHistory);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", writeScroll);
    };
  }, []);
  useEffect(() => {
    if (outline) dialog.current?.showModal();
    else dialog.current?.close();
  }, [outline]);
  function handoff(key: string, step = active) {
    const companion = companions[key];
    if (!companion) return;
    const returnStep =
      step || chapterSteps.find((x) => x.companion === key) || chapterSteps[0];
    savePosition();
    persist({ ...progressRef.current, lastStep: returnStep.id });
  }
  function companionHref(key: string, step = active) {
    const returnStep =
      step || chapterSteps.find((x) => x.companion === key) || chapterSteps[0];
    return (
      companions[key].href + "?retreat=" + encodeURIComponent(returnStep.id)
    );
  }
  const prayerKeys = [
    "rosary",
    "adoration",
    "examination",
    dailyLitany(chapter.id),
  ];
  function prayerCards() {
    return (
      <div className={s.prayerGrid}>
        {prayerKeys.map((key) => {
          const p = companions[key];
          return (
            <a
              key={key}
              className={s.prayerCard}
              href={companionHref(key)}
              onClick={() => handoff(key)}
            >
              <Art
                src={"/images/fasting-retreat/" + p.image + ".webp"}
                alt=""
                sizes="(max-width: 700px) 45vw, 280px"
              />
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span>
                  Open companion <span aria-hidden>↗</span>
                </span>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
  function continueReader() {
    if (!active) return;
    const next = steps[activeIndex + 1];
    if (!next) {
      overview("closing");
      return;
    }
    if (active.dayEnd || next.chapter !== active.chapter) {
      overview(next.chapter);
      return;
    }
    openStep(next);
  }
  const continueLabel = activeIndex === steps.length - 1 ? "Retreat overview" : active?.dayEnd ? "Close this day" : "Continue";
  return (
    <div className={s.app + " " + (progress.largeText ? s.largeText : "")}>
      <header className={s.header}>
        <Link href="/" className={s.brand}>
          <span>
            DAILY ORATORY<small>A place for the soul</small>
          </span>
        </Link>
        <span className={s.headerTitle}>The Fasting Retreat</span>
        <div className={s.headerActions}>
          <Link href="/" className={s.homeLink}>Home</Link>
          <button
            aria-label={
              progress.largeText
                ? "Use standard text size"
                : "Use larger text size"
            }
            aria-pressed={progress.largeText}
            onClick={() =>
              persist({
                ...progressRef.current,
                largeText: !progress.largeText,
              })
            }
          >
            Text size
          </button>
          <button
            onClick={() => setOutline(true)}
            aria-label="Open retreat sections"
          >
            Sections
          </button>
        </div>
      </header>
      <nav className={s.chapterNav} aria-label="Retreat chapters">
        {chapters.map((c) => (
          <button
            key={c.id}
            className={c.id === chapter.id ? s.selected : ""}
            aria-current={c.id === chapter.id ? "page" : undefined}
            onClick={() => overview(c.id)}
          >
            {c.label}
          </button>
        ))}
      </nav>
      {active ? (
        <div className={s.reader} key={active.id} data-active-step={active.id}>
          <aside className={s.readerArt}>
            <Art src={active.image} alt={active.imageAlt} priority />
            <div className={s.artCaption}>
              <span className={s.eyebrow}>{chapter.label}</span>
              <p>{chapter.refrain}</p>
            </div>
          </aside>
          <article className={s.reading}>
            <button className={s.backLink} onClick={() => overview()}>
              ← {chapter.label} overview
            </button>
            <div className={s.readerMeta}>
              <span className={s.eyebrow}>{active.period}</span>
              <span>
                {chapterSteps.indexOf(active) + 1} of {chapterSteps.length}
                {active.optional ? " · Optional" : ""}
              </span>
            </div>
            <h1 id="retreat-title" tabIndex={-1}>
              {active.title}
            </h1>
            <nav className={s.topControls} aria-label="Top reading navigation">
              <button className={s.nextControl} onClick={continueReader}>{continueLabel} →</button>
              <button disabled={activeIndex <= 0} onClick={() => openStep(steps[activeIndex - 1])}>← Previous</button>
            </nav>
            <p className={s.intro}>{active.intro}</p>
            {active.intentions && <RetreatIntentions day={active.intentions} state={intentions} />}
            {active.passageIds?.map(id => <RetreatPassage key={id} id={id} />)}
            {active.companion && companions[active.companion] && (
              <aside className={s.handoff}>
                <span className={s.eyebrow}>Pray with a companion</span>
                <h2>{companions[active.companion].title}</h2>
                <p>
                  {companions[active.companion].description} Your retreat place
                  will be waiting when you return.
                </p>
                <a
                  className={s.primary}
                  href={companionHref(active.companion)}
                  onClick={() => handoff(active.companion!)}
                >
                  {companions[active.companion].action} ↗
                </a>
              </aside>
            )}
            <div className={s.prayerText}>
              {active.blocks.map((block, i) =>
                block.kind === "heading" ? (
                  <h2 key={i}>{block.text}</h2>
                ) : (
                  <p key={i}>{block.text}</p>
                ),
              )}
            </div>
            {active.links?.map((link) => (
              <p key={link.href}>
                <a
                  className={s.textLink}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              </p>
            ))}
            {active.silence && <Silence />}
            {active.dayEnd && (
              <div className={s.dayEnd}>
                <h2>
                  {chapter.id === "closing"
                    ? "Carry this peace into your day"
                    : "Rest in the grace of this day"}
                </h2>
                <p>
                  {chapter.id === "preparation"
                    ? "Begin Day 1 when you are ready."
                    : chapter.id === "closing"
                      ? "Return to any prayer whenever you need it."
                      : "There is no need to rush ahead. Return for the next chapter when you are ready."}
                </p>
              </div>
            )}
            <p className={s.saved}>
              {ready
                ? saving
                  ? "Your place is saved on this device."
                  : "Saving is unavailable in this browser. Keep this page open or bookmark its link."
                : "Preparing your retreat…"}
            </p>
          </article>
        </div>
      ) : route.view === "prayers" ? (
        <div className={s.container}>
          <div className={s.sectionHeading}>
            <span className={s.eyebrow}>A shared life of prayer</span>
            <h1 id="retreat-title" tabIndex={-1}>
              Prayer companions
            </h1>
            <p>
              Open a prayer, then return to your retreat. Choose the litany for
              the chapter above.
            </p>
          </div>
          {prayerCards()}
          <button className={s.secondary} onClick={() => overview()}>
            ← Back to {chapter.label}
          </button>
        </div>
      ) : (
        <>
          <section className={s.hero}>
            <Art
              src={chapter.image}
              alt={chapter.imageAlt}
              priority
              className={s.heroImage}
            />
            <div className={s.heroShade} />
            <div className={s.heroContent}>
              <span className={s.eyebrow}>
                {chapter.id === "welcome"
                  ? "Three-Day Fasting Retreat"
                  : chapter.label + " · " + chapter.subtitle}
              </span>
              <h1 id="retreat-title" tabIndex={-1}>
                {chapter.title}
              </h1>
              <p>{chapter.description}</p>
              <div className={s.heroActions}>
                <button
                  className={s.primary}
                  disabled={!ready}
                  onClick={() =>
                    openStep(
                      last && last.chapter === chapter.id
                        ? last
                        : chapterSteps[0],
                      !!last && last.chapter === chapter.id,
                    )
                  }
                >
                  {last && last.chapter === chapter.id
                    ? "Resume prayer"
                    : chapter.id === "welcome"
                      ? "Begin the retreat"
                      : chapter.id === "preparation"
                        ? "Prepare your heart"
                        : "Enter " + chapter.label}
                  <span aria-hidden>→</span>
                </button>
                <button className={s.ghost} onClick={() => setOutline(true)}>
                  View retreat
                </button>
              </div>
              <span className={s.heroNote}>
                At your own pace · Scripture in the Douay–Rheims
              </span>
            </div>
          </section>
          <div className={s.container}>
            {last && last.chapter !== chapter.id && (
              <button
                className={s.resumeStrip}
                onClick={() => openStep(last, true)}
              >
                <span>
                  YOUR SAVED PLACE{" "}
                  <strong>
                    {chapters.find((x) => x.id === last.chapter)?.label} ·{" "}
                    {last.title}
                  </strong>
                </span>
                <span>Resume →</span>
              </button>
            )}
            <div className={s.overviewGrid}>
              <section>
                <div className={s.sectionHeading}>
                  <span className={s.eyebrow}>
                    {chapter.id === "welcome"
                      ? "Make room for grace"
                      : "A simple rhythm"}
                  </span>
                  <h2>
                    {chapter.id === "welcome"
                      ? "Before you begin"
                      : chapter.id === "closing"
                        ? "A new beginning"
                        : "Your path for " + chapter.label.toLowerCase()}
                  </h2>
                  <p>
                    One prayer at a time. Follow the rhythm, with room for
                    silence.
                  </p>
                </div>
                <div className={s.pathList}>
                  {[...new Set(chapterSteps.map(step => step.period))].map(period => <section key={period} className={s.pathGroup} aria-label={period + " path"}>
                    <h3>{period}</h3>
                    {chapterSteps.filter(step => step.period === period).map(step => <button
                      className={s.pathCard} key={step.id} onClick={() => openStep(step)}
                      aria-label={step.title} data-step-id={step.id}>
                      <span className={s.pathNumber}>{String(chapterSteps.indexOf(step) + 1).padStart(2, "0")}</span>
                      <span className={s.pathText}><strong>{step.title}</strong><span>{step.optional ? "Optional · " : ""}{step.id === progress.lastStep ? "Saved place" : step.companion ? "Prayer companion" : step.intentions ? "Your personal offering" : "Read and pray"}</span></span>
                      <span aria-hidden>→</span>
                    </button>)}
                  </section>)}
                </div>
              </section>
              <aside className={s.graceCard}>
                <span className={s.eyebrow}>The grace to ask for</span>
                <h2>{chapter.grace}</h2>
                <div className={s.divider} />
                <span className={s.eyebrow}>Return to this prayer</span>
                <blockquote>{chapter.refrain}</blockquote>
                {readings[chapter.id] && (
                  <button
                    className={s.textLink}
                    onClick={() =>
                      openStep(
                        chapterSteps.find((x) => x.scripture === chapter.id)!,
                      )
                    }
                  >
                    {readings[chapter.id].reference} · Douay–Rheims →
                  </button>
                )}
                <p className={s.quiet}>
                  Let the retreat serve your life of prayer. Adapt the pace to
                  your responsibilities.
                </p>
              </aside>
            </div>
            <section className={s.journey}>
              <div className={s.sectionHeading}>
                <span className={s.eyebrow}>The whole retreat</span>
                <h2>Three days. One invitation.</h2>
              </div>
              <div className={s.journeyGrid}>
                {chapters
                  .filter((x) => x.id !== "welcome")
                  .map((c) => (
                    <button
                      key={c.id}
                      className={
                        s.journeyCard +
                        " " +
                        (c.id === chapter.id ? s.currentCard : "")
                      }
                      onClick={() => overview(c.id)}
                    >
                      <Art
                        src={c.image}
                        alt=""
                        sizes="(max-width: 700px) 45vw, 230px"
                      />
                      <span>
                        <small>{c.label}</small>
                        <strong>
                          {c.id === "preparation"
                            ? "Prepare"
                            : c.id === "day-1"
                              ? "With Jesus"
                              : c.id === "day-2"
                                ? "With Mary"
                                : c.id === "day-3"
                                  ? "With the Holy Family"
                                  : "Carry it forward"}
                        </strong>
                      </span>
                    </button>
                  ))}
              </div>
            </section>
            <section className={s.companions}>
              <div className={s.sectionHeading}>
                <span className={s.eyebrow}>Go deeper in prayer</span>
                <h2>Your prayer companions</h2>
                <p>Connected to the prayers you already know.</p>
              </div>
              {prayerCards()}
            </section>
            <footer className={s.footer}>
              <RetreatPassage id="footer" />
              <div>
                <button
                  onClick={() => openStep(stepById.get("welcome-fasting")!)}
                >
                  Fasting guidance
                </button>
                <a
                  href="https://ebible.org/engDRA/copyright.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scripture &amp; attribution ↗
                </a>
              </div>
              <small>
                Original retreat artwork · Prayer texts adapted from your
                retreat document
              </small>
            </footer>
          </div>
        </>
      )}
      <nav
        className={s.bottomBar}
        aria-label={active ? "Prayer navigation" : "Retreat navigation"}
      >
        {active ? (
          <>
            <button
              disabled={activeIndex <= 0}
              onClick={() => openStep(steps[activeIndex - 1])}
            >
              <span aria-hidden>←</span> Previous
            </button>
            <button onClick={() => setOutline(true)}>Sections</button>
            <button className={s.bottomPrimary} onClick={continueReader}>
              {activeIndex === steps.length - 1
                ? "Retreat overview"
                : active.dayEnd
                  ? "Close this day"
                  : "Continue"}{" "}
              <span aria-hidden>→</span>
            </button>
          </>
        ) : (
          <>
            <button
              aria-current={route.view === "overview" ? "page" : undefined}
              onClick={() => overview()}
            >
              <span>Overview</span>
            </button>
            <button
              onClick={() =>
                last ? openStep(last, true) : openStep(chapterSteps[0])
              }
            >
              <span>{last ? "My place" : "Begin"}</span>
            </button>
            <button
              aria-current={route.view === "prayers" ? "page" : undefined}
              onClick={() =>
                navigate({ chapter: chapter.id, step: null, view: "prayers" })
              }
            >
              <span>Prayer apps</span>
            </button>
          </>
        )}
      </nav>
      <dialog
        ref={dialog}
        className={s.dialog}
        onCancel={() => setOutline(false)}
        onClick={(e) => {
          if (e.target === dialog.current) setOutline(false);
        }}
      >
        <div className={s.dialogInner}>
          <header>
            <div>
              <span className={s.eyebrow}>Your retreat</span>
              <h2>Choose a section</h2>
            </div>
            <button
              aria-label="Close sections"
              onClick={() => setOutline(false)}
            >
              Close
            </button>
          </header>
          <p>
            Move freely through the retreat. Your saved place is a bookmark, not
            a measure of prayer.
          </p>
          {chapters.map((c) => (
            <details key={c.id} open={c.id === chapter.id}>
              <summary>
                {c.label}
                <span>{c.subtitle}</span>
              </summary>
              <button
                className={s.outlineOverview}
                onClick={() => overview(c.id)}
              >
                View {c.label} overview →
              </button>
              {steps
                .filter((x) => x.chapter === c.id)
                .map((step) => (
                  <button
                    key={step.id}
                    className={s.outlineStep}
                    aria-current={step.id === active?.id ? "step" : undefined}
                    onClick={() =>
                      openStep(step, step.id === progress.lastStep)
                    }
                  >
                    <span>{step.title}</span>
                    <small>
                      {step.period}
                      {step.optional ? " · Optional" : ""}
                    </small>
                    {step.id === progress.lastStep && (
                      <span className={s.bookmark}>Saved place</span>
                    )}
                  </button>
                ))}
            </details>
          ))}
          <p className={s.quiet}>
            Your position, text size, and intentions are saved only in this browser. Intentions are not synchronized or sent to a server. Examination answers are not stored by the retreat.
          </p>
        </div>
      </dialog>
    </div>
  );
}


