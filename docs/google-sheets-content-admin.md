# Daily Oratory Google Sheets Content Admin

Daily Oratory can use a Google Sheets workbook as a no-cost content admin system. Editors maintain approved rows in Sheets, then Apps Script exports static JSON files into a configured Google Drive folder for the Next.js site.

## Principles

- Row 1 is headers only.
- One record per row.
- Every content row has a stable `ID`.
- Public export uses `Status = Approved` only.
- `Draft`, `Needs Review`, and `Archived` rows are skipped.
- `Config`, `Export_Log`, and `Change_Log` are admin tabs, not content tabs.
- Raw content tabs stay separate from logs and export logic.

## Workbook Tabs

Create these tabs exactly:

1. `Config`
2. `Resources`
3. `Reflections`
4. `Events`
5. `Liturgical_Days`
6. `Liturgical_Seasons`
7. `Saints`
8. `Sacraments`
9. `Pathways`
10. `Pathway_Steps`
11. `Prayers`
12. `Adoration_Streams`
13. `Prayer_Rooms`
14. `Prayer_Intentions`
15. `Prayer_Chain_Requests`
16. `Categories`
17. `Tags`
18. `Redirects`
19. `Export_Log`
20. `Change_Log`
21. `Copyright_Review`

## Sheet Schema

| Tab | Headers |
| --- | --- |
| `Config` | `Key`, `Value`, `Notes` |
| `Resources` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Category`, `Content_Type`, `Tags`, `Related_Resource_IDs`, `Season`, `Audience`, `Estimated_Minutes`, `Featured`, `Canonical_Path`, `Body`, `Created_At`, `Updated_At` |
| `Reflections` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Date`, `Reflection_Kind`, `Liturgical_Day`, `Liturgical_Season`, `Scripture_References`, `Excerpt`, `Body`, `Reflection_Questions`, `Prayer`, `Tags`, `Related_Resource_IDs`, `Featured`, `Created_At`, `Updated_At` |
| `Events` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Event_Type`, `Starts_At`, `Ends_At`, `Timezone`, `Location_Name`, `Location_Type`, `Venue_Address`, `Registration_URL`, `Host_Name`, `Language`, `Recurrence_Frequency`, `Recurrence_Label`, `Tags`, `Related_Resource_IDs`, `Featured`, `Body`, `Preparation_Notes`, `Created_At`, `Updated_At` |
| `Liturgical_Days` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Date`, `Season`, `Liturgical_Color`, `Rank`, `Feast_Or_Saint`, `Daily_Readings_URL`, `Suggested_Prayer`, `Suggested_Devotion`, `Seasonal_Practice`, `Fasting_Abstinence_Note`, `Family_Prayer_Idea`, `Works_Of_Mercy_Suggestion`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Liturgical_Seasons` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Season`, `Color`, `Starts_On`, `Ends_On`, `Practices`, `Family_Practices`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Saints` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Feast_Day`, `Patronage`, `Virtue_Focus`, `Life_Situations`, `Vocation_Tags`, `Saint_Type`, `Short_Biography`, `Prayer_Prompt`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Sacraments` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Sacrament`, `Route`, `Best_For`, `Preparation_Steps`, `Role_Checklists`, `Reflection_Prompts`, `Prayers`, `Parish_Reminder`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Pathways` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Spiritual_Goal`, `Best_For`, `Estimated_Duration`, `Step_IDs`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Pathway_Steps` | `ID`, `Status`, `Pathway_ID`, `Title`, `Slug`, `Description`, `Step_Order`, `Teaching`, `Scripture_Reference`, `Prayer_Prompt`, `Practice`, `Reflection_Questions`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Prayers` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Prayer_Type`, `Season`, `Audience`, `Text`, `Response`, `Posture`, `Time_Of_Day`, `Source_Note`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Adoration_Streams` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Chapel_Name`, `Location`, `Country`, `Language`, `Stream_Status`, `Is_24_7`, `Is_Verified`, `Source_URL`, `Embed_URL`, `Last_Checked_At`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Prayer_Rooms` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Room_ID`, `Devotion_Type`, `Room_Status`, `Host_Name`, `Start_Time`, `Language`, `Capacity`, `Participant_Count`, `Prayer_Steps`, `Safety_Notes`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Prayer_Intentions` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Intention_Category`, `Visibility`, `Moderation_Status`, `Intention_Summary`, `Prayer_Count`, `Submitted_At`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Prayer_Chain_Requests` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Request_ID`, `Category`, `Privacy`, `Urgent`, `Routed_Team`, `Moderation_Status`, `Request_Summary`, `Thanksgiving_Update`, `Submitted_At`, `Tags`, `Related_Resource_IDs`, `Created_At`, `Updated_At` |
| `Categories` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Parent_Category`, `Sort_Order`, `Created_At`, `Updated_At` |
| `Tags` | `ID`, `Status`, `Title`, `Slug`, `Description`, `Tag_Group`, `Sort_Order`, `Created_At`, `Updated_At` |
| `Redirects` | `ID`, `Status`, `Source`, `Destination`, `Permanent`, `Notes`, `Created_At`, `Updated_At` |
| `Export_Log` | `Timestamp`, `Export_ID`, `Action`, `Sheet_Name`, `File_Name`, `Record_Count`, `Status`, `Message`, `User_Email` |
| `Change_Log` | `Timestamp`, `Action`, `Sheet_Name`, `Row_Number`, `Record_ID`, `Message`, `User_Email` |
| `Copyright_Review` | `Review_ID`, `Content_ID`, `Content_Type`, `Title`, `File_Path`, `Source_Name`, `Source_URL`, `Creator`, `License`, `Copyright_Status`, `Risk_Level`, `Issue`, `Recommended_Action`, `Review_Status`, `Reviewed_By`, `Reviewed_At`, `Notes` |
| `Local_Settings` | `Country`, `Diocese`, `Time_Zone`, `Day_Rollover_Hour`, `Calendar_Source`, `Preferred_Language`, `Show_Family_Ideas`, `Show_Fasting_Reminders`, `Show_Works_Of_Mercy` |

