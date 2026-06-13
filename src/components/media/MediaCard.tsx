"use client";

import Link from "next/link";
import { useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getMediaThumbnail, getMediaTypeLabel } from "@/lib/media";
import type { MediaCategory, MediaItem } from "@/types/media";

export function MediaCard({
  item,
  category,
  actionLabel,
}: {
  item: MediaItem;
  category?: MediaCategory;
  actionLabel?: string;
}) {
  const resolvedThumbnail = getMediaThumbnail(item);
  const [thumbnail, setThumbnail] = useState(resolvedThumbnail);

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="aspect-video w-full overflow-hidden border-b border-stone bg-navy/5">
        {thumbnail ? (
          // next/image is not used here because the library needs to accept public third-party image URLs without
          // tightening remote image config on each new source.
          <img
            src={thumbnail}
            alt={item.altText}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
            loading="lazy"
            onError={() => setThumbnail("/images/chapel-library-hero.png")}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-parchment px-6 text-center">
            <span className="text-sm font-semibold text-muted">{getMediaTypeLabel(item.mediaType)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="season-pill liturgical-chip">{getMediaTypeLabel(item.mediaType)}</span>
          {category ? <span className="season-pill liturgical-chip">{category.title}</span> : null}
        </div>
        <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
          <TrackedLink
            href={`/media/${item.slug}`}
            className="focus-ring rounded-sm"
            eventName="media_card_click"
            eventParams={{ page_path: "/media", media_slug: item.slug, media_type: item.mediaType }}
          >
            {item.title}
          </TrackedLink>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{item.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={`${item.id}-${tag}`}
              className="liturgical-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="liturgical-accent-text mt-4 text-xs font-semibold uppercase tracking-[0.14em]">
          {item.creator} {" • "} {item.sourceName}
        </p>
        <div className="mt-5">
          <Link href={`/media/${item.slug}`} className="text-link focus-ring text-sm">
            {actionLabel ?? getDefaultActionLabel(item)}
          </Link>
        </div>
      </div>
    </article>
  );
}

function getDefaultActionLabel(item: MediaItem) {
  switch (item.mediaType) {
    case "youtube-video":
      return "Watch";
    case "youtube-playlist":
      return "View Playlist";
    case "google-slides":
      return "View Slides";
    case "google-drive-file":
    case "pdf":
      return "Open Resource";
    default:
      return "View Details";
  }
}
