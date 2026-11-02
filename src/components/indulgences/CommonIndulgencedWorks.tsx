import Link from "next/link";
import { getCommonIndulgencedWorks, isWithinJubilee2025, isWithinYearOfSaintFrancis2026 } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function CommonIndulgencedWorks() {
  const works = getCommonIndulgencedWorks().filter((work) =>
    (work.slug !== "jubilee-pilgrimage" || isWithinJubilee2025()) &&
    (work.slug !== "saint-francis-pilgrimage" || isWithinYearOfSaintFrancis2026()),
  );

  return (
    <IndulgenceSection
      id="common-indulgenced-works"
      eyebrow="Common indulgenced works"
      title="Common indulgenced works"
      summary="These are common Catholic practices often connected to indulgence grants. Always confirm the actual norms with the Church's authoritative sources."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {works.map((work) => (
          <article key={work.id} className="flex h-full flex-col border-t border-stone py-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{work.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{work.description}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">How to do it prayerfully:</span> {work.howToDoPrayerfully}
            </p>
            <p className="mt-3 text-xs leading-6 text-muted">{work.slug === "visit-a-church" ? "A church visit must satisfy a currently valid grant’s particular conditions. The 2025 Jubilee provisions are historical." : work.officialSourceNote}</p>
            <Link href={work.relatedDailyOratoryLink} className="btn btn-secondary focus-ring mt-5 justify-center">
              Open related page
            </Link>
          </article>
        ))}
      </div>
    </IndulgenceSection>
  );
}
