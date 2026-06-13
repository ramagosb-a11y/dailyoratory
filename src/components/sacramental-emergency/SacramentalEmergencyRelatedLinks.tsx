"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";

const links = [
  { label: "Anointing of the Sick", href: "/sacraments/anointing", description: "Grace, peace, and strength in serious illness." },
  { label: "Death and Christian Hope", href: "/formation/eschatology/death", description: "A guide to preparing for death with hope." },
  { label: "Catholic Burial", href: "/formation/catholic-burial", description: "Funeral and burial guidance in the light of resurrection." },
  { label: "Planning a Catholic Funeral", href: "/formation/catholic-burial/planning-a-catholic-funeral", description: "Practical steps for families." },
  { label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead", description: "Continue praying for the faithful departed." },
  { label: "Purgatory", href: "/formation/eschatology/purgatory", description: "God's merciful final purification." },
  { label: "Indulgences", href: "/indulgences", description: "Understand indulgences and mercy without confusion." },
  { label: "Confession Guide", href: "/confession", description: "Prepare for urgent or ordinary Confession." },
  { label: "Confession Prayers", href: "/confession/prayers", description: "Short prayers before and after Confession." },
  { label: "Eucharist", href: "/sacraments/eucharist", description: "See why Viaticum matters at the end of life." },
  { label: "Explore the Faith", href: "/explore", description: "A calmer starting point when you need broader guidance." },
];

export function SacramentalEmergencyRelatedLinks() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related guides</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">Related Guides</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            className="card-parchment block p-6"
            eventName="sacramental_emergency_related_link_click"
            eventParams={{ destination: link.href }}
          >
            <h3 className="font-display text-3xl font-semibold text-navy">{link.label}</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{link.description}</p>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
