import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getEucharisticSaints } from "@/lib/adoration";

export function EucharisticSaints() {
  const saints = getEucharisticSaints();

  return (
    <section>
      <SectionHeader
        eyebrow="Saints"
        title="Saints Who Loved the Eucharist"
        summary="The saints help us see what Eucharistic devotion looks like when it becomes real love, reverence, and mission."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {saints.map((saint) => (
          <article key={saint.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{saint.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{saint.description}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Eucharistic virtue:</span> {saint.virtue}
            </p>
            <p className="mt-3 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {saint.imitation}
            </p>
            <TrackedLink href={saint.href} className="btn btn-secondary focus-ring mt-5 justify-center">
              Learn more
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
