document.addEventListener("DOMContentLoaded", function() {
    const howWorkSection = document.querySelector(".howWork");

    function handleScroll() {
        const sectionPosition = howWorkSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            howWorkSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case already in view
});
