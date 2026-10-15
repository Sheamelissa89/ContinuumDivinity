/* ==========================================================
   CONTINUUM DIVINITY
   Complete Website JavaScript
   ========================================================== */


/* ==========================================================
   MOBILE NAVIGATION
   ========================================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
    if (!menuButton || !navLinks) {
        return;
    }

    navLinks.classList.toggle("active", open);

    menuButton.setAttribute("aria-expanded", String(open));

    menuButton.setAttribute(
        "aria-label",
        open ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = open ? "✕" : "☰";
}

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navLinks.classList.contains("active");
        setMenu(!menuIsOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setMenu(false);
        });
    });
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        setMenu(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenu(false);
    }
});


/* ==========================================================
   AUTOMATIC FOOTER YEAR
   ========================================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ==========================================================
   JOURNEY ELEMENTS AND STAGE ORDER
   ========================================================== */

const journeyNodes = [
    ...document.querySelectorAll(".journey-node")
];

const journeyPanels = [
    ...document.querySelectorAll(".journey-panel")
];

/*
   These internal names match the HTML data attributes.

   return       = I See
   becoming     = I Choose
   embodiment   = I Embody
   integration  = I Integrate
   return-again = I Am Becoming
*/

const guideOrder = [
    "return",
    "becoming",
    "embodiment",
    "integration",
    "return-again"
];

const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);


/* ==========================================================
   SCROLLING
   ========================================================== */

function scrollToElement(element, block = "start") {
    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: motionPreference.matches ? "auto" : "smooth",
        block: block
    });
}


/* ==========================================================
   SELECT A GUIDE
   ========================================================== */

function selectJourneyGuide(guideName, shouldScroll = false) {
    const selectedPanel = journeyPanels.find((panel) => {
        return panel.dataset.panel === guideName;
    });

    if (!selectedPanel) {
        return;
    }

    // Highlight the corresponding wheel button.
    journeyNodes.forEach((node) => {
        const isSelected = node.dataset.guide === guideName;

        node.classList.toggle("active", isSelected);

        node.setAttribute(
            "aria-pressed",
            String(isSelected)
        );
    });

    // Show only the corresponding product panel.
    journeyPanels.forEach((panel) => {
        const isSelected = panel === selectedPanel;

        panel.hidden = !isSelected;
        panel.classList.toggle("active", isSelected);
    });

    if (shouldScroll) {
        scrollToElement(selectedPanel);
    }
}

// Selecting a wheel button displays and scrolls to its guide.
journeyNodes.forEach((node) => {
    node.addEventListener("click", () => {
        selectJourneyGuide(node.dataset.guide, true);
    });
});


/* ==========================================================
   PREVIOUS / NEXT GUIDE
   ========================================================== */

function getCurrentGuideIndex() {
    const activeNode = document.querySelector(
        ".journey-node.active"
    );

    const index = guideOrder.indexOf(
        activeNode ? activeNode.dataset.guide : "return"
    );

    return Math.max(0, index);
}

function navigateToGuide(direction) {
    const currentIndex = getCurrentGuideIndex();

    // Wrap around at either end of the five-stage journey.
    const nextIndex = (
        currentIndex + direction + guideOrder.length
    ) % guideOrder.length;

    selectJourneyGuide(guideOrder[nextIndex], true);
}

const previousGuideButton = document.getElementById(
    "previousGuide"
);

const nextGuideButton = document.getElementById(
    "nextGuide"
);

if (previousGuideButton) {
    previousGuideButton.addEventListener("click", () => {
        navigateToGuide(-1);
    });
}

if (nextGuideButton) {
    nextGuideButton.addEventListener("click", () => {
        navigateToGuide(1);
    });
}


/* ==========================================================
   RETURN TO WHEEL
   ========================================================== */

const returnToWheelButton = document.getElementById(
    "returnToWheel"
);

const continuumCircle = document.getElementById(
    "continuumCircle"
);

if (returnToWheelButton) {
    returnToWheelButton.addEventListener("click", () => {
        scrollToElement(continuumCircle, "center");
    });
}


/* ==========================================================
   CELESTIAL ROTATION
   ========================================================== */

const rotationToggle = document.getElementById(
    "rotationToggle"
);

let rotationPaused = motionPreference.matches;

function updateRotationButton() {
    if (continuumCircle) {
        continuumCircle.classList.toggle(
            "paused",
            rotationPaused
        );
    }

    if (!rotationToggle) {
        return;
    }

    rotationToggle.setAttribute(
        "aria-pressed",
        String(rotationPaused)
    );

    // Respect the visitor's system reduced-motion preference.
    rotationToggle.disabled = motionPreference.matches;

    if (motionPreference.matches) {
        rotationToggle.textContent = "Rotation off · Reduced motion";
    } else {
        rotationToggle.textContent = rotationPaused
            ? "Resume Rotation"
            : "Pause Rotation";
    }
}

if (rotationToggle) {
    rotationToggle.addEventListener("click", () => {
        rotationPaused = !rotationPaused;
        updateRotationButton();
    });
}


/* ==========================================================
   RESPOND TO SYSTEM MOTION CHANGES
   ========================================================== */

function handleMotionPreferenceChange(event) {
    rotationPaused = event.matches;
    updateRotationButton();
}

if (typeof motionPreference.addEventListener === "function") {
    motionPreference.addEventListener(
        "change",
        handleMotionPreferenceChange
    );
} else if (typeof motionPreference.addListener === "function") {
    motionPreference.addListener(
        handleMotionPreferenceChange
    );
}


/* ==========================================================
   INITIALIZE
   ========================================================== */

// Display I See first without automatically scrolling.
selectJourneyGuide("return");

// Apply the initial rotation preference.
updateRotationButton();