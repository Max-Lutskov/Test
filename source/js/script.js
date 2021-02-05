$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
      {
        items: 1,
          dots: true,
          dotsEach: true,
          autoplay: true,
          smartSpeed: 900,
          autoplayHoverPause:true,

      }
  );

    $('.header__burger').click(function (){
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock');
    });

    $('.column-footer__title').click(function() {
	let currentSlidingItem = $(this).closest('.column-footer');
  let currentSlidinTitle = currentSlidingItem.find('.column-footer__title');
  let currentSlidingContent = currentSlidingItem.find('.column-footer__list');

  $('.column-footer__title').not(currentSlidingItem).each(function()  {
  	let slidingContent = $(this).find('.column-footer__list');
  	let slidingTitle = $(this).find('.column-footer__title');
    if (slidingContent.hasClass('open')) {
    	slidingContent.slideToggle(300).toggleClass('open');
    	slidingTitle.toggleClass('open');
		}
  });

	currentSlidingContent.slideToggle(300).toggleClass('open');
  currentSlidinTitle.toggleClass('open');
});


});