$(function(){

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

   $('#backTop').click(function(){
      $('html,body').stop(true,false).animate({scrollTop: 0}, 500)
      return false
   })

})

