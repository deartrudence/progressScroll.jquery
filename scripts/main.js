$(function() {

	var width = $(document).width();
	var height = $('div.wrapper').height();
	var dheight = $(document).height();
	// var targetScroll = $('.wrapper').position().top;
	var targetScroll = 0;
	var headHeight = $('.header').outerHeight();
	console.log(headHeight);
	var h2Scroll = $('h2').position().top - headHeight;
	console.log("h2 scroll "+h2Scroll);
	console.log("target scroll "+targetScroll);
	var h2Scroll2 =  $('h2:eq(1)').position().top - headHeight;
	var h2Scroll3 =  $('h2:eq(2)').position().top - headHeight;




	$(window).scroll(function() {
		var screenh = screen.height;
	  	// var scrollAmount = $(window).scrollTop();
	  	var scrollAmount = $(window).scrollTop() - headHeight ;
	    var height = $(".wrapper").height();
	  	var scrollPercent = ((scrollAmount)/(height-screenh))*100;
		console.log("scroll amount"+scrollAmount);

		if(scrollAmount <= $('h2:first').position().top){
			$('.scrollWrapper h3').text('');
		}

		$('h2').each(function() {
			if(scrollAmount + headHeight >= $(this).position().top){
				var text = $(this).text();
	    		$('.scrollWrapper h3').text(text);
	    		// $('.scroll-bar').toggleClass('orange');
			};
		});

	    $('.scroll-bar').css('width', scrollPercent+'%' );
	    if( scrollAmount >= targetScroll){
	    	$('.scrollWrapper').removeClass('hidden');
		} else {
			$('.scrollWrapper').addClass('hidden');
		};
	 //    if(scrollAmount >= h2Scroll){
	 //  		var text = $('h2:eq(0)').text()
	 //    	$('.scrollWrapper h3').text(text)
	 //    };
	 //    $('.scroll-bar').toggleClass('purple', scrollAmount >=h2Scroll);
	 //    if(scrollAmount >= h2Scroll2){
	 //  		var text = $('h2:eq(1)').text()
	 //    	$('.scrollWrapper h3').text(text)
	 //    };
	 //    $('.scroll-bar').toggleClass('red', scrollAmount >=h2Scroll2);
	 //    $('.scroll-bar').toggleClass('yellow', scrollAmount >=h2Scroll3);
		});
});