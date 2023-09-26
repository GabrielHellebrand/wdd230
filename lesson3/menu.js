// Get references to the menu elements
const hamburgerButton = document.querySelector('.hamburger-menu');
const mainMenu = document.querySelector('.main-menu');

// Function to toggle the menu
function toggleMenu() {
    mainMenu.classList.toggle('show-menu');
}

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener('click', toggleMenu);