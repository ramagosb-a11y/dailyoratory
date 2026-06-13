import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { CatholicBeliefsPlainEnglish } from "@/components/explore/CatholicBeliefsPlainEnglish";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Beliefs",
  description: "Plain-English summaries of core Catholic beliefs for seekers and beginners.",
  path: "/explore/catholic-beliefs",
});

export default function CatholicBeliefsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Explore the Catholic Faith", href: "/explore" },
            { label: "Catholic Beliefs" },
          ]}
        />
        <div className="mt-8">
          <CatholicBeliefsPlainEnglish />
        </div>
      </main>
    </div>
  );
}
