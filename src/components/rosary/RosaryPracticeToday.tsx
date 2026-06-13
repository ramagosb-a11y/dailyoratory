import { RosarySection } from "@/components/rosary/RosaryUi";
import { BodyText } from "@/components/ui/Typography";
import type { RosaryMystery } from "@/types/rosary";

export function RosaryPracticeToday({ mystery }: { mystery: RosaryMystery }) {
  return (
    <RosarySection
      eyebrow="Live this mystery today"
      title="Live This Mystery Today"
      summary="A single concrete response is often more fruitful than many vague intentions."
    >
      <article className="card-parchment p-7 sm:p-8">
        <BodyText className="text-[#2f2a22]">{mystery.practiceToday}</BodyText>
      </article>
    </RosarySection>
  );
}
