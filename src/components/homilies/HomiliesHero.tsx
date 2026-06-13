export function HomiliesHero() {
  return (
    <section className="dashboard-card overflow-hidden p-6 sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Homilies Library</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-6xl">
            Catholic preaching and reflections to help you hear the Word, understand the Mass, and live the Gospel.
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            Explore Catholic homilies, reflections, playlists, and audio resources organized for prayer, formation,
            and daily discipleship. Listen before Mass, after Mass, during prayer, or as part of your weekly spiritual
            rhythm.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#featured-homilies" className="btn btn-primary focus-ring">
              Listen to Featured Homilies
            </a>
            <a href="#homily-playlists" className="btn btn-secondary focus-ring">
              Browse Playlists
            </a>
            <a href="#how-to-use-homilies" className="btn btn-secondary focus-ring">
              How to Pray with a Homily
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-gold/40 bg-parchment/60 p-6 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pastoral note</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Online homilies can support formation, but they do not replace attending Mass. For Catholics, Sunday Mass
            obligation is fulfilled by participating in Mass, not only by listening to preaching online.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Use discernment, prefer faithful Catholic sources, and let good preaching lead you back toward Scripture,
            the sacraments, repentance, charity, and holiness.
          </p>
        </div>
      </div>
    </section>
  );
}
