"use client";

import { trackEvent } from "@/lib/analytics";
import { closingPrayerAfterPenitentialPsalms, prayerBeforePenitentialPsalms } from "@/data/sevenPenitentialPsalms";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function PenitentialPsalmPrayerCards() {
  return (
    <div className="grid gap-5">
      <PrayerCard
        title="Prayer Before the Seven Penitential Psalms"
        eyebrow="Prayer"
        prayer={prayerBeforePenitentialPsalms}
        copiedLabel="Prayer copied."
        onCopy={async (prayer) => {
          await navigator.clipboard.writeText(prayer);
          trackEvent("penitential_psalms_copy_prayer", { section: "before-the-seven-psalms" });
        }}
      />
      <PrayerCard
        title="Closing Prayer"
        eyebrow="Prayer"
        prayer={closingPrayerAfterPenitentialPsalms}
        copiedLabel="Prayer copied."
        onCopy={async (prayer) => {
          await navigator.clipboard.writeText(prayer);
          trackEvent("penitential_psalms_copy_prayer", { section: "closing-prayer" });
        }}
      />
    </div>
  );
}
