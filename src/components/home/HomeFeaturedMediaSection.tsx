"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { HomeFeaturedMediaCard, type HomeFeaturedMediaCardItem } from "./HomeFeaturedMediaCard";

function getCardsPerView(width: number) {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function HomeFeaturedMediaSection({
  items,
  showHomiliesCta,
}: {
  items: HomeFeaturedMediaCardItem[];
  showHomiliesCta: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    function syncLayout() {
      setCardsPerView(getCardsPerView(window.innerWidth));
    }

    syncLayout();
    window.addEventListener("resize", syncLayout);
    return () => window.removeEventListener("resize", syncLayout);
  }, []);

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(items.length / Math.max(1, cardsPerView))),
    [items.length, cardsPerView],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    function handleScroll() {
      const currentScroller = scrollerRef.current;
      if (!currentScroller) return;
      const nextPage = Math.round(currentScroller.scrollLeft / Math.max(currentScroller.clientWidth, 1));
      setActivePage(Math.min(pageCount - 1, Math.max(0, nextPage)));
    }

    handleScroll();
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, [pageCount]);

  function scrollByDirection(direction: 1 | -1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({ left: direction * scroller.clientWidth, behavior: "smooth" });
    trackEvent(direction === 1 ? "featured_media_next" : "featured_media_previous", {
      page_path: "/",
      destination: "homepage-featured-media",
    });
  }

  function scrollToPage(page: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({ left: scroller.clientWidth * page, behavior: "smooth" });
    setActivePage(page);
  }

  if (!items.length) {
    return (
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="liturgical-home-section-muted p-6 sm:p-7">
          <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.14em]">Featured media</p>
          <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Watch and Learn
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            No featured media is available yet. Add approved featured items in the Media Library admin data.
          </p>
          <div className="mt-6">
            <Link
              href="/media"
              className="btn btn-liturgical focus-ring"
              onClick={() =>
                trackEvent("media_library_cta_click", {
                  page_path: "/",
                  destination: "/media",
                })
              }
            >
              Open Media Library
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <div className="liturgical-home-section-muted p-5 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.14em]">Featured media</p>
            <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Watch and Learn
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Featured videos, playlists, slides, and formation resources from the Daily Oratory Media Library.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/media"
              className="btn btn-liturgical focus-ring"
              onClick={() =>
                trackEvent("media_library_cta_click", {
                  page_path: "/",
                  destination: "/media",
                })
              }
            >
              Open Media Library
            </Link>
            {showHomiliesCta ? (
              <Link href="/homilies" className="btn btn-secondary focus-ring">
                View Homilies
              </Link>
            ) : null}
          </div>
        </div>

        <div className="liturgical-home-rule mt-6" aria-hidden="true" />

        <div className="mt-7 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="liturgical-home-chip flex h-11 w-11 items-center justify-center rounded-full text-lg text-navy transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Previous featured media"
              onClick={() => scrollByDirection(-1)}
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              className="liturgical-home-chip flex h-11 w-11 items-center justify-center rounded-full text-lg text-navy transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Next featured media"
              onClick={() => scrollByDirection(1)}
            >
              <span aria-hidden>›</span>
            </button>
          </div>
          <p className="text-sm font-semibold text-muted">
            {Math.min(activePage + 1, pageCount)} / {pageCount}
          </p>
        </div>

        <div
          ref={scrollerRef}
          className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-0 shrink-0 snap-start basis-[46%] sm:basis-[70%] md:basis-[calc(50%-0.625rem)] xl:basis-[calc(33.333%-0.875rem)]"
            >
              <HomeFeaturedMediaCard item={item} />
            </div>
          ))}
        </div>

        {pageCount > 1 ? (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => {
              const isActive = index === activePage;
              return (
                <button
                  key={`featured-media-page-${index}`}
                  type="button"
                  aria-label={`Go to featured media group ${index + 1}`}
                  aria-pressed={isActive}
                  onClick={() => scrollToPage(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    isActive ? "bg-[var(--liturgical-primary)]" : "bg-stone/60 hover:bg-stone"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
