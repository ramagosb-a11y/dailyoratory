function onOpen() {
  buildDailyOratoryMenu();
}

function onInstall() {
  onOpen();
}

function setupDailyOratoryWorkbook() {
  ensureSheetSchemas_();
  applyWorkbookValidation_();
  logChange_("Setup workbook", "Workbook", "", "", "Created or refreshed Daily Oratory sheet headers.");
  SpreadsheetApp.getUi().alert("Daily Oratory sheets are ready. Review Config before exporting.");
}
