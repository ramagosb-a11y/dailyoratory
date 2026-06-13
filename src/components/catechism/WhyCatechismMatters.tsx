import { SectionHeader } from "@/components/section-header";
import { getCatechismWhyItMatters } from "@/lib/catechism";

export function WhyCatechismMatters() {
  const reasons = getCatechismWhyItMatters();

  return (
    <section>
      <SectionHeader
        eyebrow="Why it matters"
        title="Why It Matters"
        summary="The Catechism is not meant to be a wall of information. It is a map that points toward Christ and the life of grace."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => (
          <div key={reason} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
