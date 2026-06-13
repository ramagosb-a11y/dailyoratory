import Link from "next/link";
import { MassReflectionRichBody } from "@/components/reflections/MassReflectionRichBody";
import { MassReflectionTypeBadge } from "@/components/reflections/MassReflectionTypeBadge";
import { formatDate } from "@/lib/format";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function TodayMassReflectionFull({ reflection }: { reflection: MassReadingsReflection }) {
  return (
    <section className="card-parchment mt-5 p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Full reflection</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <MassReflectionTypeBadge type={reflection.reflectionType} />
        <span className="season-pill">{reflection.liturgicalSeason}</span>
        <span className="season-pill">{formatDate(reflection.reflectionDate)}</span>
      </div>

      <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        {reflection.title}
      </h2>
      <p className="mt-4 text-sm font-semibold uppercase tracking-normal text-burgundy">
        {reflection.liturgicalDay}
        {reflection.lectionaryNumber ? ` - Lectionary: ${reflection.lectionaryNumber}` : ""}
      </p>
      <p className="mt-5 max-w-4xl text-base leading-8 text-muted">{reflection.shortDescription}</p>

      <div className="mt-6 rounded-md border border-gold/60 bg-ivory/80 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Mass readings</p>
        <ul className="mt-3 grid gap-2 text-sm leading-7 text-navy">
          {reflection.readings.map((reading) => (
            <li key={`${reading.label}-${reading.reference}`}>
              <span className="font-bold">{reading.label}:</span> {reading.reference}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={reflection.externalReadingsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary focus-ring justify-center"
          >
            Read official Mass readings
          </a>
          <Link
            href={`/reflections/mass-readings/${reflection.slug}`}
            className="btn btn-secondary focus-ring justify-center"
          >
            Open reflection page
          </Link>
        </div>
      </div>

      <p className="mt-6 text-sm leading-7 text-muted">
        Daily Oratory uses Scripture references and original commentary. For the full lectionary readings,
        use the official Mass readings link above.
      </p>

      <div className="content-prose resource-markdown mt-8 space-y-6">
        <MassReflectionRichBody paragraphs={reflection.body} />
      </div>
    </section>
  );
}
