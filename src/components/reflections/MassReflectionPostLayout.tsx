import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { MassReflectionRichBody } from "@/components/reflections/MassReflectionRichBody";
import { MassReflectionTypeBadge } from "@/components/reflections/MassReflectionTypeBadge";
import { getContentHref, type DailyOratoryContentRecord } from "@/lib/content";
import { formatDate } from "@/lib/format";
import type { MassReadingsReflection, ReflectionMediaRecord } from "@/types/massReadingsReflections";

export function MassReflectionPostLayout({
  reflection,
  related,
  media,
  previousReflection,
  nextReflection,
}: {
  reflection: MassReadingsReflection;
  related: DailyOratoryContentRecord[];
  media: ReflectionMediaRecord[];
  previousReflection?: MassReadingsReflection;
  nextReflection?: MassReadingsReflection;
}) {
  const hasConnectionBetweenReadings = reflection.connectionBetweenReadings.trim().length > 0;
  const hasTheologicalInsights = reflection.theologicalInsights.length > 0;
  const hasSpiritualInvitation = reflection.spiritualInvitation.trim().length > 0;
  const hasPracticalApplication = reflection.practicalApplication.length > 0;
  const hasPrayers = reflection.prayers.length > 0;

  return (
    <div className="paper-texture">
      <article className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Reflect", href: "/reflect" },
            { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
            { label: reflection.title },
          ]}
        />
        <header className="mt-8 border-b border-stone pb-8">
          <div className="flex flex-wrap gap-2">
            <MassReflectionTypeBadge type={reflection.reflectionType} />
            <span className="season-pill">{reflection.liturgicalSeason}</span>
            <span className="season-pill">{formatDate(reflection.reflectionDate)}</span>
          </div>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {reflection.title}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-normal text-burgundy">
            {reflection.liturgicalDay}
            {reflection.lectionaryNumber ? ` - Lectionary: ${reflection.lectionaryNumber}` : ""}
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">{reflection.shortDescription}</p>
          <div className="mt-6 rounded-md border border-stone bg-parchment p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Mass readings</p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-navy">
              {reflection.readings.map((reading) => (
                <li key={`${reading.label}-${reading.reference}`}>
                  <span className="font-bold">{reading.label}:</span> {reading.reference}
                </li>
              ))}
            </ul>
            <a
              href={reflection.externalReadingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link focus-ring mt-4 inline-flex text-sm"
            >
              Read today&apos;s Mass readings
            </a>
          </div>
        </header>

        <div className="content-prose resource-markdown mt-8 space-y-6">
          <p className="text-sm font-semibold text-muted">
            Daily Oratory provides Scripture references and original reflections. It does not republish
            full copyrighted lectionary readings.
          </p>
          <MassReflectionRichBody paragraphs={reflection.body} />

          {hasConnectionBetweenReadings ? (
            <section className="card-parchment p-5">
              <h2>Connection between the readings</h2>
              <p className="mt-3">{reflection.connectionBetweenReadings}</p>
            </section>
          ) : null}

          {hasTheologicalInsights ? (
            <section className="card-parchment p-5">
              <h2>Theological insights</h2>
              <ul className="mt-3 list-disc space-y-2">
                {reflection.theologicalInsights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {hasSpiritualInvitation ? (
            <section className="card-parchment p-5">
              <h2>Spiritual invitation</h2>
              <p className="mt-3">{reflection.spiritualInvitation}</p>
            </section>
          ) : null}

          {hasPracticalApplication ? (
            <section className="card-parchment p-5">
              <h2>Practical application</h2>
              <ul className="mt-3 list-disc space-y-2">
                {reflection.practicalApplication.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {reflection.saintOfDay || reflection.saintWitness ? (
            <section className="card-parchment p-5">
              <h2>Saint witness</h2>
              {reflection.saintOfDay ? <p className="mt-3 font-semibold text-navy">{reflection.saintOfDay}</p> : null}
              {reflection.saintWitness ? <p className="mt-3">{reflection.saintWitness}</p> : null}
            </section>
          ) : null}

          {hasPrayers
            ? reflection.prayers.map((prayer) => (
                <section key={prayer.title} className="prayer-card p-6">
                  <h2 className="font-display text-3xl font-semibold text-navy">{prayer.title}</h2>
                  <p className="prayer-text mt-4 whitespace-pre-line">{prayer.body}</p>
                </section>
              ))
            : null}

          {media.length > 0 ? (
            <section className="card-parchment p-5">
              <h2>Attachments</h2>
              <div className="mt-4 grid gap-3">
                {media.map((item) => (
                  <a
                    key={item.id}
                    href={item.fileUrl ?? item.embedUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded-md border border-stone bg-ivory p-4 hover:border-gold"
                  >
                    <span className="font-semibold text-navy">{item.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{item.description}</span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <nav className="mt-10 grid gap-4 border-t border-stone pt-8 sm:grid-cols-2">
          <div className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Previous reflection</p>
            {previousReflection ? (
              <Link
                href={`/reflections/mass-readings/${previousReflection.slug}`}
                className="focus-ring mt-3 inline-flex rounded-sm font-display text-2xl font-semibold text-navy hover:text-burgundy"
              >
                {previousReflection.title}
              </Link>
            ) : (
              <p className="mt-3 text-sm leading-7 text-muted">No earlier published reflection available.</p>
            )}
          </div>
          <div className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Next reflection</p>
            {nextReflection ? (
              <Link
                href={`/reflections/mass-readings/${nextReflection.slug}`}
                className="focus-ring mt-3 inline-flex rounded-sm font-display text-2xl font-semibold text-navy hover:text-burgundy"
              >
                {nextReflection.title}
              </Link>
            ) : (
              <p className="mt-3 text-sm leading-7 text-muted">No later reflection available yet.</p>
            )}
          </div>
        </nav>
      </article>
      <RelatedContent
        records={related.map((record) => ({
          ...record,
          canonicalPath: getContentHref(record),
        }))}
      />
    </div>
  );
}
