// background.js

// This function listens for the extension being installed or updated.
chrome.runtime.onInstalled.addListener(function() {
  console.log("Webflow Template Designer extension installed/updated.");
  // Perform any setup or migrations necessary
});

// This function listens for messages from other parts of the extension, such as the popup or content scripts.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "generateTemplate") {
      // Call the function to handle template generation.
      // Note: The actual AI algorithm would be called from the content script or popup script,
      // and not directly from the background script due to Chrome Extension limitations.
      generateTemplate(request.data, sendResponse);
      return true; // Indicates that the response is asynchronous.
    }
  }
);

// Placeholder function for generating a template.
// In a real-world scenario, this would involve more complex logic and interaction with the AI algorithm.
function generateTemplate(templateData, callback) {
  // Simulate template generation with a timeout.
  setTimeout(() => {
    const generatedTemplate = `<html>
      <!-- Simulated HTML code for the generated template based on: -->
      <!-- Template Type: ${templateData.templateType} -->
      <!-- Color Scheme: ${templateData.colorScheme.join(', ')} -->
      <!-- Layout Preference: ${templateData.layoutPreference} -->
      <!-- Additional Features: ${templateData.additionalFeatures.join(', ')} -->
    </html>`;
    
    // Send the generated template back to the sender.
    callback({ success: true, template: generatedTemplate });
  }, 1000);
}

// Listen for the extension's icon being clicked.
chrome.action.onClicked.addListener(function(tab) {
  // Open the popup.html when the extension icon is clicked, if it's not already open.
  chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') });
});
