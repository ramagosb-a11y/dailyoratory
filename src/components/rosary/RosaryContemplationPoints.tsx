import { RosaryCard, RosaryCardGrid, RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function RosaryContemplationPoints({
  group,
  mystery,
}: {
  group: RosaryMysteryGroup;
  mystery: RosaryMystery;
}) {
  return (
    <RosarySection
      eyebrow="What to contemplate"
      title="What to Contemplate"
      summary="Choose one image, phrase, or grace to stay with rather than trying to hold everything at once."
    >
      <RosaryCardGrid columns="md:grid-cols-2 xl:grid-cols-3">
        {mystery.contemplationPoints.map((point, index) => (
          <RosaryCard
            key={point}
            title={`Contemplation ${index + 1}`}
            description={point}
            accent={group.colorAccent}
            className="h-full"
          />
        ))}
      </RosaryCardGrid>
    </RosarySection>
  );
}
