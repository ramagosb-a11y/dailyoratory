import Link from "next/link";
import { getRosaryMysterySets } from "@/lib/rosary";

export function RosaryMysterySelector() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {getRosaryMysterySets().map((set) => (
        <Link key={set.slug} href={`/rosary/${set.slug}`} className="card resource-card focus-ring p-5">
          <p className="text-xs font-bold uppercase text-burgundy">{set.traditionalDays.join(" and ")}</p>
          <h3 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{set.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{set.subtitle}</p>
          <span className="mt-5 block text-sm font-bold text-burgundy">Pray these mysteries</span>
        </Link>
      ))}
    </div>
  );
}
