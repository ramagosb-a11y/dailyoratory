"use client";

import { PrayerCard } from "@/components/ui/PrayerCard";
import { trackEvent } from "@/lib/analytics";

export function TrackedLentPrayerCard({
  title,
  prayer,
  eventName = "lenten_prayer_copy",
  eyebrow,
}: {
  title: string;
  prayer: string;
  eventName?: "lenten_prayer_copy";
  eyebrow?: string;
}) {
  return (
    <PrayerCard
      title={title}
      eyebrow={eyebrow}
      prayer={prayer}
      copyLabel="Copy Prayer"
      copiedLabel="Prayer copied."
      onCopy={async (text) => {
        await navigator.clipboard.writeText(text);
        trackEvent(eventName, { title });
      }}
    />
  );
}

