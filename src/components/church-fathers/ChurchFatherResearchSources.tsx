const sources = [
  {
    title: "New Advent: The Fathers of the Church",
    url: "https://www.newadvent.org/fathers/",
    description: "A classic directory of many patristic texts and introductions.",
  },
  {
    title: "CCEL: Early Church Fathers",
    url: "https://www.ccel.org/fathers",
    description: "A broad collection of early Christian texts useful for patient reading and research.",
  },
  {
    title: "New Advent Catholic Encyclopedia: Fathers of the Church",
    url: "https://www.newadvent.org/cathen/06001a.htm",
    description: "A reference article offering historical orientation and terminology.",
  },
  {
    title: "CCEL Additional Early Church Fathers Texts",
    url: "https://www.ccel.org/ccel/pearse/morefathers/files/morefathers.html",
    description: "Additional early Christian materials for deeper study.",
  },
];

export function ChurchFatherResearchSources() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Research sources</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Where to read the Church Fathers
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {sources.map((source) => (
          <article key={source.url} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{source.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{source.description}</p>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-5 inline-flex rounded-sm text-sm font-semibold text-link"
            >
              Open external research source
            </a>
          </article>
        ))}
      </div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
        Many available English translations are older public-domain translations. They are useful
        for study but may use older language. For formal academic work, compare modern critical
        editions and consult reliable Catholic scholarship.
      </p>
    </section>
  );
}
