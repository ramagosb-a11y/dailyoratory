import type { PredominantFault } from "@/types/sinAndTemptation";

export function PredominantFaultCards({ faults }: { faults: PredominantFault[] }) {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      {faults
        .slice()
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((fault) => (
          <article key={fault.id} className="card-parchment p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">{fault.title}</h2>
            <p className="daily-card-readable mt-4 text-sm leading-7 text-muted">{fault.description}</p>
            <div className="mt-5 rounded-2xl border border-stone bg-ivory/80 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Signs</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                {fault.signs.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-sm font-semibold text-navy">Opposite virtue: {fault.oppositeVirtue}</p>
            <p className="daily-prayer-readable mt-3 text-base italic leading-8 text-muted">{fault.shortPrayer}</p>
          </article>
        ))}
    </section>
  );
}
