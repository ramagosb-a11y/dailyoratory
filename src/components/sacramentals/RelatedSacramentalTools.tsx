import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getRelatedSacramentalTools } from "@/lib/sacramentals";

export function RelatedSacramentalTools() {
  const tools = getRelatedSacramentalTools();

  return (
    <section>
      <SectionHeader eyebrow="Related tools" title="Related Daily Oratory Tools" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <article key={tool.href} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <Link href={tool.href} className="btn btn-secondary focus-ring mt-5 justify-center">
              {tool.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
