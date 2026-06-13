import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { scriptureAngelCards } from "@/data/angelsPage";

export function AngelsInScripture() {
  return (
    <section>
      <SectionHeader
        eyebrow="Scripture"
        title="Angels in Scripture"
        summary="Scripture presents angels as real servants of God in creation, covenant history, the Incarnation, the life of Christ, the life of the Church, and heavenly worship."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {scriptureAngelCards.map((card) => (
          <article key={`${card.reference}-${card.title}`} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{card.reference}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <TrackedLink
          href="https://bible.usccb.org/"
          external
          className="btn btn-secondary focus-ring justify-center"
          eventName="angels_resource_click"
          eventParams={{ resource_name: "USCCB Bible", page_path: "/angels" }}
        >
          Read Scripture
        </TrackedLink>
      </div>
    </section>
  );
}
