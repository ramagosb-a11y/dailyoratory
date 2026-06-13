import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getSistineChapelHighlights } from "@/lib/vatican";

export function SistineChapelSection() {
  const highlights = getSistineChapelHighlights();

  return (
    <section>
      <SectionHeader
        eyebrow="Sacred art"
        title="The Sistine Chapel"
        summary="The Sistine Chapel is famous for Michelangelo's ceiling and Last Judgment, but it is also a sacred chapel and the place where papal conclaves are held."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => (
          <article key={item} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{item}</h3>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <TrackedLink
          href="https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/tour-virtuale.html"
          external
          className="btn liturgical-button focus-ring"
          eventName="vatican_virtual_tour_click"
          eventParams={{ resource_name: "Sistine Chapel Virtual Tour", page_path: "/vatican", section: "sistine-chapel" }}
        >
          Open the official virtual tour
        </TrackedLink>
        <a href="/pope" className="btn btn-secondary focus-ring">
          Learn About the Pope
        </a>
      </div>
    </section>
  );
}
