import type { MassPart } from "@/types/mass";
import { MassPartSection } from "@/components/mass/MassPartSection";

const notes = [
  "Bread and wine are brought to the altar in simplicity, but the mystery is immense.",
  "The Eucharistic Prayer is the heart of the Mass.",
  "The faithful are invited not only to watch, but to join Christ's offering with their own lives.",
];

export function LiturgyOfTheEucharistGuide({ parts }: { parts: MassPart[] }) {
  const extra = (
    <article className="card-parchment p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">A note for beginners</p>
      <ul className="mt-4 space-y-3">
        {notes.map((note) => (
          <li key={note} className="flex gap-3 text-sm leading-7 text-muted">
            <span className="mt-2 h-2 w-2 rounded-full bg-burgundy" />
            <span>{note}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-7 text-muted">
        Daily Oratory uses original summaries here and does not reproduce long Missal texts.
      </p>
    </article>
  );

  return (
    <MassPartSection
      id="liturgy-of-the-eucharist"
      eyebrow="Liturgy of the Eucharist"
      title="Christ offers Himself to the Father"
      description="In the Liturgy of the Eucharist, bread and wine are brought to the altar, the Church gives thanks, and Christ's sacrifice is made present sacramentally. Through the Eucharistic Prayer, the faithful are drawn into Christ's offering to the Father."
      parts={parts}
      extra={extra}
    />
  );
}
