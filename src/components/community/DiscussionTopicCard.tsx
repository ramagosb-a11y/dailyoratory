import type { GroupDiscussionTopicRecord } from "@/types/community";

export function DiscussionTopicCard({ topic }: { topic: GroupDiscussionTopicRecord }) {
  return (
    <article id={topic.slug} className="card resource-card scroll-mt-28 p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <span className="season-pill">{topic.durationMinutes} minutes</span>
        {topic.scriptureReference ? <span className="season-pill">{topic.scriptureReference}</span> : null}
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">{topic.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{topic.description}</p>
      <div className="mt-5 rounded-md border border-stone bg-parchment p-4">
        <p className="text-xs font-bold uppercase text-burgundy">Opening prayer</p>
        <p className="mt-2 font-display text-2xl leading-8 text-navy">{topic.openingPrayer}</p>
      </div>
      <div className="mt-5 grid gap-3">
        {topic.questions.map((question) => (
          <p key={question} className="rounded-md border border-stone bg-ivory p-3 text-sm leading-6 text-muted">
            {question}
          </p>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {topic.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="season-pill">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
