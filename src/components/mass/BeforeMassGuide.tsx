import Link from "next/link";
import type { MassPart } from "@/types/mass";
import { MassPartSection } from "@/components/mass/MassPartSection";

const prayer = `Lord Jesus, prepare my heart to worship You with reverence, listen to Your Word, and receive Your grace with gratitude. Amen.`;

export function BeforeMassGuide({ parts }: { parts: MassPart[] }) {
  const extra = (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
      <article className="card-parchment p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">A simple prayer before Mass</h3>
        <p className="mt-4 whitespace-pre-line text-sm leading-8 text-muted">{prayer}</p>
      </article>
      <article className="card p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">Helpful next steps</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/confession" className="btn btn-secondary focus-ring justify-center">Confession</Link>
          <Link href="/indulgences" className="btn btn-secondary focus-ring justify-center">Indulgences</Link>
          <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring justify-center">Scripture Prayer</Link>
          <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring justify-center">Eucharist</Link>
        </div>
      </article>
    </div>
  );

  return (
    <MassPartSection
      id="before-mass"
      eyebrow="Before Mass"
      title="Prepare the heart"
      description="Mass begins before the opening hymn. Preparation helps the heart become attentive, humble, and ready to receive Christ."
      parts={parts}
      extra={extra}
    />
  );
}
