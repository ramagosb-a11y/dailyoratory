import type { Metadata } from "next";
import Image from "next/image";
import { ExaminationCompanion } from "@/components/confession/companion/ExaminationCompanion";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Examination of Conscience Companion",
  description:
    "A private, mobile-friendly examination of conscience and confession companion. Preparation stays in this browser only.",
  path: "/confession/examination-companion",
});

export default function ExaminationCompanionPage() {
  return (
    <div className="min-h-screen bg-[#071a31]">
      <div className="relative h-44 overflow-hidden border-b border-gold/40 shadow-[0_10px_30px_rgba(2,14,30,0.35)] sm:h-64">
        <Image
          src="/images/examination-confessional-hero.png"
          alt="A quiet chapel prepared for prayer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071a31]/25 via-[#071a31]/35 to-[#071a31]/90" />
        <p className="absolute inset-x-4 bottom-4 mx-auto max-w-7xl text-xs font-bold uppercase tracking-[0.2em] text-gold-light sm:inset-x-6 lg:inset-x-10">
          A quiet place to prepare your heart
        </p>
      </div>
      <ExaminationCompanion />
    </div>
  );
}
