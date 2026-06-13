import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, "output");
const outputPath = path.join(outputDir, "Daily Oratory Media Library Admin.xlsx");

const workbook = Workbook.create();

const instructionsSheet = workbook.worksheets.add("Instructions");
const mediaItemsSheet = workbook.worksheets.add("Media_Items");
const categoriesSheet = workbook.worksheets.add("Media_Categories");
const collectionsSheet = workbook.worksheets.add("Featured_Collections");
const settingsSheet = workbook.worksheets.add("Settings");
const changeLogSheet = workbook.worksheets.add("Change_Log");
const copyrightSheet = workbook.worksheets.add("Copyright_Review");

buildInstructionsSheet(instructionsSheet);
buildMediaItemsSheet(mediaItemsSheet);
buildMediaCategoriesSheet(categoriesSheet);
buildCollectionsSheet(collectionsSheet);
buildSettingsSheet(settingsSheet);
buildChangeLogSheet(changeLogSheet);
buildCopyrightSheet(copyrightSheet);

await fs.mkdir(outputDir, { recursive: true });

const inspect = await workbook.inspect({
  kind: "sheet,table",
  maxChars: 4000,
  tableMaxRows: 8,
  tableMaxCols: 8,
});

console.log(inspect.ndjson);

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);

console.log(`Saved workbook to ${outputPath}`);

function buildInstructionsSheet(sheet) {
  sheet.getRange("A1:F1").merge();
  sheet.getRange("A1").values = [["Daily Oratory Media Library Admin"]];
  sheet.getRange("A2:F2").merge();
  sheet.getRange("A2").values = [["Upload this workbook into Google Sheets and use it as the source of truth for the Daily Oratory Media Library."]];

  sheet.getRange("A4:B17").values = [
    ["Sheet Name", "Purpose"],
    ["Media_Items", "Main library records for videos, playlists, slides, images, files, and resource collections."],
    ["Media_Categories", "Approved category list used for browsing and filters."],
    ["Featured_Collections", "Grouped media sets such as Start Here for Prayer or First Time at Mass."],
    ["Settings", "Global notes, sheet name, future feed settings, and publishing guidance."],
    ["Change_Log", "Optional manual log for edits and editorial review."],
    ["Copyright_Review", "Track review status before publishing externally hosted media."],
    ["", ""],
    ["Status values", "Draft, Review, Approved, Hidden, Do Not Publish"],
    ["Copyright values", "original, owned-by-daily-oratory, permission-granted, public-domain, creative-commons, external-embed, needs-review, do-not-publish"],
    ["Media type values", "youtube-video, youtube-playlist, google-slides, google-drive-image, google-drive-file, external-image, pdf, collection"],
    ["Publishing rule", "Only rows marked Approved and copyright-cleared should appear publicly."],
    ["Google Drive rule", "Only use files intentionally shared as Anyone with the link can view."],
    ["YouTube rule", "Paste the share URL and optionally the extracted Video ID or Playlist ID."],
  ];

  sheet.getRange("D4:F15").values = [
    ["Instructions", "Steps"],
    ["For YouTube videos", "1. Open the video. 2. Click Share. 3. Copy URL. 4. Paste into YouTube URL."],
    ["For YouTube playlists", "1. Open the playlist. 2. Copy the playlist URL. 3. Paste into YouTube URL or Playlist ID."],
    ["For Google Slides", "Best option: File > Share > Publish to web > Embed, then paste the embed URL."],
    ["Google Slides fallback", "If only a viewer URL is available, paste it into Google Slides URL and the site can show an Open Slides button."],
    ["For Google Drive images/files", "1. Upload file. 2. Set Anyone with the link can view. 3. Copy file link. 4. Paste into Google Drive File URL. 5. Add alt text and copyright status."],
    ["Security warning", "Do not add private family photos, ministry documents, or anything containing personal information."],
    ["Copyright warning", "Do not publish copyrighted files unless you own them, have permission, or the license permits reuse."],
    ["Suggested Google Sheet name", "Daily Oratory Media Library Admin"],
    ["Recommended publishing flow", "Draft > Review > Approved"],
    ["Future integration note", "This workbook is structured so it can later be exported to JSON or served by Apps Script."],
    ["Owner reminder", "If a file is not approved, do not expose it publicly on the site."],
  ];

  styleTitle(sheet, "A1");
  styleSubtitle(sheet, "A2");
  styleHeaderRow(sheet, "A4:B4");
  styleHeaderRow(sheet, "D4:F4");
  styleBodyTable(sheet, "A5:B17");
  styleBodyTable(sheet, "D5:F15");

  sheet.freezePanes.freezeRows(4);
  setColumns(sheet, [
    ["A", 220],
    ["B", 420],
    ["D", 220],
    ["E", 420],
    ["F", 160],
  ]);
}

