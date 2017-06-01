$(function() {

// ----- Customize mmenu
	$('#my-menu').mmenu({
		extensions: ["theme-black", "effect-menu-slide", "pagedim-black" ],
		navbar: {
			title: "<img src='img/logo-white.png' alt='Салон красоты Смитлер'>"
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

// ----- Carousel for services section
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

	// $('select').selectize();

// ----- Carousel for reviews section
	$('.carousel-reviews').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dots: true,
		smartSpeed: 700,
		// autoHeight: true,
		autoplay: true,
		autoplayTimeout: 10000,
	});

// ----- Carousel for partners section
	$('.carousel-partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			},
		},
	});

// ----- Top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

// ----- E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});

// ----- Resize Window
	function onResize() {
		$('.carousel-services-item-content').equalHeights();
	}
	onResize();
	window.onresize = function() {
		onResize();
		carouselService();
	};

});

// ----- Preloader
	$(window).on('load', function() {
		$('.preloader').delay(1000).fadeOut('slow');
	})
