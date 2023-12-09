// Assuming that the core_algorithm.js exposes a function named generateTemplate
// that takes the user input and returns the generated HTML code.

// Function to collect user input and call the core algorithm
function collectInputAndGenerateTemplate() {
  // Get user input from the popup form
  const templateType = document.getElementById('templateType').value;
  const colorScheme = document.getElementById('colorScheme').value.split(',');
  const layoutPreference = document.getElementById('layoutPreference').value;
  const additionalFeatures = document.getElementById('additionalFeatures').value.split(',');

  // Validate the input before proceeding
  if (!templateType || colorScheme.length === 0 || !layoutPreference) {
    alert('Please fill in all required fields.');
    return;
  }

  // Prepare the input object for the core algorithm
  const userInput = {
    templateType: templateType,
    colorScheme: colorScheme,
    layoutPreference: layoutPreference,
    additionalFeatures: additionalFeatures
  };

  // Call the core algorithm and handle the output
  try {
    const generatedHTML = generateTemplate(userInput);
    // Assuming there's a function to display the generated HTML in template_generator.html
    displayGeneratedTemplate(generatedHTML);
  } catch (error) {
    console.error('Error generating template:', error);
    alert('Failed to generate the template. Please try again.');
  }
}

// Function to display the generated HTML code in a new tab or window
function displayGeneratedTemplate(htmlCode) {
  // Create a new blob with the HTML code
  const blob = new Blob([htmlCode], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  // Open the generated template in a new tab
  chrome.tabs.create({ url: url });
}

// Add event listener to the generate button
document.getElementById('generateButton').addEventListener('click', collectInputAndGenerateTemplate);

// This function needs to be called when the popup is loaded to set up the event listeners
function setupPopup() {
  // Add any additional setup if needed
}

// Call setupPopup when the popup window has finished loading
window.addEventListener('DOMContentLoaded', setupPopup);
