function logExport_(exportId, action, sheetName, fileName, recordCount, status, message) {
  var sheet = ensureSheet_("Export_Log");
  sheet.appendRow([
    getTimestamp_(),
    exportId,
    action,
    sheetName,
    fileName,
    recordCount,
    status,
    message,
    getUserEmail_(),
  ]);
}

function logChange_(action, sheetName, rowNumber, recordId, message) {
  var sheet = ensureSheet_("Change_Log");
  sheet.appendRow([
    getTimestamp_(),
    action,
    sheetName,
    rowNumber,
    recordId,
    message,
    getUserEmail_(),
  ]);
}

function viewExportLog() {
  var sheet = ensureSheet_("Export_Log");
  getWorkbook_().setActiveSheet(sheet);
}
