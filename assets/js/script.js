$(document).ready(function(){
  $('.kv-slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 3, // 이거 문제내야지~! PB처럼 하려면 어떻게 바꿔야하는지~! 
    slidesToScroll: 1,
  });
});