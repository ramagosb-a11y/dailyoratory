import { RosaryCard, RosaryCardGrid, RosarySection } from "@/components/rosary/RosaryUi";

const points = [
  "The Rosary is centered on Jesus Christ.",
  "Mary leads us to Jesus.",
  "Each decade focuses on a mystery from the life of Christ and Mary.",
  "The repeated prayers create a rhythm of contemplation.",
  "The Rosary can be prayed alone, with family, in a parish, or in a prayer room.",
  "The Rosary is not empty repetition when prayed with love and attention.",
];

export function WhatIsRosary() {
  return (
    <RosarySection
      eyebrow="The devotion"
      title="What Is the Rosary?"
      summary="The Rosary combines vocal prayer and meditation so the heart can remain close to Christ."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <RosaryCard
          title="A Christ-centered prayer"
          description="The Rosary is a devotional prayer that combines vocal prayer and meditation. Catholics pray the Our Father, Hail Mary, Glory Be, and other prayers while meditating on the Joyful, Luminous, Sorrowful, and Glorious Mysteries."
          accent="joyful"
        />
        <RosaryCardGrid columns="sm:grid-cols-2">
          {points.map((point) => (
            <RosaryCard key={point} title={point} accent="glorious" className="h-full">
              <p className="text-sm leading-7 text-muted">{point}</p>
            </RosaryCard>
          ))}
        </RosaryCardGrid>
      </div>
    </RosarySection>
  );
}
