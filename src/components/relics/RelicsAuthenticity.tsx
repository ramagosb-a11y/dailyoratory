import { SectionHeader } from "@/components/section-header";

const points = [
  "Some relics have documentation.",
  "Some have long tradition of veneration.",
  "Some claims are uncertain or disputed.",
  "Do not make exaggerated claims.",
  "Avoid online relic sales.",
  "Ask a parish, shrine, religious community, or diocese for guidance.",
] as const;

export function RelicsAuthenticity() {
  return (
    <section>
      <SectionHeader
        eyebrow="Authenticity"
        title="How Do We Know a Relic Is Authentic?"
        summary="Relic authenticity can be complex. Official relics are often accompanied by documentation, seals, or Church custody. Daily Oratory cannot verify relic authenticity."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {points.map((point) => (
          <article key={point} className="card-parchment p-5 text-sm leading-7 text-muted">
            {point}
          </article>
        ))}
      </div>
    </section>
  );
}
