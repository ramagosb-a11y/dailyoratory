import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { CatholicGlossary } from "@/components/explore/CatholicGlossary";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Terms Glossary",
  description:
    "Simple definitions of Catholic terms such as Mass, Eucharist, sacraments, confession, OCIA, saints, liturgy, Catechism, and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Glossary" }]} />
        <div className="mt-8">
          <CatholicGlossary />
        </div>
      </main>
    </div>
  );
}
