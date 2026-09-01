"use client";

import Image from "next/image";
import Link from "next/link";
import { KeyboardEvent, useRef, useState } from "react";

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
    <div aria-hidden="true" className="relative z-10 mx-3 -mt-5 h-10 sm:mx-6 sm:h-12">
      <div className="absolute inset-x-3 top-1 h-3 rounded-t-[0.7rem] border border-[#4b2811] bg-[#5a3015] shadow-[inset_0_2px_0_rgba(255,235,181,0.38),0_3px_5px_rgba(50,25,10,0.36)]" />
      <div
        className="absolute inset-x-0 top-3 h-6 rounded-b-[0.7rem] border border-[#44210c] shadow-[inset_0_2px_0_rgba(255,226,164,0.45),inset_0_-4px_0_rgba(52,24,8,0.45),0_5px_7px_rgba(50,25,10,0.35)] sm:h-7"
        style={{
          backgroundImage:
            "repeating-linear-gradient(87deg, rgba(255,222,151,0.14) 0 2px, transparent 2px 17px), repeating-linear-gradient(2deg, transparent 0 8px, rgba(54,25,9,0.26) 9px 10px, transparent 11px 18px), linear-gradient(180deg, #b77b38 0%, #875020 35%, #633315 72%, #3d1d0b 100%)",
        }}
      />
      <div className="absolute inset-x-5 top-5 h-px bg-[#f3cc82]/50 sm:top-6" />
    </div>
  );
}

export function LitanyPrayerShelf({ litanies }: LitanyPrayerShelfProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!litanies.length) return null;

  const scrollToLitany = (index: number) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];
    if (!rail || !card) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollTo({
      left: card.offsetLeft - Math.max(0, (rail.clientWidth - card.clientWidth) / 2),
      behavior: reduceMotion ? "auto" : "smooth",
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
        className="overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:thin]"
        onKeyDown={handleKeyDown}
        onScroll={updateActiveLitany}
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        <div className="flex w-max min-w-full snap-x snap-mandatory gap-4 px-5 pb-7 pt-7 sm:gap-6 sm:px-8 sm:pb-9 sm:pt-9">
          {litanies.map((litany, index) => (
            <div
              aria-current={index === activeIndex ? "true" : undefined}
              className="w-[81vw] max-w-[23rem] shrink-0 snap-center sm:w-[22rem] lg:w-[23rem]"
              key={litany.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
            >
              <article
                className="h-full overflow-hidden rounded-[1.35rem] border bg-ivory shadow-oratory"
                style={{ borderColor: index === activeIndex ? litany.accent : litany.border }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
                  <Image
                    alt={litany.imageAlt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 640px) 81vw, (max-width: 1024px) 22rem, 23rem"
                    src={litany.image}
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-ivory/70 bg-navy/90 px-4 py-3 text-ivory shadow-hairline">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold-soft">Contemplative litany</p>
                    <h3 className="font-display mt-1 text-2xl font-semibold leading-tight">{litany.title}</h3>
                  </div>
                </div>
                <div className="flex h-[13.5rem] flex-col p-5">
                  <p className="text-sm font-semibold text-burgundy">{litany.subtitle}</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{litany.shortDescription}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy" style={{ borderColor: litany.border }}>
                      {litany.movementsCount} movements
                    </span>
                    <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-4 text-sm font-bold text-ivory transition hover:bg-navy-soft" href={litany.href}>
                      Begin prayer
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <WoodenPrayerShelf />
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
