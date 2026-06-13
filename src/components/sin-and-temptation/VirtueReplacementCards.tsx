import type { VirtueReplacement } from "@/types/sinAndTemptation";

export function VirtueReplacementCards({ replacements }: { replacements: VirtueReplacement[] }) {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      {replacements
        .slice()
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((replacement) => (
          <article key={replacement.id} className="card-parchment p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
              {replacement.vice} → {replacement.virtue}
            </p>
            <p className="daily-card-readable mt-4 text-sm leading-7 text-muted">{replacement.description}</p>
            <div className="mt-4 rounded-2xl border border-stone bg-ivory/80 p-4">
              <p className="text-sm font-semibold text-navy">Practice today</p>
              <p className="mt-2 text-sm leading-7 text-muted">{replacement.practice}</p>
            </div>
            <p className="daily-prayer-readable mt-4 text-base italic leading-8 text-muted">{replacement.prayer}</p>
          </article>
        ))}
    </section>
  );
}
