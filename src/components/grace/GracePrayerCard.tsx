"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function GracePrayerCard({
  title,
  prayer,
  anchorId,
}: {
  title: string;
  prayer: string;
  anchorId?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prayer);
      trackEvent("grace_prayer_copy", { section: anchorId ?? title.toLowerCase().replace(/\s+/g, "-") });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id={anchorId} className="card-parchment scroll-mt-24 p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">{title}</h2>
      <div className="dashboard-card mt-6 p-6 sm:p-8">
        <pre className="daily-prayer-readable whitespace-pre-wrap text-lg leading-9 text-navy">{prayer}</pre>
        <div className="mt-6">
          <button type="button" onClick={handleCopy} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            {copied ? "Prayer copied." : "Copy Prayer"}
          </button>
        </div>
      </div>
    </section>
  );
}
