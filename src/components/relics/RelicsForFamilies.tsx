import { SectionHeader } from "@/components/section-header";
import { getRelicFamilyIdeas } from "@/lib/relics";
import { RelicLinkRow } from "@/components/relics/shared";

export function RelicsForFamilies() {
  const ideas = getRelicFamilyIdeas();

  return (
    <section>
      <SectionHeader
        eyebrow="Families"
        title="Teaching Children About Relics"
        summary="Children can learn that relics remind us saints were real people who loved Jesus. Keep explanations simple and peaceful."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ideas.map((idea) => (
          <article key={idea} className="card-parchment p-5 text-sm leading-7 text-muted">
            {idea}
          </article>
        ))}
      </div>
      <RelicLinkRow links={[{ label: "Family", href: "/family" }, { label: "Saints", href: "/saints" }, { label: "Prayer", href: "/pray" }]} />
    </section>
  );
}
