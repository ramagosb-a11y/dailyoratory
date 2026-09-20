import Link from "next/link";
import styles from "./TraditionGuide.module.css";
import { traditionGuideSources, traditionLessons, type TraditionGuideSourceId } from "@/data/traditionGuide";

const chapters = [
  { id: "meaning", title: "Meaning", description: "Understand what is being received.", lessons: traditionLessons.slice(0, 1) },
  { id: "transmission", title: "Transmission", description: "Follow how an inheritance reaches another generation.", lessons: traditionLessons.slice(1, 3) },
  { id: "continuity", title: "Continuity", description: "Explore development, evidence, and authority.", lessons: traditionLessons.slice(3) },
];

function SourceLinks({ ids }: { ids: TraditionGuideSourceId[] }) {
  return (
    <p className="mt-6 text-sm leading-7 text-muted">
      <span className="font-semibold text-navy">Read the sources: </span>
      {ids.map((id, index) => (
        <span key={id}>
          {index > 0 ? " · " : ""}
          <a href={traditionGuideSources[id].href} className="focus-ring rounded-sm underline decoration-gold/70 underline-offset-4 hover:text-navy">
            {traditionGuideSources[id].label}
          </a>
        </span>
      ))}
    </p>
  );
}

function TransmissionDiagram() {
  const connections = [
    { title: "Teaching", description: "Explaining and receiving" },
    { title: "Written witness", description: "Preserving and reading" },
    { title: "Worship", description: "Confessing and celebrating" },
    { title: "Community", description: "Learning and living" },
  ];
  return (
    <figure className="my-8 rounded-2xl border border-gold/35 bg-navy p-5 text-ivory sm:p-7">
      <p className="font-display text-center text-2xl font-semibold">One faith, handed on together</p>
      <div aria-hidden="true" className="mx-auto h-7 w-px bg-gold/70" />
      <ul className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-gold/60 sm:grid-cols-4">
        {connections.map((connection) => (
          <li key={connection.title} className="relative pt-5 text-center before:absolute before:left-1/2 before:top-0 before:h-3 before:w-px before:bg-gold/60">
            <p className="text-sm font-semibold text-gold-soft">{connection.title}</p>
            <p className="mt-2 text-xs leading-6 text-ivory/85">{connection.description}</p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-6 border-t border-ivory/15 pt-4 text-sm leading-7 text-ivory/80">
        These are connected aspects of transmission, not stages that replace one another. Based on{" "}
        <a href={traditionGuideSources.revelation.href} className="focus-ring rounded-sm text-ivory underline underline-offset-4">Dei Verbum 7–8</a>.
      </figcaption>
    </figure>
  );
}

function LessonReading({ lesson }: { lesson: (typeof traditionLessons)[number] }) {
  return (
    <div className="mt-7">
      <div className="max-w-[65ch] space-y-7">
        {lesson.blocks.map((block) => (
          <div key={block.title}>
            <h4 className="text-lg font-semibold leading-7 text-navy">{block.title}</h4>
            <div className="mt-3 space-y-4 text-base leading-8 text-muted">
              {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        ))}
      </div>
      {lesson.id === "handing-on" ? <TransmissionDiagram /> : null}
      <p className="mt-7 max-w-[65ch] border-l-2 border-gold pl-4 text-base font-medium leading-8 text-navy">{lesson.takeaway}</p>
      <SourceLinks ids={lesson.sources} />
    </div>
  );
}

export function TraditionGuide() {
  return (
    <div className="mt-10 lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12 xl:gap-16">
      <nav aria-label="Tradition learning chapters" className="mb-10 self-start lg:sticky lg:top-28 lg:mb-0">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">In this guide</p>
        <ol className="mt-4 flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-0">
          {chapters.map((chapter, index) => (
            <li key={chapter.id} className="lg:border-b lg:border-stone/70">
              <a href={`#${chapter.id}`} className="focus-ring inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-navy underline-offset-4 hover:underline lg:flex lg:py-4">
                <span className="text-burgundy">0{index + 1}</span>{chapter.title}
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-5 hidden text-sm leading-7 text-muted lg:block">Five lessons. Begin at the top, or follow a question that interests you.</p>
      </nav>

      <div className="min-w-0 space-y-16">
        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} aria-labelledby={`${chapter.id}-heading`} className="scroll-mt-28">
            <div className="mb-7 border-b border-gold/35 pb-5">
              <h2 id={`${chapter.id}-heading`} className="font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">{chapter.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted">{chapter.description}</p>
            </div>
            <div className="space-y-8">
              {chapter.lessons.map((lesson) => {
                const isFirst = lesson.id === "meaning";
                return (
                  <article key={lesson.id} id={`${lesson.id}-lesson`} aria-labelledby={`${lesson.id}-title`} className={`scroll-mt-28 ${isFirst ? "" : "rounded-[1.5rem] border border-stone/70 bg-ivory p-6 shadow-[0_10px_30px_rgba(13,32,56,0.05)] sm:p-8"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Lesson {lesson.number}{lesson.id === "creed-example" ? " · A historical example" : ""}</p>
                    <h3 id={`${lesson.id}-title`} className="font-display mt-3 max-w-[30ch] text-3xl font-semibold leading-tight text-navy sm:text-4xl">{lesson.title}</h3>
                    <p className="mt-4 max-w-[65ch] text-base leading-8 text-muted">{lesson.summary}</p>
                    {isFirst ? <LessonReading lesson={lesson} /> : (
                      <details className="group mt-5">
                        <summary className={`focus-ring ${styles.lessonToggle}`}>
                          <span className="group-open:hidden">Read the full lesson</span>
                          <span className="hidden group-open:inline">Close the full lesson</span>
                          <span className="sr-only">: {lesson.title}</span>
                        </summary>
                        <LessonReading lesson={lesson} />
                      </details>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        <section aria-labelledby="continue-tradition-heading" className="rounded-[1.5rem] border border-gold/35 bg-parchment p-6 sm:p-8">
          <h2 id="continue-tradition-heading" className="font-display text-3xl font-semibold text-navy">Continue exploring Tradition</h2>
          <p className="mt-3 max-w-[65ch] text-base leading-8 text-muted">Meet early Christian witnesses, or explore how councils addressed questions about the faith handed on.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/church-fathers" className="btn btn-secondary focus-ring justify-center">Explore the Church Fathers</Link>
            <Link href="/councils" className="btn btn-secondary focus-ring justify-center">Explore the Councils</Link>
          </div>
        </section>

        <details id="tradition-resources" className="scroll-mt-28 border-t border-stone pt-5">
          <summary className="focus-ring min-h-11 cursor-pointer rounded-sm py-3 text-base font-semibold text-navy marker:text-burgundy">Sources and further reading</summary>
          <ul className="mt-4 space-y-5 pb-4">
            {Object.entries(traditionGuideSources).map(([id, source]) => (
              <li key={id}>
                <a href={source.href} className="focus-ring rounded-sm text-sm font-semibold text-navy underline decoration-gold underline-offset-4">{source.label}</a>
                <p className="mt-1 text-sm leading-7 text-muted">{source.title}</p>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}
