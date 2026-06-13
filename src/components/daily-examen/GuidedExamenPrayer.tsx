"use client";

import { guidedExamenPrayer } from "@/data/dailyExamenPage";
import { trackEvent } from "@/lib/analytics";
import { ExamenSection } from "@/components/daily-examen/DailyExamenUi";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function GuidedExamenPrayer() {
  return (
    <ExamenSection
      eyebrow="Guided prayer"
      title="A Guided Prayer for the End of the Day"
      summary="Use this when you want words that gather gratitude, mercy, and trust into one simple prayer."
    >
      <PrayerCard
        prayer={guidedExamenPrayer}
        onCopy={async (prayer) => {
          await navigator.clipboard.writeText(prayer);
          trackEvent("examen_prayer_copy", {
            category: "guided-prayer",
            item_slug: "guided-examen-prayer",
            source: "/daily-examen",
            destination: "clipboard",
          });
        }}
      />
    </ExamenSection>
  );
}
