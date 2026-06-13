import { SectionHeader } from "@/components/section-header";
import { difficultFamilySeasons } from "@/data/familyPage";

export function DifficultFamilySeasons() {
  return (
    <section>
      <SectionHeader
        eyebrow="Pastoral care"
        title="When Family Life Is Hard"
        summary="The domestic church is not only for peaceful homes. Christ comes into wounded, tired, grieving, divided, and imperfect homes."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {difficultFamilySeasons.map((season) => (
          <article key={season.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{season.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{season.encouragement}</p>
            <div className="mt-4 grid gap-3">
              <p className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">One prayer step:</span> {season.prayerStep}
              </p>
              <p className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">One practical step:</span> {season.practicalStep}
              </p>
              <p className="rounded-md border border-burgundy/20 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">When to seek help:</span> {season.help}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-8 text-burgundy">
        If there is abuse, violence, coercion, or danger, seek immediate help. Faith should never be used to keep
        someone unsafe.
      </p>
    </section>
  );
}
