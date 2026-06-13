import { SectionHeader } from "@/components/section-header";
import { familyMissionCards } from "@/data/familyPage";

export function FamilyMissionCards() {
  return (
    <section>
      <SectionHeader
        eyebrow="Mission"
        title="The Mission of the Family"
        summary="The domestic church grows through prayer, mercy, witness, and ordinary daily fidelity."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {familyMissionCards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
