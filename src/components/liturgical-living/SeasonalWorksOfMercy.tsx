import { SectionHeader } from "@/components/section-header";
import { seasonalWorksOfMercy } from "@/data/liturgicalSeasonPractices";

export function SeasonalWorksOfMercy() {
  return (
    <section id="seasonal-works-of-mercy" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Mercy in season"
        title="Seasonal Works of Mercy"
        summary="Every season invites concrete love of God and neighbor in a slightly different key."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {seasonalWorksOfMercy.map((group) => (
          <article key={group.title} className="dashboard-card p-5">
            <h3 className="text-lg font-semibold text-navy">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {group.suggestions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
