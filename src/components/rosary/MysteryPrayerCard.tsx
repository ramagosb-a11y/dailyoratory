"use client";

import { trackEvent } from "@/lib/analytics";
import { formatMysteryPrayerForCopy } from "@/lib/rosary";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";
import { RosarySection } from "@/components/rosary/RosaryUi";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function MysteryPrayerCard({
  group,
  mystery,
}: {
  group: RosaryMysteryGroup;
  mystery: RosaryMystery;
}) {
  async function copyPrayer() {
    await navigator.clipboard.writeText(formatMysteryPrayerForCopy(mystery));
    trackEvent("rosary_mystery_prayer_copy", {
      group_slug: group.slug,
      mystery_slug: mystery.slug,
    });
  }

  return (
    <RosarySection
      eyebrow="Prayer"
      title="Prayer for This Mystery"
      summary="Let the mystery become a direct prayer for grace."
    >
      <PrayerCard prayer={mystery.prayer} copyLabel="Copy mystery prayer" onCopy={copyPrayer} />
    </RosarySection>
  );
}
