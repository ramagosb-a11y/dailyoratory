"use client";

import { RosarySection } from "@/components/rosary/RosaryUi";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { BodyText } from "@/components/ui/Typography";

export function RosaryMeditationConclusion({
  prompt,
  closingPrayer,
}: {
  prompt?: string;
  closingPrayer?: string;
}) {
  if (!prompt && !closingPrayer) return null;

  return (
    <div className="space-y-14">
      {prompt ? (
        <RosarySection
          eyebrow="Meditation conclusion"
          title="Meditation Conclusion Prompt"
          summary="Remain in the silence of the mystery for one more moment before moving on."
        >
          <article className="card-parchment p-6 sm:p-8">
            <BodyText className="whitespace-pre-line">{prompt}</BodyText>
          </article>
        </RosarySection>
      ) : null}

      {closingPrayer ? (
        <RosarySection
          eyebrow="Optional closing prayer"
          title="Optional Closing Prayer"
          summary="End the meditation by entrusting the grace of the mystery to Mary."
        >
          <PrayerCard prayer={closingPrayer} />
        </RosarySection>
      ) : null}
    </div>
  );
}
