import type { OAntiphon } from "@/types/oAntiphons";

export function SevenDoorsOfTheHeart({ antiphons }: { antiphons: OAntiphon[] }) {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Interior preparation</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">The seven doors of the heart</h2>
      <p className="daily-readable-muted mt-4 max-w-3xl text-base leading-8 text-muted">
        The O Antiphons are not only titles to read. They are invitations to let Christ enter the real places of the heart.
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {antiphons.map((antiphon) => (
          <article key={antiphon.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{antiphon.title}</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{antiphon.symbol}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