function buildMediaItemsSheet(sheet) {
  const headers = [[
    "Media ID",
    "Title",
    "Slug",
    "Description",
    "Short Description",
    "Media Type",
    "Category",
    "Tags",
    "Topic",
    "Audience",
    "YouTube URL",
    "YouTube Video ID",
    "YouTube Playlist ID",
    "Google Slides URL",
    "Google Slides Embed URL",
    "Google Drive File URL",
    "Google Drive File ID",
    "Image URL",
    "Thumbnail URL",
    "Alt Text",
    "Speaker / Creator",
    "Source Name",
    "Source URL",
    "Copyright Status",
    "License Notes",
    "Featured",
    "Collection ID",
    "Related Daily Oratory Links",
    "Related Scripture References",
    "Related Catechism References",
    "Status",
    "Sort Order",
    "Published Date",
    "Updated Date",
    "Notes",
  ]];

  const rows = [
    [
      "media-welcome-daily-oratory",
      "Welcome to Daily Oratory",
      "welcome-to-daily-oratory",
      "TODO: add a full original description for the first public media item.",
      "TODO: add a short description.",
      "youtube-video",
      "formation",
      "Prayer, Formation, Welcome",
      "Introduction",
      "Catholics, returning Catholics, people exploring the Catholic faith",
      "TODO: paste a public YouTube URL",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "TODO: add clear alt text if a thumbnail or image is used.",
      "Daily Oratory",
      "YouTube",
      "",
      "needs-review",
      "Replace after copyright review.",
      "FALSE",
      "collection-start-here-prayer",
      "/pray, /explore, /formation",
      "",
      "",
      "Draft",
      10,
      "2026-05-17",
      "2026-05-17",
      "Placeholder starter record. Do not publish until the real public URL is added.",
    ],
    [
      "media-catholic-formation-slides",
      "Catholic Formation Slides",
      "catholic-formation-slides",
      "TODO: describe the purpose of this slide deck for parish, OCIA, or family formation.",
      "Draft placeholder for a future Google Slides presentation.",
      "google-slides",
      "slides-teaching-resources",
      "Slides, Formation, Teaching",
      "Catholic Formation Slides",
      "Catholics, OCIA users, parish groups, formation leaders",
      "",
      "",
      "",
      "TODO: paste the Google Slides viewer URL",
      "TODO: paste the Publish to web embed URL",
      "",
      "",
      "",
      "",
      "Slide deck preview for Catholic formation.",
      "Daily Oratory",
      "Google Slides",
      "",
      "needs-review",
      "Only publish after the deck is intentionally public.",
      "FALSE",
      "collection-ocia-exploring-faith",
      "/formation, /ocia, /explore",
      "",
      "",
      "Draft",
      20,
      "2026-05-17",
      "2026-05-17",
      "Use Publish to web > Embed for best on-site display.",
    ],
    [
      "media-prayer-card-image",
      "Prayer Card Image",
      "prayer-card-image",
      "TODO: describe the image, prayer card, or visual resource being displayed.",
      "Draft placeholder for a public prayer image.",
      "google-drive-image",
      "images-prayer-cards",
      "Image, Prayer Card, Formation",
      "Prayer Image",
      "Catholics, families, parish groups",
      "",
      "",
      "",
      "",
      "",
      "TODO: paste the public Google Drive file URL",
      "",
      "",
      "",
      "TODO: add alt text that clearly describes the image.",
      "Daily Oratory",
      "Google Drive",
      "",
      "needs-review",
      "Only publish intentionally public images.",
      "FALSE",
      "collection-family-prayer-home",
      "/family, /pray, /saints",
      "",
      "",
      "Draft",
      30,
      "2026-05-17",
      "2026-05-17",
      "Set sharing to Anyone with the link can view before approval.",
    ],
  ];

  sheet.getRange(`A1:AI1`).values = headers;
  sheet.getRange(`A2:AI${rows.length + 1}`).values = rows;

  styleHeaderRow(sheet, "A1:AI1");
  styleBodyTable(sheet, `A2:AI${rows.length + 1}`);
  sheet.freezePanes.freezeRows(1);
  setColumns(sheet, [
    ["A", 180], ["B", 220], ["C", 180], ["D", 320], ["E", 220], ["F", 160], ["G", 160], ["H", 180],
    ["I", 170], ["J", 220], ["K", 220], ["L", 150], ["M", 150], ["N", 200], ["O", 220], ["P", 220],
    ["Q", 150], ["R", 180], ["S", 180], ["T", 220], ["U", 180], ["V", 140], ["W", 180], ["X", 160],
    ["Y", 220], ["Z", 100], ["AA", 180], ["AB", 220], ["AC", 200], ["AD", 200], ["AE", 120], ["AF", 90],
    ["AG", 120], ["AH", 120], ["AI", 280],
  ]);
}

