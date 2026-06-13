import { TrackedLink } from "@/components/analytics/TrackedLink";

export function GraceRelatedLinks({
  links,
  title = "Continue Learning and Praying",
}: {
  links: readonly { title: string; description: string; href: string }[];
  title?: string;
}) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            eventName="grace_related_link_click"
            eventParams={{ section: title, destination: link.href }}
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
