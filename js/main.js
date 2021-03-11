$(function () {
	$('.reviews__slider-inner').slick({
		responsive: [{
			breakpoint: 1280,
			settings: {
				arrows: false,
				dots: true
			}
		}]
	});

	$('.header__burger').on('click', (event) => {
		$('.header__burger,.menu').toggleClass('active');
	});
});