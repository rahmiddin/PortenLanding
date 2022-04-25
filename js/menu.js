$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav-button').toggleClass('open-menu');
        $('.header__contacts').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});