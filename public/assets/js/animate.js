$(window).on('load scroll', function(){
  const elem = $('.animated');

  elem.each(function () {
    const isAnimate = $(this).data('animate');
    const elemOffset = $(this).offset().top;
    const scrollPosition = $(window).scrollTop();
    const windowsHeight = window.innerHeight;

    if(scrollPosition > elemOffset - windowsHeight ){
      $(this).addClass(isAnimate);
    }
  });

});