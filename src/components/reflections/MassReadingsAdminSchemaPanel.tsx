import { getMassReadingsAdminSchema } from "@/lib/massReadingsReflections";

export function MassReadingsAdminSchemaPanel() {
  const schema = getMassReadingsAdminSchema();

  return (
    <section className="mt-14">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Admin recommendation</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
          Google Sheets admin structure
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
          This reflection system is prepared for a future Google Sheets publishing flow so the owner can
          add daily Mass, Sunday Mass, solemnity, and feast day reflections without editing code.
        </p>
      </div>
      <div className="mt-7 dashboard-card p-6 sm:p-8">
        <p className="text-sm font-semibold text-navy">{schema.sheetName}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {schema.tabs.map((tab) => (
            <article key={tab.name} className="card p-5">
              <h3 className="font-display text-2xl font-semibold text-navy">{tab.name}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                {tab.headers.slice(0, 8).map((header) => (
                  <li key={header}>• {header}</li>
                ))}
                {tab.headers.length > 8 ? <li>• …and {tab.headers.length - 8} more fields</li> : null}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-muted">
          Recommended rules: export published and scheduled reflections, do not export drafts, validate
          slugs and dates, and log each export.
        </p>
      </div>
    </section>
  );
}
