"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function SaintPrayerMiniCard({
  prayer,
  className = "",
  pagePath,
  sourceSection,
  anchorId,
}: {
  prayer: string;
  className?: string;
  pagePath: string;
  sourceSection: string;
  anchorId?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(prayer);
      setCopied(true);
      trackEvent("saint_prayer_copy", {
        page_path: pagePath,
        source_section: sourceSection,
      });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div id={anchorId} className={`rounded-md border border-stone bg-ivory p-4 ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Short prayer</p>
      <p className="mt-3 text-sm leading-7 text-muted">{prayer}</p>
      <button type="button" onClick={copyPrayer} className="btn btn-secondary focus-ring mt-4">
        {copied ? "Prayer copied" : "Copy Prayer"}
      </button>
    </div>
  );
}
