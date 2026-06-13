import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getMysteriesByGroup } from "@/lib/rosary";
import type { RosaryMystery, RosaryMysteryRecord } from "@/types/rosary";

function isStructuredMystery(mystery: RosaryMystery | RosaryMysteryRecord): mystery is RosaryMystery {
  return "groupSlug" in mystery;
}

export function RosaryMysteryCard({ mystery }: { mystery: RosaryMystery | RosaryMysteryRecord }) {
  if (!isStructuredMystery(mystery)) {
    const detailLink = getMysteriesByGroup(mystery.setSlug).find((item) => item.title === mystery.title)?.fullPath;

    return (
      <article className="card p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="text-xs font-bold uppercase text-burgundy">Mystery {mystery.order}</p>
          <span className="season-pill">
            <span className="sr-only">Fruit: </span>
            {mystery.fruit}
          </span>
        </div>
        <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy">{mystery.title}</h3>
        <div className="mt-4 grid gap-3 text-sm leading-7">
          <p>
            <span className="block text-xs font-bold uppercase text-burgundy">Scripture</span>
            <span className="font-semibold text-navy">{mystery.scriptureReference}</span>
          </p>
          <p>
            <span className="block text-xs font-bold uppercase text-burgundy">Meditation prompt</span>
            <span className="text-muted">{mystery.meditationPrompt}</span>
          </p>
        </div>
        {detailLink ? (
          <Link href={detailLink} className="btn btn-secondary focus-ring mt-5 justify-center">
            Open mystery guide
          </Link>
        ) : null}
      </article>
    );
  }

  return (
    <article className="card-parchment flex h-full flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{mystery.decadeLabel}</p>
        <span className="season-pill">{mystery.fruitOfMystery}</span>
      </div>
      <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy">{mystery.title}</h3>
      <div className="mt-4 grid gap-4 text-sm leading-7">
        <p>
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Scripture</span>
          <span className="font-semibold text-navy">{mystery.scriptureReference}</span>
        </p>
        <p>
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Grace to ask</span>
          <span className="text-muted">{mystery.graceToAsk}</span>
        </p>
        <p className="text-muted">{mystery.scriptureSummary}</p>
      </div>
      <TrackedLink
        href={mystery.fullPath}
        eventName="rosary_mystery_group_click"
        eventParams={{ group_slug: mystery.groupSlug, mystery_slug: mystery.slug, destination: mystery.fullPath }}
        className="btn btn-secondary focus-ring mt-6 justify-center"
      >
        Meditate on This Mystery
      </TrackedLink>
      <Link href="/rosary" className="mt-3 text-center text-sm font-semibold text-burgundy underline-offset-4 hover:underline">
        Pray live in the Rosary Prayer Room
      </Link>
    </article>
  );
}
