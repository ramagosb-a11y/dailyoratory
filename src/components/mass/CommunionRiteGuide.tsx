import type { MassPart } from "@/types/mass";
import { MassPartSection } from "@/components/mass/MassPartSection";

export function CommunionRiteGuide({ parts }: { parts: MassPart[] }) {
  const extra = (
    <article className="card-parchment p-6">
      <h3 className="font-display text-3xl font-semibold text-navy">How to receive spiritually</h3>
      <ul className="mt-4 space-y-3">
        {[
          "Approach reverently.",
          "Receive according to Church norms.",
          "Make thanksgiving after Communion.",
          "If not receiving Communion, unite yourself spiritually to Christ and pray for grace.",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
            <span className="mt-2 h-2 w-2 rounded-full bg-burgundy" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-7 text-muted">
        Daily Oratory does not make personal judgments about whether someone may receive Communion.
        Serious questions should be brought to a priest.
      </p>
    </article>
  );

  return (
    <MassPartSection
      id="communion-rite"
      eyebrow="Communion Rite"
      title="Prepared to receive Christ"
      description="The Communion Rite prepares the faithful to receive Christ in the Eucharist and expresses unity with God and the Church."
      parts={parts}
      extra={extra}
    />
  );
}
