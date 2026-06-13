import Link from "next/link";
import type { MassPart } from "@/types/mass";
import { MassPartSection } from "@/components/mass/MassPartSection";

const prayer = `Lord Jesus, thank You for the gift of the Mass and the Holy Eucharist. Help me live what I have received, love as You love, and carry Your presence into the world. Amen.`;

export function AfterMassThanksgiving({ parts }: { parts: MassPart[] }) {
  const extra = (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
      <article className="card-parchment p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">A short thanksgiving prayer</h3>
        <p className="mt-4 whitespace-pre-line text-sm leading-8 text-muted">{prayer}</p>
      </article>
      <article className="card p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">Keep the grace moving</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/rule-of-life" className="btn btn-secondary focus-ring justify-center">Rule of Life</Link>
          <Link href="/formation" className="btn btn-secondary focus-ring justify-center">Formation</Link>
          <Link href="/adoration" className="btn btn-secondary focus-ring justify-center">Adoration</Link>
          <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">Mass Readings Reflections</Link>
        </div>
      </article>
    </div>
  );

  return (
    <MassPartSection
      id="after-mass"
      eyebrow="After Mass"
      title="Thanksgiving"
      description="After Communion and after Mass, it is beautiful to remain in thanksgiving. This helps the grace of the Eucharist take root in the heart."
      parts={parts}
      extra={extra}
    />
  );
}
