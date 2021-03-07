

// var typed = new Typed('.element', {
//     strings: ['للتسويق الالكترروني' , 'موقع الروان' ],
//     smartBackspace: true ,     // Default value
//     typeSpeed: 700,
//     backSpeed:700,
//     loop:true
//   });

  $(document).ready(function() {
    $(".skitter-large").skitter();
  });

  /*  UItoTop */
jQuery.fn.UItoTop = function(options) {
	var defaults = {
		text: '',
		min: 200,
		inDelay: 600,
		outDelay: 400,
		containerID: 'toTop',
		containerHoverID: 'toTopHover',
		scrollSpeed: 1200,
		easingType: 'linear'
	};
	var settings = jQuery.extend(defaults, options);
	var containerIDhash = '#' + settings.containerID;
	var containerHoverIDHash = '#' + settings.containerHoverID;
	jQuery('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
	jQuery(containerIDhash).hide().on("click", function() {
		jQuery('html, body').animate({
			scrollTop: 0
		}, settings.scrollSpeed, settings.easingType);
		jQuery('#' + settings.containerHoverID, this).stop().animate({
			'opacity': 0
		}, settings.inDelay, settings.easingType);
		return false;
	}).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
		jQuery(containerHoverIDHash, this).stop().animate({
			'opacity': 1
		}, 600, 'linear');
	}, function() {
		jQuery(containerHoverIDHash, this).stop().animate({
			'opacity': 0
		}, 700, 'linear');
	});
	jQuery(window).scroll(function() {
		var sd = jQuery(window).scrollTop();
		if (typeof document.body.style.maxHeight === "undefined") {
			jQuery(containerIDhash).css({
				'position': 'absolute',
				'top': jQuery(window).scrollTop() + jQuery(window).height() - 50
			});
		}
		if (sd > settings.min) jQuery(containerIDhash).fadeIn(settings.inDelay);
		else jQuery(containerIDhash).fadeOut(settings.Outdelay);
	});
};
/* mobileMenu */
var isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
jQuery(window).on("load", function() {
	if (isTouchDevice) {
		jQuery('#nav a.level-top').on("click", function(e) {
			jQueryt = jQuery(this);
			jQueryparent = jQueryt.parent();
			if (jQueryparent.hasClass('parent')) {
				if (!jQueryt.hasClass('menu-ready')) {
					jQuery('#nav a.level-top').removeClass('menu-ready');
					jQueryt.addClass('menu-ready');
					return false;
				} else {
					jQueryt.removeClass('menu-ready');
				}
			}
		});
	}
	jQuery().UItoTop();
});

jQuery('.slider-range-price').each(function() {
	var min = jQuery(this).data('min');
	var max = jQuery(this).data('max');
	var unit = jQuery(this).data('unit');
	var value_min = jQuery(this).data('value-min');
	var value_max = jQuery(this).data('value-max');
	var label_reasult = jQuery(this).data('label-reasult');
	var t = jQuery(this);
	jQuery(this).slider({
		range: true,
		min: min,
		max: max,
		values: [value_min, value_max],
		slide: function(event, ui) {
			var result = label_reasult + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
			console.log(t);
			t.closest('.slider-range').find('.amount-range-price').html(result);
		}
	});
})









 