import { examenComparisonCards, examenComparisonLinks } from "@/data/dailyExamenPage";
import { ExamenCardGrid, ExamenLinkPills, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function ExamenVsExamination() {
  return (
    <ExamenSection
      eyebrow="Mercy and honesty"
      title="Daily Examen and Examination of Conscience"
      summary="Both are helpful, but they serve slightly different moments in Catholic life."
    >
      <ExamenCardGrid columns="lg:grid-cols-2">
        {examenComparisonCards.map((card) => (
          <article key={card.title} className="card-parchment h-full p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </ExamenCardGrid>
      <div className="mt-6">
        <ExamenLinkPills links={examenComparisonLinks} />
      </div>
    </ExamenSection>
  );
}

