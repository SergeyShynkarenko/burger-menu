$(function() {
// toggle  нажали добавился,нажали убрался
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock'); //блокирует прокрутку
	});
	
});
