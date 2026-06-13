"use client";

import { RosarySection } from "@/components/rosary/RosaryUi";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function RosaryOpeningPrayer({ prayer }: { prayer: string }) {
  return (
    <RosarySection
      id="opening-prayer"
      eyebrow="Opening prayer"
      title="Opening Prayer"
      summary="Begin slowly and ask the Lord to draw you into the mystery with recollection and trust."
    >
      <PrayerCard prayer={prayer} />
    </RosarySection>
  );
}
