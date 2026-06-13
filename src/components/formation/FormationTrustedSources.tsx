const sources = [
  {
    title: "Catechism of the Catholic Church",
    url: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
    description: "Official Vatican online Catechism.",
  },
  {
    title: "Compendium of the Catechism",
    url: "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html",
    description: "A concise official compendium of Catholic teaching.",
  },
  {
    title: "USCCB Catechism resources",
    url: "https://www.usccb.org/committees/subcommittee-catechism",
    description: "U.S. bishops catechetical resources and guidance.",
  },
  {
    title: "USCCB Catholic Prayers",
    url: "https://www.usccb.org/catholic-prayers",
    description: "Official prayer resources for Catholic life.",
  },
  {
    title: "Vatican documents",
    url: "https://www.vatican.va/archive/index.htm",
    description: "Official archive of Church texts and reference materials.",
  },
];

export function FormationTrustedSources() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Trusted sources</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Learn from trusted Church sources
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {sources.map((source) => (
          <article key={source.url} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{source.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{source.description}</p>
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="focus-ring mt-5 inline-flex rounded-sm text-sm font-semibold text-link">
              Open official Church source
            </a>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Daily Oratory summarizes Catholic teaching and links to official sources. It does not reproduce long copyrighted Church texts.
      </p>
    </section>
  );
}
