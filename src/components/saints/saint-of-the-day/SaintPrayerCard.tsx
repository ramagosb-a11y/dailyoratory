"use client";

import { PrayerCard } from "@/components/ui/PrayerCard";
import { trackEvent } from "@/lib/analytics";
import { formatSaintPrayerForCopy } from "@/lib/saintOfTheDay";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

function buildPrayer(entry: SaintOfTheDayEntry) {
  return (
    entry.prayerPrompt ??
    `Lord Jesus,\nthank You for the witness of ${entry.name}.\nThrough their prayers,\nhelp me grow in ${entry.virtue ?? "holiness"}\nand follow You more faithfully today.\nAmen.`
  );
}

export function SaintPrayerCard({ entry }: { entry: SaintOfTheDayEntry }) {
  const prayer = buildPrayer(entry);

  async function copyPrayer() {
    await navigator.clipboard.writeText(formatSaintPrayerForCopy(entry));
    trackEvent("saint_of_day_prayer_copy", {
      saint_slug: entry.slug,
      date_key: entry.dateKey,
      destination: "/saints/saint-of-the-day",
    });
  }

  return (
    <PrayerCard
      eyebrow="Prayer"
      title="Prayer with Today&apos;s Saint"
      prayer={prayer}
      onCopy={copyPrayer}
    />
  );
}
