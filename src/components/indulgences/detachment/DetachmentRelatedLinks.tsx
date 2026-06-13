import { TrackedLink } from "@/components/analytics/TrackedLink";
import { detachmentRelatedLinks } from "@/data/detachmentFromSin";

export function DetachmentRelatedLinks() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Continue with grace</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Related Daily Oratory Links</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {detachmentRelatedLinks.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            eventName="detachment_related_link_click"
            eventParams={{ destination: link.href, section: "detachment-related-links" }}
            className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold"
          >
            <span className="block font-display text-2xl font-semibold text-navy">{link.title}</span>
            <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{link.description}</span>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
