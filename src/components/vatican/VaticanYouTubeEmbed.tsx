"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function VaticanYouTubeEmbed({
  title,
  embedUrl,
  description,
  section,
}: {
  title: string;
  embedUrl?: string;
  description: string;
  section: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (!embedUrl) {
    return (
      <div className="card-parchment flex aspect-video items-center justify-center p-6 text-center text-sm leading-7 text-muted">
        The live embed is not available right now. Use the official buttons below to watch from the source.
      </div>
    );
  }

  return (
    <div className="card-parchment overflow-hidden p-4">
      <div className="aspect-video w-full overflow-hidden rounded-md border border-stone bg-stone/20">
        {loaded ? (
          <iframe
            title={title}
            src={embedUrl}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-2xl font-semibold text-navy">{title}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{description}</p>
            <button
              type="button"
              onClick={() => {
                setLoaded(true);
                trackEvent("vatican_video_play", { page_path: "/vatican", section, video_title: title });
              }}
              className="btn liturgical-button focus-ring mt-5"
            >
              Load official stream
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
