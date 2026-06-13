function exportApprovedContent() {
  ensureSheetSchemas_();
  var validation = validateAll_();
  if (!validation.ok) {
    logExport_("", "Export Approved Content", "All", "", 0, "Failed", validation.errors.join(" | "));
    throw new Error("Validation failed. Fix errors before export:\n" + validation.errors.join("\n"));
  }

  var folder = getExportFolder_();
  var exportId = "export_" + new Date().getTime();
  var summary = [];

  DAILY_ORATORY_ADMIN.exportableSheets.forEach(function (sheetName) {
    var records = buildApprovedJsonForSheet_(sheetName);
    var fileName = toFileName_(sheetName);
    writeJsonFile_(folder, fileName, records);
    logExport_(exportId, "Export Approved Content", sheetName, fileName, records.length, "Success", "Approved records exported.");
    summary.push(sheetName + ": " + records.length);
  });

  return {
    exportId: exportId,
    summary: summary,
    warnings: validation.warnings,
  };
}

function exportRedirects() {
  ensureSheetSchemas_();
  var validation = validateAll_();
  if (!validation.ok) {
    logExport_("", "Export Redirects", "Redirects", "redirects.json", 0, "Failed", validation.errors.join(" | "));
    throw new Error("Validation failed. Fix errors before export:\n" + validation.errors.join("\n"));
  }

  var folder = getExportFolder_();
  var redirects = buildRedirectJson_();
  var exportId = "redirect_export_" + new Date().getTime();
  writeJsonFile_(folder, "redirects.json", redirects);
  logExport_(exportId, "Export Redirects", "Redirects", "redirects.json", redirects.length, "Success", "Approved redirects exported.");
  return {
    exportId: exportId,
    count: redirects.length,
  };
}

function getExportFolder_() {
  var config = getConfigMap_();
  var folderId = getFolderIdFromUrlOrId_(config[DAILY_ORATORY_ADMIN.exportFolderConfigKey]);
  if (!folderId) {
    throw new Error("Config is missing EXPORT_FOLDER_ID. Paste a Drive folder ID before exporting.");
  }
  return DriveApp.getFolderById(folderId);
}

function writeJsonFile_(folder, fileName, data) {
  var config = getConfigMap_();
  var indent = parseInt(config[DAILY_ORATORY_ADMIN.jsonIndentConfigKey] || DAILY_ORATORY_ADMIN.defaultJsonIndent, 10);
  var json = JSON.stringify(data, null, isNaN(indent) ? DAILY_ORATORY_ADMIN.defaultJsonIndent : indent);
  var files = folder.getFilesByName(fileName);

  if (files.hasNext()) {
    files.next().setContent(json);
    return;
  }

  folder.createFile(fileName, json, "application/json");
}
