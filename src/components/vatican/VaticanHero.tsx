import { TrackedLink } from "@/components/analytics/TrackedLink";

export function VaticanHero() {
  return (
    <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-3xl">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">Catholic formation</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">The Vatican</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Explore the spiritual, historical, and artistic heart of the Catholic Church.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          The Vatican is a place of prayer, pilgrimage, history, sacred art, and service to the universal Church. From Saint
          Peter&apos;s Basilica to the Sistine Chapel, from papal documents to live broadcasts, the Vatican invites visitors to
          encounter the beauty of faith and the mission of the Church.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#watch-vatican-live" className="btn liturgical-button focus-ring">
            Watch Vatican Live
          </a>
          <a href="#virtual-tours" className="btn btn-secondary focus-ring">
            Tour Saint Peter&apos;s Basilica
          </a>
          <a href="#vatican-history" className="btn btn-ghost focus-ring">
            Explore Vatican History
          </a>
        </div>
        <div className="card-parchment mt-6 max-w-2xl border border-stone/70 bg-ivory/90 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory links to official Vatican resources, broadcasts, and virtual tours. External videos and tours remain
            the property of their respective sources.
          </p>
          <TrackedLink
            href="https://www.vatican.va/"
            external
            className="mt-4 inline-flex text-sm font-semibold text-navy underline decoration-gold/70 underline-offset-4"
            eventName="vatican_resource_click"
            eventParams={{ resource_name: "Vatican official site", page_path: "/vatican", section: "vatican-hero" }}
          >
            Open the official Vatican site
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
