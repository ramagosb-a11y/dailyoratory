import { RosaryCard, RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery } from "@/types/rosary";

export function MysteryVirtueCard({ mystery }: { mystery: RosaryMystery }) {
  return (
    <RosarySection
      eyebrow="Fruit of the mystery"
      title="Ask for the Grace of This Decade"
      summary="Traditional fruits help the Rosary become not only remembrance, but conversion."
    >
      <RosaryCard title={mystery.virtue} accent="glorious">
        <p className="text-sm leading-8 text-muted">
          The traditional fruit of this mystery is <span className="font-semibold text-navy">{mystery.virtue.toLowerCase()}</span>.
          Ask for it quietly, concretely, and with confidence that Christ gives grace through patient prayer.
        </p>
      </RosaryCard>
    </RosarySection>
  );
}
