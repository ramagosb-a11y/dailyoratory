"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function DailyPrayerActions({ prayerText }: { prayerText: string }) {
  const [copied, setCopied] = useState(false);

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(prayerText);
      trackEvent("prayer_copy", {
        page_path: "/pray/today",
        prayer_type: "daily-liturgical-prayer",
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <button type="button" onClick={copyPrayer} className="btn liturgical-button focus-ring justify-center">
        {copied ? "Prayer copied" : "Copy Prayer"}
      </button>
      <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
        Print Prayer
      </button>
    </div>
  );
}
