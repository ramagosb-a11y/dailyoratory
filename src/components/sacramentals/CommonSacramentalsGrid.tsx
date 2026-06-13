import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getSacramentalItems } from "@/lib/sacramentals";

export function CommonSacramentalsGrid() {
  const items = getSacramentalItems();

  return (
    <section id="common-sacramentals">
      <SectionHeader eyebrow="Practice" title="Common Catholic Sacramentals" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="card-parchment flex h-full flex-col p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">How to use:</span> {item.howToUse}
            </p>
            {item.blessingNote ? (
              <p className="mt-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">Blessing note:</span> {item.blessingNote}
              </p>
            ) : null}
            {item.cautionNote ? (
              <p className="mt-3 rounded-md border border-stone bg-ivory px-3 py-2 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">Caution:</span> {item.cautionNote}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy">
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
