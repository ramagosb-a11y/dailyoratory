import { sevenDayDetachmentPractice } from "@/data/detachmentFromSin";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function SevenDayDetachmentPractice() {
  return (
    <IndulgenceSection
      id="seven-day-practice"
      eyebrow="One week of preparation"
      title="Seven-Day Detachment Practice"
      summary="A small path of prayer and surrender can help dispose the soul to receive God's grace more deeply."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sevenDayDetachmentPractice.map((day) => (
          <article key={day.id} className="card-parchment p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Day {day.day}</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{day.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{day.practice}</p>
            <p className="daily-readable-muted mt-4 text-sm italic leading-7 text-muted">{day.prayerPrompt}</p>
          </article>
        ))}
      </div>
    </IndulgenceSection>
  );
}
