document.addEventListener("DOMContentLoaded", function () {
    const shopItemCarousel = document.querySelector("#carouselExampleIndicators1");
    const carousel = new bootstrap.Carousel(shopItemCarousel, {
        interval: 3000, // Slide every 5 seconds
        wrap: true, // Infinite looping
        ride: "carousel", // Autoplay on load
    });
});
