import { TrackedLink } from "@/components/analytics/TrackedLink";

type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  eventName?: "sin_topic_open" | "confession_guide_click";
};

export function SinTemptationHero({
  eyebrow = "Mercy and conversion",
  title,
  subtitle,
  summary,
  ctas,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  summary: string;
  ctas: HeroCta[];
}) {
  return (
    <header className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{eyebrow}</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="daily-readable mt-5 max-w-4xl text-xl leading-9 text-muted">{subtitle}</p>
      <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">{summary}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {ctas.map((cta, index) => (
          <TrackedLink
            key={`${cta.href}-${cta.label}`}
            href={cta.href}
            eventName={cta.eventName}
            eventParams={{ section: title, destination: cta.href }}
            className={`${cta.variant === "secondary" || index > 0 ? "btn btn-secondary" : "btn btn-primary"} focus-ring daily-button-readable min-h-12 justify-center`}
          >
            {cta.label}
          </TrackedLink>
        ))}
      </div>
    </header>
  );
}
