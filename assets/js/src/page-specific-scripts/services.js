const $singleService = $('.service__single-service');
const $serviceInfo = $('.service__info');
const $shapeImage = $('.service__shape-image');
const $serviceImage = $('.service__image');
var countSection = 0;

function loadSection(elements, duration, position) {
	elements.each(function(index, val) {
		var top_of_element = $(this).offset().top;
		var bottom_of_element = $(this).offset().top + $(this).outerHeight();
		var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
		var top_of_screen = $(window).scrollTop();
		// $(this).attr('id', index + 1);
		setTimeout(() => {
			if (
				bottom_of_screen > top_of_element + 300 &&
				top_of_screen < bottom_of_element
			) {
				$(this).css('opacity', '1');
				$(this).css('left', position);
			}
		}, duration);
	});

	// If want to change position movement in even/odd elements
	// if ($(this).attr('id') % 2 === 0) {

	// }
}
$(window).scroll(() => {
	loadSection($serviceInfo, 700, 0);
	loadSection($shapeImage, 300, 30);
	loadSection($serviceImage, 1000, 0);
	if (window.innerWidth > 1200) {
		loadSection($shapeImage, 300, 80);
	}
});
