"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function YouTubeEmbed({
  title,
  embedUrl,
  description,
}: {
  title: string;
  embedUrl: string;
  description: string;
}) {
  useEffect(() => {
    trackEvent("media_embed_open", {
      page_path: typeof window !== "undefined" ? window.location.pathname : "/media",
      media_type: "youtube",
    });
  }, []);

  return (
    <div className="card-parchment overflow-hidden p-4">
      <div className="aspect-video overflow-hidden rounded-md border border-stone bg-navy/5">
        <iframe
          title={title}
          src={embedUrl}
          className="h-full w-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
    </div>
  );
}
