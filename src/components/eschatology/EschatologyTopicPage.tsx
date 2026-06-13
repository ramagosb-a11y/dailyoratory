"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrackedLink } from "@/components/analytics/TrackedLink";

type TopicCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function EschatologyTopicPage({
  breadcrumbs,
  title,
  subtitle,
  summary,
  ctas,
  children,
}: {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  subtitle: string;
  summary: string;
  ctas: TopicCta[];
  children: React.ReactNode;
}) {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 grid gap-8">
          <section className="dashboard-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic Formation</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="daily-readable mt-5 text-xl leading-9 text-muted">{subtitle}</p>
            <p className="daily-readable mt-5 max-w-4xl text-lg leading-8 text-muted">{summary}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {ctas.map((cta) => (
                <TrackedLink
                  key={cta.href}
                  href={cta.href}
                  eventName="eschatology_related_link_click"
                  eventParams={{ section: title, destination: cta.href }}
                  className={`btn ${cta.variant === "secondary" ? "btn-secondary" : "btn-primary"} focus-ring daily-button-readable min-h-12 justify-center`}
                >
                  {cta.label}
                </TrackedLink>
              ))}
            </div>
          </section>
          {children}
        </div>
      </main>
    </div>
  );
}
