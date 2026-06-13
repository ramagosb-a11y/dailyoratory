import { getCopyrightStatusLabel } from "@/lib/media";
import type { MediaItem } from "@/types/media";

export function MediaSourceNote({ item }: { item: MediaItem }) {
  return (
    <section className="card-parchment p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Source and copyright</p>
      <dl className="mt-4 grid gap-4 text-sm leading-7 text-muted">
        <div>
          <dt className="font-semibold text-navy">Creator</dt>
          <dd>{item.creator}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Source</dt>
          <dd>{item.sourceName}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Copyright status</dt>
          <dd>{getCopyrightStatusLabel(item.copyrightStatus)}</dd>
        </div>
        {item.licenseNotes ? (
          <div>
            <dt className="font-semibold text-navy">License notes</dt>
            <dd>{item.licenseNotes}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
