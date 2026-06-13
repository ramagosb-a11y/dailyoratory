import { catholicFuneralRites } from "@/data/catholicBurial";

export function CatholicFuneralRitesOverview() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">The Three Main Parts of a Catholic Funeral</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {catholicFuneralRites.map((rite) => (
          <article key={rite.id} className="card-parchment p-6 sm:p-8">
            <h3 className="font-display text-3xl font-semibold text-navy">{rite.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{rite.description}</p>
            <p className="daily-readable-muted mt-4 text-sm leading-7 text-muted">{rite.purpose}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

