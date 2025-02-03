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


const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
  
  });
const swiper2 = new Swiper('.mySwiper', {
   
    breakpoints: {
        768:{
            slidesPreview:4,
        },
        0:{
            slidesPreview:3,
        }
    }

})

  