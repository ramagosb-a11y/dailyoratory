function validateContent() {
  ensureSheetSchemas_();
  return validateAll_();
}

function validateAll_() {
  var errors = [];
  var warnings = [];
  var slugIndex = {};
  var sheets = DAILY_ORATORY_ADMIN.exportableSheets.concat(["Redirects"]);

  sheets.forEach(function (sheetName) {
    var rows = getRows_(sheetName);
    var requiredFields = DAILY_ORATORY_ADMIN.requiredFields[sheetName] || ["ID", "Status"];

    rows.forEach(function (row) {
      validateStatus_(sheetName, row, errors, warnings);
      validateRequiredFields_(sheetName, row, requiredFields, errors, warnings);
      validateSlugUniqueness_(sheetName, row, slugIndex, errors);
      validateRedirect_(sheetName, row, errors);
      validateCopyrightReview_(sheetName, row, errors, warnings);
    });
  });

  return {
    ok: errors.length === 0,
    errors: errors,
    warnings: warnings,
  };
}

function validateStatus_(sheetName, row, errors, warnings) {
  var status = normalizeStatus_(row.values.Status);
  if (!status) {
    warnings.push(formatValidationMessage_(sheetName, row.rowNumber, "Missing Status."));
    return;
  }
  if (DAILY_ORATORY_ADMIN.statusValues.indexOf(status) === -1) {
    errors.push(formatValidationMessage_(sheetName, row.rowNumber, "Invalid Status: " + status));
  }
}

function validateRequiredFields_(sheetName, row, requiredFields, errors, warnings) {
  var approved = isApprovedStatus_(row.values.Status);
  requiredFields.forEach(function (field) {
    if (!isBlank_(row.values[field])) return;
    var message = "Missing required field: " + field;
    if (approved) {
      errors.push(formatValidationMessage_(sheetName, row.rowNumber, message));
    } else {
      warnings.push(formatValidationMessage_(sheetName, row.rowNumber, message + " (required before approval)."));
    }
  });
}

function validateSlugUniqueness_(sheetName, row, slugIndex, errors) {
  if (sheetName === "Redirects" || isBlank_(row.values.Slug)) return;
  if (normalizeStatus_(row.values.Status) === "Archived") return;

  var key = String(row.values.Slug).trim().toLowerCase();
  var previous = slugIndex[key];
  if (previous) {
    errors.push(
      formatValidationMessage_(
        sheetName,
        row.rowNumber,
        "Duplicate slug '" + key + "' also used in " + previous.sheetName + " row " + previous.rowNumber + "."
      )
    );
    return;
  }
  slugIndex[key] = { sheetName: sheetName, rowNumber: row.rowNumber };
}

function validateRedirect_(sheetName, row, errors) {
  if (sheetName !== "Redirects") return;
  if (!isApprovedStatus_(row.values.Status)) return;

  var source = String(row.values.Source || "");
  var destination = String(row.values.Destination || "");
  if (source.charAt(0) !== "/") {
    errors.push(formatValidationMessage_(sheetName, row.rowNumber, "Redirect Source must start with '/'."));
  }
  if (destination.charAt(0) !== "/" && destination.indexOf("https://") !== 0) {
    errors.push(formatValidationMessage_(sheetName, row.rowNumber, "Redirect Destination must start with '/' or 'https://'."));
  }
}

function validateCopyrightReview_(sheetName, row, errors, warnings) {
  if (DAILY_ORATORY_ADMIN.exportableSheets.indexOf(sheetName) === -1) return;

  var approved = isApprovedStatus_(row.values.Status);
  var config = getConfigMap_();
  var blockedReviewStatuses = parseList_(config.BLOCK_REVIEW_STATUSES || "Do Not Publish|Replace Required");
  var blockedRiskLevels = parseList_(config.BLOCK_RISK_LEVELS || "High Risk");
  var reviewStatus = String(row.values.Review_Status || "").trim();
  var riskLevel = String(row.values.Risk_Level || "").trim();
  var attributionRequired = parseBoolean_(row.values.Attribution_Required);
  var attributionText = String(row.values.Attribution_Text || "").trim();
  var copyrightStatus = String(row.values.Copyright_Status || "").trim();

  if (!approved) return;

  if (!copyrightStatus) {
    warnings.push(formatValidationMessage_(sheetName, row.rowNumber, "Missing Copyright_Status for approved row."));
  }
  if (!reviewStatus) {
    warnings.push(formatValidationMessage_(sheetName, row.rowNumber, "Missing Review_Status for approved row."));
  }
  if (blockedReviewStatuses.indexOf(reviewStatus) !== -1) {
    errors.push(formatValidationMessage_(sheetName, row.rowNumber, "Blocked by Review_Status: " + reviewStatus));
  }
  if (blockedRiskLevels.indexOf(riskLevel) !== -1) {
    errors.push(formatValidationMessage_(sheetName, row.rowNumber, "Blocked by Risk_Level: " + riskLevel));
  }
  if (attributionRequired && !attributionText) {
    errors.push(formatValidationMessage_(sheetName, row.rowNumber, "Attribution_Text is required when Attribution_Required is true."));
  }
}

function formatValidationMessage_(sheetName, rowNumber, message) {
  return sheetName + " row " + rowNumber + ": " + message;
}
