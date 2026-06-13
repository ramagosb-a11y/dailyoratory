import { RosaryCard, RosaryCardGrid, RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function RosaryFruitOfMystery({
  group,
  mystery,
}: {
  group: RosaryMysteryGroup;
  mystery: RosaryMystery;
}) {
  return (
    <RosarySection
      eyebrow="Fruit of the mystery"
      title="Fruit of the Mystery"
      summary={mystery.expandedFruitReflection ?? "Traditional fruits help the decade become conversion, not only remembrance."}
    >
      <RosaryCardGrid columns="md:grid-cols-3">
        <RosaryCard title={mystery.virtue} description="Virtue" accent={group.colorAccent} />
        <RosaryCard title="Grace to Ask" description={mystery.graceToAsk} accent={group.colorAccent} />
        <RosaryCard title="Practice Today" description={mystery.practiceToday} accent={group.colorAccent} />
      </RosaryCardGrid>
    </RosarySection>
  );
}
