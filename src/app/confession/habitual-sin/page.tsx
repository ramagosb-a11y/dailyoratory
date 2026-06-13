import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfessionArticlePage } from "@/components/confession/ConfessionArticlePage";
import { getConfessionTopic } from "@/lib/confession";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Habitual Sin",
  description:
    "A gentle Catholic guide for habitual sin support through confession, safeguards, contrary virtues, and patient cooperation with grace.",
  path: "/confession/habitual-sin",
});

export default function HabitualSinPage() {
  const topic = getConfessionTopic("habitual-sin");

  if (!topic) notFound();

  return <ConfessionArticlePage topic={topic} />;
}
