$(window).scroll(function(){
	var animate = $('.animate').offset().top
	if (animate - $(window).height() < $(window).scrollTop()){
		$('.animate').addClass('animate_fadeInUp');
	}
	var animate1 = $('.animate-1').offset().top
	if (animate1 - $(window).height() < $(window).scrollTop()){
		$('.animate-1').addClass('animate_fadeInUp');
	}
});