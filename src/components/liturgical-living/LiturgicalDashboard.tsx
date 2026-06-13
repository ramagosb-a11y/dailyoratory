import Link from "next/link";
import {
  ActionCard,
  DashboardResourceCard,
  HolyDayList,
  LiturgicalColorPill,
  LiturgicalSubnav,
  VerificationNote,
} from "@/components/liturgical-living/LiturgicalLivingCards";
import { formatRank, type LiturgicalDashboardModel } from "@/lib/liturgicalLiving";

export function LiturgicalDashboard({ model }: { model: LiturgicalDashboardModel }) {
  const { day, season } = model;
  const fasting = day.fastingReminder;

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <LiturgicalSubnav />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="dashboard-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase text-burgundy">Today in the Church</p>
            <p className="mt-3 text-sm font-semibold text-muted">{model.dateLabel}</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              {day.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{day.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Fact label="Liturgical day" value={day.title} />
              <Fact label="Current season" value={season.title} />
              <Fact label="Rank" value={formatRank(day.rank)} />
              <Fact label="Saint or feast" value={day.saintOrFeast ?? "Verify local calendar"} />
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase text-burgundy">Liturgical color</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {day.colors.map((color) => (
                  <LiturgicalColorPill key={color} color={color} />
                ))}
              </div>
            </div>

            <div className="mt-7 border-t border-stone pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase text-burgundy">Daily readings</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    References only. Read the full Mass readings at the official source.
                  </p>
                </div>
                <a href={model.officialReadingsUrl} target="_blank" rel="noreferrer" className="btn btn-primary focus-ring">
                  Open official readings
                </a>
              </div>
              {day.readings?.length ? (
                <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                  {day.readings.map((reading) => (
                    <div key={`${reading.label}-${reading.citation}`} className="card-parchment p-4">
                      <dt className="text-xs font-bold uppercase text-burgundy">{reading.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-navy">{reading.citation}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-4 text-sm leading-7 text-muted">{day.massReadingsCitation}</p>
              )}
            </div>
          </article>

          <div className="grid gap-4">
            <VerificationNote note={model.verificationNote} />
            <ActionCard eyebrow="Suggested prayer" action={day.suggestedPrayer} />
            <ActionCard eyebrow="Suggested devotion" action={day.suggestedDevotion} />
            <ActionCard eyebrow="Seasonal practice" action={day.seasonalPractice} />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Fasting and abstinence</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{fasting?.title ?? "Verify local observances"}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {fasting?.description ?? "Check your diocese and official calendar for fasting or abstinence obligations."}
            </p>
          </section>

          <section className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Upcoming holy days</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Prepare the next feast</h2>
            <div className="mt-5">
              <HolyDayList holyDays={model.upcomingHolyDays} />
            </div>
          </section>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ActionCard eyebrow="Family prayer idea" action={day.familyPrayerIdea} />
          <ActionCard eyebrow="Works of mercy" action={day.worksOfMercySuggestion} />
        </div>

        <section className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-burgundy">Featured resources</p>
              <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Pray and live this day</h2>
            </div>
            <Link href="/library?category=Liturgical%20Year" className="text-link focus-ring text-sm">
              Explore seasonal resources
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {model.featuredResources.map((resource) => (
              <DashboardResourceCard key={resource.id} record={resource} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-parchment p-4">
      <p className="text-xs font-bold uppercase text-burgundy">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-navy">{value}</p>
    </div>
  );
}
