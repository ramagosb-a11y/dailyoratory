import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfessionArticlePage } from "@/components/confession/ConfessionArticlePage";
import { getConfessionTopic } from "@/lib/confession";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Resisting Temptation",
  description:
    "Practical Catholic help for resisting temptation with prayer, early action, confession preparation, and growth in virtue.",
  path: "/confession/resisting-temptation",
});

export default function ResistingTemptationPage() {
  const topic = getConfessionTopic("resisting-temptation");

  if (!topic) notFound();

  return <ConfessionArticlePage topic={topic} />;
}
