import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getAdorationScriptures } from "@/lib/adoration";

export function AdorationScriptureCards() {
  const scriptures = getAdorationScriptures();

  return (
    <section>
      <SectionHeader
        eyebrow="Scripture"
        title="Scripture to Pray Before the Eucharist"
        summary="Use the official USCCB Bible or your bishops' conference Bible for the full text."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {scriptures.map((item) => (
          <article key={item.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.reference}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            <p className="mt-4 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {item.prayerPrompt}
            </p>
            <TrackedLink
              href={item.usccbUrl}
              external
              className="btn btn-secondary focus-ring mt-5 justify-center"
              eventName="adoration_resource_click"
              eventParams={{ page_path: "/adoration", resource_name: item.reference }}
            >
              Read at USCCB
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
