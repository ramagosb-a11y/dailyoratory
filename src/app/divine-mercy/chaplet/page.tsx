import type { Metadata } from "next";
import { DivineMercyChaplet } from "@/components/divine-mercy/chaplet/DivineMercyChaplet";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pagePath = "/divine-mercy/chaplet";
const pageDescription = "Pray the Divine Mercy Chaplet one prayer and one bead at a time with manual pacing, private session-only intentions, accessible text sizes, and optional auto-advance.";

export const metadata: Metadata = createPageMetadata({
  title: "Pray the Divine Mercy Chaplet | Step-by-Step Companion",
  description: pageDescription,
  path: pagePath,
  keywords: ["pray Divine Mercy Chaplet", "Divine Mercy prayer companion", "Chaplet step by step"],
});

export default function DivineMercyChapletPage() {
  return (
    <>
      <StructuredDataScript data={[
        buildWebPageStructuredData({ name: "Divine Mercy Chaplet Companion", description: pageDescription, path: pagePath }),
        buildBreadcrumbList([{ name: "Divine Mercy", path: "/divine-mercy" }, { name: "Chaplet Companion", path: pagePath }]),
      ]} />
      <DivineMercyChaplet />
    </>
  );
}
