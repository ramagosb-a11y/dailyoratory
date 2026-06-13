import { whatIsDailyExamenPoints } from "@/data/dailyExamenPage";
import { ExamenCardGrid, ExamenSection } from "@/components/daily-examen/DailyExamenUi";

export function WhatIsDailyExamen() {
  return (
    <ExamenSection
      eyebrow="Ignatian prayer"
      title="What Is the Daily Examen?"
      summary="The Daily Examen is a prayerful review of the day in God's presence. It is especially associated with Saint Ignatius of Loyola and Ignatian spirituality, but anyone can use it as a simple way to grow in awareness, gratitude, repentance, and trust."
    >
      <ExamenCardGrid columns="md:grid-cols-2 xl:grid-cols-4">
        {whatIsDailyExamenPoints.map((point) => (
          <article key={point} className="card-parchment h-full p-5">
            <p className="text-sm leading-7 text-muted">{point}</p>
          </article>
        ))}
      </ExamenCardGrid>
    </ExamenSection>
  );
}

