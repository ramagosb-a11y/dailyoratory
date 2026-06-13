import type { MassPart } from "@/types/mass";
import { MassPartSection } from "@/components/mass/MassPartSection";

export function ConcludingRitesGuide({ parts }: { parts: MassPart[] }) {
  const extra = (
    <article className="card p-6">
      <h3 className="font-display text-3xl font-semibold text-navy">Live the Mass after leaving</h3>
      <ul className="mt-4 space-y-3">
        {[
          "Practice charity.",
          "Forgive someone.",
          "Serve the poor.",
          "Carry one phrase from Scripture.",
          "Make your home a place of prayer.",
          "Return to prayer during the week.",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
            <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <MassPartSection
      id="concluding-rites"
      eyebrow="Concluding Rites"
      title="Blessing and mission"
      description="The Mass ends with blessing and mission. The faithful are sent to glorify the Lord by their lives."
      parts={parts}
      extra={extra}
    />
  );
}
