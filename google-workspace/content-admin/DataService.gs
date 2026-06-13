function getWorkbook_() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function ensureSheet_(sheetName) {
  var workbook = getWorkbook_();
  var sheet = workbook.getSheetByName(sheetName);
  if (!sheet) {
    sheet = workbook.insertSheet(sheetName);
  }
  return sheet;
}

function getSheetOrThrow_(sheetName) {
  var sheet = getWorkbook_().getSheetByName(sheetName);
  if (!sheet) throw new Error("Missing sheet: " + sheetName);
  return sheet;
}

function ensureSheetSchemas_() {
  var schemas = DAILY_ORATORY_ADMIN.schemas;
  Object.keys(schemas).forEach(function (sheetName) {
    var sheet = ensureSheet_(sheetName);
    var headers = getExpectedHeadersForSheet_(sheetName);
    var firstRow = sheet.getRange(1, 1, 1, headers.length);
    var existing = firstRow.getValues()[0];
    var isEmpty = existing.every(isBlank_);

    if (isEmpty) {
      firstRow.setValues([headers]);
    } else {
      syncHeaders_(sheet, headers);
    }

    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3ead8");
  });

  seedConfigDefaults_();
}

function getExpectedHeadersForSheet_(sheetName) {
  var headers = DAILY_ORATORY_ADMIN.schemas[sheetName] || [];
  if (DAILY_ORATORY_ADMIN.exportableSheets.indexOf(sheetName) !== -1) {
    return headers.concat(DAILY_ORATORY_COPYRIGHT_FIELDS);
  }
  return headers;
}

function syncHeaders_(sheet, expectedHeaders) {
  var currentHeaders = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), expectedHeaders.length)).getValues()[0];
  expectedHeaders.forEach(function (header, index) {
    if (currentHeaders[index] !== header) {
      sheet.getRange(1, index + 1).setValue(header);
    }
  });
}

function seedConfigDefaults_() {
  var sheet = ensureSheet_("Config");
  var rows = getRows_("Config");
  var existingKeys = rows.map(function (row) {
    return row.values.Key;
  });

  DAILY_ORATORY_ADMIN.configDefaults.forEach(function (row) {
    if (existingKeys.indexOf(row[0]) === -1) {
      sheet.appendRow(row);
    }
  });
}

function getConfigMap_() {
  var sheet = getWorkbook_().getSheetByName("Config");
  if (!sheet) return {};

  var rows = getRows_("Config");
  var config = {};
  rows.forEach(function (row) {
    if (!isBlank_(row.values.Key)) {
      config[row.values.Key] = row.values.Value;
    }
  });
  return config;
}

function getHeaderMap_(sheet) {
  var lastColumn = sheet.getLastColumn();
  if (lastColumn === 0) return {};
  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var map = {};
  headers.forEach(function (header, index) {
    if (!isBlank_(header)) map[String(header).trim()] = index + 1;
  });
  return map;
}

function getRows_(sheetName) {
  var sheet = getSheetOrThrow_(sheetName);
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  if (lastRow < 2 || lastColumn === 0) return [];

  var values = sheet.getRange(1, 1, lastRow, lastColumn).getValues();
  var headers = values[0];

  return values.slice(1).map(function (row, index) {
    var record = {};
    headers.forEach(function (header, columnIndex) {
      if (!isBlank_(header)) {
        record[String(header).trim()] = row[columnIndex];
      }
    });
    return {
      rowNumber: index + 2,
      values: record,
      raw: row,
    };
  }).filter(function (row) {
    return !isRowEmpty_(row.raw);
  });
}

function isRowEmpty_(row) {
  return row.every(isBlank_);
}

function getApprovedRows_(sheetName) {
  return getRows_(sheetName).filter(function (row) {
    return isApprovedStatus_(row.values.Status) && !isBlockedByCopyrightReview_(row.values);
  });
}

function isBlockedByCopyrightReview_(values) {
  var config = getConfigMap_();
  var blockedReviewStatuses = parseList_(config.BLOCK_REVIEW_STATUSES || "Do Not Publish|Replace Required");
  var blockedRiskLevels = parseList_(config.BLOCK_RISK_LEVELS || "High Risk");
  var reviewStatus = String(values.Review_Status || "").trim();
  var riskLevel = String(values.Risk_Level || "").trim();
  return blockedReviewStatuses.indexOf(reviewStatus) !== -1 || blockedRiskLevels.indexOf(riskLevel) !== -1;
}

function createMissingIds() {
  ensureSheetSchemas_();
  var count = 0;
  var sheets = DAILY_ORATORY_ADMIN.exportableSheets.concat(["Redirects"]);

  sheets.forEach(function (sheetName) {
    var sheet = getSheetOrThrow_(sheetName);
    var headerMap = getHeaderMap_(sheet);
    if (!headerMap.ID) return;

    getRows_(sheetName).forEach(function (row) {
      if (!isBlank_(row.values.ID)) return;
      var seed = row.values.Slug || row.values.Title || row.values.Source || sheetName;
      var id = createStableId_(sheetName, row.rowNumber, seed);
      sheet.getRange(row.rowNumber, headerMap.ID).setValue(id);
      count += 1;
      logChange_("Create missing ID", sheetName, row.rowNumber, id, "Generated stable ID.");
    });
  });

  return count;
}

function applyWorkbookValidation_() {
  var sheets = DAILY_ORATORY_ADMIN.exportableSheets.concat(["Redirects"]);
  sheets.forEach(function (sheetName) {
    var sheet = ensureSheet_(sheetName);
    var headerMap = getHeaderMap_(sheet);
    if (!headerMap.Status) return;
    var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(DAILY_ORATORY_ADMIN.statusValues, true)
      .setAllowInvalid(false)
      .build();
    sheet.getRange(2, headerMap.Status, Math.max(sheet.getMaxRows() - 1, 1), 1).setDataValidation(rule);
  });
}