All exportable content tabs also include these copyright tracking fields after the standard content fields:

`Creator`, `Author`, `Source_Name`, `Source_URL`, `License`, `License_URL`, `Copyright_Status`, `Attribution_Text`, `Attribution_Required`, `Risk_Level`, `Review_Status`, `Reviewed_By`, `Reviewed_At`, `Notes`.

For liturgical local settings, include `Day_Rollover_Hour` so the daily dashboard can stay on the previous day until a chosen local hour such as `1` for 1:00 AM Central.

## Apps Script Files

Copy the files from `google-workspace/content-admin` into the Apps Script editor:

- `Code.gs`
- `Config.gs`
- `DataService.gs`
- `Validation.gs`
- `ExportService.gs`
- `JsonBuilder.gs`
- `LogService.gs`
- `Menu.gs`
- `Utilities.gs`

## Custom Menu

The script adds a Google Sheets menu named `Daily Oratory Content Admin`.

Menu items:

- `Create Missing IDs`
- `Validate Content`
- `Export Approved Content`
- `Export Redirects`
- `View Export Log`

## Setup Steps

1. Create a Google Sheet named `Daily Oratory Content Admin`.
2. Open `Extensions > Apps Script`.
3. Add the nine Apps Script files from `google-workspace/content-admin`.
4. Save the Apps Script project.
5. Reload the Sheet.
6. Run `setupDailyOratoryWorkbook` once from Apps Script or the editor run button.
7. Authorize the script when prompted.
8. Open the `Config` tab.
9. Paste a Drive folder ID into `EXPORT_FOLDER_ID`.
10. Add sample rows with `Status = Draft`.
11. Run `Create Missing IDs`.
12. Change one complete row to `Status = Approved`.
13. Run `Validate Content`.
14. Run `Export Approved Content`.
15. Confirm JSON files appear in the configured Drive folder.

## Data Entry Rules

- Use `Approved` only after content has editorial review.
- Use URL-safe slugs, for example `daily-rosary-room`.
- Use pipe-separated lists for simple arrays, for example `prayer|rosary|mary`.
- Use JSON arrays or objects for structured fields like `Body`, `Prayer_Steps`, and `Scripture_References`.
- Do not copy copyrighted daily readings. Use Scripture references and official external links.
- Do not store confidential confession details or sensitive pastoral data in public content tabs.
- Do not approve content until copyright/provenance fields are complete for non-original material.
- Use `Review_Status = Do Not Publish` for blocked items.
- Use `Review_Status = Replace Required` for high-risk content that must be rewritten or linked instead of copied.
- Use the `Copyright_Review` tab to track issues, recommended actions, and owner confirmation.

## Exported JSON

Each exportable tab creates a JSON file:

- `resources.json`
- `reflections.json`
- `events.json`
- `liturgical_days.json`
- `liturgical_seasons.json`
- `saints.json`
- `sacraments.json`
- `pathways.json`
- `pathway_steps.json`
- `prayers.json`
- `adoration_streams.json`
- `prayer_rooms.json`
- `prayer_intentions.json`
- `prayer_chain_requests.json`
- `categories.json`
- `tags.json`
- `redirects.json`

Each record includes a `source` object:

```json
{
  "system": "google-sheets",
  "sheetName": "Events",
  "lastSyncedAt": "2026-05-08T14:00:00-05:00"
}
```

## Validation Rules

The script validates:

- Required fields for approved rows.
- `Status` values.
- Slug uniqueness across non-archived content tabs.
- Redirect sources beginning with `/`.
- Redirect destinations beginning with `/` or `https://`.
- Copyright review fields on approved rows.
- `Review_Status = Do Not Publish` and `Review_Status = Replace Required` are blocked from export.
- `Risk_Level = High Risk` is blocked from export.
- Missing required attribution text is blocked when `Attribution_Required = true`.
- Missing `Copyright_Status` or `Review_Status` on approved rows is logged as a warning.

## Testing Checklist

- Reloading the spreadsheet shows the `Daily Oratory Content Admin` menu.
- `setupDailyOratoryWorkbook` creates all 21 tabs with row 1 headers.
- Status dropdowns appear on exportable tabs and `Redirects`.
- `Create Missing IDs` fills blank `ID` cells without changing existing IDs.
- `Validate Content` reports missing required fields before export.
- Duplicate slugs are blocked.
- Draft, Needs Review, and Archived rows do not export.
- Approved rows export into the configured Drive folder.
- Existing JSON files are updated instead of duplicated.
- `Export_Log` records each export.
- `Change_Log` records setup and ID creation.

## Next.js Integration Plan

Version 1 keeps static TypeScript data in `src/data/*`. The exported JSON can later be copied into `src/data/generated/*` and imported by server components, or fetched during a build step.

Recommended next step:

1. Add `src/data/generated`.
2. Add a small script that downloads the Drive-exported JSON files or accepts a manual copy.
3. Normalize exported status values from `Approved` to public runtime status values such as `published`.
4. Keep all public pages statically generated where possible.
