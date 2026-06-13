import { SectionHeader } from "@/components/section-header";
import { saintsForFamilies } from "@/data/familyPage";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function SaintsForFamilies() {
  return (
    <section>
      <SectionHeader
        eyebrow="Saint companions"
        title="Saints for Families"
        summary="Families do not walk alone. The saints show how holiness can grow in kitchens, marriages, grief, work, and ordinary duty."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {saintsForFamilies.map((saint) => (
          <article key={saint.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{saint.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{saint.reason}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Virtue to imitate:</span> {saint.virtue}
            </p>
            <p className="mt-3 rounded-md border border-gold/30 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {saint.prayer}
            </p>
            <TrackedLink href={saint.href} className="btn btn-secondary focus-ring mt-5 justify-center">
              Learn more
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
