import Link from "next/link";
import { LiturgicalColorPill } from "@/components/liturgical-living/LiturgicalLivingCards";
import { getCurrentSeasonSuggestion } from "@/lib/liturgicalSeasonsGuide";

export function SeasonsHero() {
  const suggestedSeason = getCurrentSeasonSuggestion();

  return (
    <section className="liturgical-page-hero dashboard-card overflow-hidden p-5 sm:p-8 lg:p-10">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Liturgical living</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Live the Church Year
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:leading-8">
            Learn the seasons of the Catholic liturgical year and discover how to pray, prepare,
            celebrate, and grow with the Church.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            If you are curious about Catholic life, the liturgical year is one of the gentlest ways
            to begin. It teaches the story of Christ slowly, season by season, and helps families
            and seekers find a prayerful rhythm.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#season-quick-cards" className="btn btn-primary focus-ring justify-center">
              Explore the Seasons
            </Link>
            <Link href="/today" className="btn btn-secondary focus-ring justify-center">
              Today in the Church
            </Link>
            <Link href="#family-liturgical-ideas" className="btn btn-secondary focus-ring hidden justify-center sm:inline-flex">
              Family Liturgical Ideas
            </Link>
          </div>
        </div>
        <aside className="card-parchment p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Seasonal starting point</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-navy sm:text-3xl">{suggestedSeason.title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{suggestedSeason.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestedSeason.liturgicalColor.map((color, index) => (
              <LiturgicalColorPill key={`${suggestedSeason.id}-${color}-${index}`} color={color} />
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">{suggestedSeason.mindset}</p>
          <Link href={`#${suggestedSeason.slug}`} className="text-link focus-ring mt-4 inline-flex text-sm">
            Go to this season
          </Link>
        </aside>
      </div>
    </section>
  );
}
