import Link from "next/link";
import { LiturgicalColorPill } from "@/components/liturgical-living/LiturgicalLivingCards";
import type { LiturgicalSeasonGuide } from "@/types/liturgicalSeasonsGuide";

export function SeasonGuideSection({ guide }: { guide: LiturgicalSeasonGuide }) {
  return (
    <section id={guide.slug} className="scroll-mt-28 border-t border-stone/70 pt-10">
      <div className="lg:hidden">
        <details className="dashboard-card overflow-hidden" name="season-guide-mobile">
          <summary className="cursor-pointer list-none p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Season guide</p>
            <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{guide.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{guide.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {guide.liturgicalColor.map((color, index) => (
                <LiturgicalColorPill key={`${guide.id}-${color}-${index}`} color={color} />
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-burgundy">Tap to open this season</p>
          </summary>
          <div className="border-t border-stone/70 px-5 py-5">
            <SeasonGuideContent guide={guide} compact />
          </div>
        </details>
      </div>

      <div className="hidden lg:block">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Season guide</p>
            <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              {guide.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{guide.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {guide.liturgicalColor.map((color, index) => (
              <LiturgicalColorPill key={`${guide.id}-${color}-${index}`} color={color} />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <SeasonGuideContent guide={guide} />
        </div>
      </div>
    </section>
  );
}

function SeasonGuideContent({
  guide,
  compact = false,
}: {
  guide: LiturgicalSeasonGuide;
  compact?: boolean;
}) {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <article className={`dashboard-card ${compact ? "p-5" : "p-6 sm:p-8"}`}>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Season mindset</p>
          <p className="mt-2 text-lg font-semibold leading-8 text-navy">{guide.mindset}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{guide.howToLookAtSeason}</p>
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Key themes</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {guide.keyThemes.map((theme) => (
                <span key={theme} className="season-pill bg-ivory px-3 py-2 text-sm font-semibold text-navy">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </article>
        <article className={`dashboard-card ${compact ? "p-5" : "p-6 sm:p-8"}`}>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">What to do in this season</p>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
            {guide.thingsToDo.map((item) => (
              <li key={item} className="card-parchment px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <SeasonListCard title="Major days and customs" items={guide.majorDays} />
        <SeasonListCard title="Special Masses and liturgies" items={guide.specialMasses} />
        <SeasonListCard title="Seasonal prayer suggestions" items={guide.prayers} />
        <SeasonListCard title="Seasonal works of mercy" items={guide.worksOfMercy} />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <article className={`dashboard-card ${compact ? "p-5" : "p-6"}`}>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Family and home ideas</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {guide.familyIdeas.map((idea) => (
              <li key={idea} className="card-parchment px-4 py-3">
                {idea}
              </li>
            ))}
          </ul>
        </article>
        <article className={`dashboard-card ${compact ? "p-5" : "p-6"}`}>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Daily Oratory connections</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {guide.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card-parchment focus-ring block px-4 py-4">
                <span className="text-sm font-semibold text-navy">{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-5 rounded-md border border-stone bg-parchment px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Season note</p>
            {guide.sourceNotes.map((note) => (
              <p key={note} className="mt-2 text-sm leading-7 text-muted">
                {note}
              </p>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

function SeasonListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{title}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted marker:text-burgundy">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
