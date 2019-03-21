$(document).ready(function(){
	"use strict";
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('.counter').counterUp();
});

$(window).on('load', function() {
		// Masonry grid
		$('.pt-portfolio-items').isotope();

		// Portfolio Category Menu
		$('.cat-nav li').on('click', function() {
			$('.cat-nav li').removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$('.pt-portfolio-items').isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		});
	});




(function($) {
  $('.first.circle').circleProgress({
    value: .9
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(90 * progress) + '<span>%</span>');
  });

  $('.second.circle').circleProgress({
    value: .7
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '<span>%</span>');
  });

  $('.third.circle').circleProgress({
    value: .4
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(40 * progress) + '<span>%</span>');
  });

  $('.fourth.circle').circleProgress({
    value: .3
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(30 * progress) + '<span>%</span>');
  });


const items = document.querySelectorAll(".btn");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


})(jQuery);




