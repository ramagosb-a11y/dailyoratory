import { familyExamenPrayer, familyExamenQuestions } from "@/data/dailyExamenPage";
import { ExamenLinkPills, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function FamilyExamen() {
  return (
    <ExamenSection
      eyebrow="Domestic church"
      title="Family Examen"
      summary="Families can pray a short Examen together without making it heavy or shame-filled. Keep it simple and peaceful."
    >
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">A simple family format</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {familyExamenQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Short family prayer</h3>
          <p className="mt-4 text-base leading-8 text-navy">{familyExamenPrayer}</p>
          <div className="mt-6">
            <ExamenLinkPills
              links={[
                { label: "Family and Domestic Church", href: "/family" },
                { label: "Prayer", href: "/pray" },
              ]}
            />
          </div>
        </article>
      </div>
    </ExamenSection>
  );
}

