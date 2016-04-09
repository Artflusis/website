(function($) {
"use strict";

	// Page Preloader
	$(window).load(function() {
		$(".loader").delay(300).fadeOut();
		$(".animationload").delay(600).fadeOut("slow");
	});


	// SIDE MENU
	$('#simple-menu').wps({
		name: 'wps-right',
		source: '#wps-right',
		side: 'right'
	});
	$('button').click(function() {
		$.wps('close', 'wps-right');
	});
	// SIDE MENU
	$('#simple-menu-2').wps({
		name: 'wps-left',
		source: '#wps-left',
		side: 'left'
	});
	$('button').click(function() {
		$.wps('close', 'wps-left');
	});

	// PARALLAX
	$(window).bind('body', function() {
		parallaxInit();
	});
	function parallaxInit() {
		$('.footer').parallax("30%", 0.1);
	}

	// BACK TO TOP
	jQuery('.back-to-top').click(function(){
		jQuery('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});

	// DROP DOWN
	$(".works").click(function(){
	    $(".dropdown").slideToggle("slow");
	});

	// Lightbox

        jQuery('a[data-gal]').each(function() {
        jQuery(this).attr('rel', jQuery(this).data('gal'));
        });     
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'dark_square',social_tools:false,deeplinking:false});

})(jQuery);