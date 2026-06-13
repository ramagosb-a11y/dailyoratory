import { TrackedLink } from "@/components/analytics/TrackedLink";

export function GraceExternalReference() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Helpful Reference</h2>
      <article className="dashboard-card mt-6 p-5 sm:p-6">
        <h3 className="font-display text-2xl font-semibold text-navy">Brotherhood of Ascension: Grace</h3>
        <p className="daily-card-readable mt-4 text-base leading-7 text-muted">
          A helpful overview of Catholic teaching on sanctifying grace, actual grace, sacramental grace, charisms,
          cooperation with grace, prayer, and the sacraments.
        </p>
        <p className="daily-readable-muted mt-4 text-sm leading-7 text-muted">
          Use this as an external reference only. Do not copy long text from it.
        </p>
        <div className="mt-5">
          <TrackedLink
            href="https://www.brotherhoodofascension.com/content/grace"
            external
            eventName="grace_related_link_click"
            eventParams={{ section: "external-reference", destination: "https://www.brotherhoodofascension.com/content/grace" }}
            className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
          >
            Open Reference
          </TrackedLink>
        </div>
      </article>
    </section>
  );
}
