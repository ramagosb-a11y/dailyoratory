import { Breadcrumbs } from "@/components/breadcrumbs";
import type { DailyOratoryContentRecord } from "@/lib/content";
import { getContentSeason } from "@/lib/content";
import { getContentTypeLabel } from "@/lib/search";

export function ContentHeader({ record }: { record: DailyOratoryContentRecord }) {
  const season = getContentSeason(record);

  return (
    <header className="liturgical-page-hero card-parchment mt-8 border-b border-stone p-6 pb-8 sm:p-8">
      <Breadcrumbs items={[{ label: "Library", href: "/library" }, { label: record.title }]} />
      <div className="mt-8 flex flex-wrap gap-2">
        <span className="liturgical-badge inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
          {record.category}
        </span>
        <span className="season-pill liturgical-chip">{getContentTypeLabel(record)}</span>
        {season ? <span className="season-pill liturgical-chip">{season}</span> : null}
      </div>
      <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        {record.title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">{record.description}</p>
    </header>
  );
}
