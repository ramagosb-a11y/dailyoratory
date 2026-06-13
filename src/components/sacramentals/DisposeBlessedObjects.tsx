import { SectionHeader } from "@/components/section-header";
import { disposalOptions } from "@/data/sacramentalsPage";

export function DisposeBlessedObjects() {
  return (
    <section>
      <SectionHeader
        eyebrow="Care"
        title="How to Dispose of Blessed Objects Reverently"
        summary="Blessed objects should not be thrown away casually. When a blessed item is broken or no longer usable, Catholics traditionally dispose of it respectfully."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {disposalOptions.map((option) => (
          <article key={option} className="card-parchment p-5 text-sm leading-7 text-muted">
            {option}
          </article>
        ))}
      </div>
      <p className="mt-6 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
        <span className="font-semibold text-navy">Safety:</span> Do not burn unsafe materials, plastics, or hazardous items. Ask a parish if unsure.
      </p>
    </section>
  );
}
