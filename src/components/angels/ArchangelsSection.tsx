import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getArchangels } from "@/lib/angels";

export function ArchangelsSection() {
  const items = getArchangels();

  return (
    <section>
      <SectionHeader
        eyebrow="Archangels"
        title="The Archangels"
        summary="Catholic tradition names Michael, Gabriel, and Raphael from Scripture. Avoid inventing angel names or using non-Christian angel systems."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="card-parchment p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{item.name}</h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-burgundy">{item.role}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
              {item.scriptureReferences.join(" • ")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="season-pill focus-ring hover:border-gold hover:text-navy">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
