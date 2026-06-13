var DAILY_ORATORY_COPYRIGHT_FIELDS = [
  "Creator", "Author", "Source_Name", "Source_URL", "License", "License_URL",
  "Copyright_Status", "Attribution_Text", "Attribution_Required", "Risk_Level",
  "Review_Status", "Reviewed_By", "Reviewed_At", "Notes"
];

var DAILY_ORATORY_ADMIN = {
  menuName: "Daily Oratory Content Admin",
  approvedStatus: "Approved",
  skipStatuses: ["Draft", "Needs Review", "Archived"],
  exportFolderConfigKey: "EXPORT_FOLDER_ID",
  jsonIndentConfigKey: "JSON_INDENT",
  defaultJsonIndent: 2,
  statusValues: ["Draft", "Needs Review", "Approved", "Archived"],
  configDefaults: [
    ["PLATFORM_NAME", "Daily Oratory", "Public platform name."],
    ["DOMAIN", "DailyOratory.faith", "Public domain."],
    ["CANONICAL_URL", "https://DailyOratory.faith", "Canonical production URL."],
    ["TAGLINE", "Your daily Catholic home for prayer, reflection, and devotion.", "Public tagline."],
    ["EXPORT_FOLDER_ID", "", "Paste the Drive folder ID where JSON files should be written."],
    ["PUBLIC_STATUS", "Approved", "Only rows with this Status export."],
    ["SKIP_STATUSES", "Draft|Needs Review|Archived", "Rows with these statuses are skipped."],
    ["JSON_INDENT", "2", "Pretty-print JSON indentation."],
    ["BLOCK_REVIEW_STATUSES", "Do Not Publish|Replace Required", "Rows with these Review_Status values are blocked from export."],
    ["BLOCK_RISK_LEVELS", "High Risk", "Rows with these Risk_Level values are blocked from export."],
  ],
  schemas: {
    Config: ["Key", "Value", "Notes"],
    Resources: [
      "ID", "Status", "Title", "Slug", "Description", "Category", "Content_Type", "Tags",
      "Related_Resource_IDs", "Season", "Audience", "Estimated_Minutes", "Featured",
      "Canonical_Path", "Body", "Created_At", "Updated_At"
    ],
    Reflections: [
      "ID", "Status", "Title", "Slug", "Description", "Date", "Reflection_Kind", "Liturgical_Day",
      "Liturgical_Season", "Scripture_References", "Excerpt", "Body", "Reflection_Questions",
      "Prayer", "Tags", "Related_Resource_IDs", "Featured", "Created_At", "Updated_At"
    ],
    Events: [
      "ID", "Status", "Title", "Slug", "Description", "Event_Type", "Starts_At", "Ends_At",
      "Timezone", "Location_Name", "Location_Type", "Venue_Address", "Registration_URL",
      "Host_Name", "Language", "Recurrence_Frequency", "Recurrence_Label", "Tags",
      "Related_Resource_IDs", "Featured", "Body", "Preparation_Notes", "Created_At", "Updated_At"
    ],
    Liturgical_Days: [
      "ID", "Status", "Title", "Slug", "Description", "Date", "Season", "Liturgical_Color", "Rank",
      "Feast_Or_Saint", "Daily_Readings_URL", "Suggested_Prayer", "Suggested_Devotion",
      "Seasonal_Practice", "Fasting_Abstinence_Note", "Family_Prayer_Idea",
      "Works_Of_Mercy_Suggestion", "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Liturgical_Seasons: [
      "ID", "Status", "Title", "Slug", "Description", "Season", "Color", "Starts_On", "Ends_On",
      "Practices", "Family_Practices", "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Saints: [
      "ID", "Status", "Title", "Slug", "Description", "Feast_Day", "Patronage", "Virtue_Focus",
      "Life_Situations", "Vocation_Tags", "Saint_Type", "Short_Biography", "Prayer_Prompt",
      "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Sacraments: [
      "ID", "Status", "Title", "Slug", "Description", "Sacrament", "Route", "Best_For",
      "Preparation_Steps", "Role_Checklists", "Reflection_Prompts", "Prayers", "Parish_Reminder",
      "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Pathways: [
      "ID", "Status", "Title", "Slug", "Description", "Spiritual_Goal", "Best_For",
      "Estimated_Duration", "Step_IDs", "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Pathway_Steps: [
      "ID", "Status", "Pathway_ID", "Title", "Slug", "Description", "Step_Order", "Teaching",
      "Scripture_Reference", "Prayer_Prompt", "Practice", "Reflection_Questions",
      "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Prayers: [
      "ID", "Status", "Title", "Slug", "Description", "Prayer_Type", "Season", "Audience",
      "Text", "Response", "Posture", "Time_Of_Day", "Source_Note", "Tags",
      "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Adoration_Streams: [
      "ID", "Status", "Title", "Slug", "Description", "Chapel_Name", "Location", "Country",
      "Language", "Stream_Status", "Is_24_7", "Is_Verified", "Source_URL", "Embed_URL",
      "Last_Checked_At", "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Prayer_Rooms: [
      "ID", "Status", "Title", "Slug", "Description", "Room_ID", "Devotion_Type", "Room_Status",
      "Host_Name", "Start_Time", "Language", "Capacity", "Participant_Count", "Prayer_Steps",
      "Safety_Notes", "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Prayer_Intentions: [
      "ID", "Status", "Title", "Slug", "Description", "Intention_Category", "Visibility",
      "Moderation_Status", "Intention_Summary", "Prayer_Count", "Submitted_At", "Tags",
      "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Prayer_Chain_Requests: [
      "ID", "Status", "Title", "Slug", "Description", "Request_ID", "Category", "Privacy",
      "Urgent", "Routed_Team", "Moderation_Status", "Request_Summary", "Thanksgiving_Update",
      "Submitted_At", "Tags", "Related_Resource_IDs", "Created_At", "Updated_At"
    ],
    Categories: [
      "ID", "Status", "Title", "Slug", "Description", "Parent_Category", "Sort_Order",
      "Created_At", "Updated_At"
    ],
    Tags: [
      "ID", "Status", "Title", "Slug", "Description", "Tag_Group", "Sort_Order",
      "Created_At", "Updated_At"
    ],
    Redirects: ["ID", "Status", "Source", "Destination", "Permanent", "Notes", "Created_At", "Updated_At"],
    Export_Log: ["Timestamp", "Export_ID", "Action", "Sheet_Name", "File_Name", "Record_Count", "Status", "Message", "User_Email"],
    Change_Log: ["Timestamp", "Action", "Sheet_Name", "Row_Number", "Record_ID", "Message", "User_Email"],
    Copyright_Review: [
      "Review_ID", "Content_ID", "Content_Type", "Title", "File_Path", "Source_Name", "Source_URL",
      "Creator", "License", "Copyright_Status", "Risk_Level", "Issue", "Recommended_Action",
      "Review_Status", "Reviewed_By", "Reviewed_At", "Notes"
    ],
  },
  exportableSheets: [
    "Resources", "Reflections", "Events", "Liturgical_Days", "Liturgical_Seasons", "Saints",
    "Sacraments", "Pathways", "Pathway_Steps", "Prayers", "Adoration_Streams", "Prayer_Rooms",
    "Prayer_Intentions", "Prayer_Chain_Requests", "Categories", "Tags"
  ],
  requiredFields: {
    Resources: ["ID", "Status", "Title", "Slug", "Description", "Category", "Content_Type"],
    Reflections: ["ID", "Status", "Title", "Slug", "Description", "Date", "Excerpt"],
    Events: ["ID", "Status", "Title", "Slug", "Description", "Event_Type", "Starts_At", "Timezone", "Location_Name"],
    Liturgical_Days: ["ID", "Status", "Title", "Slug", "Description", "Date", "Season"],
    Liturgical_Seasons: ["ID", "Status", "Title", "Slug", "Description", "Season"],
    Saints: ["ID", "Status", "Title", "Slug", "Description", "Feast_Day"],
    Sacraments: ["ID", "Status", "Title", "Slug", "Description", "Sacrament"],
    Pathways: ["ID", "Status", "Title", "Slug", "Description", "Spiritual_Goal"],
    Pathway_Steps: ["ID", "Status", "Pathway_ID", "Title", "Slug", "Description", "Step_Order"],
    Prayers: ["ID", "Status", "Title", "Slug", "Description", "Prayer_Type", "Text"],
    Adoration_Streams: ["ID", "Status", "Title", "Slug", "Description", "Source_URL", "Embed_URL"],
    Prayer_Rooms: ["ID", "Status", "Title", "Slug", "Description", "Room_ID", "Devotion_Type"],
    Prayer_Intentions: ["ID", "Status", "Title", "Slug", "Description", "Visibility", "Moderation_Status"],
    Prayer_Chain_Requests: ["ID", "Status", "Title", "Slug", "Description", "Request_ID", "Routed_Team"],
    Categories: ["ID", "Status", "Title", "Slug", "Description"],
    Tags: ["ID", "Status", "Title", "Slug", "Description"],
    Redirects: ["ID", "Status", "Source", "Destination"],
  },
  arrayFields: [
    "Tags", "Related_Resource_IDs", "Audience", "Practices", "Family_Practices", "Patronage",
    "Virtue_Focus", "Life_Situations", "Vocation_Tags", "Best_For", "Step_IDs",
    "Reflection_Questions", "Preparation_Notes", "Safety_Notes"
  ],
  booleanFields: ["Featured", "Is_24_7", "Is_Verified", "Urgent", "Permanent"],
  numberFields: ["Estimated_Minutes", "Step_Order", "Capacity", "Participant_Count", "Prayer_Count", "Sort_Order"],
  jsonFields: [
    "Body", "Scripture_References", "Preparation_Steps", "Role_Checklists", "Reflection_Prompts",
    "Prayers", "Prayer_Steps"
  ],
};
