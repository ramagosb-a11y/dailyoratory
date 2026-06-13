import { SectionHeader } from "@/components/section-header";

const points = [
  "The Pope is a bishop.",
  "The Pope is Bishop of Rome.",
  "The Pope is successor of Saint Peter.",
  "The Pope is a visible sign of unity.",
  "The Pope serves the Church; he does not replace Christ.",
  "Catholics do not worship the Pope.",
  "The Pope works with bishops throughout the world.",
];

export function WhatIsPope() {
  return (
    <section id="understand-the-papacy">
      <SectionHeader eyebrow="Foundations" title="What Is the Pope?" summary="A gentle introduction for Catholics, returning Catholics, and anyone exploring the Catholic faith." />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="card-parchment p-6">
          <p className="text-sm leading-7 text-muted">
            The Pope is the Bishop of Rome and successor of Saint Peter. Catholics believe Christ gave Peter a unique role of
            service, unity, and strengthening the brethren. The Pope serves the Church by teaching, governing, sanctifying,
            and helping preserve unity in the apostolic faith.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            If you are exploring Catholicism, the papacy may feel unfamiliar. Begin with Peter, the early Church, apostolic
            succession, and the Church&apos;s need for unity.
          </p>
        </article>
        <article className="card-parchment p-6">
          <ul className="space-y-3 text-sm leading-7 text-muted">
            {points.map((point) => (
              <li key={point} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
