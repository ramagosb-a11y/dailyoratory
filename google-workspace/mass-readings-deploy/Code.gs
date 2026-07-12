var MASS_READINGS_DEPLOY = {
  sheetName: "Mass_Readings_Reflections",
  statusColumn: 7,
  eligibleStatuses: ["published", "scheduled"],
  delayMinutes: 15,
  deployHookProperty: "VERCEL_DEPLOY_HOOK_URL",
  pendingProperty: "MASS_READINGS_DEPLOY_PENDING",
  triggerHandler: "publishQueuedMassReadingsDeployment"
};

function configureMassReadingsDeployAutomation() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt(
    "Configure Daily Oratory deployment",
    "Paste the Vercel Deploy Hook URL for the production branch.",
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() !== ui.Button.OK) return;

  var deployHookUrl = response.getResponseText().trim();
  if (!/^https:\/\/api\.vercel\.com\/v1\/integrations\/deploy\//.test(deployHookUrl)) {
    throw new Error("Enter a valid Vercel Deploy Hook URL.");
  }

  PropertiesService.getScriptProperties().setProperty(
    MASS_READINGS_DEPLOY.deployHookProperty,
    deployHookUrl
  );

  removeTriggersByHandler_("queueMassReadingsDeployment");
  ScriptApp.newTrigger("queueMassReadingsDeployment")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onEdit()
    .create();

  ui.alert("Automation enabled. Eligible sheet edits will be grouped into one deployment after 15 minutes.");
}

function queueMassReadingsDeployment(event) {
  if (!event || !event.range) return;

  var range = event.range;
  var sheet = range.getSheet();
  if (sheet.getName() !== MASS_READINGS_DEPLOY.sheetName || range.getRow() <= 1) return;

  var firstRow = range.getRow();
  var rowCount = range.getNumRows();
  var statuses = sheet
    .getRange(firstRow, MASS_READINGS_DEPLOY.statusColumn, rowCount, 1)
    .getDisplayValues();
  var hasEligibleRow = statuses.some(function (row) {
    return MASS_READINGS_DEPLOY.eligibleStatuses.indexOf(String(row[0]).trim().toLowerCase()) !== -1;
  });

  if (!hasEligibleRow) return;

  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var properties = PropertiesService.getScriptProperties();
    properties.setProperty(MASS_READINGS_DEPLOY.pendingProperty, new Date().toISOString());

    var alreadyQueued = ScriptApp.getProjectTriggers().some(function (trigger) {
      return trigger.getHandlerFunction() === MASS_READINGS_DEPLOY.triggerHandler;
    });

    if (!alreadyQueued) {
      ScriptApp.newTrigger(MASS_READINGS_DEPLOY.triggerHandler)
        .timeBased()
        .after(MASS_READINGS_DEPLOY.delayMinutes * 60 * 1000)
        .create();
    }
  } finally {
    lock.releaseLock();
  }
}

function publishQueuedMassReadingsDeployment() {
  var properties = PropertiesService.getScriptProperties();
  var deployHookUrl = properties.getProperty(MASS_READINGS_DEPLOY.deployHookProperty);
  if (!deployHookUrl) throw new Error("Run configureMassReadingsDeployAutomation first.");

  var response = UrlFetchApp.fetch(deployHookUrl, {
    method: "post",
    muteHttpExceptions: true
  });
  var status = response.getResponseCode();
  if (status < 200 || status >= 300) {
    throw new Error("Vercel Deploy Hook failed with HTTP " + status + ": " + response.getContentText());
  }

  properties.deleteProperty(MASS_READINGS_DEPLOY.pendingProperty);
  removeTriggersByHandler_(MASS_READINGS_DEPLOY.triggerHandler);
}

function removeTriggersByHandler_(handlerName) {
  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    if (trigger.getHandlerFunction() === handlerName) ScriptApp.deleteTrigger(trigger);
  });
}
