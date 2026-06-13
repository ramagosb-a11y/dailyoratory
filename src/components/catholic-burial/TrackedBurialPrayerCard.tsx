"use client";

import { PrayerCard } from "@/components/ui/PrayerCard";
import { trackEvent } from "@/lib/analytics";

export function TrackedBurialPrayerCard({
  title,
  prayer,
  prayerId,
}: {
  title: string;
  prayer: string;
  prayerId: string;
}) {
  return (
    <PrayerCard
      title={title}
      prayer={prayer}
      copyLabel="Copy Prayer"
      copiedLabel="Prayer copied."
      onCopy={async (text) => {
        await navigator.clipboard.writeText(text);
        trackEvent("catholic_burial_prayer_copy", { prayer: prayerId });
      }}
    />
  );
}