function buildMediaCategoriesSheet(sheet) {
  const headers = [["Category ID", "Title", "Slug", "Description", "Icon Name", "Sort Order", "Status"]];
  const rows = [
    ["category-prayer", "Prayer", "prayer", "Prayer resources for silence, petitions, devotions, and conversation with God.", "hands-praying", 10, "Approved"],
    ["category-scripture", "Scripture", "scripture", "Resources rooted in the Word of God and Catholic interpretation.", "book-open", 20, "Approved"],
    ["category-mass", "Mass", "mass", "Formation resources for the Holy Mass and Catholic worship.", "church", 30, "Approved"],
    ["category-sacraments", "Sacraments", "sacraments", "Resources explaining sacramental life and grace.", "sparkles", 40, "Approved"],
    ["category-confession", "Confession", "confession", "Mercy, repentance, and reconciliation resources.", "heart", 50, "Approved"],
    ["category-adoration", "Adoration", "adoration", "Eucharistic prayer resources and reverent formation.", "sun", 60, "Approved"],
    ["category-rosary", "Rosary", "rosary", "Marian prayer resources and mystery meditation guides.", "circle", 70, "Approved"],
    ["category-saints", "Saints", "saints", "Saint stories, prayer cards, and holiness companions.", "star", 80, "Approved"],
    ["category-devotions", "Devotions", "devotions", "Traditional devotions ordered toward Christ.", "candles", 90, "Approved"],
    ["category-formation", "Formation", "formation", "Catholic doctrine, prayer, virtue, and discipleship resources.", "graduation-cap", 100, "Approved"],
    ["category-ocia", "OCIA / Becoming Catholic", "ocia", "Resources for seekers, catechumens, candidates, and inquirers.", "footprints", 110, "Approved"],
    ["category-family", "Family and Domestic Church", "family", "Prayer and formation resources for family life.", "home", 120, "Approved"],
    ["category-liturgical-living", "Liturgical Living", "liturgical-living", "Resources for living the Church year in daily life.", "calendar-days", 130, "Approved"],
    ["category-church-history", "Church History", "church-history", "Historical resources about the Church across the centuries.", "landmark", 140, "Approved"],
    ["category-church-fathers", "Church Fathers", "church-fathers", "Early Christian teaching resources and source guides.", "scroll-text", 150, "Approved"],
    ["category-indulgences", "Indulgences", "indulgences", "Resources for understanding indulgences and their conditions.", "award", 160, "Approved"],
    ["category-youth", "Youth / Students", "youth-students", "Resources for young Catholics and school formation.", "notebook-pen", 170, "Approved"],
    ["category-retreats", "Retreats", "retreats", "Prayer and formation resources for retreat settings.", "trees", 180, "Approved"],
    ["category-talks", "Homilies / Talks", "homilies-talks", "Talks, teaching sessions, and spoken formation resources.", "mic", 190, "Approved"],
    ["category-slides", "Slides and Teaching Resources", "slides-teaching-resources", "Slides, presentations, and teaching materials.", "presentation", 200, "Approved"],
    ["category-images", "Images and Prayer Cards", "images-prayer-cards", "Visual resources, prayer cards, and sacred images.", "image", 210, "Approved"],
  ];

  sheet.getRange("A1:G1").values = headers;
  sheet.getRange(`A2:G${rows.length + 1}`).values = rows;
  styleHeaderRow(sheet, "A1:G1");
  styleBodyTable(sheet, `A2:G${rows.length + 1}`);
  sheet.freezePanes.freezeRows(1);
  setColumns(sheet, [["A", 180], ["B", 220], ["C", 180], ["D", 360], ["E", 140], ["F", 100], ["G", 120]]);
}

