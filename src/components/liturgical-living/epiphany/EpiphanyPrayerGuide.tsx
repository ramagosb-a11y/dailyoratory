"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function EpiphanyPrayerGuide({ prayerText }: { prayerText: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prayerText);
      trackEvent("epiphany_prayer_copy", { section: "epiphany-prayer-guide" });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="epiphany-prayer-guide" className="card-parchment scroll-mt-24 p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Epiphany Prayer Guide</h2>
      <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
        <li>Light a candle.</li>
        <li>Read Matthew 2:1–12.</li>
        <li>Ask Jesus to reveal His light in your home.</li>
        <li>Reflect on the gifts of the Magi.</li>
        <li>Offer your own gift to Christ.</li>
        <li>Pray for your home and family.</li>
        <li>End by asking to return by a new road.</li>
      </ol>
      <div className="dashboard-card mt-6 p-6 sm:p-8">
        <pre className="daily-prayer-readable whitespace-pre-wrap text-lg leading-9 text-navy">{prayerText}</pre>
        <div className="mt-6">
          <button type="button" onClick={handleCopy} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            {copied ? "Copied" : "Copy Prayer"}
          </button>
        </div>
      </div>
    </section>
  );
}
