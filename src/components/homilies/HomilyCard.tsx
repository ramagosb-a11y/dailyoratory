"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { getHomilyActionLabel, getHomilyThumbnail } from "@/lib/homilies";
import type { HomilyItem } from "@/types/homilies";

export function HomilyCard({
  item,
  large = false,
}: {
  item: HomilyItem;
  large?: boolean;
}) {
  const href = `/media/${item.slug}`;

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className={`w-full overflow-hidden border-b border-stone bg-navy/5 ${large ? "aspect-[16/9]" : "aspect-video"}`}>
        <img
          src={getHomilyThumbnail(item)}
          alt={item.altText}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="season-pill">{formatType(item)}</span>
          <span className="season-pill border-gold text-gold">{item.homilyTopic || item.topic || "Homily"}</span>
          {item.liturgicalSeason ? <span className="season-pill">{item.liturgicalSeason}</span> : null}
        </div>
        <h2 className={`${large ? "text-4xl" : "text-3xl"} font-display mt-4 font-semibold leading-tight text-navy`}>
          <Link
            href={href}
            className="focus-ring rounded-sm"
            onClick={() =>
              trackEvent("homily_card_click", { homily_slug: item.slug, media_type: item.mediaType, page_path: "/homilies" })
            }
          >
            {item.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">{item.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag) => (
            <span key={`${item.id}-${tag}`} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
          <span>{item.creator}</span>
          <span>{item.sourceName}</span>
          {item.duration ? <span>{item.duration}</span> : null}
          {item.liturgicalDay ? <span>{item.liturgicalDay}</span> : null}
        </div>
        <div className="mt-5">
          <Link href={href} className="text-link focus-ring text-sm font-semibold">
            {getHomilyActionLabel(item)}
          </Link>
        </div>
      </div>
    </article>
  );
}

function formatType(item: HomilyItem) {
  if (item.audioUrl) return "Audio";
  return item.mediaType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
