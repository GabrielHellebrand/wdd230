
// Function to set the current year in the footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

// Function to display the last modified date in the footer
function setLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// Call the functions to set the year and last modified date
setCurrentYear();
setLastModified();