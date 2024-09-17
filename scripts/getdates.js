// Function that sets the copyright year
function setCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright-year").textContent = currentYear;
}

// Function that sets the last modified date of the document
function setLastModifiedDate() {
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modification: " + lastModifiedDate;
}

// This calls the functions when the page loads
window.onload = function() {
    setCopyrightYear();
    setLastModifiedDate();
};