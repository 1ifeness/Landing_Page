$(document).on('click','.spoiler-trigger',function(e){
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).parent().find('.spoiler-block').first().slideToggle(300);})

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	  navigation: {
		nextEl: '.next-slide',
        prevEl: '.prev-slide'
	  }
    });

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

$('.chdiv').click(function() {
			$('#content div').hide();
			var target = '#' + $(this).data('target');
			$(target).show();
			$("input[type='checkbox']").prop('checked', false)
		})
		