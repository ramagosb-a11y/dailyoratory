"use client";

import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { seekerPrayer } from "@/data/explorePage";

export function SeekerPrayerCard() {
  return (
    <section>
      <SectionHeader eyebrow="Prayer" title="Prayer for Someone Exploring the Catholic Faith" />
      <div className="mt-7">
        <PrayerCard prayer={seekerPrayer} />
      </div>
    </section>
  );
}
