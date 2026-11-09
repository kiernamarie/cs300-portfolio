// Select all project buttons
const projectButtons = document.querySelectorAll(".project-button");

// Add a click event to each button
projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the project details connected to the button
        const detailsId = button.getAttribute("aria-controls");
        const details = document.getElementById(detailsId);

        // Show or hide the project details
        if (details.hidden) {
            details.hidden = false;
            button.textContent = "Hide Project Details";
            button.setAttribute("aria-expanded", "true");
        } else {
            details.hidden = true;
            button.textContent = "Show Project Details";
            button.setAttribute("aria-expanded", "false");
        }

    });

});