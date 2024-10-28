// JavaScript animations for interactive effects
document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");
    
    // Pulse animation on button hover
    ctaButton.addEventListener("mouseenter", () => {
        ctaButton.classList.add("pulse");
    });
    ctaButton.addEventListener("mouseleave", () => {
        ctaButton.classList.remove("pulse");
    });
});
