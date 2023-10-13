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
