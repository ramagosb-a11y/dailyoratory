import Link from "next/link";
import { getRelatedMassTools } from "@/lib/mass";

export function RelatedMassTools() {
  const tools = getRelatedMassTools();

  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related Daily Oratory tools</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Keep learning with the rest of the oratory
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.href} className="card p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{tool.label}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <Link href={tool.href} className="mt-4 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline">
              Open {tool.label}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
