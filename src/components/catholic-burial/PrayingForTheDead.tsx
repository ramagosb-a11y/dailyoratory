import Link from "next/link";

export function PrayingForTheDead() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Why Catholics Pray for the Dead</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Catholics pray for the dead because love does not end at death. We entrust the deceased to God&apos;s mercy,
        pray for their purification if needed, and ask that they be brought into the fullness of Heaven.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Purgatory", href: "/formation/eschatology/purgatory" },
          { label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead" },
          { label: "Indulgences", href: "/indulgences" },
          { label: "Seven Penitential Psalms", href: "/prayers/seven-penitential-psalms" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="dashboard-card p-4 text-sm font-semibold text-navy transition hover:border-gold">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

