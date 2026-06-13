import { Breadcrumbs } from "@/components/breadcrumbs";
import { SinTemptationHero } from "@/components/sin-and-temptation/SinTemptationHero";

type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  eventName?: "sin_topic_open" | "confession_guide_click";
};

export function SinTemptationPageLayout({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  summary,
  ctas,
  children,
}: {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow?: string;
  title: string;
  subtitle: string;
  summary: string;
  ctas: HeroCta[];
  children: React.ReactNode;
}) {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 grid gap-8">
          <SinTemptationHero eyebrow={eyebrow} title={title} subtitle={subtitle} summary={summary} ctas={ctas} />
          {children}
        </div>
      </main>
    </div>
  );
}
