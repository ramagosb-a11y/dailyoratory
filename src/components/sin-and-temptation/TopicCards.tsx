import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { SinTopic } from "@/types/sinAndTemptation";

export function TopicCards({ topics }: { topics: SinTopic[] }) {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {topics
        .slice()
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((topic) => (
          <TrackedLink
            key={topic.id}
            href={topic.href}
            eventName="sin_topic_open"
            eventParams={{ section: topic.category, destination: topic.href }}
            className="card-parchment focus-ring block p-6 transition hover:-translate-y-0.5 hover:border-gold"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{topic.category}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy">{topic.title}</h2>
            <p className="daily-card-readable mt-4 text-sm leading-7 text-muted">{topic.description}</p>
          </TrackedLink>
        ))}
    </section>
  );
}
