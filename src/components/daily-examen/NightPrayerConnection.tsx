import { nightPrayerLinks } from "@/data/dailyExamenPage";
import { ExamenLinkPills, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function NightPrayerConnection() {
  return (
    <ExamenSection
      eyebrow="Night prayer"
      title="End with Night Prayer"
      summary="The Daily Examen pairs naturally with Catholic night prayer. After reviewing the day, you can pray a Psalm, the Our Father, a Marian prayer, or Night Prayer from the Liturgy of the Hours."
    >
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">A short ending</h3>
          <p className="mt-4 text-lg leading-8 text-navy">Into Your hands, Lord, I commend my spirit.</p>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Keep praying with the Church</h3>
          <div className="mt-4">
            <ExamenLinkPills links={nightPrayerLinks} />
          </div>
        </article>
      </div>
    </ExamenSection>
  );
}

