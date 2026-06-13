import { TrackedLink } from "@/components/analytics/TrackedLink";

export function GraceAndSin() {
  const links = [
    { label: "Sin and Temptation", href: "/sin-and-temptation" },
    { label: "Venial and Mortal Sin", href: "/sin-and-temptation/venial-and-mortal-sin" },
    { label: "Confession Guide", href: "/confession" },
    { label: "Examination of Conscience", href: "/confession/examination" },
    { label: "Detachment from Sin", href: "/indulgences#detachment-from-sin" },
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Grace, Sin, and Restoration</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Sin wounds or destroys the life of grace in the soul. Venial sin weakens charity. Mortal sin destroys
        sanctifying grace. But God’s mercy is greater than sin, and the Sacrament of Confession restores the soul to
        grace when mortal sin has been confessed with repentance.
      </p>
      <div className="mt-6 rounded-2xl border border-gold/40 bg-white/80 p-5">
        <p className="daily-readable text-base leading-8 text-muted">
          If you are unsure about your state of soul, do not panic. Go to Confession and speak simply with a priest.
          The goal is not anxiety, but mercy, healing, and return to God.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            eventName={link.href === "/confession" ? "confession_guide_click" : "grace_related_link_click"}
            eventParams={{ section: "grace-and-sin", destination: link.href }}
            className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold"
          >
            <span className="daily-card-readable block text-sm font-semibold text-navy">{link.label}</span>
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
