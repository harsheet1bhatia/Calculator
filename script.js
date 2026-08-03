// ==========================
// Master Calculator
// Built by Harsheet
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    // All Open Calculator buttons
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            // Small click animation
            button.style.transform = "scale(0.96)";

            setTimeout(function() {

                button.style.transform = "scale(1)";

            }, 150);

        });

    });

});