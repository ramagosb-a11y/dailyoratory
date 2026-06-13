import type { FormationTopic } from "@/types/formation";
import Link from "next/link";

export function DoctrineFormationSection({ topics }: { topics: FormationTopic[] }) {
  return (
    <section id="doctrine" className="scroll-mt-28">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Doctrine</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Doctrine: Learn the faith
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
          Doctrine is not dry information. It is the truth God gives so we can know Him, love Him,
          worship Him rightly, and live as His children.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic) => (
          <article key={topic.id} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{topic.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{topic.summary}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">Beginner question</p>
            <p className="mt-1 text-sm leading-7 text-muted">{topic.beginnerQuestion}</p>
            <p className="mt-4 text-sm font-semibold text-burgundy">References</p>
            <p className="mt-1 text-sm leading-7 text-muted">{topic.catechismReferences}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {topic.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="season-pill">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
