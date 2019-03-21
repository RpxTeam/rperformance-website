$(document).on('ready', function() {
  'use strict';
  $('.testimonial-area').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      arrows: false,
      dots: true,
      centerMode: false,
      responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});
