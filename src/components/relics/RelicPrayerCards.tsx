"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { formatRelicPrayerForCopy, getRelicPrayers } from "@/lib/relics";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function RelicPrayerCards() {
  const prayers = getRelicPrayers();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyPrayer(id: string) {
    const prayer = prayers.find((item) => item.id === id);
    if (!prayer) return;

    try {
      await navigator.clipboard.writeText(formatRelicPrayerForCopy(prayer));
      trackEvent("relic_prayer_copy", { item_slug: prayer.slug, category: prayer.category, destination: "/relics" });
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2200);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <section>
      <SectionHeader eyebrow="Prayer" title="Prayers for Venerating Relics" />
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            title={prayer.title}
            prayer={prayer.body}
            copiedLabel={copiedId === prayer.id ? "Prayer copied" : "Prayer copied"}
            onCopy={async () => copyPrayer(prayer.id)}
          />
        ))}
      </div>
    </section>
  );
}
