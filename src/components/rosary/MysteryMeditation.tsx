import { RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery } from "@/types/rosary";

export function MysteryMeditation({ mystery }: { mystery: RosaryMystery }) {
  return (
    <RosarySection
      eyebrow="Meditation"
      title="Remain with the Mystery"
      summary="Read slowly, then let the mystery shape your own prayer."
    >
      <article className="card-parchment p-6">
        <div className="grid gap-5 text-sm leading-8 text-muted">
          {mystery.meditation.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </RosarySection>
  );
}
