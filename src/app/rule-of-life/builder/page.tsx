import type { Metadata } from "next";
import { RuleBuilder } from "@/components/rule-of-life/RuleBuilder";
import { RuleOfLifeNav } from "@/components/rule-of-life/RuleOfLifeNav";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Rule of Life Builder",
  description: "Choose spiritual season, available time, practices, virtue focus, review rhythm, and generate a Catholic rule of life.",
  path: "/rule-of-life/builder",
});

export default function RuleBuilderPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <RuleOfLifeNav />
        <RuleBuilder />
      </section>
    </div>
  );
}
