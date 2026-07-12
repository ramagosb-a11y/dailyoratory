# Mass Readings deployment automation

This bound Google Apps Script groups eligible edits in `Mass_Readings_Reflections` into one Vercel production deployment.

## Setup

1. In Vercel, open the `daily-oratory` project and create a production Deploy Hook for the production branch.
2. In the Mass Readings spreadsheet, open **Extensions → Apps Script**.
3. Copy `Code.gs` into the bound Apps Script project.
4. Run `configureMassReadingsDeployAutomation` once.
5. Paste the Vercel Deploy Hook URL and approve the requested permissions.

After setup, edits to rows whose `Status` is `scheduled` or `published` are debounced for 15 minutes. A work session with many cell edits creates one deployment rather than one deployment per edit.

Keep the Deploy Hook URL private. It is stored in Apps Script properties, not spreadsheet cells.
