const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('main-menu');

hamburger.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    } else {
        menu.style.display = 'block';
        hamburger.innerHTML = '&#10006;'; // Close (X) icon
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.style.display = 'flex'; // Show menu on wider screens
    } else {
        menu.style.display = 'none'; // Hide menu on mobile
        hamburger.innerHTML = '&#9776;'; // Reset to hamburger icon
    }
});
window.onload = function() {
    console.log("Hamburger script loaded");
    setCopyrightYear();
    setLastModifiedDate();
    hamburger.addEventListener('click', toggleMenu);
};