import { TrackedLink } from "@/components/analytics/TrackedLink";

export function GraceHero() {
  return (
    <section className="liturgical-page-hero dashboard-card p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic Formation</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Grace</h1>
      <p className="daily-readable mt-5 max-w-4xl text-xl leading-9 text-muted">
        Understand God’s gift of divine life, help, healing, and holiness.
      </p>
      <p className="daily-readable mt-5 max-w-4xl text-lg leading-8 text-muted">
        Grace is God’s free and undeserved gift. Through grace, God forgives, heals, strengthens, sanctifies, and
        draws the soul into deeper communion with Him. Grace is not something we earn; it is something we receive,
        respond to, and cooperate with.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="#forms-of-grace" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Explore the Forms of Grace
        </a>
        <a href="#prayer-for-grace" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Pray for Grace
        </a>
        <TrackedLink
          href="/sacraments"
          eventName="grace_related_link_click"
          eventParams={{ section: "hero", destination: "/sacraments" }}
          className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Go to the Sacraments
        </TrackedLink>
      </div>
    </section>
  );
}
