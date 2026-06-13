import type { Metadata } from "next";
import { RuleOfLifeNav } from "@/components/rule-of-life/RuleOfLifeNav";
import { RuleTemplatesView } from "@/components/rule-of-life/RuleTemplatesView";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Rule of Life Templates",
  description: "Gentle Catholic rule of life templates for individuals, families, Adoration, mercy, and Marian devotion.",
  path: "/rule-of-life/templates",
});

export default function RuleTemplatesPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <RuleOfLifeNav />
        <SectionHeader
          eyebrow="Templates"
          title="Begin from a peaceful pattern"
          summary="Templates are starting points. Use one as written, or return to the builder and simplify it for your real life."
        />
        <div className="mt-8">
          <RuleTemplatesView />
        </div>
      </section>
    </div>
  );
}
