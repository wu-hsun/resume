var swiper = new Swiper(".banana", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
   pagination: {
     el: ".swiper-pagination",
   },
});

var swiper = new Swiper(".mySwiper", {

   pagination: {
       el: ".swiper-pagination",
       dynamicBullets: true,
   },

   navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },


});