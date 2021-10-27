(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $(document).on("scroll", function(){

    if ($(document).scrollTop() > 100){
    $(".header-area").addClass("shrink");
    } else {
    $(".header-area").removeClass("shrink");
    }

});

$('select').niceSelect();



  // owlCarousel
  $(".ventajas_slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false
  });

  // owlCarousel
  $(".it_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  });




  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  }); 

  
 
})(jQuery);
