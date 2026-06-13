import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfessionArticlePage } from "@/components/confession/ConfessionArticlePage";
import { getConfessionTopic } from "@/lib/confession";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Identifying Your Predominant Fault",
  description:
    "A merciful Catholic reflection for identifying the recurring fault that needs prayer, confession, and a contrary virtue.",
  path: "/confession/predominant-fault",
});

export default function PredominantFaultPage() {
  const topic = getConfessionTopic("predominant-fault");

  if (!topic) notFound();

  return <ConfessionArticlePage topic={topic} />;
}
