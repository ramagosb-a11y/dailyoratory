"use client";

import Image from "next/image";
import Link from "next/link";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

export type LitanyShelfItem = {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  movementsCount: number;
  href: string;
  image: string;
  imageAlt: string;
  accent: string;
  border: string;
};

type LitanyPrayerShelfProps = {
  litanies: LitanyShelfItem[];
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function WoodenPrayerShelf() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative z-10 h-24 w-full sm:h-28">
      <Image
        alt=""
        className="object-cover object-[center_65%]"
        fill
        sizes="100vw"
        src="/images/litanies/carved-walnut-prayer-shelf.png"
      />
    </div>
  );
}

export function LitanyPrayerShelf({ litanies }: LitanyPrayerShelfProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hasCenteredInitially = useRef(false);
  const [activeIndex, setActiveIndex] = useState(() => Math.floor(litanies.length / 2));

  const scrollToLitany = (index: number, behavior?: ScrollBehavior) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];
    if (!rail || !card) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollTo({
      left: card.offsetLeft - Math.max(0, (rail.clientWidth - card.clientWidth) / 2),
      behavior: behavior ?? (reduceMotion ? "auto" : "smooth"),
    });
    setActiveIndex(index);
  };

  const updateActiveLitany = () => {
    const rail = railRef.current;
    if (!rail) return;

    const railCenter = rail.scrollLeft + rail.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - railCenter);
      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });

    setActiveIndex(nearestIndex);
  };

  useEffect(() => {
    if (!litanies.length || hasCenteredInitially.current) return;

    const animationFrame = window.requestAnimationFrame(() => {
      scrollToLitany(Math.floor(litanies.length / 2), "auto");
      hasCenteredInitially.current = true;
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [litanies.length]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" && activeIndex < litanies.length - 1) {
      event.preventDefault();
      scrollToLitany(activeIndex + 1);
    }
    if (event.key === "ArrowLeft" && activeIndex > 0) {
      event.preventDefault();
      scrollToLitany(activeIndex - 1);
    }
  };

  if (!litanies.length) return null;

  const activeLitany = litanies[activeIndex];

  return (
    <section
      aria-labelledby="contemplative-litanies-heading"
      className="card-parchment overflow-hidden p-0"
      id="contemplative-litanies"
    >
      <div className="border-b border-stone bg-ivory/75 px-6 py-7 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Choose a litany</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl" id="contemplative-litanies-heading">
              A shelf of prayer cards
            </h2>
            <p className="daily-readable-muted mt-4 max-w-xl text-base leading-8 text-muted">
              Move gently through each litany, then begin when one meets the need of your heart.
            </p>
          </div>
          <p aria-live="polite" className="text-sm font-semibold tracking-wide text-navy sm:text-right">
            {activeIndex + 1} of {litanies.length} · {activeLitany.title}
          </p>
        </div>
      </div>

      <div
        aria-label="Contemplative litany prayer cards"
        className="overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onKeyDown={handleKeyDown}
        onScroll={updateActiveLitany}
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        <div className="w-max min-w-full">
          <div className="flex snap-x snap-mandatory gap-4 px-5 pb-0 pt-7 sm:gap-6 sm:px-8 sm:pt-9">
            <div aria-hidden="true" className="w-[14vw] shrink-0 sm:hidden" />
            {litanies.map((litany, index) => (
              <div
                aria-current={index === activeIndex ? "true" : undefined}
                className="w-[72vw] max-w-[17rem] shrink-0 snap-center sm:w-[15.5rem] lg:w-[17rem]"
                key={litany.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <article
                  className={`overflow-hidden rounded-[1.25rem] border-[5px] bg-[#3b1c0b] p-1.5 shadow-[0_12px_22px_rgba(30,16,7,0.32)] ring-1 ring-[#d5a95c] transition-transform duration-300 hover:-translate-y-1 ${index === activeIndex ? "ring-2 ring-gold" : ""}`}
                  style={{ borderColor: "#6d401b" }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[0.82rem] border border-[#d8ae63]/70 bg-parchment shadow-[inset_0_0_0_2px_rgba(44,20,6,0.55)]">
                    <Image
                      alt={litany.imageAlt}
                      className="object-cover"
                      fill
                      sizes="(max-width: 640px) 72vw, (max-width: 1024px) 15.5rem, 17rem"
                      src={litany.image}
                    />
                    <div className="absolute inset-x-3 bottom-3 rounded-xl border border-ivory/70 bg-navy/95 px-4 py-3 text-ivory shadow-hairline">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold-soft">Contemplative litany</p>
                      <h3 className="font-display mt-1 text-xl font-semibold leading-tight">{litany.title}</h3>
                    </div>
                  </div>
                </article>
              </div>
            ))}
            <div aria-hidden="true" className="w-[14vw] shrink-0 sm:hidden" />
          </div>
          <WoodenPrayerShelf />
        </div>
      </div>

      <div className="border-y border-stone bg-ivory/70 px-6 py-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Now on the shelf</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl">{activeLitany.title}</h3>
          <p className="mt-2 text-sm font-semibold text-burgundy">{activeLitany.subtitle}</p>
          <p className="daily-readable-muted mt-3 max-w-2xl text-base leading-7 text-muted">{activeLitany.shortDescription}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy" style={{ borderColor: activeLitany.border }}>
              {activeLitany.movementsCount} movements
            </span>
            <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 text-sm font-bold text-ivory transition hover:bg-navy-soft" href={activeLitany.href}>
              Begin prayer
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-stone bg-ivory/80 px-5 py-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div aria-label="Select a litany" className="flex flex-wrap items-center justify-center gap-2 sm:justify-start" role="group">
            {litanies.map((litany, index) => (
              <button
                aria-current={index === activeIndex ? "true" : undefined}
                aria-label={`Show ${litany.title}`}
                className={`focus-ring h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-gold" : "w-2.5 bg-stone hover:bg-gold-muted"}`}
                key={litany.id}
                onClick={() => scrollToLitany(index)}
                type="button"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
            <button
              aria-label="Show previous litany"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-stone bg-ivory px-4 text-sm font-bold text-navy transition hover:border-gold disabled:cursor-not-allowed disabled:opacity-45"
              disabled={activeIndex === 0}
              onClick={() => scrollToLitany(activeIndex - 1)}
              type="button"
            >
              <ArrowIcon direction="left" />
              Previous
            </button>
            <button
              aria-label="Show next litany"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy px-4 text-sm font-bold text-ivory transition hover:bg-navy-soft disabled:cursor-not-allowed disabled:opacity-45"
              disabled={activeIndex === litanies.length - 1}
              onClick={() => scrollToLitany(activeIndex + 1)}
              type="button"
            >
              Next litany
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
