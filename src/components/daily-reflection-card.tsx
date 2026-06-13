import Link from "next/link";
import { formatDate } from "@/lib/format";
import { getReflectionKindLabel, getReflectionPrimaryScripture } from "@/lib/reflections";
import type { DailyReflectionRecord } from "@/types/reflections";

export function DailyReflectionCard({ reflection }: { reflection: DailyReflectionRecord }) {
  return (
    <article className="dashboard-card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">{getReflectionKindLabel(reflection.reflectionKind)}</p>
      <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-navy">
        {reflection.title}
      </h2>
      <p className="mt-2 text-sm font-semibold text-gold">{formatDate(reflection.date)}</p>
      <p className="mt-4 text-sm leading-7 text-muted">{reflection.excerpt}</p>
      <p className="mt-3 text-sm italic text-navy">{getReflectionPrimaryScripture(reflection)}</p>
      <Link
        href={`/reflections/${reflection.slug}`}
        className="text-link focus-ring mt-6 inline-flex text-sm"
      >
        Read Reflection
      </Link>
    </article>
  );
}
