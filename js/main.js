    (function ($) {
      "use strict";

      // portfolio active
      $('.portfolio-slider-active').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
      });



      // blog active
      $('.blog-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.blog-slider-nav'
      });

      $('.blog-slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.blog-slider-active',
        focusOnSelect: true,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/blog/slider/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/blog/slider/arrow-right.png" alt=""></button>',
      });





    })(jQuery);