import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getAdorationPrayerMethods } from "@/lib/adoration";

export function HowToPrayAdoration() {
  const methods = getAdorationPrayerMethods();

  return (
    <section id="how-to-pray" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Prayer"
        title="How to Pray in Adoration"
        summary="There is more than one peaceful way to remain with Jesus in the Eucharist."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {methods.map((method) => (
          <article key={method.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{method.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{method.description}</p>
            <p className="mt-4 rounded-md border border-gold/30 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {method.simplePrayer}
            </p>
            {"relatedLink" in method && method.relatedLink ? (
              <TrackedLink href={method.relatedLink.href} className="btn btn-secondary focus-ring mt-5 justify-center">
                {method.relatedLink.label}
              </TrackedLink>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
