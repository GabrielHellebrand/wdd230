// hamburger menu stuff
let menu = document.querySelector('.menuicon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle("move")
    navbar.classList.toggle('openmenu')
}
// close menu while scrolling
window.onscroll = () => {
    menu.classList.remove("move")
    navbar.classList.remove('openmenu')
}