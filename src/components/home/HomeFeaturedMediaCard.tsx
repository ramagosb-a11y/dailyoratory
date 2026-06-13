"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export type HomeFeaturedMediaCardItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  mediaTypeLabel: string;
  categoryLabel: string;
  thumbnailUrl?: string;
  altText: string;
  href: string;
  external: boolean;
  ctaLabel: string;
  mediaType: string;
};

export function HomeFeaturedMediaCard({ item }: { item: HomeFeaturedMediaCardItem }) {
  const thumbnailOnly = (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-stone bg-navy/5 sm:hidden">
      {item.thumbnailUrl ? (
        <img
          src={item.thumbnailUrl}
          alt={item.altText}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-parchment px-6 text-center">
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory text-lg text-gold"
          >
            â–¶
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">Media</span>
        </div>
      )}
    </div>
  );

  const cardBody = (
    <>
      {thumbnailOnly}
      <div className="hidden aspect-video w-full overflow-hidden border-b border-stone bg-navy/5 sm:block">
        {item.thumbnailUrl ? (
          <img
            src={item.thumbnailUrl}
            alt={item.altText}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-parchment px-6 text-center">
            <span
              aria-hidden
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory text-lg text-gold"
            >
              ▶
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">Media</span>
          </div>
        )}
      </div>
      <div className="hidden flex-1 flex-col p-5 sm:flex">
        <div className="flex flex-wrap items-center gap-2">
          <span className="season-pill">{item.mediaTypeLabel}</span>
          <span className="season-pill border-gold text-gold">{item.categoryLabel}</span>
        </div>
        <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">{item.title}</h3>
        <p className="mt-3 flex-1 overflow-hidden text-sm leading-7 text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {item.description}
        </p>
        <div className="mt-5">
          <span className="text-link focus-ring text-sm">{item.ctaLabel}</span>
        </div>
      </div>
    </>
  );

  function handleClick() {
    trackEvent("featured_media_click", {
      page_path: "/",
      item_slug: item.slug,
      category: item.categoryLabel,
      media_type: item.mediaType,
      destination: item.href,
    });
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory sm:card sm:flex sm:h-full sm:flex-col sm:overflow-hidden"
        onClick={handleClick}
      >
        {cardBody}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory sm:card sm:flex sm:h-full sm:flex-col sm:overflow-hidden"
      onClick={handleClick}
    >
      {cardBody}
    </Link>
  );
}
