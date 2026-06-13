import { SectionHeader } from "@/components/section-header";

const cards = [
  {
    title: "Sacred Scripture",
    description: "The inspired written Word of God.",
  },
  {
    title: "Sacred Tradition",
    description: "The living transmission of the apostolic faith.",
  },
  {
    title: "Magisterium",
    description: "The teaching office of the Church, serving the Word of God by faithfully interpreting Scripture and Tradition.",
  },
];

export function ScriptureTraditionMagisterium() {
  return (
    <section>
      <SectionHeader
        eyebrow="The deposit of faith"
        title="Scripture, Tradition, and the Magisterium"
        summary="These are not three competing authorities. In Catholic teaching, they work together in service of the one deposit of faith."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="card-parchment mt-5 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Beginner note</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          The Magisterium does not invent a new Gospel. It guards, teaches, and authentically interprets the faith entrusted
          to the Church.
        </p>
      </div>
    </section>
  );
}
