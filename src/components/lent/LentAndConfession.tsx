import Link from "next/link";

export function LentAndConfession() {
  const links = [
    { label: "Confession Guide", href: "/confession" },
    { label: "Examination of Conscience", href: "/confession/examination" },
    { label: "Venial and Mortal Sin", href: "/sin-and-temptation/venial-and-mortal-sin" },
    { label: "Seven Penitential Psalms", href: "/prayers/seven-penitential-psalms" },
    { label: "Detachment from Sin", href: "/indulgences/detachment-from-sin" },
  ];

  return (
    <section id="lent-and-confession" className="card-parchment p-6 sm:p-8 scroll-mt-28">
      <h2 className="font-display text-4xl font-semibold text-navy">Lent and Confession</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Lent is a privileged time to return to the Sacrament of Reconciliation. Confession is not a punishment; it is an encounter with the mercy of Christ. Bring your sins honestly, receive absolution, complete your penance, and begin again with hope.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="dashboard-card p-4 text-sm font-semibold text-navy transition hover:border-gold">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

