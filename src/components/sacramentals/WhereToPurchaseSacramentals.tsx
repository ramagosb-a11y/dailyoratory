import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getApprovedPurchaseLinks } from "@/lib/sacramentals";

export function WhereToPurchaseSacramentals() {
  const links = getApprovedPurchaseLinks();

  return (
    <section id="where-to-purchase">
      <SectionHeader
        eyebrow="External resources"
        title="Where to Purchase Sacramentals"
        summary="Sacramentals should be purchased thoughtfully and used reverently. Whenever possible, support Catholic parishes, monasteries, Catholic bookstores, shrine gift shops, and reputable Catholic stores."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {links.map((link) => {
          const content = (
            <article className="card-parchment flex h-full flex-col p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{link.category}</p>
                <span className="rounded-full border border-stone px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy">
                  {link.external ? "External" : "Local"}
                </span>
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{link.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{link.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-burgundy">Visit Store</span>
            </article>
          );

          if (link.external) {
            return (
              <TrackedLink
                key={link.id}
                href={link.url}
                external
                className="focus-ring block"
                eventName="sacramental_purchase_link_click"
                eventParams={{ item_slug: link.slug, category: link.category, destination: link.url, status: link.status }}
              >
                {content}
              </TrackedLink>
            );
          }

          return (
            <div key={link.id} className="block">
              {content}
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">
        Daily Oratory does not control external stores, prices, inventory, shipping, quality, or product descriptions. Review items carefully and support trusted Catholic sources when possible.
      </p>
    </section>
  );
}
