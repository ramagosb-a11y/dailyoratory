import { TrackedLink } from "@/components/analytics/TrackedLink";

export function PopeHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">Catholic formation</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">The Pope</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Understanding the Bishop of Rome and his service to the Church.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          Catholics understand the Pope as the Bishop of Rome, successor of Saint Peter, and visible sign of unity for the Church.
          His mission is not to replace Christ, but to serve Christ by strengthening the faithful, teaching the apostolic faith,
          and helping the Church remain united in truth and charity.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <TrackedLink
            href="https://www.vatican.va/content/leo-xiv/en/apost_exhortations.html"
            external
            className="btn liturgical-button focus-ring"
            eventName="pope_resource_click"
            eventParams={{ resource_name: "Pope Leo XIV Documents", page_path: "/pope", section: "pope-hero" }}
          >
            Read Papal Documents
          </TrackedLink>
          <a href="#understand-the-papacy" className="btn btn-secondary focus-ring">
            Understand the Papacy
          </a>
          <a href="#pray-for-the-holy-father" className="btn btn-ghost focus-ring">
            Pray for the Holy Father
          </a>
        </div>
        <div className="card-parchment mt-6 max-w-2xl border border-stone/70 bg-ivory/90 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory provides beginner-friendly summaries and links to official Vatican sources. For formal teaching and
            official texts, read the Vatican sources directly.
          </p>
        </div>
      </div>
    </section>
  );
}
