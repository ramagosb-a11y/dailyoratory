import { RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery } from "@/types/rosary";

export function RosaryMysteryMeditation({ mystery }: { mystery: RosaryMystery }) {
  return (
    <RosarySection
      eyebrow="Meditate on the mystery"
      title="Meditate on the Mystery"
      summary="Stay in the Gospel scene slowly and let one grace begin to take root."
    >
      <article className="card-parchment p-7 sm:p-8">
        <div className="daily-readable-muted space-y-6">
          {mystery.extendedMeditation.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </RosarySection>
  );
}
