"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { getAdorationPrayers } from "@/lib/adoration";
import { trackEvent } from "@/lib/analytics";

export function AdorationPrayerCards() {
  const prayers = getAdorationPrayers();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyPrayer(id: string, title: string, body: string) {
    try {
      await navigator.clipboard.writeText(body);
      setCopiedId(id);
      trackEvent("adoration_prayer_copy", { page_path: "/adoration", prayer_title: title });
      window.setTimeout(() => setCopiedId(null), 2200);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Prayers"
        title="Prayers Before the Blessed Sacrament"
        summary="Short original prayers for beginning, surrender, Eucharistic love, and the homebound."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            eyebrow={prayer.whenToPray}
            title={prayer.title}
            prayer={prayer.body}
            copyLabel="Copy Prayer"
            copiedLabel="Prayer copied"
            onCopy={async (body) => copyPrayer(prayer.id, prayer.title, body)}
          />
        ))}
      </div>
    </section>
  );
}
