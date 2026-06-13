import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { dailyExamenHero } from "@/data/dailyExamenPage";

export function DailyExamenHero() {
  return (
    <section className="card-parchment overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
            {dailyExamenHero.eyebrow}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {dailyExamenHero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-navy">{dailyExamenHero.subtitle}</p>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-muted">{dailyExamenHero.copy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              href="#daily-examen-guide"
              className="btn btn-gold focus-ring justify-center"
              eventName="daily_examen_start"
              eventParams={{
                category: "hero",
                item_slug: "start-the-examen",
                source: "/daily-examen",
                destination: "#daily-examen-guide",
              }}
            >
              Start the Examen
            </TrackedLink>
            <Link href="#quick-examen" className="btn btn-secondary focus-ring justify-center">
              5-Minute Version
            </Link>
            <Link href="#journal-prompts" className="btn btn-secondary focus-ring justify-center">
              Journal Prompts
            </Link>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Gentle note</p>
          <p className="mt-3 text-sm leading-7 text-muted">{dailyExamenHero.note}</p>
        </aside>
      </div>
    </section>
  );
}
