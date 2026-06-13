"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatPrayerForPopeForCopy } from "@/lib/pope";
import { trackEvent } from "@/lib/analytics";

export function PrayerForHolyFather() {
  const [copied, setCopied] = useState(false);
  const prayer = formatPrayerForPopeForCopy();

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(prayer);
      setCopied(true);
      trackEvent("prayer_for_pope_copy", { page_path: "/pope", section: "prayer-for-holy-father" });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="pray-for-the-holy-father">
      <SectionHeader eyebrow="Prayer" title="Pray for the Holy Father" summary="For the Pope's intentions, many Catholics also pray one Our Father, one Hail Mary, and one Glory Be." />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 whitespace-pre-line text-muted">{prayer}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={copyPrayer} className="btn liturgical-button focus-ring justify-center">
            {copied ? "Prayer copied" : "Copy Prayer for the Pope"}
          </button>
          <a href="/indulgences" className="btn btn-secondary focus-ring text-center">
            Learn About Indulgences
          </a>
        </div>
      </div>
    </section>
  );
}
