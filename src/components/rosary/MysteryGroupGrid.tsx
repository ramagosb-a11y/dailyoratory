import { RosaryMysteryCard } from "@/components/rosary/RosaryMysteryCard";
import { RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function MysteryGroupGrid({
  group,
  mysteries,
}: {
  group: RosaryMysteryGroup;
  mysteries: RosaryMystery[];
}) {
  return (
    <RosarySection
      eyebrow="The five mysteries"
      title={`Meditate on the ${group.title}`}
      summary="Each mystery page also serves as the dedicated decade page for that part of the Rosary."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {mysteries.map((mystery) => (
          <RosaryMysteryCard key={mystery.id} mystery={mystery} />
        ))}
      </div>
    </RosarySection>
  );
}
