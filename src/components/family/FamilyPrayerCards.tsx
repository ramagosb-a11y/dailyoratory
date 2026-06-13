"use client";

import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { getFamilyPrayers } from "@/lib/family";
import { trackEvent } from "@/lib/analytics";

export function FamilyPrayerCards() {
  const prayers = getFamilyPrayers();

  async function copyPrayer(title: string, body: string, id: string) {
    await navigator.clipboard.writeText(body);
    trackEvent("family_prayer_copy", { page_path: "/family", prayer_title: title, prayer_id: id });
  }

  return (
    <section>
      <SectionHeader
        eyebrow="Prayer cards"
        title="Family Prayer Cards"
        summary="Short original prayers for homes trying to stay close to Christ with mercy, courage, and peace."
      />
      <div className="mt-7 grid gap-4 xl:grid-cols-3">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            eyebrow={prayer.whenToPray}
            title={prayer.title}
            prayer={prayer.body}
            onCopy={async (body) => copyPrayer(prayer.title, body, prayer.id)}
          />
        ))}
      </div>
    </section>
  );
}
