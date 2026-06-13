import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EpiphanyExternalResources() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Helpful Reference</h2>
      <article className="dashboard-card mt-6 p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">External resource</p>
        <h3 className="font-display mt-3 text-2xl font-semibold text-navy">Brotherhood of Ascension: Epiphany</h3>
        <p className="daily-card-readable mt-4 text-base leading-7 text-muted">
          A helpful reference page with Epiphany background, prayer ideas, and home blessing themes.
        </p>
        <div className="mt-5">
          <TrackedLink
            href="https://www.brotherhoodofascension.com/prayers/epiphany"
            external
            eventName="epiphany_resource_click"
            eventParams={{ section: "external-resource", destination: "brotherhood-of-ascension-epiphany" }}
            className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
          >
            Open Reference
          </TrackedLink>
        </div>
      </article>
    </section>
  );
}
