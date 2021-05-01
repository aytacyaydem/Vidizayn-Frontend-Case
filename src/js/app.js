$(function (){

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        console.log(height)
        if(height > 2500 ) {
            $("#header").removeClass("work-animation")
        }
        if(height >= 61.7 && height<2500) {
           $("#header").addClass("work-animation")
           
        }
        else {
          
            $("#header").removeClass("work-animation")
        }
    });
    const swiper = new Swiper('.swiper-container', {
        slidesPerView:4.5,
        spaceBetween:30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });
})