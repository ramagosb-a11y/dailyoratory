import { TrackedLink } from "@/components/analytics/TrackedLink";

export function PenitentialPsalmExternalResource() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Helpful reference</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">
        Brotherhood of Ascension: The Seven Penitential Psalms
      </h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        A helpful overview of the Seven Penitential Psalms and their place in repentance, mercy, and Catholic
        spiritual practice.
      </p>
      <p className="daily-readable-muted mt-4 text-sm leading-7 text-muted">
        Use this as an external reference only. Do not copy long text from it.
      </p>
      <div className="mt-6">
        <TrackedLink
          href="https://www.brotherhoodofascension.com/content/psalms/the-seven-penitential-psalms"
          external
          eventName="external_resource_click"
          eventParams={{ section: "penitential-psalms-reference", destination: "brotherhood-of-ascension" }}
          className="focus-ring rounded-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-burgundy"
        >
          Open the external reference
        </TrackedLink>
      </div>
    </section>
  );
}
