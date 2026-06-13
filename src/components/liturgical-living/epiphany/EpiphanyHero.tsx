import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EpiphanyHero() {
  return (
    <section className="dashboard-card p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Christmas Season</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Epiphany of the Lord
      </h1>
      <p className="daily-readable mt-5 max-w-4xl text-xl leading-9 text-muted">
        Follow the star, worship Christ the King, and carry His light into your home and life.
      </p>
      <p className="daily-readable mt-5 max-w-4xl text-lg leading-8 text-muted">
        Epiphany celebrates the manifestation of Jesus Christ to the nations, represented by the Magi who journeyed
        from the East to worship the newborn King. It is a feast of light, seeking, adoration, gift-giving, and
        renewed dedication to Christ.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="#epiphany-prayer-guide" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Pray the Epiphany Guide
        </a>
        <a href="#house-blessing" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Bless Your Home
        </a>
        <TrackedLink
          href="https://bible.usccb.org/bible/matthew/2"
          external
          eventName="epiphany_resource_click"
          eventParams={{ section: "hero", destination: "usccb-matthew-2" }}
          className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Read Matthew 2
        </TrackedLink>
      </div>
    </section>
  );
}
