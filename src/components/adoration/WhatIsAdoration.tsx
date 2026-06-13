import { SectionHeader } from "@/components/section-header";

const points = [
  "Adoration is centered on Jesus.",
  "It flows from the Mass.",
  "It invites silence, reverence, and love.",
  "You do not need perfect words.",
  "You can pray, read Scripture, sit quietly, or simply look toward Christ.",
  "Adoration should deepen love for the Eucharist, the Mass, confession, charity, and holiness.",
];

export function WhatIsAdoration() {
  return (
    <section id="what-is-adoration" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Meaning"
        title="What Is Eucharistic Adoration?"
        summary="Eucharistic Adoration is prayer before Jesus Christ present in the Blessed Sacrament."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card-parchment p-6">
          <p className="text-sm leading-8 text-muted">
            Catholics believe the Eucharist is not merely a symbol, but truly Christ Himself. In Adoration, the faithful
            come before Him in worship, silence, love, thanksgiving, repentance, and intercession.
          </p>
          <p className="mt-4 text-sm leading-8 text-muted">
            If you are new to the Catholic faith, Adoration may feel unfamiliar. You are welcome to learn slowly.
            Catholics adore Christ present in the Eucharist; they do not worship the monstrance, chapel, or symbols.
          </p>
        </div>
        <div className="card-parchment p-6">
          <ul className="grid gap-3">
            {points.map((point) => (
              <li key={point} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
