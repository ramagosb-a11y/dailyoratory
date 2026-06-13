"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { getNewsPrayerPrompts } from "@/lib/news";

export function PrayTheNews() {
  const prayerCards = getNewsPrayerPrompts().slice(0, 3);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function handleCopy(id: string, prayer: string) {
    try {
      await navigator.clipboard.writeText(prayer);
      setCopiedId(id);
      trackEvent("pray_the_news_copy", {
        prayer_id: id,
        page_path: "/news",
        section: "pray-the-news",
      });
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1800);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <section id="pray-the-news">
      <SectionHeader
        eyebrow="Pray the news"
        title="Turn Catholic news reading into intercession."
        summary="When headlines stir concern, let them become prayer for the Church, for those who suffer, and for your own heart."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {prayerCards.map((card) => (
          <article key={card.id} className="card-parchment liturgical-card-accent flex h-full flex-col p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted">{card.prayer}</p>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleCopy(card.id, card.prayer)}
                className="btn btn-secondary focus-ring"
              >
                Copy Prayer
              </button>
              {copiedId === card.id ? (
                <span className="text-sm font-semibold text-burgundy">Prayer copied</span>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
