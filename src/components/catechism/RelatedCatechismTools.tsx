import { SectionHeader } from "@/components/section-header";
import { getRelatedCatechismTools } from "@/lib/catechism";
import Link from "next/link";

export function RelatedCatechismTools() {
  const tools = getRelatedCatechismTools();

  return (
    <section>
      <SectionHeader
        eyebrow="Continue learning"
        title="Continue Learning with Daily Oratory"
        summary="Use these guides and tools to connect Catechism study with prayer, sacramental life, Scripture, and daily discipleship."
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
