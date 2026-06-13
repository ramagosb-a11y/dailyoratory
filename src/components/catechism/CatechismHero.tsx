import { TrackedLink } from "@/components/analytics/TrackedLink";

export function CatechismHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">
          Catholic formation
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Catechism of the Catholic Church
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          A trusted guide to what Catholics believe, celebrate, live, and pray.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          The Catechism helps Catholics, returning Catholics, and anyone exploring the Catholic faith
          understand the teaching of the Church. It brings together Scripture, Tradition, doctrine,
          sacraments, moral life, and prayer in one reliable guide.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <TrackedLink
            href="https://www.vatican.va/archive/ENG0015/_INDEX.HTM"
            external
            className="btn liturgical-button focus-ring"
            eventName="catechism_resource_click"
            eventParams={{
              resource_name: "Official Vatican Catechism",
              resource_url: "https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
              section: "catechism-hero",
              page_path: "/catechism",
            }}
          >
            Read the Official Catechism
          </TrackedLink>
          <a href="#four-pillars" className="btn btn-secondary focus-ring">
            Start with the Four Pillars
          </a>
          <a href="#catechism-topic-finder" className="btn btn-ghost focus-ring">
            Find a Topic
          </a>
        </div>
        <div className="card-parchment mt-6 max-w-2xl border border-stone/70 bg-ivory/90 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory summarizes and links to the Catechism. For the full official text, use
            the Vatican or USCCB Catechism links.
          </p>
        </div>
      </div>
    </section>
  );
}
