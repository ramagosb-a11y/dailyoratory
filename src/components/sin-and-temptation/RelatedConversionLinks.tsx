import { LinkedCitationText } from "@/components/LinkedCitationText";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function RelatedConversionLinks({
  title = "Related Daily Oratory Tools",
  links,
}: {
  title?: string;
  links: readonly { title: string; description: string; href: string }[];
}) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Continue with grace</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            eventName={link.href === "/confession" ? "confession_guide_click" : undefined}
            eventParams={{ section: title, destination: link.href }}
            className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold"
          >
            <span className="block font-display text-2xl font-semibold text-navy">{link.title}</span>
            <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">
              <LinkedCitationText text={link.description} />
            </span>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
