"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const nightPrayerImage = "/images/night-prayer/guardian-angel-protection-girl.png";

const nightPrayers = [
  {
    id: "protection-during-sleep",
    stage: "Protection",
    title: "Prayer for Protection During Sleep",
    text: `Lord Jesus Christ,
I place myself entirely under Thy protection this night.

From this moment until I awaken, while I sleep and throughout all my dreams, guard me from every influence, temptation, oppression, or disturbance of the evil one.

If any evil spirit should attempt to afflict me, I ask Thee, Lord Jesus, by Thy sovereign authority, to rebuke and punish it according to Thy holy will. Let every attempt against me become an occasion for the enemy’s defeat and for the greater glory of Thy Holy Name.

Permit no evil spirit to frighten me, deceive me, disturb my sleep, enter my dreams, or retaliate against me or against anyone whom I love.

Cover me with Thy Precious Blood. Surround me with Thy holy angels, especially my Guardian Angel and Saint Michael the Archangel. May the Blessed Virgin Mary, Thy Immaculate Mother, keep me beneath her mantle.

Grant me peaceful sleep, purity of mind, and complete trust in Thee.

Jesus Christ is my Lord, my refuge, and my defender.
Into Thy hands, O Lord, I commend my spirit.`,
  },
  {
    id: "our-father",
    stage: "Surrender",
    title: "Our Father",
    text: `Our Father, who art in heaven,
hallowed be Thy name;
Thy kingdom come;
Thy will be done on earth as it is in heaven.

Give us this day our daily bread;
and forgive us our trespasses,
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil.

Amen.`,
  },
  {
    id: "saint-michael",
    stage: "Defense",
    title: "Saint Michael the Archangel",
    text: `Saint Michael the Archangel,
defend us in battle.
Be our protection against the wickedness and snares of the devil.

May God rebuke him, we humbly pray;
and do thou, O Prince of the heavenly hosts,
by the power of God,
cast into hell Satan and all the evil spirits
who prowl about the world seeking the ruin of souls.

Amen.

Jesus, I trust in Thee.

Into Thy hands, O Lord, I commend my spirit.`,
  },
] as const;

