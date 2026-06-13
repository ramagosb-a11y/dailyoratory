"use client";

import { trackEvent } from "@/lib/analytics";
import { formatTraditionPrayerForCopy } from "@/lib/tradition";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function TraditionPrayerCard() {
  const prayer = formatTraditionPrayerForCopy();

  async function copyPrayer() {
    await navigator.clipboard.writeText(prayer);
    trackEvent("tradition_prayer_copy", { page_path: "/tradition", section: "tradition-prayer-card" });
  }

  return (
    <PrayerCard
      eyebrow="Prayer for understanding Sacred Tradition"
      prayer={prayer}
      onCopy={copyPrayer}
    />
  );
}
