function getTimestamp_() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ssXXX");
}

function getUserEmail_() {
  try {
    return Session.getActiveUser().getEmail() || "unknown";
  } catch (error) {
    return "unknown";
  }
}

function isBlank_(value) {
  return value === null || value === undefined || String(value).trim() === "";
}

function normalizeStatus_(value) {
  return String(value || "").trim();
}

function isApprovedStatus_(value) {
  var config = getConfigMap_();
  var approved = config.PUBLIC_STATUS || DAILY_ORATORY_ADMIN.approvedStatus;
  return normalizeStatus_(value) === approved;
}

function shouldSkipStatus_(value) {
  var status = normalizeStatus_(value);
  var config = getConfigMap_();
  var skipStatuses = parseList_(config.SKIP_STATUSES || DAILY_ORATORY_ADMIN.skipStatuses.join("|"));
  return skipStatuses.indexOf(status) !== -1;
}

function slugify_(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createStableId_(sheetName, rowNumber, seed) {
  var prefix = slugify_(sheetName).replace(/-/g, "_");
  var safeSeed = slugify_(seed || "record").replace(/-/g, "_");
  return prefix + "_" + safeSeed + "_" + rowNumber;
}

function toCamelCase_(header) {
  var words = String(header || "")
    .replace(/[_\s-]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);

  return words
    .map(function (word, index) {
      var lower = word.toLowerCase();
      if (index === 0) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}

function parseList_(value) {
  if (isBlank_(value)) return [];
  if (Array.isArray(value)) return value;
  var text = String(value).trim();
  var delimiter = text.indexOf("|") !== -1 ? "|" : ",";
  return text
    .split(delimiter)
    .map(function (item) {
      return item.trim();
    })
    .filter(Boolean);
}

function parseBoolean_(value) {
  if (typeof value === "boolean") return value;
  var normalized = String(value || "").trim().toLowerCase();
  return ["true", "yes", "y", "1"].indexOf(normalized) !== -1;
}

function parseNumber_(value) {
  if (isBlank_(value)) return null;
  var number = Number(value);
  return isNaN(number) ? null : number;
}

function parseJsonOrText_(value) {
  if (isBlank_(value)) return null;
  if (typeof value !== "string") return value;
  var text = value.trim();
  if (!text) return null;
  if (text.charAt(0) === "{" || text.charAt(0) === "[") {
    return JSON.parse(text);
  }
  return text;
}

function toFileName_(sheetName) {
  return slugify_(sheetName).replace(/-/g, "_") + ".json";
}

function getFolderIdFromUrlOrId_(value) {
  if (isBlank_(value)) return "";
  var text = String(value).trim();
  var match = text.match(/folders\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : text;
}
