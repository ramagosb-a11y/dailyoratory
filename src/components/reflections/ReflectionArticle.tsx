import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { formatDate } from "@/lib/format";
import { getReflectionKindLabel } from "@/lib/reflections";
import type { DailyOratoryContentRecord } from "@/lib/content";
import type { DailyReflectionRecord } from "@/types/reflections";

export function ReflectionArticle({
  reflection,
  related,
}: {
  reflection: DailyReflectionRecord;
  related: DailyOratoryContentRecord[];
}) {
  return (
    <div className="paper-texture">
      <article className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Reflections", href: "/reflections" }, { label: reflection.title }]} />
        <header className="mt-8 border-b border-stone pb-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-sm bg-burgundy px-3 py-1 text-xs font-bold uppercase text-ivory">
              {getReflectionKindLabel(reflection.reflectionKind)}
            </span>
            <span className="season-pill">{reflection.season}</span>
            <span className="season-pill">{formatDate(reflection.date)}</span>
          </div>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {reflection.title}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-normal text-burgundy">{reflection.liturgicalDay}</p>
          <p className="mt-5 text-lg leading-8 text-muted">{reflection.excerpt}</p>
          <div className="mt-6 rounded-md border border-stone bg-parchment p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Scripture references</p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-navy">
              {reflection.scriptureReferences.map((reference) => (
                <li key={`${reference.label}-${reference.citation}`}>
                  <span className="font-bold">{reference.label}:</span> {reference.citation}
                </li>
              ))}
            </ul>
            <Link
              href={reflection.externalReadingsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link focus-ring mt-4 inline-flex text-sm"
            >
              Open official daily readings
            </Link>
          </div>
        </header>

        <div className="content-prose resource-markdown mt-8 space-y-6">
          <p className="text-sm font-semibold text-muted">
            Daily Oratory provides Scripture references and original reflections. It does not republish copyrighted
            readings.
          </p>
          {reflection.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <section className="card-parchment p-5">
            <h2>Reflection questions</h2>
            <ul className="list-disc space-y-2">
              {reflection.reflectionQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>

          <section className="prayer-card p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">Prayer</h2>
            <p className="prayer-text mt-4">{reflection.prayer}</p>
          </section>
        </div>
      </article>
      <RelatedContent records={related} />
    </div>
  );
}
