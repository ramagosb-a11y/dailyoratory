import type { ChurchFatherReadingPlanItem } from "@/types/churchFathers";

export function BeginnerReadingPlan({ plan }: { plan: ChurchFatherReadingPlanItem[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Reading plan</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Start Here: A Beginner Reading Path
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
          Read slowly. The goal is not to finish quickly, but to learn how the early Church prayed,
          taught, and lived the faith.
        </p>
      </div>
      <div className="mt-7 space-y-4">
        {plan.map((item, index) => (
          <article key={item.id} className="card-parchment p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="md:max-w-3xl">
                <p className="text-xs font-bold uppercase text-burgundy">Step {index + 1}</p>
                <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{item.workTitle}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-navy">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </div>
              <a
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary focus-ring justify-center"
              >
                Read externally
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
