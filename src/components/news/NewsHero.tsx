export function NewsHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">
          Catholic news
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Follow the life of the Church with prayer, charity, and discernment.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Stay connected to Catholic news, Vatican updates, Church headlines, spiritual reflections,
          and trusted Catholic media. Read with a peaceful heart, verify important claims, and bring
          the needs of the Church into prayer.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          This page offers Catholic news and faith resources for anyone who wants to follow the life
          of the Church with prayerful discernment.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#official-church-sources" className="btn liturgical-button focus-ring">
            Official Church News
          </a>
          <a href="#featured-news-resources" className="btn btn-secondary focus-ring">
            Catholic News Sources
          </a>
          <a href="#pray-the-news" className="btn btn-ghost focus-ring">
            Pray for the Church
          </a>
        </div>
        <div className="card-parchment mt-6 max-w-2xl border border-stone/70 bg-ivory/90 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory links to external Catholic news and faith resources. For official
            statements, always consult the Vatican, your diocese, bishops&apos; conference, or parish.
          </p>
        </div>
      </div>
    </section>
  );
}
