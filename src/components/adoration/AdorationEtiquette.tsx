import { SectionHeader } from "@/components/section-header";
import { getAdorationEtiquette } from "@/lib/adoration";

export function AdorationEtiquette() {
  const etiquette = getAdorationEtiquette();

  return (
    <section>
      <SectionHeader
        eyebrow="Etiquette"
        title="Adoration Chapel Etiquette"
        summary="Practical habits that help keep the chapel quiet, prayerful, and reverent."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {etiquette.map((item) => (
            <li key={item} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-7 text-muted">
          Some chapels have specific local rules, especially for perpetual Adoration.
        </p>
      </div>
    </section>
  );
}
