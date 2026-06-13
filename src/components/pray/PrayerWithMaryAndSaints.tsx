import { maryAndSaintsLinks } from "@/lib/prayer";

export function PrayerWithMaryAndSaints() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">Prayer with Mary and the saints</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        The communion of saints helps us pray toward Christ.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Catholics ask Mary and the saints to pray for us. This does not replace prayer to God. It
        joins us to the communion of saints and reminds us that the Church includes heaven and earth.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {maryAndSaintsLinks.map((link) => (
          <a key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
