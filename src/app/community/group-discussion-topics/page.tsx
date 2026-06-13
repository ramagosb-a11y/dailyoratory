import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DiscussionTopicCard } from "@/components/community/DiscussionTopicCard";
import { getPublishedDiscussionTopics } from "@/lib/community";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Group Discussion Topics",
  description: "Catholic group discussion topics for prayer communities, parish groups, families, and formation teams.",
  path: "/community/group-discussion-topics",
});

export default function GroupDiscussionTopicsPage() {
  const topics = getPublishedDiscussionTopics();

  return (
    <main className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Community", href: "/community" }, { label: "Group Discussion Topics" }]} />
        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-bold uppercase text-burgundy">Group discussion topics</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Conversation shaped by prayer.
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">
            Each topic gives a group a simple prayer, Scripture reference, reflection questions, and facilitator notes
            for reverent Catholic conversation.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-2">
          {topics.map((topic) => (
            <DiscussionTopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>
    </main>
  );
}
