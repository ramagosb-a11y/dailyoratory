"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { penitentialPsalms } from "@/data/sevenPenitentialPsalms";

export function PenitentialPsalmCards() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">The Seven Penitential Psalms</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {penitentialPsalms.map((psalm) => (
          <article key={psalm.id} className="card-parchment flex h-full flex-col p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Psalm {psalm.psalmNumber}</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{psalm.title}</h3>
            <p className="daily-card-readable mt-3 text-sm font-semibold uppercase tracking-[0.06em] text-muted">
              {psalm.theme}
            </p>
            <p className="daily-readable mt-4 text-base leading-8 text-muted">{psalm.reflection}</p>
            <p className="daily-readable-muted mt-4 text-sm italic leading-7 text-muted">
              {psalm.heartQuestion}
            </p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <a
                href={psalm.usccbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-burgundy"
              >
                USCCB Psalm Link
              </a>
              <TrackedLink
                href={psalm.usccbUrl}
                external
                eventName="penitential_psalms_read_psalm_click"
                eventParams={{ section: "psalm-cards", destination: psalm.usccbUrl, psalmNumber: psalm.psalmNumber }}
                className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
              >
                Read Psalm
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
