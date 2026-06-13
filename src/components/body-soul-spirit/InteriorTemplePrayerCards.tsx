"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { formatInteriorTemplePrayerForCopy, getBodySoulSpiritPrayers } from "@/lib/bodySoulSpirit";
import { BodySoulSpiritCardGrid, BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function InteriorTemplePrayerCards() {
  const prayers = getBodySoulSpiritPrayers();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyPrayer(prayerId: string) {
    const prayer = prayers.find((item) => item.id === prayerId);
    if (!prayer) return;

    try {
      await navigator.clipboard.writeText(formatInteriorTemplePrayerForCopy(prayer));
      trackEvent("body_soul_spirit_prayer_copy", {
        category: prayer.category,
        section: "prayer-cards",
      });
      setCopiedId(prayerId);
      window.setTimeout(() => setCopiedId(null), 2200);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <BodySoulSpiritSection
      eyebrow="Prayer cards"
      title="Prayers for the Interior Temple"
      summary="Use these original Daily Oratory prayers to ask for cleansing, protection, mercy, and grateful perseverance."
    >
      <BodySoulSpiritCardGrid columns="md:grid-cols-2">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            eyebrow={prayer.category}
            title={prayer.title}
            prayer={prayer.body}
            note={prayer.whenToPray}
            copiedLabel={copiedId === prayer.id ? "Prayer copied" : "Prayer copied"}
            onCopy={async () => copyPrayer(prayer.id)}
          />
        ))}
      </BodySoulSpiritCardGrid>
    </BodySoulSpiritSection>
  );
}
