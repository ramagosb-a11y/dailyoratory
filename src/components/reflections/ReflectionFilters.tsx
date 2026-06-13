import Link from "next/link";
import { buildReflectionHref } from "@/lib/reflections";
import type { ReflectionFacetOptions, ReflectionSearchState } from "@/types/reflections";

export function ReflectionFilters({
  state,
  facets,
  action,
  showKind = true,
}: {
  state: ReflectionSearchState;
  facets: ReflectionFacetOptions;
  action: string;
  showKind?: boolean;
}) {
  const hasFilters = Boolean(state.q || state.date || state.season || state.topic || state.kind);

  return (
    <form action={action} className="dashboard-card grid gap-4 p-5">
      <div>
        <label htmlFor="reflection-search" className="text-xs font-bold uppercase text-burgundy">
          Search reflections
        </label>
        <input
          id="reflection-search"
          name="q"
          type="search"
          defaultValue={state.q}
          placeholder="Search Scripture, topic, or title"
          className="form-input mt-2"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="reflection-date" className="text-xs font-bold uppercase text-burgundy">
            Date
          </label>
          <input id="reflection-date" name="date" type="date" defaultValue={state.date} className="form-input mt-2" />
        </div>
        <div>
          <label htmlFor="reflection-season" className="text-xs font-bold uppercase text-burgundy">
            Season
          </label>
          <select id="reflection-season" name="season" defaultValue={state.season} className="form-input mt-2">
            <option value="">All seasons</option>
            {facets.seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="reflection-topic" className="text-xs font-bold uppercase text-burgundy">
            Topic
          </label>
          <select id="reflection-topic" name="topic" defaultValue={state.topic} className="form-input mt-2">
            <option value="">All topics</option>
            {facets.topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        {showKind ? (
          <div>
            <label htmlFor="reflection-kind" className="text-xs font-bold uppercase text-burgundy">
              Type
            </label>
            <select id="reflection-kind" name="kind" defaultValue={state.kind} className="form-input mt-2">
              <option value="">All reflections</option>
              <option value="daily">Daily Mass</option>
              <option value="sunday">Sunday Gospel</option>
            </select>
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary focus-ring">
          Filter reflections
        </button>
        {hasFilters ? (
          <Link href={action} className="btn btn-secondary focus-ring">
            Clear filters
          </Link>
        ) : null}
      </div>
      {hasFilters ? (
        <div className="flex flex-wrap gap-2 border-t border-stone pt-4">
          {state.q ? <FilterPill label={`Search: ${state.q}`} href={buildReflectionHref(action, state, { q: "" })} /> : null}
          {state.date ? <FilterPill label={`Date: ${state.date}`} href={buildReflectionHref(action, state, { date: "" })} /> : null}
          {state.season ? <FilterPill label={`Season: ${state.season}`} href={buildReflectionHref(action, state, { season: "" })} /> : null}
          {state.topic ? <FilterPill label={`Topic: ${state.topic}`} href={buildReflectionHref(action, state, { topic: "" })} /> : null}
          {state.kind ? <FilterPill label={`Type: ${state.kind}`} href={buildReflectionHref(action, state, { kind: "" })} /> : null}
        </div>
      ) : null}
    </form>
  );
}

function FilterPill({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="season-pill focus-ring bg-ivory px-3 py-2 hover:border-gold hover:text-navy">
      {label}
      <span className="sr-only"> remove filter</span>
    </Link>
  );
}
