"use client";

import { trackEvent } from "@/lib/analytics";
import { eternityPrayer } from "@/data/eschatology";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function EternityPrayerCard() {
  return (
    <div id="eternity-prayer">
      <PrayerCard
        title="Prayer for Hope in Eternal Life"
        eyebrow="Prayer"
        prayer={eternityPrayer}
        copiedLabel="Prayer copied."
        onCopy={async (prayer) => {
          await navigator.clipboard.writeText(prayer);
          trackEvent("eschatology_prayer_copy", { section: "eternity-prayer" });
        }}
      />
    </div>
  );
}
