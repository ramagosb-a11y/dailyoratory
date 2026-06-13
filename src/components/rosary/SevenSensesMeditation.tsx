import { RosarySection, getRosaryAccentClasses } from "@/components/rosary/RosaryUi";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function SevenSensesMeditation({
  group,
  mystery,
}: {
  group: RosaryMysteryGroup;
  mystery: RosaryMystery;
}) {
  const meditationItems = mystery.sensoryMeditation
    ? mystery.sensoryMeditation
        .slice()
        .sort((first, second) => first.sortOrder - second.sortOrder)
    : [];

  return (
    <RosarySection
      id="seven-senses-meditation"
      eyebrow="Seven-senses meditation"
      title="Seven-Senses Deep Meditation Journey"
      summary="Remain prayerfully within the Gospel mystery and let the Holy Spirit deepen your contemplation."
    >
      <div className="rounded-md border border-gold/35 bg-ivory/85 p-6 sm:p-7">
        <p className="daily-readable-muted">
          Take your time. You do not need to answer every question. Let one image, word, or grace remain with you.
        </p>
      </div>
      <div className="mt-6 space-y-4">
        {meditationItems.length ? (
          meditationItems.map((item) => (
            <article
              key={item.id}
              className={`rounded-md border p-6 shadow-soft ${getRosaryAccentClasses(group.colorAccent)}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{item.label}</p>
              {item.subtitle ? <p className="mt-3 text-lg font-semibold uppercase tracking-[0.16em] text-[#4b443a]">{item.subtitle}</p> : null}
              <div className="daily-card-readable mt-4 space-y-5">
                {item.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))
        ) : (
          <article className={`rounded-md border p-6 shadow-soft ${getRosaryAccentClasses(group.colorAccent)}`}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Meditation Coming Soon</p>
            <div className="daily-card-readable mt-4 space-y-5">
              <p>
                A full Seven-Senses Deep Meditation Journey for this mystery is being prepared. For now,
                remain quietly with Jesus and Mary, ask for the fruit of this mystery, and pray this
                decade with faith and love.
              </p>
            </div>
          </article>
        )}
      </div>
    </RosarySection>
  );
}
