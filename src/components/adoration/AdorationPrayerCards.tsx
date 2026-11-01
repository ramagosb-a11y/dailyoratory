"use client";

import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { getAdorationPrayers } from "@/lib/adoration";
import { trackEvent } from "@/lib/analytics";

export function AdorationPrayerCards() {
  const prayers = getAdorationPrayers();

  async function copyPrayer(title: string, body: string) {
    await navigator.clipboard.writeText(body);
    trackEvent("adoration_prayer_copy", { page_path: "/adoration", prayer_title: title });
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
            onCopy={async (body) => copyPrayer(prayer.title, body)}
          />
        ))}
      </div>
    </section>
  );
}
