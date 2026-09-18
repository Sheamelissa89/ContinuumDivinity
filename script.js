// Select the mobile navigation elements
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", () => {
    const menuIsOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", menuIsOpen);
    menuButton.textContent = menuIsOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// Close the mobile menu when the screen becomes wider
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    }
});

// Automatically display the current year in the footer
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}