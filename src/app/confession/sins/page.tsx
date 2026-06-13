import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfessionArticlePage } from "@/components/confession/ConfessionArticlePage";
import { getConfessionTopic } from "@/lib/confession";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sins",
  description: "A pastoral Catholic overview of sin, conscience, culpability, confession, and conversion in the mercy of Christ.",
  path: "/confession/sins",
});

export default function SinsPage() {
  const topic = getConfessionTopic("sins");

  if (!topic) notFound();

  return <ConfessionArticlePage topic={topic} />;
}
