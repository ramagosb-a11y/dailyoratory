function buildApprovedJsonForSheet_(sheetName) {
  var rows = getApprovedRows_(sheetName);
  return rows.map(function (row) {
    return rowToJsonRecord_(sheetName, row.values);
  });
}

function buildRedirectJson_() {
  return getApprovedRows_("Redirects").map(function (row) {
    return {
      source: row.values.Source,
      destination: row.values.Destination,
      permanent: parseBoolean_(row.values.Permanent),
      notes: row.values.Notes || "",
    };
  });
}

function rowToJsonRecord_(sheetName, values) {
  var record = {};
  Object.keys(values).forEach(function (header) {
    var value = values[header];
    if (isBlank_(value)) return;
    record[toCamelCase_(header)] = parseFieldValue_(header, value);
  });

  record.source = {
    system: "google-sheets",
    sheetName: sheetName,
    lastSyncedAt: getTimestamp_(),
  };

  return record;
}

function parseFieldValue_(header, value) {
  if (DAILY_ORATORY_ADMIN.arrayFields.indexOf(header) !== -1) return parseList_(value);
  if (DAILY_ORATORY_ADMIN.booleanFields.indexOf(header) !== -1) return parseBoolean_(value);
  if (DAILY_ORATORY_ADMIN.numberFields.indexOf(header) !== -1) return parseNumber_(value);
  if (DAILY_ORATORY_ADMIN.jsonFields.indexOf(header) !== -1) return parseJsonOrText_(value);
  if (value instanceof Date) return Utilities.formatDate(value, Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ssXXX");
  return value;
}
