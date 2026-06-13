"use client";

import { PrayerCard } from "@/components/ui/PrayerCard";
import { SectionHeader } from "@/components/section-header";
import { prophecySeriesPrayer } from "@/data/prophecySeries";
import { trackEvent } from "@/lib/analytics";

export function PrayerBeforeWatching() {
  return (
    <section className="mt-14">
      <SectionHeader
        eyebrow="Prayer"
        title="Prayer Before Watching"
        summary="Ask for light, peace, and discernment before each episode begins."
      />
      <div className="mt-7">
        <PrayerCard
          eyebrow="Prayer Before Watching"
          title="Come, Holy Spirit"
          prayer={prophecySeriesPrayer}
          note="Pray before each episode so the series leads you more deeply into Jesus Christ, prayer, and trust in God."
          onCopy={async (prayer) => {
            await navigator.clipboard.writeText(prayer);
            trackEvent("prophecy_series_prayer_copy", { section: "prayer-before-watching" });
          }}
        />
      </div>
    </section>
  );
}
