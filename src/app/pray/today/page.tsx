import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DailyPrayerActions } from "@/components/pray/DailyPrayerActions";
import { createPageMetadata } from "@/lib/metadata";
import { getDailyPrayerModel } from "@/lib/dailyPrayer";

export const revalidate = 900;

export const metadata: Metadata = createPageMetadata({
  title: "Today's Suggested Prayer",
  description:
    "Pray with a Daily Oratory suggested prayer shaped by today's liturgical day, Church season, and the rhythm of Catholic worship.",
  path: "/pray/today",
  keywords: [
    "today's prayer",
    "daily catholic prayer",
    "liturgical prayer",
    "daily oratory prayer",
    "prayer for today",
  ],
});

export default function TodayPrayerPage() {
  const prayer = getDailyPrayerModel();
  const prayerParagraphs = prayer.prayerBody.split("\n\n");

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Today's Prayer" }]} />

        <section className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Suggested prayer</p>
          <h1 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {prayer.prayerTitle}
          </h1>
          <p className="mt-4 text-lg text-navy">{prayer.liturgicalTitle}</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">{prayer.prayerLead}</p>
        </section>

        <section className="mt-12">
          <article className="card-parchment liturgical-card-accent mx-auto max-w-4xl p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Prayer</p>
            <div className="mt-6 space-y-5">
              {prayerParagraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(0, 24)}`}
                  className={`font-serif text-lg leading-9 text-navy sm:text-[1.2rem] ${
                    index === 0 ? "text-[1.35rem] italic text-burgundy sm:text-[1.5rem]" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <DailyPrayerActions prayerText={prayer.prayerTextForCopy} />
          </article>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            <article className="card-parchment p-5">
              <h2 className="font-display text-3xl font-semibold text-navy">Keep praying with the Church</h2>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="https://bible.usccb.org/daily-bible-reading" className="btn liturgical-button focus-ring justify-center">
                  Read Today's Readings
                </Link>
                <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">
                  Mass Readings Reflections
                </Link>
                <Link href="/pray" className="btn btn-secondary focus-ring justify-center">
                  Prayer Library
                </Link>
              </div>
            </article>

            <article className="card-parchment p-5">
              <h2 className="font-display text-3xl font-semibold text-navy">Pray this into life</h2>
              <div className="mt-4 space-y-3">
                {prayer.prompts.map((prompt, index) => (
                  <p key={`${index}-${prompt}`} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                    {prompt}
                  </p>
                ))}
              </div>
            </article>
          </div>

          <div className="grid gap-4">
            <article className="card-parchment p-5">
              <h2 className="font-display text-3xl font-semibold text-navy">How to pray with this</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                <li>1. Begin slowly and place yourself before God.</li>
                <li>2. Read the prayer once through without rushing.</li>
                <li>3. Stay with one line that draws you back to Christ.</li>
                <li>4. Let the prayer become one quiet act of fidelity today.</li>
              </ul>
            </article>

            <article className="card-parchment p-5">
              <h2 className="font-display text-3xl font-semibold text-navy">Keep going</h2>
              <div className="mt-4 flex flex-col gap-3">
                {prayer.relatedLinks.slice(1).map((link) => (
                  <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
