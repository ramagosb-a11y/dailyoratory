"use client";

import { detachmentPrayer, indulgencePreparationPrayer } from "@/data/detachmentFromSin";
import { trackEvent } from "@/lib/analytics";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function DetachmentPrayerCards() {
  return (
    <section className="grid gap-5">
      <div id="prayer-for-detachment">
        <PrayerCard
          eyebrow="Prayer"
          title="Prayer for Complete Detachment from Sin"
          prayer={detachmentPrayer}
          copiedLabel="Prayer copied."
          onCopy={async (prayer) => {
            await navigator.clipboard.writeText(prayer);
            trackEvent("detachment_prayer_copy", { section: "prayer-for-detachment" });
          }}
        />
      </div>
      <div id="indulgence-preparation">
        <PrayerCard
          eyebrow="Prayer"
          title="Prayer Before Seeking a Plenary Indulgence"
          prayer={indulgencePreparationPrayer}
          copiedLabel="Prayer copied."
          onCopy={async (prayer) => {
            await navigator.clipboard.writeText(prayer);
            trackEvent("detachment_prayer_copy", { section: "indulgence-preparation" });
          }}
        />
      </div>
    </section>
  );
}
