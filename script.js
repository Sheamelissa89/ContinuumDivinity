/* ==========================================================
   CONTINUUM DIVINITY
   Complete Website JavaScript
   ========================================================== */


/* ==========================================================
   MOBILE NAVIGATION
   ========================================================== */

// Select the mobile navigation elements
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu
if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        const menuIsOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen ? "true" : "false"
        );

        menuButton.textContent = menuIsOpen ? "✕" : "☰";

        menuButton.setAttribute(
            "aria-label",
            menuIsOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Close the mobile menu after selecting a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        });

    });


    // Close the mobile menu when the screen becomes wider
    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        }

    });

}


/* ==========================================================
   AUTOMATIC FOOTER YEAR
   ========================================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ==========================================================
   THE CONTINUUM OF BECOMING
   GUIDE SELECTION
   ========================================================== */

// Select all five guide buttons
const journeyNodes = document.querySelectorAll(".journey-node");

// Select the corresponding information panels
const journeyPanels = document.querySelectorAll(".journey-panel");


/*
   Each guide button has a data-guide attribute.

   Example:
   data-guide="embodiment"

   Each information panel has a matching data-panel attribute.

   Example:
   data-panel="embodiment"

   This allows JavaScript to connect each guide
   with its corresponding information.
*/


function selectJourneyGuide(guideName) {

    // Update the selected guide button
    journeyNodes.forEach((node) => {

        const isSelected = node.dataset.guide === guideName;

        node.classList.toggle("active", isSelected);

        node.setAttribute(
            "aria-pressed",
            isSelected ? "true" : "false"
        );

    });


    // Show the selected information panel
    journeyPanels.forEach((panel) => {

        const isSelected = panel.dataset.panel === guideName;

        panel.hidden = !isSelected;

        panel.classList.toggle("active", isSelected);

    });

}


// Add click functionality to each guide
journeyNodes.forEach((node) => {

    node.addEventListener("click", () => {

        const selectedGuide = node.dataset.guide;

        // Display the selected guide's information
        selectJourneyGuide(selectedGuide);

        // Find the corresponding information panel
        const selectedPanel = document.querySelector(
            `.journey-panel[data-panel="${selectedGuide}"]`
        );

        // Automatically scroll to the selected guide
        if (selectedPanel) {

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            selectedPanel.scrollIntoView({
                behavior: prefersReducedMotion ? "instant" : "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================================
   CELESTIAL ROTATION CONTROLS
   ========================================================== */

// Select the circle and pause button
const continuumCircle = document.getElementById("continuumCircle");

const rotationToggle = document.getElementById("rotationToggle");


// Detect whether the visitor prefers reduced motion
const reducedMotionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);


// Track whether the visitor has paused the animation
let rotationPaused = reducedMotionPreference.matches;


// Update the appearance of the rotation button
function updateRotationButton() {

    if (!continuumCircle || !rotationToggle) {
        return;
    }

    continuumCircle.classList.toggle(
        "paused",
        rotationPaused
    );

    rotationToggle.textContent = rotationPaused
        ? "Resume Rotation"
        : "Pause Rotation";

    rotationToggle.setAttribute(
        "aria-pressed",
        rotationPaused ? "true" : "false"
    );

}


// Pause or resume when the visitor clicks the button
if (continuumCircle && rotationToggle) {

    rotationToggle.addEventListener("click", () => {

        rotationPaused = !rotationPaused;

        updateRotationButton();

    });

}


/* ==========================================================
   REDUCED MOTION ACCESSIBILITY
   ========================================================== */

// Respond when the visitor changes their system motion preference
function handleMotionPreferenceChange(event) {

    rotationPaused = event.matches;

    updateRotationButton();

}


// Modern browsers support addEventListener on MediaQueryList
if (typeof reducedMotionPreference.addEventListener === "function") {

    reducedMotionPreference.addEventListener(
        "change",
        handleMotionPreferenceChange
    );

} else if (
    typeof reducedMotionPreference.addListener === "function"
) {

    // Compatibility for older browsers
    reducedMotionPreference.addListener(
        handleMotionPreferenceChange
    );

}


/* ==========================================================
   INITIALIZE THE CELESTIAL CIRCLE
   ========================================================== */

// Start with Return to Yourself selected
if (journeyNodes.length > 0 && journeyPanels.length > 0) {

    selectJourneyGuide("return");

}


// Set the initial rotation state
updateRotationButton();

/* ==========================================================
   JOURNEY NAVIGATION
   PREVIOUS / NEXT / RETURN TO WHEEL
   ========================================================== */

// Guides arranged in clockwise order
const guideOrder = [
    "return",
    "becoming",
    "embodiment",
    "integration",
    "return-again"
];

// Navigation buttons
const previousGuideButton = document.getElementById("previousGuide");
const nextGuideButton = document.getElementById("nextGuide");
const returnToWheelButton = document.getElementById("returnToWheel");

// Find the currently selected guide
function getCurrentGuideIndex() {

    const activeNode = document.querySelector(".journey-node.active");

    if (!activeNode) {
        return 0;
    }

    return guideOrder.indexOf(activeNode.dataset.guide);

}

// Smoothly scroll to the selected guide's details
function scrollToGuideDetails() {

    const activePanel = document.querySelector(".journey-panel.active");

    if (activePanel) {

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        activePanel.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start"
        });

    }

}

// Navigate to another guide
function navigateToGuide(direction) {

    const currentIndex = getCurrentGuideIndex();

    // Wrap around when reaching either end of the circle
    const nextIndex = (
        currentIndex + direction + guideOrder.length
    ) % guideOrder.length;

    const nextGuide = guideOrder[nextIndex];

    // Use our existing guide-selection function
    selectJourneyGuide(nextGuide);

    // Scroll to the new guide's information
    scrollToGuideDetails();

}

// Previous guide
if (previousGuideButton) {

    previousGuideButton.addEventListener("click", () => {

        navigateToGuide(-1);

    });

}

// Next guide
if (nextGuideButton) {

    nextGuideButton.addEventListener("click", () => {

        navigateToGuide(1);

    });

}

// Return to the celestial wheel
if (returnToWheelButton) {

    returnToWheelButton.addEventListener("click", () => {

        const wheel = document.getElementById("continuumCircle");

        if (wheel) {

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            wheel.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "center"
            });

        }

    });

}