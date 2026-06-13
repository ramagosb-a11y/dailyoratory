import Link from "next/link";
import { getSacraments, getSacramentGroupLabel } from "@/lib/sacraments";

export function SacramentComparisonTable() {
  const sacraments = getSacraments();

  return (
    <section className="card-parchment overflow-hidden">
      <div className="border-b border-stone-200 px-6 py-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Comparison Table</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">See the sacraments together</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-stone-50 text-burgundy">
            <tr>
              {["Sacrament", "Group", "Main grace", "Ordinary minister", "Preparation", "Tool", "Learn more"].map((heading) => (
                <th key={heading} className="px-4 py-3 font-semibold">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sacraments.map((sacrament) => (
              <tr key={sacrament.id} className="border-t border-stone-200 align-top">
                <td className="px-4 py-4 font-semibold text-navy">{sacrament.name}</td>
                <td className="px-4 py-4 text-muted">{getSacramentGroupLabel(sacrament.group)}</td>
                <td className="px-4 py-4 text-muted">{sacrament.graceFocus}</td>
                <td className="px-4 py-4 text-muted">{sacrament.ordinaryMinister}</td>
                <td className="px-4 py-4 text-muted">{sacrament.howToPrepare[0]}</td>
                <td className="px-4 py-4">
                  <Link href={sacrament.relatedDailyOratoryLinks[0]?.href ?? "/sacraments/prepare"} className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
                    {sacrament.relatedDailyOratoryLinks[0]?.label ?? "Preparation companion"}
                  </Link>
                </td>
                <td className="px-4 py-4">
                  <Link href={`/sacraments/${sacrament.slug}`} className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
                    Learn more
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
