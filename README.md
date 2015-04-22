# Jira Comment Visibility Chrome Extension
Chrome Extension that auto-sets a new Jira Comment's Visibility to a default value. This extension is a stop-gap measure until Atlassian adds a feature to Jira to support default visibility. The support ticket for this feature can be found at https://jira.atlassian.com/browse/JRA-9091

**This extension has only been tested with the latest version of Jira Cloud as of April 2015**

### Selecting a Default value
  * Edit jiraComment.js
  * Change the `_desiredType` variable to whatever you want your default to be. Currently it is set to "Users"
  
### Installation Instructions
  * Download the files in this project
  * Set the default value according to the above instructions
  * In the Chrome menu, click on More Tools, then Extensions
  * Check off "Developer Mode" if it is not already done so
  * Click on the "Load unpacked extension" button
  * Select the directory where you have the files