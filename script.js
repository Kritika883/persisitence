// DOM Elements
const themeSelector = document.getElementById('theme-selector');
const listStyleSelector = document.getElementById('list-style-selector');
const dynamicList = document.getElementById('dynamic-list');

// Initialize the list items
const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Function to populate the list dynamically
function populateList() {
  dynamicList.innerHTML = ''; // Clear existing items
  listItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    dynamicList.appendChild(li);
  });
}

// Function to apply saved preferences from localStorage
function applyPreferences() {
  const storedTheme = localStorage.getItem('theme');
  const storedListStyle = localStorage.getItem('listStyle');

  if (storedTheme) {
    document.body.classList.add(storedTheme);
    themeSelector.value = storedTheme;
  }

  if (storedListStyle) {
    dynamicList.classList.add(storedListStyle);
    listStyleSelector.value = storedListStyle;
  }
}

// Function to save preferences to localStorage
function savePreferences() {
  const selectedTheme = themeSelector.value;
  const selectedListStyle = listStyleSelector.value;

  // Update body class for the selected theme
  document.body.classList.remove('light', 'dark', 'purple'); // Remove previous theme classes
  document.body.classList.add(selectedTheme);

  // Update list class for the selected list style
  dynamicList.classList.remove('none', 'bullets', 'numbers');
  dynamicList.classList.add(selectedListStyle);

  // Store the preferences in localStorage
  localStorage.setItem('theme', selectedTheme);
  localStorage.setItem('listStyle', selectedListStyle);
}

// Event listeners to detect changes and save preferences
themeSelector.addEventListener('change', savePreferences);
listStyleSelector.addEventListener('change', savePreferences);

// Initialize the page with saved preferences and populate the list
document.addEventListener('DOMContentLoaded', () => {
  populateList(); // Populate the list with items
  applyPreferences(); // Apply saved preferences on page load
});
