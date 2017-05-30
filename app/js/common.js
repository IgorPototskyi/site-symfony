$(function() {

	$('#my-menu').mmenu({
		extensions: ["theme-black", "effect-menu-slide", "pagedim-black" ],
		navbar: {
			title: "<img src='img/logo-top.svg' alt='Салон красоты Смитлер'>"
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		}, 100)
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			},
		},
	});

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
				thsHeight = ths.find('.carousel-services-item-content').outerHeight();
			
			ths.find('.carousel-services-item-image').css('min-height', thsHeight);
		});
	}

	$('.carousel-services-item-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	// Resize Window
	function onResize() {
		$('.carousel-services-item-content').equalHeights();
	}
	onResize();
	window.onresize = function() {
		onResize();
		carouselService();
	};

});
