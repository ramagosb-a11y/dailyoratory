import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PrayerLibraryClient } from "@/components/prayers/PrayerLibraryClient";
import { SeasonalMarianPrayerCard } from "@/components/prayers/SeasonalMarianPrayerCard";
import { SeasonalPrayerRecommendations } from "@/components/prayers/SeasonalPrayerRecommendations";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { featuredPrayerIds, prayerLibraryCategories, prayerLibraryItems, prayerNeedCards } from "@/data/prayers";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Prayer Library | Daily Oratory",
  description:
    "Find Catholic prayers for morning, evening, meals, Confession, Mass, Holy Communion, the sick, the dead, anxiety, temptation, families, Mary, saints, litanies, novenas, and Psalms.",
  path: "/prayers",
  keywords: [
    "Catholic prayers",
    "prayer library",
    "morning prayer",
    "evening prayer",
    "Confession prayer",
    "Act of Contrition",
    "prayers for anxiety",
    "prayers for the dead",
    "Hail Mary",
    "Rosary",
    "novena",
    "litany",
  ],
});

const categoryCards = [
  { title: "Morning Prayers", category: "Daily Prayer", description: "Begin the day with surrender, gratitude, and trust in God." },
  { title: "Evening Prayers", category: "Daily Prayer", description: "End the day with thanksgiving, examination, and peace." },
  { title: "Meal Prayers", category: "Meals", description: "Bless food, family, and daily provision." },
  { title: "Confession Prayers", category: "Confession", description: "Prepare for mercy and thank Jesus after absolution." },
  { title: "Mass and Communion Prayers", category: "Mass and Eucharist", description: "Prepare for Mass and remain with Jesus after Communion." },
  { title: "Indulgence and Mercy Prayers", category: "Prayer and Mercy", description: "See prayers and devotions traditionally associated with indulgences, repentance, and charity." },
  { title: "Protection Prayers", category: "Protection", description: "Pray for protection, courage, discernment, and help in temptation or spiritual battle." },
  { title: "Prayers for Anxiety", category: "Anxiety and Suffering", description: "Pray for peace, trust, and the grace to take the next faithful step." },
  { title: "Prayers for the Sick", category: "The Sick and the Dead", description: "Ask Christ for healing, strength, and sacramental help." },
  { title: "Prayers for the Dead", category: "The Sick and the Dead", description: "Pray with hope for deceased loved ones and the faithful departed." },
  { title: "Family Prayers", category: "Family", description: "Pray for children, peace in the home, and charity within the family." },
  { title: "Marian Prayers", category: "Mary and Saints", description: "Pray with Mary and ask her to lead you to Jesus." },
  { title: "Saint Prayers", category: "Mary and Saints", description: "Ask the saints for intercession, courage, and fidelity." },
  { title: "Litanies", category: "Litanies and Novenas", description: "Repeated prayers of mercy, intercession, trust, humility, and hope.", href: "/prayers/litanies" },
  { title: "Novenas", category: "Novenas", description: "Begin a simple novena with perseverance and hope." },
  { title: "Psalms", category: "Psalms", description: "Pray the Psalms as cries of trust, repentance, and hope." },
  { title: "Liturgical Season Prayers", category: "Liturgical Year", description: "Find Advent, Christmas, Lent, Easter, Pentecost, and seasonal family prayer guides." },
];

const featuredPrayers = featuredPrayerIds
  .map((id) => prayerLibraryItems.find((item) => item.id === id))
  .filter((item) => Boolean(item));

export default function PrayersPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Prayer Library",
              description:
                "Find Catholic prayers for morning, evening, meals, Confession, Mass, Holy Communion, the sick, the dead, anxiety, temptation, families, Mary, saints, litanies, novenas, and Psalms.",
              path: "/prayers",
            }),
            buildArticleStructuredData({
              headline: "Catholic Prayer Library",
              description:
                "Find Catholic prayers for morning, evening, meals, Confession, Mass, Holy Communion, the sick, the dead, anxiety, temptation, families, Mary, saints, litanies, novenas, and Psalms.",
              path: "/prayers",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Catholic Prayer Library", path: "/prayers" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Catholic Prayer Library" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer Library</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Catholic Prayer Library</h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A simple place to find Catholic prayers for daily life, the sacraments, sorrow, hope, temptation, family, Mary, the saints, and the liturgical year.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            Prayer does not need to be complicated. Begin with one honest sentence to God, then let the Church&apos;s prayers carry you when words are hard to find.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#prayer-search" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Search Prayers
            </Link>
            <Link href="/devotions/holy-rosary" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Holy Rosary
            </Link>
            <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Confession Guide
            </Link>
          </div>
        </header>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer categories</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Browse by Category</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.description}</p>
                <div className="mt-5">
                  <a href={card.href ?? "#prayer-search"} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                    {card.href ? `Open ${card.title}` : `View ${card.category}`}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured prayers</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Begin With a Few Trusted Prayers</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredPrayers.map((prayer) => (
              <article key={prayer!.id} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{prayer!.category}</p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{prayer!.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{prayer!.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <SeasonalMarianPrayerCard />
        </div>

        <div className="mt-10">
          <SeasonalPrayerRecommendations />
        </div>

        <div className="mt-10">
          <PrayerLibraryClient prayers={prayerLibraryItems} categories={prayerLibraryCategories} needCards={prayerNeedCards} />
        </div>

        <section className="mt-14 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">How to begin praying</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Start simply and stay faithful.</h2>
          <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
            <li>Start with the Sign of the Cross.</li>
            <li>Speak honestly to God.</li>
            <li>Pray one traditional prayer slowly.</li>
            <li>Sit quietly for a moment.</li>
            <li>End by asking for grace to live faithfully today.</li>
          </ul>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related guides</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Continue with Daily Oratory</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "What Should I Do?", href: "/what-should-i-do" },
              { label: "Catholic Life Roadmap", href: "/catholic-life" },
              { label: "Catholic Q&A", href: "/catholic-answers" },
              { label: "Confession Guide", href: "/confession" },
              { label: "Holy Rosary", href: "/devotions/holy-rosary" },
              { label: "Prayers and Devotions with Indulgences", href: "/indulgences/prayers-and-devotions" },
              { label: "Sin and Temptation", href: "/sin-and-temptation" },
              { label: "Grace", href: "/formation/grace" },
              { label: "Sacramental Emergency", href: "/sacramental-emergency" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-3xl border border-stone bg-ivory/80 px-5 py-4 text-base font-semibold text-navy transition hover:border-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
