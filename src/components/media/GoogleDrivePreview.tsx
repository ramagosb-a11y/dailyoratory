"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function GoogleDrivePreview({
  title,
  previewUrl,
  sourceUrl,
}: {
  title: string;
  previewUrl?: string | null;
  sourceUrl?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="card-parchment p-4">
      {previewUrl ? (
        <div className="aspect-video overflow-hidden rounded-md border border-stone bg-navy/5">
          {loaded ? (
            <iframe
              title={title}
              src={previewUrl}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <p className="font-display text-2xl font-semibold text-navy">{title}</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Load the Google Drive preview when you are ready to view this resource.
              </p>
              <button
                type="button"
                onClick={() => {
                  setLoaded(true);
                  trackEvent("media_embed_open", { page_path: typeof window !== "undefined" ? window.location.pathname : "/media", media_type: "google-drive" });
                }}
                className="btn liturgical-button focus-ring mt-5"
              >
                Load Preview
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-md border border-stone bg-ivory p-6 text-sm leading-7 text-muted">
          This file does not currently have a public preview URL available.
        </div>
      )}
      {sourceUrl ? (
        <TrackedLink
          href={sourceUrl}
          external
          eventName="media_external_open"
          eventParams={{ page_path: "/media", media_type: "google-drive" }}
          className="btn btn-secondary focus-ring mt-5"
        >
          Open in Google Drive
        </TrackedLink>
      ) : null}
    </div>
  );
}
