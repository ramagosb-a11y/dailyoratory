import Link from "next/link";
import { getRelatedFormationTools } from "@/lib/formation";

export function RelatedFormationTools() {
  const tools = getRelatedFormationTools();

  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Related Daily Oratory tools</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Keep formation connected to prayer and practice
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="card p-5 transition hover:border-gold">
            <span className="font-display text-3xl font-semibold text-navy">{tool.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
