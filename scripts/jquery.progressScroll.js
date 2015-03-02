$.fn.progressScroll = function(options){
	var settings = $.extend({
		fontSize : 20,
		backgroundColor : '#009ACF',
		height : '5px',
		textArea : 'dark',
		font : 'sans-serif',
		headings : true,
	}, options);

	// namespace
	var progress = {};

	// set text area to dark or light
	if(settings.textArea === 'dark'){
		$('.scrollWrapper').css({"background-color": "rgba(0,0,0,0.75)"});
		$('.scrollWrapper h3').css({"color": "white"});
	} else {
		$('.scrollWrapper').css({"background-color": "rgba(255,255,255,0.75)"});
		$('.scrollWrapper h3').css({"color": "black"});
	}

	// change font-family if in settings
	$('.scrollWrapper h3').css({"font-family": settings.font, "font-size": settings.fontSize});

	// set required variables for scroll calculations
	progress.targetScroll = 0;
	progress.startScroll = $(this).position().top;
	progress.windowHeight = $(window).height();
	progress.divHeight = $(this).outerHeight();
	progress.numberOfH2 = $('h2').length;
	// console.log(progress.numberOfH2);
	// console.log("divHeight "+progress.divHeight);
	// console.log("startScroll "+progress.startScroll);
	// console.log("screen height"+progress.windowHeight)

	$(window).scroll(function() {
	  	var scrollAmount = $(this).scrollTop() - progress.startScroll ;
	  	var scrollPercent = ((scrollAmount)/(progress.divHeight -  progress.windowHeight))*100;
		// console.log("scroll amount"+scrollAmount);
		// console.log("scroll percent "+scrollPercent+"%");

		//blank out the text if above the first h2 tag
		if(scrollAmount <= $('h2:first').position().top){
			$('.scrollWrapper h3').text('');
		}

		// will headings show up 
		if(settings.headings){
			//everytime it passes an h2 it grabs it's text
			$('h2').each(function() {
				if(scrollAmount + progress.startScroll >= $(this).position().top){
					var text = $(this).text();
		    		$('.scrollWrapper h3').text(text);
		    		// console.log("this pos top "+$(this).position().top)
				};
			});
		};


		//calculate scroll bar amount
	    $('.scroll-bar').css('width', scrollPercent+'%' );
	    // $('.scroll-bar').css('opacity', scrollPercent/100 );

	    // if you're above the scroll div, then don't show the bar
	    if( scrollAmount >= progress.targetScroll){
	    	$('.scrollWrapper').removeClass('hidden');
		} else {
			$('.scrollWrapper').addClass('hidden');
		};
	 
	}); //end window scroll

	var $el = $('.scroll-bar').css(settings); 
	return $el;
}