"use client";

import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { formatAngelPrayerForCopy, getAngelPrayers } from "@/lib/angels";
import { trackEvent } from "@/lib/analytics";

export function AngelPrayerCards() {
  const prayers = getAngelPrayers();

  async function copyPrayer(id: string, title: string, body: string) {
    await navigator.clipboard.writeText(formatAngelPrayerForCopy({ title, body }));
    trackEvent("angels_prayer_copy", { prayer_slug: id, page_path: "/angels" });
  }

  return (
    <section>
      <SectionHeader eyebrow="Prayer" title="Prayers with the Holy Angels" />
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            title={prayer.title}
            prayer={prayer.body}
            onCopy={async (body) => copyPrayer(prayer.id, prayer.title, body)}
          />
        ))}
      </div>
    </section>
  );
}
