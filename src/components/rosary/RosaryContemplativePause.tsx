import { RosarySection } from "@/components/rosary/RosaryUi";
import { BodyText } from "@/components/ui/Typography";

export function RosaryContemplativePause({ pause }: { pause?: string }) {
  if (!pause) return null;

  return (
    <RosarySection
      eyebrow="Contemplative pause"
      title="Contemplative Pause"
      summary="Stay quietly with the mystery and notice the grace the Lord is leaving with you."
    >
      <article className="card-parchment p-7 sm:p-8">
        <BodyText className="whitespace-pre-line">{pause}</BodyText>
      </article>
    </RosarySection>
  );
}
