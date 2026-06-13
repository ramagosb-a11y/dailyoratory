import type { Metadata } from "next";
import { RuleOfLifeNav } from "@/components/rule-of-life/RuleOfLifeNav";
import { RulePrintView } from "@/components/rule-of-life/RulePrintView";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Print Rule of Life",
  description: "Print or copy your locally saved Daily Oratory rule of life.",
  path: "/rule-of-life/print",
});

export default function RulePrintPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="no-print">
          <RuleOfLifeNav />
        </div>
        <RulePrintView />
      </section>
    </div>
  );
}
