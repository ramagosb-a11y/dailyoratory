import type { OAntiphon } from "@/types/oAntiphons";

export function OAntiphonCards({ antiphons }: { antiphons: OAntiphon[] }) {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">December 17–23</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">The Seven O Antiphons</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {antiphons.map((antiphon) => (
          <article key={antiphon.id} className="card-parchment p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-3xl font-semibold text-navy">{antiphon.title}</h3>
                <p className="daily-readable-muted mt-2 text-base italic leading-7 text-muted">{antiphon.latinTitle}</p>
              </div>
              <span className="season-pill bg-ivory px-3 py-2 text-navy">December {antiphon.dateDay}</span>
            </div>
            <p className="daily-card-readable mt-4 text-sm font-semibold leading-7 text-navy">{antiphon.theme}</p>
            <p className="daily-readable mt-4 text-sm leading-7 text-muted">{antiphon.reflection}</p>
            <div className="mt-4 rounded-2xl border border-stone bg-ivory/80 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Prayer</p>
              <p className="daily-prayer-readable mt-3 text-sm leading-7 text-navy">{antiphon.prayer}</p>
            </div>
            <p className="daily-card-readable mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Heart question:</span> {antiphon.heartQuestion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
