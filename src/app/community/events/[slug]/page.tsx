import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetail } from "@/components/community/EventDetail";
import { getEventBySlug, getPublishedEvents } from "@/lib/community";
import { createPageMetadata } from "@/lib/metadata";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return createPageMetadata({ title: "Event", path: "/community/events" });

  return createPageMetadata({
    title: event.title,
    description: event.description,
    path: `/community/events/${event.slug}`,
  });
}

export default async function CommunityEventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  return <EventDetail event={event} />;
}
