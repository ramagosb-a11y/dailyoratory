import type { Metadata } from "next";
import { ExaminationPrintView } from "@/components/confession/ExaminationPrintView";
import { createPageMetadata } from "@/lib/metadata";

const baseMetadata = createPageMetadata({
  title: "Confession Companion Report",
  description: "A private local-only print-safe confession report for intentional printing or copying on this device.",
  path: "/confession/examination/print",
  noIndex: true,
});

export const metadata: Metadata = {
  ...baseMetadata,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ExaminationPrintPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <ExaminationPrintView />
      </section>
    </div>
  );
}
