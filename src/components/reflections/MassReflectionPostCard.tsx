import { TrackedLink } from "@/components/analytics/TrackedLink";
import { formatDate } from "@/lib/format";
import { MassReflectionTypeBadge } from "@/components/reflections/MassReflectionTypeBadge";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function MassReflectionPostCard({
  reflection,
  emphasis = false,
  highlightLabel,
  sourceSection,
}: {
  reflection: MassReadingsReflection;
  emphasis?: boolean;
  highlightLabel?: string;
  sourceSection?: string;
}) {
  return (
    <article
      className={`card resource-card relative flex h-full min-w-0 flex-col p-5 ${
        emphasis ? "border-2 border-gold bg-parchment shadow-oratory" : ""
      }`}
    >
      {highlightLabel ? (
        <div className="mb-4 w-fit rounded-sm border border-gold bg-gold px-3 py-1.5 text-xs font-bold uppercase text-navy">
          {highlightLabel}
        </div>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <MassReflectionTypeBadge type={reflection.reflectionType} />
        <span className="season-pill">{reflection.liturgicalSeason}</span>
      </div>
      <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <TrackedLink
          href={`/reflections/mass-readings/${reflection.slug}`}
          className="focus-ring rounded-sm"
          eventName="reflection_open"
          eventParams={{
            reflection_slug: reflection.slug,
            reflection_type: reflection.reflectionType,
            liturgical_season: reflection.liturgicalSeason,
            source_section: sourceSection,
          }}
        >
          <span className="absolute inset-0" aria-hidden="true" />
          {reflection.title}
        </TrackedLink>
      </h3>
      <p className="mt-2 text-sm font-semibold text-gold">{formatDate(reflection.reflectionDate)}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-navy">
        {reflection.liturgicalDay}
        {reflection.lectionaryNumber ? ` - Lectionary: ${reflection.lectionaryNumber}` : ""}
      </p>
      <p className="mt-3 text-sm italic text-burgundy">{reflection.gospelReference ?? reflection.firstReadingReference ?? "Mass readings"}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{reflection.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {[reflection.theme, ...(reflection.saintOfDay ? [reflection.saintOfDay] : [])].slice(0, 3).map((item) => (
          <span key={item} className="season-pill">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
