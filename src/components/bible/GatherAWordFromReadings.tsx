"use client";

import { useState } from "react";
import { gatherAWordSteps, gatherAWordWarning, prayerBeforeTheReadings } from "@/data/biblePage";
import { trackEvent } from "@/lib/analytics";
import { BibleCard, BibleCardGrid, BibleSection } from "@/components/bible/BibleUi";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function GatherAWordFromReadings() {
  const [copied, setCopied] = useState(false);

  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(prayerBeforeTheReadings);
      trackEvent("prayer_copy", { page_path: "/bible", category: "bible-prayer-before-readings" });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <BibleSection
      id="gather-a-word"
      eyebrow="Prayer practice"
      title="How to Receive a Word from the Readings"
      summary="When praying with Scripture, many people notice a word, phrase, image, or invitation that stays with them. This can be a grace for prayer, but it should be received humbly, not forced or treated like fortune-telling."
    >
      <BibleCardGrid columns="md:grid-cols-2">
        {gatherAWordSteps.map((step, index) => (
          <BibleCard key={step.title} title={`${index + 1}. ${step.title}`} description={step.description} />
        ))}
      </BibleCardGrid>

      <div className="card mt-5 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Important warning</p>
        <p className="mt-3 text-base leading-8 text-muted sm:text-lg">{gatherAWordWarning}</p>
      </div>

      <div className="mt-5 md:max-w-2xl">
        <PrayerCard
          eyebrow="Prayer card"
          title="Prayer Before the Readings"
          prayer={prayerBeforeTheReadings}
          copyLabel="Copy Prayer"
          copiedLabel="Prayer copied"
          onCopy={async (prayer) => {
            await navigator.clipboard.writeText(prayer);
            trackEvent("prayer_copy", { page_path: "/bible", category: "bible-prayer-before-readings" });
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2200);
          }}
        />
      </div>
    </BibleSection>
  );
}
