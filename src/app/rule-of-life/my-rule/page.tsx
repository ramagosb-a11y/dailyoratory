import type { Metadata } from "next";
import { MyRuleView } from "@/components/rule-of-life/MyRuleView";
import { RuleOfLifeNav } from "@/components/rule-of-life/RuleOfLifeNav";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "My Rule of Life",
  description: "View, print, and export your locally saved Daily Oratory rule of life.",
  path: "/rule-of-life/my-rule",
});

export default function MyRulePage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <RuleOfLifeNav />
        <MyRuleView />
      </section>
    </div>
  );
}
