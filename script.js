// Hamburger menu: shows and hides the navigation on mobile

// Get the hamburger button from the page
const menuToggle = document.getElementById("menu-toggle");

// Get the list of navigation links from the page
const navLinks = document.getElementById("nav-links");

// When the button is clicked, add or remove the "open" class.
// The CSS uses this class to show or hide the menu.
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});