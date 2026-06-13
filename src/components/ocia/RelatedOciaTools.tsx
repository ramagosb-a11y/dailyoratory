import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getRelatedOciaTools } from "@/lib/ocia";

export function RelatedOciaTools() {
  const tools = getRelatedOciaTools();

  return (
    <section>
      <SectionHeader
        eyebrow="Related tools"
        title="Related Daily Oratory Tools"
        summary="Use these pages to keep inquiry connected to prayer, worship, Scripture, formation, and the sacramental life of the Church."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{tool.cta}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
