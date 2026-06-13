import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EpiphanyScriptureSection() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Scripture for Epiphany</h2>
      <p className="daily-readable mt-5 text-lg font-semibold text-navy">Matthew 2:1–12</p>
      <p className="daily-readable mt-4 text-base leading-8 text-muted">
        The Magi see the star, journey to Jerusalem, are directed to Bethlehem, find the Child with Mary His Mother,
        fall down in worship, offer gifts of gold, frankincense, and myrrh, and return home by another way.
      </p>
      <div className="mt-6">
        <TrackedLink
          href="https://bible.usccb.org/bible/matthew/2"
          external
          eventName="epiphany_resource_click"
          eventParams={{ section: "scripture", destination: "usccb-matthew-2" }}
          className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Read Matthew 2 at USCCB
        </TrackedLink>
      </div>
    </section>
  );
}
