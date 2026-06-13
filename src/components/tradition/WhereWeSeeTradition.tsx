import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getTraditionConcepts } from "@/lib/tradition";

export function WhereWeSeeTradition() {
  const concepts = getTraditionConcepts();

  return (
    <section>
      <SectionHeader
        eyebrow="Living Tradition"
        title="Where Do We See Sacred Tradition?"
        summary="Tradition is not hidden away in one shelf of theology. It is visible in worship, sacraments, prayer, witness, doctrine, and the ordinary life of the Church."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {concepts.map((concept) => (
          <article key={concept.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{concept.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{concept.description}</p>
            {concept.relatedLinks[0] ? (
              <div className="mt-5">
                <Link href={concept.relatedLinks[0].href} className="btn btn-secondary focus-ring justify-center">
                  {concept.relatedLinks[0].label}
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
