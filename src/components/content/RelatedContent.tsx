import { LibraryResultCard } from "@/components/library/LibraryResultCard";
import type { DailyOratoryContentRecord } from "@/lib/content";
import { getContentExcerpt, getContentTypeLabel } from "@/lib/search";
import { getContentSeason } from "@/lib/content";

export function RelatedContent({ records }: { records: DailyOratoryContentRecord[] }) {
  if (records.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
      <div className="sacred-divider mb-8" />
      <h2 className="font-display text-4xl font-semibold text-navy">Related Resources</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <LibraryResultCard
            key={record.id}
            result={{
              record,
              excerpt: getContentExcerpt(record),
              typeLabel: getContentTypeLabel(record),
              season: getContentSeason(record),
              score: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
