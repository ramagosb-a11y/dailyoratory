"use client";

import { useState } from "react";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { emergencyPrayers } from "@/data/sacramentalEmergency";
import { trackEvent } from "@/lib/analytics";

export function PrayerIfPriestCannotArrive() {
  const mainPrayer = emergencyPrayers.find((prayer) => !prayer.isShort)!;
  const shortPrayers = emergencyPrayers.filter((prayer) => prayer.isShort);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyChip(text: string, id: string) {
    await navigator.clipboard.writeText(text);
    trackEvent("sacramental_emergency_prayer_copy", { item: id });
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 1600);
  }

  return (
    <section id="pray-now" className="scroll-mt-28">
      <div className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What To Pray If a Priest Cannot Arrive</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          If a priest cannot arrive in time, do not despair. God is merciful. Pray calmly with the person, help them turn toward Jesus,
          and entrust them to the Father&apos;s love.
        </p>
        <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Make the Sign of the Cross.</li>
          <li>Speak calmly.</li>
          <li>Encourage trust in Jesus.</li>
          <li>Pray short prayers slowly.</li>
          <li>Help the person make an act of contrition if they are able.</li>
          <li>Invoke Mary and Saint Joseph.</li>
          <li>Continue praying peacefully.</li>
        </ol>
      </div>
      <div className="mt-6">
        <PrayerCard
          eyebrow="Prayer with a dying person"
          title={mainPrayer.title}
          prayer={mainPrayer.prayer}
          copyLabel="Copy Prayer"
          copiedLabel="Prayer copied."
          onCopy={async (text) => {
            await navigator.clipboard.writeText(text);
            trackEvent("sacramental_emergency_prayer_copy", { item: mainPrayer.id });
          }}
        />
      </div>
      <div className="mt-6 card-parchment p-6 sm:p-8">
        <h3 className="font-display text-3xl font-semibold text-navy">Short Prayers</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {shortPrayers.map((prayer) => (
            <button
              key={prayer.id}
              type="button"
              onClick={() => copyChip(prayer.prayer, prayer.id)}
              className="focus-ring rounded-full border border-stone/70 bg-white/80 px-4 py-3 text-sm font-semibold text-navy transition hover:border-burgundy/40"
              aria-label={`Copy short prayer: ${prayer.title}`}
            >
              {copiedId === prayer.id ? "Copied." : prayer.prayer}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
