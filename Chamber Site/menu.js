function toggleMenu() {
    var menu = document.getElementById("main-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}
document.addEventListener("DOMContentLoaded", function() {
    var darkModeToggle = document.getElementById("dark-mode-checkbox");

    darkModeToggle.addEventListener("change", function() {
        toggleDarkMode();
    });
});

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature is <= 50°F and wind speed is > 3.0 mph
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + "°F";
    } else {
        return "I'm a little teapot";
    }
}

// Get temperature and wind speed values from the HTML
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");

// Convert the text content of these elements to numbers
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Calculate and display wind chill
const windChillElement = document.getElementById("wind-chill");
windChillElement.textContent = calculateWindChill(temperature, windSpeed);