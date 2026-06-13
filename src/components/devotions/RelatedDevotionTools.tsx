import Link from "next/link";

export function RelatedDevotionTools({
  links,
}: {
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Related Daily Oratory tools</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Related Daily Oratory tools</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="focus-ring season-pill">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