function buildCollectionsSheet(sheet) {
  const headers = [["Collection ID", "Title", "Slug", "Description", "Media IDs", "Featured", "Sort Order", "Status"]];
  const rows = [
    ["collection-start-here-prayer", "Start Here for Prayer", "start-here-for-prayer", "A gentle first set of resources for beginning prayer with Daily Oratory.", "media-welcome-daily-oratory, media-prayer-card-image", "TRUE", 10, "Approved"],
    ["collection-first-time-at-mass", "First Time at Mass", "first-time-at-mass", "Helpful resources for those attending Mass for the first time or returning after time away.", "media-welcome-daily-oratory", "TRUE", 20, "Approved"],
    ["collection-eucharistic-adoration", "Eucharistic Adoration", "eucharistic-adoration", "Prayerful media to support Eucharistic faith and reverence.", "media-prayer-card-image", "TRUE", 30, "Approved"],
    ["collection-ocia-exploring-faith", "OCIA and Exploring the Faith", "ocia-and-exploring-the-faith", "Clear and welcoming resources for those learning Catholicism step by step.", "media-catholic-formation-slides", "TRUE", 40, "Approved"],
    ["collection-family-prayer-home", "Family Prayer at Home", "family-prayer-at-home", "A simple starter collection for families building a Catholic prayer rhythm.", "media-prayer-card-image", "TRUE", 50, "Approved"],
    ["collection-mass-explained", "The Mass Explained", "the-mass-explained", "Resources that help viewers understand Catholic worship and the Eucharist.", "media-welcome-daily-oratory", "TRUE", 60, "Approved"],
  ];

  sheet.getRange("A1:H1").values = headers;
  sheet.getRange(`A2:H${rows.length + 1}`).values = rows;
  styleHeaderRow(sheet, "A1:H1");
  styleBodyTable(sheet, `A2:H${rows.length + 1}`);
  sheet.freezePanes.freezeRows(1);
  setColumns(sheet, [["A", 220], ["B", 220], ["C", 200], ["D", 360], ["E", 260], ["F", 100], ["G", 90], ["H", 120]]);
}

