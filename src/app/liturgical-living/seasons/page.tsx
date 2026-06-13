import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LiturgicalSubnav } from "@/components/liturgical-living/LiturgicalLivingCards";
import { FamilyLiturgicalIdeas } from "@/components/liturgical-living/FamilyLiturgicalIdeas";
import { HolyDaysOfObligationGuide } from "@/components/liturgical-living/HolyDaysOfObligationGuide";
import { LiturgicalColorGuide } from "@/components/liturgical-living/LiturgicalColorGuide";
import { LiturgicalLocalVariationNotice } from "@/components/liturgical-living/LiturgicalLocalVariationNotice";
import { LiturgicalSources } from "@/components/liturgical-living/LiturgicalSources";
import { LiturgicalYearOverview } from "@/components/liturgical-living/LiturgicalYearOverview";
import { RelatedLiturgicalTools } from "@/components/liturgical-living/RelatedLiturgicalTools";
import { SeasonalPracticeBuilder } from "@/components/liturgical-living/SeasonalPracticeBuilder";
import { SeasonalPrayerSuggestions } from "@/components/liturgical-living/SeasonalPrayerSuggestions";
import { SeasonalWorksOfMercy } from "@/components/liturgical-living/SeasonalWorksOfMercy";
import { SeasonGuideSection } from "@/components/liturgical-living/SeasonGuideSection";
import { SeasonOAntiphonsCallout } from "@/components/liturgical-living/SeasonOAntiphonsCallout";
import { SeasonQuickCards } from "@/components/liturgical-living/SeasonQuickCards";
import { SeasonsHero } from "@/components/liturgical-living/SeasonsHero";
import { SpecialMassesAndCustoms } from "@/components/liturgical-living/SpecialMassesAndCustoms";
import { getLiturgicalSeasonGuides } from "@/lib/liturgicalSeasonsGuide";
import { createPageMetadata } from "@/lib/metadata";

const pageMetadata = createPageMetadata({
  title: "Liturgical Seasons Guide",
  description:
    "Learn how to live each Catholic liturgical season with prayer, holy days, devotions, family practices, and beginner-friendly guidance for anyone exploring the life of the Church.",
  path: "/liturgical-living/seasons",
});

export const metadata: Metadata = {
  ...pageMetadata,
  title: "Liturgical Seasons Guide | Daily Oratory",
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Live the Church Year",
    description:
      "A practical Catholic guide to Advent, Christmas, Lent, Holy Week, the Triduum, Easter, Ordinary Time, holy days, blessings, and seasonal practices.",
  },
  twitter: {
    ...pageMetadata.twitter,
    title: "Live the Church Year",
    description:
      "A practical Catholic guide to Advent, Christmas, Lent, Holy Week, the Triduum, Easter, Ordinary Time, holy days, blessings, and seasonal practices.",
  },
};

export default function LiturgicalSeasonsPage() {
  const seasonGuides = getLiturgicalSeasonGuides();
  const anchors = [
    { id: "what-is-the-liturgical-year", label: "What is the liturgical year?" },
    { id: "season-quick-cards", label: "Season quick cards" },
    { id: "liturgical-colors", label: "Liturgical color guide" },
    { id: "o-antiphons", label: "O Antiphons" },
    { id: "advent", label: "Advent" },
    { id: "christmas", label: "Christmas" },
    { id: "ordinary-time", label: "Ordinary Time" },
    { id: "lent", label: "Lent" },
    { id: "holy-week", label: "Holy Week" },
    { id: "triduum", label: "Triduum" },
    { id: "easter", label: "Easter" },
    { id: "holy-days", label: "Holy Days" },
    { id: "special-masses-customs", label: "Special Masses and customs" },
    { id: "seasonal-practice-builder", label: "Build a seasonal practice" },
    { id: "family-liturgical-ideas", label: "Family liturgical ideas" },
    { id: "seasonal-works-of-mercy", label: "Seasonal works of mercy" },
    { id: "seasonal-prayer-suggestions", label: "Seasonal prayer suggestions" },
    { id: "official-sources", label: "Official sources" },
  ];
  const mobileJumpLinks = [
    { id: "season-quick-cards", label: "Quick season guide" },
    { id: "advent", label: "Advent" },
    { id: "christmas", label: "Christmas" },
    { id: "ordinary-time", label: "Ordinary Time" },
    { id: "lent", label: "Lent" },
    { id: "holy-week", label: "Holy Week" },
    { id: "triduum", label: "Triduum" },
    { id: "easter", label: "Easter" },
  ];

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
        <Breadcrumbs items={[{ label: "Liturgical Year", href: "/liturgical-living" }, { label: "Liturgical Seasons" }]} />
        <div className="mt-6">
          <LiturgicalSubnav />
        </div>
        <SeasonsHero />

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <nav aria-label="On-page navigation" className="dashboard-card p-5 lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">On this page</p>
              <div className="mt-4 lg:space-y-2">
                {anchors.map((anchor) => (
                  <a
                    key={anchor.id}
                    href={`#${anchor.id}`}
                    className="season-pill focus-ring block bg-ivory px-3 py-2 text-sm font-semibold text-navy hover:border-gold hover:text-burgundy"
                  >
                    {anchor.label}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <div className="grid gap-10">
            <section className="lg:hidden">
              <details className="dashboard-card overflow-hidden">
                <summary className="cursor-pointer list-none px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Jump to a season</p>
                  <p className="mt-2 text-base font-semibold text-navy">Open a simple mobile guide</p>
                </summary>
                <div className="grid gap-2 border-t border-stone/70 px-4 py-4">
                  {mobileJumpLinks.map((anchor) => (
                    <a
                      key={anchor.id}
                      href={`#${anchor.id}`}
                      className="season-pill focus-ring block bg-ivory px-3 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-burgundy"
                    >
                      {anchor.label}
                    </a>
                  ))}
                </div>
              </details>
            </section>
            <LiturgicalYearOverview />
            <LiturgicalLocalVariationNotice note="The liturgical calendar can vary by country, diocese, and parish. Holy days of obligation, transferred feasts, patronal feasts, and local customs should be confirmed with your diocese or parish." />
            <SeasonQuickCards />
            <LiturgicalColorGuide />
            <div id="o-antiphons" className="scroll-mt-28">
              <SeasonOAntiphonsCallout
                title="O Antiphons"
                description="Pray the final seven days before Christmas with the ancient titles of Christ."
                buttonLabel="Pray the O Antiphons"
              />
            </div>
            {seasonGuides.map((guide) => (
              <SeasonGuideSection key={guide.id} guide={guide} />
            ))}
            <HolyDaysOfObligationGuide />
            <SpecialMassesAndCustoms />
            <SeasonalPracticeBuilder />
            <FamilyLiturgicalIdeas />
            <SeasonalWorksOfMercy />
            <SeasonalPrayerSuggestions />
            <RelatedLiturgicalTools />
            <LiturgicalSources />
          </div>
        </div>
      </main>
    </div>
  );
}
