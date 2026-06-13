import Link from "next/link";
import { getFathersByTopic } from "@/lib/churchFathers";
import type { ChurchFatherTopic } from "@/types/churchFathers";

export function ChurchFatherTopicGrid({ topics }: { topics: ChurchFatherTopic[] }) {
  return (
    <section id="topics">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Browse by topic</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Browse the Fathers by topic
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic) => {
          const fathers = getFathersByTopic(topic.slug);

          return (
            <article key={topic.id} className="card p-5">
              <h3 className="font-display text-3xl font-semibold text-navy">{topic.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{topic.description}</p>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase text-burgundy">Suggested Fathers</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-navy">
                  {fathers.slice(0, 5).map((father) => (
                    <li key={father.id}>{father.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 border-t border-stone pt-4">
                <p className="text-xs font-bold uppercase text-burgundy">Related Daily Oratory links</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topic.relatedDailyOratoryLinks.map((link) => (
                    <Link key={`${topic.id}-${link.href}`} href={link.href} className="focus-ring season-pill">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
