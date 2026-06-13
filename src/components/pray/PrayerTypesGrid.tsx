import { getPrayerTypes } from "@/lib/prayer";

export function PrayerTypesGrid() {
  const types = getPrayerTypes();

  return (
    <section>
      <p className="liturgical-section-eyebrow">Ways Catholics pray</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Prayer takes many faithful forms.
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {types.map((type) => (
          <article key={type.id} className="card p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{type.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{type.description}</p>
            <div className="mt-4 rounded-md border border-stone bg-parchment p-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Simple example:</span> {type.simpleExample}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {type.relatedLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
