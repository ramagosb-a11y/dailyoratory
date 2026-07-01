import Link from "next/link";

type StaticMovedPageProps = {
  title: string;
  description?: string;
  destination: string;
  destinationLabel: string;
};

export function StaticMovedPage({
  title,
  description = "This Daily Oratory page has moved to a clearer home.",
  destination,
  destinationLabel,
}: StaticMovedPageProps) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <section className="dashboard-card p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Page moved</p>
        <h1 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">{title}</h1>
        <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p>
        <Link href={destination} prefetch={false} className="btn btn-primary focus-ring mt-6 w-full sm:w-auto">
          Continue to {destinationLabel}
        </Link>
      </section>
    </main>
  );
}
