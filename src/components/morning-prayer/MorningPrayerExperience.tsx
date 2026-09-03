"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { morningPrayers } from "@/data/morningPrayer";

const stages = ["Presence", "Offering", "Purification", "Communion", "Protection", "Intercession"] as const;

type TouchPoint = { x: number; y: number } | null;

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MorningPrayerExperience() {
  const [currentPrayer, setCurrentPrayer] = useState(-1);
  const [silenceSeconds, setSilenceSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const touchStart = useRef<TouchPoint>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isIntro = currentPrayer === -1;
  const isSilence = currentPrayer === morningPrayers.length;
  const prayer = !isIntro && !isSilence ? morningPrayers[currentPrayer] : null;

  const moveTo = useCallback((index: number) => {
    setCurrentPrayer(Math.max(-1, Math.min(index, morningPrayers.length)));
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
      if (isIntro && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        moveTo(0);
      } else if (!isIntro && !isSilence && (event.key === "ArrowRight" || event.key === "PageDown")) {
        event.preventDefault();
        next();
      } else if (!isIntro && !isSilence && (event.key === "ArrowLeft" || event.key === "PageUp")) {
        event.preventDefault();
        previous();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isIntro, isSilence, moveTo, next, previous]);

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

  function handleTouchStart(event: React.TouchEvent) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (!touchStart.current || isIntro || isSilence) return;
    const touch = event.changedTouches[0];
    const deltaX = touchStart.current.x - touch.clientX;
    const deltaY = touchStart.current.y - touch.clientY;
    touchStart.current = null;

    if (Math.abs(deltaX) < 72 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) return;
    if (deltaX > 0) next();
    else previous();
  }

  if (isIntro) {
    return (
      <div className="relative min-h-[100svh] overflow-hidden bg-[#0D2038] text-[#FFFDF7]">
        <Image
          src="/images/morning-prayers/sign-of-the-cross.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,32,56,0.98)_0%,rgba(13,32,56,0.84)_52%,rgba(13,32,56,0.5)_100%)]" />
        <div className="relative flex min-h-[100svh] flex-col">
          <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <span className="font-serif text-lg uppercase tracking-[0.2em] text-[#D6AA54]">Daily Oratory</span>
            <Link href="/begin-in-prayer" className="focus-ring rounded-md text-sm font-semibold text-[#FFFDF7]/80 hover:text-white">
              Exit Prayer
            </Link>
          </div>
          <main className="flex flex-1 items-center px-5 pb-16 pt-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#D6AA54]">A Daily Act of Consecration</p>
              <h1 ref={headingRef} tabIndex={-1} className="mt-5 font-serif text-5xl font-semibold leading-[0.95] outline-none sm:text-7xl lg:text-8xl">
                Morning Prayer
              </h1>
              <p className="mt-6 max-w-xl font-serif text-xl leading-9 text-[#F3EAD8] sm:text-2xl">
                Enter God’s presence. Offer the day. Receive His grace. Place those you love in His hands.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F3EAD8]/75">
                {stages.map((stage) => <span key={stage} className="rounded-full border border-[#D6AA54]/35 bg-[#0D2038]/55 px-3 py-1.5">{stage}</span>)}
              </div>
              <button onClick={() => moveTo(0)} className="focus-ring mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#BD8A2F] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#0D2038] shadow-xl transition hover:bg-[#D6AA54]">
                Begin Morning Prayer <Arrow />
              </button>
              <p className="mt-5 text-sm text-[#F3EAD8]/65">12 prayers · approximately 10 minutes</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (isSilence) {
    const minutes = Math.floor(silenceSeconds / 60);
    const seconds = silenceSeconds % 60;
    return (
      <div className="flex min-h-[100svh] flex-col bg-[#08182A] px-5 text-center text-[#FFFDF7] sm:px-8">
        <div className="flex items-center justify-between py-5">
          <span className="font-serif text-lg uppercase tracking-[0.2em] text-[#D6AA54]">Daily Oratory</span>
          <Link href="/begin-in-prayer" className="focus-ring rounded-md text-sm font-semibold text-[#FFFDF7]/75 hover:text-white">Exit Prayer</Link>
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
            <button onClick={() => moveTo(0)} className="focus-ring min-h-14 flex-1 rounded-full border border-[#D8CDB9]/40 px-6 py-3 text-sm font-semibold">Pray Again</button>
            <Link href="/begin-in-prayer" className="focus-ring inline-flex min-h-14 flex-1 items-center justify-center rounded-full bg-[#BD8A2F] px-6 py-3 text-sm font-bold text-[#0D2038]">Begin My Day</Link>
          </div>
        </main>
      </div>
    );
  }

  if (!prayer) return null;

  return (
    <div className="min-h-[100svh] bg-[#0D2038] text-[#0D2038]" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <header className="sticky top-0 z-40 flex min-h-16 items-center justify-between border-b border-[#BD8A2F]/25 bg-[#0D2038]/95 px-4 py-3 text-[#FFFDF7] backdrop-blur sm:px-6 lg:px-10">
        <span className="font-serif text-sm uppercase tracking-[0.18em] text-[#D6AA54] sm:text-lg">Daily Oratory</span>
        <Link href="/begin-in-prayer" className="focus-ring rounded-md px-2 py-2 text-sm font-semibold text-[#FFFDF7]/80 hover:text-white">Exit Prayer</Link>
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
              <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7655] lg:hidden">Swipe sideways or use the buttons below</p>
            </div>
          </article>

          <nav aria-label="Morning prayer navigation" className="sticky bottom-0 z-30 border-t border-[#D8CDB9] bg-[#FFFDF7]/96 px-4 pt-3 shadow-[0_-12px_28px_rgba(13,32,56,0.1)] backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] sm:px-8 lg:rounded-b-[2rem] lg:px-10">
            <div className="mx-auto flex max-w-3xl gap-3">
              <button onClick={previous} className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#BD8A2F] px-4 py-3 text-sm font-semibold text-[#0D2038] hover:bg-[#F3EAD8] sm:min-h-14 sm:px-7">
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
