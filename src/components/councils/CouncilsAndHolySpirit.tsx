"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatCouncilPrayerForCopy } from "@/lib/councils";

export function CouncilsAndHolySpirit() {
  const [copied, setCopied] = useState(false);

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(formatCouncilPrayerForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Prayer"
        title="The Holy Spirit and the Councils"
        summary="Catholics believe the Holy Spirit guides the Church in preserving and handing on the faith. Councils are moments when the Church prays, listens, debates, clarifies, and seeks to remain faithful to Christ."
      />
      <div className="card-parchment mt-7 p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Prayer for Understanding the Councils</p>
        <div className="mt-4 whitespace-pre-line text-sm leading-8 text-muted">{formatCouncilPrayerForCopy()}</div>
        <button type="button" onClick={copyPrayer} className="btn liturgical-button focus-ring mt-6 justify-center">
          {copied ? "Prayer copied" : "Copy Prayer"}
        </button>
      </div>
    </section>
  );
}
