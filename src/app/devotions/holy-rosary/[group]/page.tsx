import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MysteryGroupGrid } from "@/components/rosary/MysteryGroupGrid";
import { RosaryPrayerRoomCTA } from "@/components/rosary/RosaryPrayerRoomCTA";
import { RosaryRelatedLinks } from "@/components/rosary/RosaryRelatedLinks";
import { RosaryMysteryGroupHero } from "@/components/rosary/RosaryMysteryGroupHero";
import { createPageMetadata } from "@/lib/metadata";
import { getMysteriesByGroup, getRosaryMysteryGroups } from "@/lib/rosary";

export function generateStaticParams() {
  return getRosaryMysteryGroups().map((group) => ({ group: group.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string }>;
}): Promise<Metadata> {
  const { group } = await params;
  const groupRecord = getRosaryMysteryGroups().find((item) => item.slug === group);
  if (!groupRecord) return {};

  return createPageMetadata({
    title: `${groupRecord.title} of the Rosary | Daily Oratory`,
    description: `Meditate on the five ${groupRecord.title}, with Scripture references, virtues, and links to each Rosary decade.`,
    path: `/devotions/holy-rosary/${groupRecord.slug}`,
  });
}

export default async function RosaryMysteryGroupPage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;
  const groupRecord = getRosaryMysteryGroups().find((item) => item.slug === group);
  if (!groupRecord) notFound();

  const mysteries = getMysteriesByGroup(group);

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Pray", href: "/pray" },
            { label: "Devotions", href: "/devotions" },
            { label: "Holy Rosary", href: "/devotions/holy-rosary" },
            { label: groupRecord.title },
          ]}
        />

        <div className="mt-8">
          <MysteryGroupGrid group={groupRecord} mysteries={mysteries} />
        </div>

        <div className="mt-14">
          <RosaryMysteryGroupHero group={groupRecord} />
        </div>

        <div className="mt-14">
          <RosaryPrayerRoomCTA
            eyebrow="Pray live"
            title={`Pray the ${groupRecord.title} in the Rosary Prayer Room`}
            description="When you want a quieter place to begin, return to the live Rosary Prayer Room and keep these mysteries before your heart."
            buttonLabel="Pray the Rosary Live"
            href="/rosary"
            eventName="rosary_prayer_room_click"
            eventParams={{ group_slug: groupRecord.slug, destination: "/rosary" }}
          />
        </div>

        <div className="mt-14">
          <RosaryRelatedLinks />
        </div>
      </main>
    </div>
  );
}
