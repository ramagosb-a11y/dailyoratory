import { penitentialPsalms } from "@/data/sevenPenitentialPsalms";

export function WhatArePenitentialPsalms() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">What Are the Seven Penitential Psalms?</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The Seven Penitential Psalms are Psalms traditionally prayed by Christians as expressions of
        repentance, sorrow for sin, trust in God&apos;s mercy, and longing for spiritual renewal. They are:
      </p>
      <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
        {penitentialPsalms.map((psalm) => (
          <li key={psalm.id}>
            <a
              href={psalm.usccbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-burgundy"
            >
              Psalm {psalm.psalmNumber}
            </a>
          </li>
        ))}
      </ul>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        They give words to the soul when it wants to return to God, seek forgiveness, and begin again in grace.
      </p>
      <div className="mt-6 rounded-2xl border border-gold/40 bg-ivory/70 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Pastoral note</p>
        <p className="daily-readable-muted mt-3 text-base leading-8 text-muted">
          These Psalms are not meant to lead the soul into despair. They are prayers of hope. They help us
          face sin honestly because God&apos;s mercy is greater than sin.
        </p>
      </div>
    </section>
  );
}
