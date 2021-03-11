$(function () {
	$('.reviews__slider-inner').slick();

	$('.header__burger').on('click', (event) => {
		$('.header__burger,.menu').toggleClass('active');
	});
});