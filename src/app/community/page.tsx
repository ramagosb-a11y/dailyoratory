import type { Metadata } from "next";
import Link from "next/link";
import { DiscussionTopicCard } from "@/components/community/DiscussionTopicCard";
import { EventCard } from "@/components/community/EventCard";
import { LocalFaithGroupCard } from "@/components/community/LocalFaithGroupCard";
import { SectionHeader } from "@/components/section-header";
import {
  getPublishedDiscussionTopics,
  getPublishedLocalFaithGroups,
  getUpcomingEvents,
} from "@/lib/community";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Community",
  description: "Join live prayer, find Catholic events, and gather with local faith groups.",
  path: "/community",
});

const communityActions = [
  {
    title: "Find an event",
    description: "See upcoming live prayer, formation, and local gatherings.",
    href: "/community/events",
  },
  {
    title: "Start a group discussion",
    description: "Use reverent prompts for parish groups, families, and formation teams.",
    href: "/community/group-discussion-topics",
  },
];

export default function CommunityPage() {
  const events = getUpcomingEvents().slice(0, 3);
  const groups = getPublishedLocalFaithGroups().slice(0, 2);
  const topics = getPublishedDiscussionTopics().slice(0, 2);

  return (
    <main className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Community</p>
            <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Pray with the Church and gather with others.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Daily Oratory supports reverent Catholic community through prayer intentions, local faith groups,
              events, and discussion guides for formation teams.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/prayer-intentions" className="btn btn-primary focus-ring">
                Prayer intentions
              </Link>
              <Link href="/community/events" className="btn btn-secondary focus-ring">
                View events
              </Link>
            </div>
          </div>
          <aside className="card-parchment p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Community note</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Online tools should serve real Christian charity. Community features are designed for moderation,
              privacy, and peaceful participation before public scale.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityActions.map((action) => (
            <Link key={action.href} href={action.href} className="card resource-card focus-ring p-5">
              <span className="font-display text-3xl font-semibold text-navy">{action.title}</span>
              <span className="mt-3 block text-sm leading-7 text-muted">{action.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Upcoming events"
              title="Gather for prayer and formation"
              summary="Upcoming events include live prayer, trusted Catholic webinars, and community gatherings for formation and fellowship."
            />
            <Link href="/community/events" className="btn btn-secondary focus-ring">
              All events
            </Link>
          </div>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                eyebrow="Local groups"
                title="Find a place to gather"
                summary="Use the directory pattern for parish groups, home circles, hybrid Scripture groups, and prayer teams."
              />
              <Link href="/community/local-faith-groups" className="btn btn-secondary focus-ring">
                Groups
              </Link>
            </div>
            <div className="mt-7 grid gap-4">
              {groups.map((group) => (
                <LocalFaithGroupCard key={group.id} group={group} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Group discussion"
              title="Formation prompts for peaceful conversation"
              summary="Each topic gives facilitators a prayer, Scripture reference, reflection questions, and gentle boundaries."
            />
            <Link href="/community/group-discussion-topics" className="btn btn-secondary focus-ring">
              Discussion topics
            </Link>
          </div>
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {topics.map((topic) => (
              <DiscussionTopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="dashboard-card grid gap-5 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Contact</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Build a daily Catholic home with care.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              Send questions about events, group listings, prayer support, or community formation workflows.
            </p>
          </div>
          <Link href="/community/contact" className="btn btn-primary focus-ring">
            Contact Daily Oratory
          </Link>
        </div>
      </section>
    </main>
  );
}
