import { getExamenSituations } from "@/lib/dailyExamen";
import { ExamenCardGrid, ExamenLinkPills, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function ExamenSituations() {
  const situations = getExamenSituations();

  return (
    <ExamenSection
      eyebrow="For tonight"
      title="Choose an Examen for Tonight"
      summary="Some nights need more peace, some more honesty, and some more surrender. Let the focus stay small and gentle."
    >
      <ExamenCardGrid>
        {situations.map((situation) => (
          <article key={situation.id} className="card-parchment h-full p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{situation.title}</h3>
            <p className="mt-3 text-sm font-semibold text-navy">Focus: <span className="font-normal text-muted">{situation.focus}</span></p>
            <blockquote className="mt-4 rounded-2xl border border-gold/30 bg-ivory px-4 py-4 text-sm leading-7 text-navy">
              {situation.prayerLine}
            </blockquote>
            {situation.relatedLinks.length > 0 ? (
              <div className="mt-4">
                <ExamenLinkPills links={situation.relatedLinks} />
              </div>
            ) : null}
          </article>
        ))}
      </ExamenCardGrid>
    </ExamenSection>
  );
}

