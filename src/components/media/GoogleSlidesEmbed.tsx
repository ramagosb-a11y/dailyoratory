"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function GoogleSlidesEmbed({
  title,
  embedUrl,
  slidesUrl,
}: {
  title: string;
  embedUrl?: string | null;
  slidesUrl?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (!embedUrl) {
    return (
      <div className="card-parchment p-6">
        <p className="text-sm leading-7 text-muted">
          This presentation opens in Google Slides. If a published embed URL is added later, it can also be displayed
          directly on the page.
        </p>
        {slidesUrl ? (
          <TrackedLink
            href={slidesUrl}
            external
            eventName="media_external_open"
            eventParams={{ page_path: "/media", media_type: "google-slides" }}
            className="btn btn-secondary focus-ring mt-5"
          >
            Open Slides
          </TrackedLink>
        ) : null}
      </div>
    );
  }

  return (
    <div className="card-parchment p-4">
      <div className="aspect-video overflow-hidden rounded-md border border-stone bg-navy/5">
        {loaded ? (
          <iframe
            title={title}
            src={embedUrl}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-2xl font-semibold text-navy">{title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Load the published slide deck when you are ready to view it here.
            </p>
            <button
              type="button"
              onClick={() => {
                setLoaded(true);
                trackEvent("media_embed_open", { page_path: typeof window !== "undefined" ? window.location.pathname : "/media", media_type: "google-slides" });
              }}
              className="btn liturgical-button focus-ring mt-5"
            >
              Load Slides
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
