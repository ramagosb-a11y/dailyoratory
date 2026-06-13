import { getGroupLocationLabel } from "@/lib/community";
import type { LocalFaithGroupRecord } from "@/types/content";

export function LocalFaithGroupCard({ group }: { group: LocalFaithGroupRecord }) {
  return (
    <article id={group.slug} className="card resource-card scroll-mt-28 p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <span className="season-pill">{getGroupLocationLabel(group)}</span>
        {group.acceptingNewMembers ? <span className="season-pill">Welcoming inquiries</span> : null}
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">{group.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
      <dl className="mt-5 grid gap-3 rounded-md border border-stone bg-parchment p-4 text-sm">
        <div>
          <dt className="text-xs font-bold uppercase text-burgundy">Location</dt>
          <dd className="mt-1 text-muted">
            {group.city}, {group.region}, {group.country}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase text-burgundy">Meeting rhythm</dt>
          <dd className="mt-1 text-muted">{group.meetingCadence}</dd>
        </div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.focusAreas.map((area) => (
          <span key={area} className="season-pill">
            {area}
          </span>
        ))}
      </div>
      {group.contactEmail ? (
        <a href={`mailto:${group.contactEmail}`} className="btn btn-secondary focus-ring mt-5 w-full">
          Contact group
        </a>
      ) : null}
    </article>
  );
}
