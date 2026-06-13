import { SectionHeader } from "@/components/section-header";

const isList = [
  "The living transmission of the apostolic faith",
  "Rooted in Christ and the apostles",
  "Guided by the Holy Spirit",
  "Connected to Scripture",
  "Preserved in the Church's worship, teaching, sacraments, and life",
  "A source for understanding what Catholics believe",
];

const isNotList = [
  "Merely old habits",
  "Every parish custom",
  "Personal preference",
  "Cultural nostalgia",
  "A replacement for Scripture",
  "Human opinion above God's Word",
];

export function TraditionNotOldCustoms() {
  return (
    <section>
      <SectionHeader eyebrow="Clarifying tradition" title='Tradition Is Not Just "Old Customs"' />
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <article className="card-parchment liturgical-card-accent p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Sacred Tradition is...</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {isList.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Sacred Tradition is not...</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {isNotList.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-burgundy" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
