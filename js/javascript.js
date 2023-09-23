$(function(){

   var swiper = new Swiper(".number1", {
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
   
   var swiper = new Swiper(".number2", {
   
      pagination: {
         el: ".swiper-pagination",
         dynamicBullets: true,
      },
   
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   
   
   });

   $('#backTop').click(function(){
      $('html,body').stop(true,false).animate({scrollTop: 0}, 500)
      return false
   })

})

