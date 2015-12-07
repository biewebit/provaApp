$(function() {

	//Mmenu
	$("#mobile-nav").mmenu({
		header: true
	});

	//US Page Background Slider
	$('.main-slider-list').carouFredSel({
		auto: false,
		width: "100%",
		height: "auto",
		responsive: true,
		infinite: true,
		circular: false,
    	scroll : {
            duration        : 2000,                         
            pauseOnHover    : false
        },
		pagination: {
			container: '#main-slider-pagination'
		},
		prev	: {	
			button	: "#place-slider-prev",
			key		: "left"
		},
		next	: { 
			button	: "#place-slider-next",
			key		: "right"
		},
		onCreate: function() {
			$(window).on('resizeEnd orientationchange', function() {
				$('.main-slider-list').parent().add($('.main-slider')).height($(window).height());
			}).trigger('resize');
		}
	});
});