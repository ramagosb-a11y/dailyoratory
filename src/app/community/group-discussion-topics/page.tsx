import { EditorialPage, EditorialHero, EditorialSection, EditorialLinks } from "@/components/editorial/Editorial";
import type { Metadata } from "next";
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

  return <EditorialPage longform breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Group Discussion Topics" }]}>
    <EditorialHero eyebrow="Gather. Listen. Reflect." title="Conversation shaped by prayer." description="A simple starting point for parish groups, families, and prayer communities. Choose a topic, open its guide, and make room for every voice." image="/images/editorial/group-discussion.webp" imageAlt="A place for shared prayer and conversation" actions={[{ label: "Choose a discussion", href: "#discussion-topics" }, { label: "Facilitator guidance", href: "#gather-well" }]} />
    <EditorialSection id="discussion-topics" eyebrow="Choose your gathering" title="A conversation worth having"><EditorialLinks links={topics.map((topic) => ({ label: topic.title, href: "#" + topic.slug }))} />{topics.map((topic) => <DiscussionTopicCard key={topic.id} topic={topic} />)}{topics.length === 0 && <p className="text-base leading-8 text-muted">Discussion guides are being prepared. Explore the prayer library while you wait.</p>}</EditorialSection>
    <EditorialSection id="gather-well" eyebrow="Make room for one another" title="Gather with care." description="Begin with the opening prayer. Let each person choose whether to speak, listen without pressure, and keep the discussion grounded in its Scripture reference."><p className="text-base leading-8 text-muted">No one needs to share private sins, a confession, or personal spiritual details. A group discussion does not replace sacramental Confession, spiritual direction, or pastoral care.</p><EditorialLinks links={[{ label: "Prayer library", href: "/pray" }, { label: "Catholic formation", href: "/formation" }, { label: "Community", href: "/community" }]} /></EditorialSection>
  </EditorialPage>;
}
