// document.addEventListener("DOMContentLoaded", function () {
//     const shopItemCarousel = document.querySelector("#carouselExampleIndicators1");
//     const carousel = new bootstrap.Carousel(shopItemCarousel, {
//         interval: 3000, // Slide every 5 seconds
//         wrap: true, // Infinite looping
//         ride: "carousel", // Autoplay on load
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Ensures animation starts
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    document.querySelectorAll(".animatedText").forEach((el) => {
        el.style.animationPlayState = 'paused'; // Pause animation until triggered
        observer.observe(el);
    });
});