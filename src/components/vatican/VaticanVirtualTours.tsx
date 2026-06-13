import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getVaticanVirtualTours } from "@/lib/vatican";

export function VaticanVirtualTours() {
  const tours = getVaticanVirtualTours();

  return (
    <section id="virtual-tours">
      <SectionHeader
        eyebrow="Virtual tours"
        title="Virtual Tours of the Vatican"
        summary="If you cannot travel, official Vatican tours can still become a prayerful doorway into the Church's history, beauty, and worship."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {tours.map((tour) => (
          <article key={tour.id} className="card-parchment liturgical-card-accent p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              {tour.official ? "Official Vatican source" : "External resource"}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{tour.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tour.description}</p>
            <TrackedLink
              href={tour.url}
              external
              className="btn liturgical-button focus-ring mt-5 justify-center"
              eventName="vatican_virtual_tour_click"
              eventParams={{ resource_name: tour.title, page_path: "/vatican", section: "vatican-virtual-tours" }}
            >
              Begin a Virtual Pilgrimage
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
