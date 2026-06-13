import {
  getModerationStatusLabel,
  getPrayerIntentionAdminSchemaRows,
  getPrayerIntentionGoogleSheetsWorkflow,
} from "@/lib/prayerIntentions";
import { prayerIntentionModerationStatusOptions } from "@/data/prayerIntentions";
import { PrayerIntentionEmergencyNotice, PrayerIntentionPrivacyNotice } from "./PrayerIntentionNotices";

export function PrayerIntentionWorkflowView() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
      <div className="grid gap-8">
        <section className="dashboard-card p-5 sm:p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Moderation workflow</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Keep prayer public, reverent, and safe.</h1>
          <ol className="mt-6 grid gap-3">
            {getPrayerIntentionGoogleSheetsWorkflow().map((step, index) => (
              <li key={step} className="flex gap-3 rounded-md border border-stone bg-ivory p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-navy text-sm font-bold text-ivory">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-muted">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="dashboard-card p-5 sm:p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Moderation states</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Review before publication.</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {prayerIntentionModerationStatusOptions.map((status) => (
              <div key={status.value} className="rounded-md border border-stone bg-ivory p-4">
                <p className="text-sm font-bold text-navy">{getModerationStatusLabel(status.value)}</p>
                <p className="mt-2 text-xs leading-5 text-muted">{getStatusDescription(status.value)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-card p-5 sm:p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Supabase-ready schema</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Prayer intention fields</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            These fields can be used for a future Supabase table or a Google Sheets export. Public pages should query
            only approved rows marked public or anonymous public.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stone text-xs uppercase text-burgundy">
                  <th className="py-3 pr-4">Column</th>
                  <th className="py-3 pr-4">Type</th>
                  <th className="py-3 pr-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {getPrayerIntentionAdminSchemaRows().map((row) => (
                  <tr key={row.column} className="border-b border-stone">
                    <td className="py-3 pr-4 font-bold text-navy">{row.column}</td>
                    <td className="py-3 pr-4 font-mono text-xs text-burgundy">{row.type}</td>
                    <td className="py-3 pr-4 leading-6 text-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <aside className="grid gap-5 lg:sticky lg:top-24">
        <PrayerIntentionPrivacyNotice />
        <PrayerIntentionEmergencyNotice />
      </aside>
    </div>
  );
}

function getStatusDescription(status: string) {
  const descriptions: Record<string, string> = {
    "pending-review": "New submission waiting for human moderation.",
    approved: "Public-safe content allowed for display.",
    "needs-attention": "Requires pastoral, privacy, or safety review.",
    hidden: "Not displayed publicly, but retained for moderation context.",
    archived: "Closed or outdated and removed from active review.",
    reported: "Flagged by a user and returned to moderation.",
  };

  return descriptions[status] ?? "Moderation state.";
}
