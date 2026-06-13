function buildDailyOratoryMenu() {
  SpreadsheetApp.getUi()
    .createMenu(DAILY_ORATORY_ADMIN.menuName)
    .addItem("Create Missing IDs", "menuCreateMissingIds")
    .addItem("Validate Content", "menuValidateContent")
    .addSeparator()
    .addItem("Export Approved Content", "menuExportApprovedContent")
    .addItem("Export Redirects", "menuExportRedirects")
    .addSeparator()
    .addItem("View Export Log", "menuViewExportLog")
    .addToUi();
}

function menuCreateMissingIds() {
  var count = createMissingIds();
  SpreadsheetApp.getUi().alert("Created " + count + " missing IDs.");
}

function menuValidateContent() {
  var result = validateContent();
  var message =
    "Validation complete.\n\nErrors: " + result.errors.length + "\nWarnings: " + result.warnings.length;
  if (result.errors.length) message += "\n\nFirst errors:\n" + result.errors.slice(0, 10).join("\n");
  if (!result.errors.length && result.warnings.length) message += "\n\nFirst warnings:\n" + result.warnings.slice(0, 10).join("\n");
  SpreadsheetApp.getUi().alert(message);
}

function menuExportApprovedContent() {
  try {
    var result = exportApprovedContent();
    SpreadsheetApp.getUi().alert(
      "Export complete.\n\nExport ID: " + result.exportId + "\n\n" + result.summary.join("\n")
    );
  } catch (error) {
    SpreadsheetApp.getUi().alert(String(error.message || error));
  }
}

function menuExportRedirects() {
  try {
    var result = exportRedirects();
    SpreadsheetApp.getUi().alert("Redirect export complete.\n\nExport ID: " + result.exportId + "\nRecords: " + result.count);
  } catch (error) {
    SpreadsheetApp.getUi().alert(String(error.message || error));
  }
}

function menuViewExportLog() {
  viewExportLog();
}
