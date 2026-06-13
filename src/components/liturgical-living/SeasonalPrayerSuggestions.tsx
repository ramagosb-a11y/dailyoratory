import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { seasonalPrayerSuggestions } from "@/data/liturgicalSeasonPractices";

const prayerLinks: Record<string, string> = {
  advent: "/library",
  christmas: "/library",
  lent: "/way-of-cross",
  "holy-week": "/adoration",
  triduum: "/adoration/prayers",
  easter: "/divine-mercy",
  "ordinary-time": "/daily-examen",
  "ordinary-time-after-pentecost": "/rule-of-life",
};

export function SeasonalPrayerSuggestions() {
  return (
    <section id="seasonal-prayer-suggestions" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Prayer through the year"
        title="Seasonal Prayer Suggestions"
        summary="A few well-chosen prayers can help each season become more personal, peaceful, and faithful."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {seasonalPrayerSuggestions.map((group) => (
          <article key={group.title} className="dashboard-card p-5">
            <h3 className="text-lg font-semibold text-navy">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {group.suggestions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link href={prayerLinks[group.season]} className="text-link focus-ring mt-4 inline-flex text-sm">
              Open related prayer help
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
