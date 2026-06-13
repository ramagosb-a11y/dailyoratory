import { LiturgicalSubnav, VerificationNote } from "@/components/liturgical-living/LiturgicalLivingCards";
import { SectionHeader } from "@/components/section-header";
import {
  defaultLiturgicalLivingSettings,
  diocesanVerificationNote,
  liturgicalLivingGoogleSheetsSchema,
} from "@/data/liturgicalLiving";

export function LiturgicalSettingsView() {
  const settings = defaultLiturgicalLivingSettings;

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <LiturgicalSubnav />
        <SectionHeader
          eyebrow="Local settings"
          title="Calendar settings"
          summary="Static settings now, ready for local storage, Google Sheets, or a backend later."
        />
        <div className="mt-6">
          <VerificationNote note={diocesanVerificationNote} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <form className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Local calendar</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Default region</h2>
            <div className="mt-5 grid gap-4">
              <Field label="Country" value={settings.country} />
              <Field label="Diocese" value={settings.diocese} />
              <Field label="Time zone" value={settings.timeZone} />
              <Field label="Calendar source" value={settings.calendarSource} />
              <Field label="Preferred language" value={settings.preferredLanguage} />
              <Field label="Ascension observance" value={settings.ascensionObservance} />
              <label className="flex items-start gap-3 text-sm font-semibold text-navy">
                <input type="checkbox" defaultChecked={settings.showFamilyIdeas} className="mt-1" />
                Show family prayer ideas
              </label>
              <label className="flex items-start gap-3 text-sm font-semibold text-navy">
                <input type="checkbox" defaultChecked={settings.showFastingReminders} className="mt-1" />
                Show fasting and abstinence reminders
              </label>
              <label className="flex items-start gap-3 text-sm font-semibold text-navy">
                <input type="checkbox" defaultChecked={settings.showWorksOfMercy} className="mt-1" />
                Show works of mercy suggestions
              </label>
            </div>
            <button type="button" className="btn btn-secondary focus-ring mt-6">
              Static settings preview
            </button>
          </form>

          <section className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Google Sheets admin schema</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Future maintenance tabs</h2>
            <div className="mt-5 grid gap-4">
              {liturgicalLivingGoogleSheetsSchema.map((sheet) => (
                <article key={sheet.sheetName} className="card-parchment p-4">
                  <h3 className="text-sm font-bold text-navy">{sheet.sheetName}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{sheet.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sheet.columns.slice(0, 8).map((column) => (
                      <span key={`${sheet.sheetName}-${column.key}`} className="season-pill bg-ivory">
                        {column.label}
                      </span>
                    ))}
                    {sheet.columns.length > 8 ? <span className="season-pill bg-ivory">+{sheet.columns.length - 8} more</span> : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={id}>
      <span className="form-label">{label}</span>
      <input id={id} className="form-field focus-ring mt-2" defaultValue={value} />
    </label>
  );
}
