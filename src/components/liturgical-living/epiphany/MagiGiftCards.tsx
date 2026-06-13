import type { EpiphanyGift } from "@/types/epiphany";

export function MagiGiftCards({ gifts }: { gifts: EpiphanyGift[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Gold, Frankincense, and Myrrh</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {gifts
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((gift) => (
            <article key={gift.id} className="dashboard-card p-5 sm:p-6">
              <h3 className="font-display text-2xl font-semibold text-navy">{gift.title}</h3>
              <p className="daily-readable mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                {gift.meaning}
              </p>
              <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{gift.reflection}</p>
              <p className="daily-prayer-readable mt-4 text-base italic leading-8 text-navy">{gift.prayer}</p>
            </article>
          ))}
      </div>
    </section>
  );
}