function buildSettingsSheet(sheet) {
  const headers = [["Setting Key", "Setting Value", "Notes"]];
  const rows = [
    ["Sheet Name", "Daily Oratory Media Library Admin", "Recommended Google Sheet name after upload."],
    ["Publishing Rule", "Only Approved items with cleared copyright may appear publicly.", "Draft, Review, Hidden, and Do Not Publish must stay off the site."],
    ["YouTube Embed", "Use youtube-nocookie embeds", "Do not autoplay with sound."],
    ["Google Slides Embed", "Use Publish to web embed URL if possible", "Fallback is Open Slides button."],
    ["Google Drive Preview", "Use public file preview links only", "Only Anyone with the link can view files should be added."],
    ["Future Feed Option", "Google Sheet export or Apps Script JSON endpoint", "Current site version uses local data first."],
  ];

  sheet.getRange("A1:C1").values = headers;
  sheet.getRange(`A2:C${rows.length + 1}`).values = rows;
  styleHeaderRow(sheet, "A1:C1");
  styleBodyTable(sheet, `A2:C${rows.length + 1}`);
  sheet.freezePanes.freezeRows(1);
  setColumns(sheet, [["A", 180], ["B", 280], ["C", 420]]);
}

function buildChangeLogSheet(sheet) {
  const headers = [["Timestamp", "Editor", "Change Type", "Media ID", "Notes"]];
  const rows = [
    ["2026-05-17 16:30", "Owner", "Template created", "media-welcome-daily-oratory", "Initial starter workbook prepared for upload to Google Sheets."],
  ];

  sheet.getRange("A1:E1").values = headers;
  sheet.getRange(`A2:E${rows.length + 1}`).values = rows;
  styleHeaderRow(sheet, "A1:E1");
  styleBodyTable(sheet, `A2:E${rows.length + 1}`);
  sheet.freezePanes.freezeRows(1);
  setColumns(sheet, [["A", 160], ["B", 160], ["C", 180], ["D", 180], ["E", 420]]);
}

function buildCopyrightSheet(sheet) {
  const headers = [["Media ID", "Title", "Source", "Copyright Status", "Reviewed By", "Review Date", "Notes"]];
  const rows = [
    ["media-welcome-daily-oratory", "Welcome to Daily Oratory", "YouTube", "needs-review", "", "", "Fill this in before publishing the item."],
    ["media-catholic-formation-slides", "Catholic Formation Slides", "Google Slides", "needs-review", "", "", "Confirm the slide deck is intentionally public and approved."],
    ["media-prayer-card-image", "Prayer Card Image", "Google Drive", "needs-review", "", "", "Do not publish unless the image is intentionally public and cleared for use."],
  ];

  sheet.getRange("A1:G1").values = headers;
  sheet.getRange(`A2:G${rows.length + 1}`).values = rows;
  styleHeaderRow(sheet, "A1:G1");
  styleBodyTable(sheet, `A2:G${rows.length + 1}`);
  sheet.freezePanes.freezeRows(1);
  setColumns(sheet, [["A", 180], ["B", 220], ["C", 140], ["D", 160], ["E", 140], ["F", 120], ["G", 380]]);
}

function styleTitle(sheet, cell) {
  const range = sheet.getRange(cell);
  range.format = {
    fill: "#0d2038",
    font: { bold: true, color: "#ffffff", size: 18 },
    horizontalAlignment: "center",
    verticalAlignment: "center",
  };
}

function styleSubtitle(sheet, cell) {
  const range = sheet.getRange(cell);
  range.format = {
    fill: "#f3ead8",
    font: { color: "#4b5563", italic: true },
    wrapText: true,
    verticalAlignment: "center",
  };
}

function styleHeaderRow(sheet, rangeAddress) {
  const range = sheet.getRange(rangeAddress);
  range.format = {
    fill: "#7a2533",
    font: { bold: true, color: "#ffffff" },
    wrapText: true,
    verticalAlignment: "center",
  };
}

function styleBodyTable(sheet, rangeAddress) {
  const range = sheet.getRange(rangeAddress);
  range.format = {
    fill: "#fffdf7",
    font: { color: "#0d2038" },
    wrapText: true,
    verticalAlignment: "top",
  };
}

function setColumns(sheet, defs) {
  for (const [col, width] of defs) {
    sheet.getRange(`${col}:${col}`).format.columnWidthPx = width;
  }
}
