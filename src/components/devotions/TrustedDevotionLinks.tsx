import type { TrustedDevotionLink } from "@/types/devotions";

export function TrustedDevotionLinks({ links }: { links: TrustedDevotionLink[] }) {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Trusted links</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Approved and trusted links</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <article key={link.id} className="rounded-md border border-stone bg-ivory p-4">
            <p className="text-xs font-bold uppercase text-burgundy">
              {link.official ? "Official / trusted" : "Trusted"}
            </p>
            <h3 className="mt-2 text-sm font-semibold text-navy">{link.label}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{link.description}</p>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex rounded-sm text-sm font-semibold text-link"
            >
              Open {link.sourceName}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
