import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { ReturningCatholicGuide } from "@/components/explore/ReturningCatholicGuide";

export const metadata: Metadata = createPageMetadata({
  title: "Returning to the Catholic Church | Coming Home Guide",
  description:
    "A welcoming guide for returning Catholics with practical next steps for Mass, Confession, prayer, parish contact, and coming back to the Catholic Church.",
  path: "/returning",
  keywords: [
    "returning to the Catholic Church",
    "returning Catholic",
    "coming back to the Catholic Church",
    "returning to Catholic faith",
    "return to Mass",
    "return to Confession",
  ],
});

export default function ReturningPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Returning to the Catholic Church",
              description:
                "A welcoming guide for returning Catholics with practical next steps for Mass, Confession, prayer, parish contact, and coming back to the Catholic Church.",
              path: "/returning",
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Returning to the Catholic Church", path: "/returning" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Coming Home" }]} />
        <div className="mt-8">
          <ReturningCatholicGuide />
        </div>
      </main>
    </div>
  );
}