const stages = ["Christ", "Guardian Angel", "Our Lady", "Saint Michael"] as const;
type TouchPoint = { x: number; y: number } | null;

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NightPrayerExperience() {
  const [currentPrayer, setCurrentPrayer] = useState(-1);
  const touchStart = useRef<TouchPoint>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isIntro = currentPrayer === -1;
  const isComplete = currentPrayer === nightPrayers.length;
  const prayer = !isIntro && !isComplete ? nightPrayers[currentPrayer] : null;

  const moveTo = useCallback((index: number) => {
    setCurrentPrayer(Math.max(-1, Math.min(index, nightPrayers.length)));
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
      } else if (!isIntro && !isComplete && (event.key === "ArrowRight" || event.key === "PageDown")) {
        event.preventDefault();
        next();
      } else if (!isIntro && !isComplete && (event.key === "ArrowLeft" || event.key === "PageUp")) {
        event.preventDefault();
        previous();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isComplete, isIntro, moveTo, next, previous]);

  function handleTouchStart(event: React.TouchEvent) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (!touchStart.current || isIntro || isComplete) return;
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
      <div className="relative min-h-[100svh] overflow-hidden bg-[#050B14] text-[#FFFDF7]">
        <Image src={nightPrayerImage} alt="" fill priority sizes="100vw" className="object-cover object-[center_34%] opacity-65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.98)_0%,rgba(5,11,20,0.9)_45%,rgba(5,11,20,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(198,151,58,0.1),transparent_35%)]" />
        <div className="relative flex min-h-[100svh] flex-col">
          <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <span className="font-serif text-lg uppercase tracking-[0.2em] text-[#D6AA54]">Daily Oratory</span>
            <Link href="/" className="focus-ring rounded-md text-sm font-semibold text-[#FFFDF7]/80 hover:text-white">Exit Prayer</Link>
          </div>
          <div className="flex flex-1 items-center px-5 pb-16 pt-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#D6AA54]">A Catholic Prayer Before Sleep</p>
              <h1 ref={headingRef} tabIndex={-1} className="mt-5 font-serif text-5xl font-semibold leading-[0.94] outline-none sm:text-7xl lg:text-8xl">
                Night Prayer
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-xl leading-9 text-[#F3EAD8] sm:text-2xl">
                Place yourself beneath the protection of Christ. Entrust your sleep, your dreams, and those you love to His care.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F3EAD8]/75">
                {stages.map((stage) => <span key={stage} className="rounded-full border border-[#D6AA54]/35 bg-[#071426]/65 px-3 py-1.5">{stage}</span>)}
              </div>
              <button onClick={() => moveTo(0)} className="focus-ring mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#D6AA54] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#071426] shadow-xl transition hover:bg-[#E8C575]">
                Begin Night Prayer <Arrow />
              </button>
              <p className="mt-5 text-sm text-[#F3EAD8]/65">3 prayer movements · approximately 6 minutes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#050B14] px-5 text-center text-[#FFFDF7] sm:px-8">
        <Image src={nightPrayerImage} alt="" fill sizes="100vw" className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[#050B14]/80" />
        <div className="relative flex items-center justify-between py-5">
          <span className="font-serif text-lg uppercase tracking-[0.2em] text-[#D6AA54]">Daily Oratory</span>
          <Link href="/" className="focus-ring rounded-md text-sm font-semibold text-[#FFFDF7]/75 hover:text-white">Exit Prayer</Link>
        </div>
        <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center py-12">
          <div className="grid h-24 w-24 place-items-center rounded-full border border-[#D6AA54]/45 bg-[#0C1B30]/80 shadow-[0_0_55px_rgba(214,170,84,0.22)]">
            <span aria-hidden="true" className="font-serif text-5xl text-[#D6AA54]">✦</span>
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.32em] text-[#D6AA54]">The Night Is Entrusted</p>
          <h1 ref={headingRef} tabIndex={-1} className="mt-4 font-serif text-4xl font-semibold outline-none sm:text-6xl">Rest now in the peace of Christ.</h1>
          <p className="mt-6 max-w-xl font-serif text-xl italic leading-9 text-[#F3EAD8]/80">The Lord is your refuge. His angels keep watch, and the night rests in His hands.</p>
          <div className="mt-12 flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <Link href="/daily-examen/nightly" className="focus-ring inline-flex min-h-14 flex-1 items-center justify-center rounded-full border border-[#D8CDB9]/40 px-6 py-3 text-sm font-semibold">Pray the Examen</Link>
            <Link href="/" className="focus-ring inline-flex min-h-14 flex-1 items-center justify-center rounded-full bg-[#D6AA54] px-6 py-3 text-sm font-bold text-[#071426]">Return Home</Link>
          </div>
        </div>
      </div>
    );
  }

  if (!prayer) return null;

  return (
    <div className="min-h-[100svh] bg-[#071426] text-[#0D2038]" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <header className="sticky top-0 z-40 flex min-h-16 items-center justify-between border-b border-[#D6AA54]/25 bg-[#071426]/95 px-4 py-3 text-[#FFFDF7] backdrop-blur sm:px-6 lg:px-10">
        <span className="font-serif text-sm uppercase tracking-[0.18em] text-[#D6AA54] sm:text-lg">Daily Oratory</span>
        <Link href="/" className="focus-ring rounded-md px-2 py-2 text-sm font-semibold text-[#FFFDF7]/80 hover:text-white">Exit Prayer</Link>
      </header>

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-[1500px] lg:grid-cols-[minmax(0,0.88fr)_minmax(34rem,1.12fr)] lg:gap-7 lg:px-7 lg:py-7 xl:gap-10 xl:px-10">
        <section aria-label="Guardian Angel keeping watch during sleep" className="relative h-[38svh] min-h-72 overflow-hidden border-b border-[#D6AA54]/50 bg-[#050B14] lg:sticky lg:top-[5.75rem] lg:h-[calc(100svh-7.5rem)] lg:min-h-[38rem] lg:rounded-[2rem] lg:border-2 lg:shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(214,170,84,0.16),transparent_58%)]" />
          <Image src={nightPrayerImage} alt="A Guardian Angel keeping watch over a sleeping girl beneath a crucifix" fill priority sizes="(max-width:1023px) 100vw, 44vw" className="object-cover object-[center_30%] lg:object-contain lg:p-5 xl:p-7" />
          <div className="pointer-events-none absolute inset-2 rounded-[1.5rem] border border-[#D6AA54]/45 lg:inset-4" aria-hidden="true" />
        </section>

        <section className="relative z-10 -mt-7 flex min-h-[69svh] flex-col rounded-t-[2rem] border-t-2 border-[#D6AA54] bg-[#FFFDF7] shadow-[0_-18px_45px_rgba(0,0,0,0.24)] lg:mt-0 lg:min-h-[calc(100svh-7.5rem)] lg:rounded-[2rem] lg:border-2 lg:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
          <div className="pointer-events-none absolute inset-2 rounded-[1.55rem] border border-[#BD8A2F]/35" aria-hidden="true" />
          <article key={prayer.id} className="relative flex-1 px-6 pb-12 pt-9 sm:px-10 sm:pt-12 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9A6A1B]">Night Prayer · {prayer.stage}</p>
                <p className="text-sm font-semibold text-[#7A2533]">Prayer {currentPrayer + 1} of {nightPrayers.length}</p>
              </div>
              <div className="mt-5 flex gap-1.5" aria-label={`Prayer ${currentPrayer + 1} of ${nightPrayers.length}`}>
                {nightPrayers.map((item, index) => (
                  <span key={item.id} aria-hidden="true" className={`h-1.5 flex-1 rounded-full ${index === currentPrayer ? "bg-[#BD8A2F]" : index < currentPrayer ? "bg-[#0D2038]/35" : "bg-[#D8CDB9]"}`} />
                ))}
              </div>
              <h1 ref={headingRef} tabIndex={-1} className="mt-7 font-serif text-4xl font-semibold leading-[1.03] text-[#0D2038] outline-none sm:text-5xl xl:text-6xl">{prayer.title}</h1>
              <div className="my-7 flex items-center gap-3" aria-hidden="true"><span className="h-px flex-1 bg-[#D8CDB9]" /><span className="text-[#BD8A2F]">✦</span><span className="h-px flex-1 bg-[#D8CDB9]" /></div>
              <p className="whitespace-pre-line font-serif text-[1.3rem] leading-[1.72] text-[#172033] sm:text-[1.5rem] sm:leading-[1.78] xl:text-[1.6rem]">{prayer.text}</p>
              <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7655] lg:hidden">Swipe sideways or use the buttons below</p>
            </div>
          </article>

          <nav aria-label="Night prayer navigation" className="sticky bottom-0 z-30 border-t border-[#D8CDB9] bg-[#FFFDF7]/96 px-4 pt-3 shadow-[0_-12px_28px_rgba(13,32,56,0.1)] backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] sm:px-8 lg:rounded-b-[2rem] lg:px-10">
            <div className="mx-auto flex max-w-3xl gap-3">
              <button onClick={previous} className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#BD8A2F] px-4 py-3 text-sm font-semibold text-[#0D2038] hover:bg-[#F3EAD8] sm:min-h-14 sm:px-7"><Arrow direction="left" /> Previous</button>
              <button onClick={next} className="focus-ring inline-flex min-h-12 flex-[1.2] items-center justify-center gap-2 rounded-full bg-[#7A2533] px-4 py-3 text-sm font-bold text-white shadow-md hover:bg-[#65202B] sm:min-h-14 sm:px-8">
                {currentPrayer === nightPrayers.length - 1 ? "Entrust the Night" : "Continue"} <Arrow />
              </button>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}
