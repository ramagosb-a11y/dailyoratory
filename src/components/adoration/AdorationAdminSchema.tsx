import { getAdorationBackendPlan } from "@/lib/adoration";

export function AdorationAdminSchema() {
  const { googleSheetsSchema, appsScriptExporterPlan } = getAdorationBackendPlan();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Google Sheets schema</p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Admin-friendly stream columns.</h2>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {googleSheetsSchema.map((column) => (
            <code key={column} className="rounded-sm border border-stone bg-parchment px-2 py-1 text-xs text-navy">
              {column}
            </code>
          ))}
        </div>
      </section>

      <section className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Apps Script exporter</p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Validate before publishing.</h2>
        <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
          {appsScriptExporterPlan.map((item) => (
            <li key={item} className="border-t border-stone pt-2 first:border-t-0 first:pt-0">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
