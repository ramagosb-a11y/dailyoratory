"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { RosaryCard, RosaryCardGrid, RosarySection } from "@/components/rosary/RosaryUi";
import { getRosaryMysteryGroups } from "@/lib/rosary";

export function RosaryMysteryGroups() {
  const groups = getRosaryMysteryGroups();

  return (
    <RosarySection
      id="mysteries-of-the-rosary"
      eyebrow="The mysteries"
      title="Mysteries of the Rosary"
      summary="Each mystery is a doorway into the life of Christ."
    >
      <RosaryCardGrid columns="md:grid-cols-2">
        {groups.map((group) => (
          <RosaryCard
            key={group.slug}
            title={group.title}
            description={group.description}
            meta={
              group.traditionalDays.length > 1
                ? `Traditional days: ${group.traditionalDays.join(" and ")}`
                : `Traditional day: ${group.traditionalDays[0]}`
            }
            accent={group.colorAccent}
            className="h-full"
          >
            <p className="text-sm leading-7 text-navy">{group.theme}</p>
            <TrackedLink
              href={`/devotions/holy-rosary/${group.slug}`}
              eventName="rosary_mystery_group_click"
              eventParams={{ group_slug: group.slug, destination: `/devotions/holy-rosary/${group.slug}` }}
              className="btn btn-secondary focus-ring mt-6 justify-center"
            >
              Explore {group.title}
            </TrackedLink>
          </RosaryCard>
        ))}
      </RosaryCardGrid>
    </RosarySection>
  );
}
