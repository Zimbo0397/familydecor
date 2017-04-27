
// if ($.browser.mobile) $('body').addClass('mobile');
// if ($.browser.safari) $('body').addClass('safari');
// if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(window).on('load', function () {
	new WOW().init();
});

$(window).on('scroll', function() {
  if($('.facts').length) {
      var targOffsetTop = $('.facts').offset().top,
          targScrollTop = $(window).scrollTop(),
          winHeight =$(window).height();
          if (!targOffsetTop) {
            targOffsetTop = 100000;
          }
          if (targOffsetTop - winHeight < targScrollTop) {
            if (!$('.facts').hasClass('numbers')) {
                $('#animateNumber1')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 1000
                    },
                    2000
                  );

                  $('#animateNumber2')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 20000
                    },
                    2000
                  );

                  $('#animateNumber3')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 3
                    },
                    2000
                  );
            }
            $('.facts').addClass('numbers')
          }
    
  }
});


$(document).ready(function(){
	$('.orderbtn').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
            var top = $('#order-form').offset().top;
        	$('body,html').animate({scrollTop: top}, 1500);
		})
	});
});