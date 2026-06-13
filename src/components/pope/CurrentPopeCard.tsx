import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getCurrentPope } from "@/lib/pope";

export function CurrentPopeCard() {
  const pope = getCurrentPope();
  const pontificateStart = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(pope.pontificateStart));

  return (
    <section>
      <SectionHeader eyebrow="Current pope" title="The Current Pope" summary="This information is sourced from the official Vatican page." />
      <article className="card-parchment liturgical-card-accent mt-7 grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{pope.ordinal} Pope of the Catholic Church</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy">{pope.papalName}</h2>
          <p className="mt-3 text-sm font-semibold text-navy">{pope.title}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{pope.shortDescription}</p>
          <dl className="mt-5 grid gap-3 text-sm text-muted sm:grid-cols-2">
            <div className="rounded-md border border-stone bg-ivory px-4 py-3">
              <dt className="font-semibold text-navy">Beginning of pontificate</dt>
              <dd>{pontificateStart}</dd>
            </div>
            <div className="rounded-md border border-stone bg-ivory px-4 py-3">
              <dt className="font-semibold text-navy">Official title</dt>
              <dd>Bishop of Rome</dd>
            </div>
          </dl>
        </div>
        <div className="grid gap-3">
          {pope.documentLinks.map((link, index) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              external
              className={`focus-ring inline-flex items-center justify-center rounded-md border px-4 py-3 text-sm font-semibold transition ${
                index === 0 ? "border-gold bg-gold text-navy hover:bg-gold-soft" : "border-stone bg-ivory text-navy hover:bg-parchment"
              }`}
              eventName="pope_resource_click"
              eventParams={{ resource_name: link.label, resource_url: link.href, page_path: "/pope", section: "current-pope" }}
            >
              {link.label}
            </TrackedLink>
          ))}
        </div>
      </article>
    </section>
  );
}
