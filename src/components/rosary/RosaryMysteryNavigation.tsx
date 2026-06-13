import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { RosaryMystery, RosaryMysteryGroup } from "@/types/rosary";

export function RosaryMysteryNavigation({
  group,
  previousMystery,
  nextMystery,
}: {
  group: RosaryMysteryGroup;
  previousMystery?: RosaryMystery;
  nextMystery?: RosaryMystery;
}) {
  return (
    <section className="rounded-md border border-stone bg-ivory p-6 shadow-soft">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Keep praying</p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="grid gap-3">
          {previousMystery ? (
            <Link href={previousMystery.fullPath} className="btn btn-secondary focus-ring justify-center">
              Previous mystery: {previousMystery.title}
            </Link>
          ) : null}
          {nextMystery ? (
            <Link href={nextMystery.fullPath} className="btn btn-secondary focus-ring justify-center">
              Next mystery: {nextMystery.title}
            </Link>
          ) : null}
        </div>
        <div className="grid gap-3">
          <Link href={`/devotions/holy-rosary/${group.slug}`} className="btn btn-secondary focus-ring justify-center">
            Back to {group.title}
          </Link>
          <Link href="/devotions/holy-rosary" className="btn btn-secondary focus-ring justify-center">
            Full Rosary Guide
          </Link>
          <TrackedLink
            href="/rosary"
            eventName="rosary_prayer_room_click"
            eventParams={{ group_slug: group.slug, destination: "/rosary" }}
            className="btn btn-gold focus-ring justify-center"
          >
            Rosary Prayer Room
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
