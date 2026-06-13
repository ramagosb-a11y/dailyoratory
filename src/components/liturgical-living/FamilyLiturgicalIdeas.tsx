import { SectionHeader } from "@/components/section-header";
import { familyLiturgicalIdeas } from "@/data/liturgicalSeasonPractices";

export function FamilyLiturgicalIdeas() {
  return (
    <section id="family-liturgical-ideas" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="For the domestic Church"
        title="Family Liturgical Living Ideas"
        summary="Simple family customs can support parish worship and help the home move with the Church through the year."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {familyLiturgicalIdeas.map((idea) => (
          <article key={idea.id} className="dashboard-card p-5">
            <h3 className="text-lg font-semibold text-navy">{idea.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{idea.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">
        Family practices should support, not replace, participation in the liturgy and parish life.
      </p>
    </section>
  );
}
