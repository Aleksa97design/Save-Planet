
$(document).ready(function(){
 

	$( '.hamburger' ).click(function() {
		$( '.menu' ).slideToggle( "slow", function() {
			$( '.hamburger' ).hide();
			$( '.cross' ).show();
            $( '.header-wrapper' ).css('background', '#A7FFA4');
            
		});
	});

	$( '.cross' ).click(function() {
		$( '.menu' ).slideToggle( "slow", function() {
			$( '.cross' ).hide();
			$( '.hamburger' ).show();
            $( '.header-wrapper' ).css('background', '#fff');
		});
	});




//slider

$('.owl-carousel').owlCarousel({
	items:1,
	smartSpeed: 800
});

var owl = $('.owl-carousel');
owl.owlCarousel();

$('.leftArrow').click(function() {
   
    owl.trigger('prev.owl.carousel');
});

$('.rightArrow').click(function() {
    owl.trigger('next.owl.carousel');
});


 });

//resize window

$(window).resize(function(){

	if ($(window).width() <= 480) {  

		$( '.hamburger' ).show();

	} else{
		$( '.hamburger' ).hide();
		 }
		});