"use client";

import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { trackEvent } from "@/lib/analytics";
import { formatSacramentalPrayerForCopy, getSacramentalPrayers } from "@/lib/sacramentals";

export function SacramentalPrayerCards() {
  const prayers = getSacramentalPrayers();

  async function copyPrayer(id: string) {
    const prayer = prayers.find((item) => item.id === id);
    if (!prayer) return;

    await navigator.clipboard.writeText(formatSacramentalPrayerForCopy(prayer));
    trackEvent("sacramental_prayer_copy", { item_slug: prayer.slug, category: prayer.category, source: "/sacramentals" });
  }

  return (
    <section>
      <SectionHeader eyebrow="Prayer" title="Prayers for Using Sacramentals" />
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            eyebrow={prayer.whenToPray}
            title={prayer.title}
            prayer={prayer.body}
            onCopy={async () => copyPrayer(prayer.id)}
          />
        ))}
      </div>
    </section>
  );
}
