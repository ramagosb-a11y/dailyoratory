import { HeavenboundPromptLauncher } from "@/components/heavenbound/HeavenboundPromptLauncher";
import type { HeavenboundPath, HeavenboundRecommendationGroup } from "@/types/heavenbound";

type GroupWithPaths = HeavenboundRecommendationGroup & {
  paths: HeavenboundPath[];
};

export function RecommendedPathways({
  groups,
  timeRecommendations,
}: {
  groups: GroupWithPaths[];
  timeRecommendations: { label: string; path: HeavenboundPath | undefined }[];
}) {
  return (
    <section className="mt-12 grid gap-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Not sure where to begin?</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">Choose by need or moment.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.id} className="card p-5">
            <h3 className="font-display text-3xl font-semibold leading-tight text-navy">{group.title}</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
              {group.paths.map((path) => (
                <li key={path.id}>
                  <HeavenboundPromptLauncher
                    path={path}
                    label={path.title}
                    copiedLabel="Prompt copied"
                    className="focus-ring block rounded-sm border-l-2 border-gold bg-ivory/60 px-3 py-2 font-semibold text-navy transition-colors hover:bg-parchment"
                    ariaLabel={`Start ${path.title} in Heavenbound`}
                  />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="rounded-md border border-stone bg-parchment p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Suggested times</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeRecommendations.map((item) => (
            <div key={item.label} className="rounded-sm border border-stone bg-ivory p-4">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-burgundy">{item.label}</p>
              {item.path ? (
                <HeavenboundPromptLauncher
                  path={item.path}
                  label={item.path.title}
                  copiedLabel="Prompt copied"
                  className="focus-ring mt-2 block rounded-sm text-sm font-semibold leading-6 text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-burgundy"
                  ariaLabel={`Start ${item.path.title} in Heavenbound`}
                />
              ) : (
                <p className="mt-2 text-sm font-semibold leading-6 text-navy">Choose freely</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
