import Link from "next/link";
import {
  buildMassReadingsHref,
  getReflectionTypeLabel,
} from "@/lib/massReadingsReflections";
import type {
  MassReadingsFacetOptions,
  MassReadingsReflectionSearchState,
} from "@/types/massReadingsReflections";

export function MassReflectionFilters({
  state,
  facets,
  action,
}: {
  state: MassReadingsReflectionSearchState;
  facets: MassReadingsFacetOptions;
  action: string;
}) {
  const hasFilters = Boolean(
    state.q ||
      state.type ||
      state.season ||
      state.cycleYear ||
      state.weekdayCycle ||
      state.lectionaryNumber ||
      state.scriptureReference,
  );

  return (
    <form action={action} className="dashboard-card grid gap-4 p-5">
      <div>
        <label htmlFor="mass-reflection-search" className="text-xs font-bold uppercase text-burgundy">
          Search reflections
        </label>
        <input
          id="mass-reflection-search"
          name="q"
          type="search"
          defaultValue={state.q}
          placeholder="Search liturgical day, theme, saint, or prayer"
          className="form-input mt-2"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <FilterSelect
          id="mass-reflection-type"
          label="Type"
          name="type"
          defaultValue={state.type}
          options={[
            { value: "", label: "All types" },
            ...facets.reflectionTypes.map((type) => ({
              value: type,
              label: getReflectionTypeLabel(type),
            })),
          ]}
        />
        <FilterSelect
          id="mass-reflection-season"
          label="Season"
          name="season"
          defaultValue={state.season}
          options={[{ value: "", label: "All seasons" }, ...facets.seasons.map((season) => ({ value: season, label: season }))]}
        />
        <FilterSelect
          id="mass-reflection-cycle"
          label="Cycle year"
          name="cycleYear"
          defaultValue={state.cycleYear}
          options={[{ value: "", label: "All cycle years" }, ...facets.cycleYears.map((year) => ({ value: year, label: year }))]}
        />
        <FilterSelect
          id="mass-reflection-weekday"
          label="Weekday cycle"
          name="weekdayCycle"
          defaultValue={state.weekdayCycle}
          options={[{ value: "", label: "All weekday cycles" }, ...facets.weekdayCycles.map((cycle) => ({ value: cycle, label: cycle }))]}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FilterSelect
          id="mass-reflection-lectionary"
          label="Lectionary number"
          name="lectionaryNumber"
          defaultValue={state.lectionaryNumber}
          options={[
            { value: "", label: "Any lectionary number" },
            ...facets.lectionaryNumbers.map((number) => ({ value: number, label: number })),
          ]}
        />
        <FilterSelect
          id="mass-reflection-scripture"
          label="Scripture reference"
          name="scriptureReference"
          defaultValue={state.scriptureReference}
          options={[
            { value: "", label: "Any reading reference" },
            ...facets.scriptureReferences.map((reference) => ({ value: reference, label: reference })),
          ]}
        />
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
          {state.q ? <FilterPill label={`Search: ${state.q}`} href={buildMassReadingsHref(action, state, { q: "" })} /> : null}
          {state.type ? <FilterPill label={`Type: ${getReflectionTypeLabel(state.type)}`} href={buildMassReadingsHref(action, state, { type: "" })} /> : null}
          {state.season ? <FilterPill label={`Season: ${state.season}`} href={buildMassReadingsHref(action, state, { season: "" })} /> : null}
          {state.cycleYear ? <FilterPill label={`Cycle: ${state.cycleYear}`} href={buildMassReadingsHref(action, state, { cycleYear: "" })} /> : null}
          {state.weekdayCycle ? <FilterPill label={`Weekday: ${state.weekdayCycle}`} href={buildMassReadingsHref(action, state, { weekdayCycle: "" })} /> : null}
          {state.lectionaryNumber ? <FilterPill label={`Lectionary: ${state.lectionaryNumber}`} href={buildMassReadingsHref(action, state, { lectionaryNumber: "" })} /> : null}
          {state.scriptureReference ? <FilterPill label={`Reading: ${state.scriptureReference}`} href={buildMassReadingsHref(action, state, { scriptureReference: "" })} /> : null}
        </div>
      ) : null}
    </form>
  );
}

function FilterSelect({
  id,
  label,
  name,
  defaultValue,
  options,
}: {
  id: string;
  label: string;
  name: string;
  defaultValue: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase text-burgundy">
        {label}
      </label>
      <select id={id} name={name} defaultValue={defaultValue} className="form-input mt-2">
        {options.map((option) => (
          <option key={`${name}-${option.value || "all"}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
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
