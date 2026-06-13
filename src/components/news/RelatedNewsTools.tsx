import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getRelatedNewsTools } from "@/lib/news";

export function RelatedNewsTools() {
  const tools = getRelatedNewsTools();

  return (
    <section>
      <SectionHeader
        eyebrow="Related Daily Oratory tools"
        title="Keep news reading connected to prayer, Scripture, and formation."
        summary="When a story lingers in your heart, let Daily Oratory give it somewhere faithful to go."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.href} className="card-parchment liturgical-card-accent flex h-full flex-col p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
            <div className="mt-6">
              <Link href={tool.href} className="btn btn-secondary focus-ring justify-center">
                {tool.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
