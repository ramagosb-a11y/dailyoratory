"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { getOciaPrayerCards } from "@/lib/ocia";

export function OciaPrayerCards() {
  const cards = getOciaPrayerCards();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyPrayer(id: string, prayer: string) {
    try {
      await navigator.clipboard.writeText(prayer);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2200);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Prayer"
        title="Prayer for Someone Exploring the Catholic Faith"
        summary="Use these simple prayers when you want courage, peace, and openness before taking the next step."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {cards.map((card) => (
          <article key={card.id} className="card-parchment p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted">{card.prayer}</p>
            <button
              type="button"
              onClick={() => copyPrayer(card.id, card.prayer)}
              className="btn btn-secondary focus-ring mt-5"
            >
              {copiedId === card.id ? "Prayer copied" : "Copy Prayer"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
