$(document).ready(function(){
  // kv
  $('.kv-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // promotion
  $('.promotion-list').slick({
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [{

      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 820,
      settings: {
        slidesToShow: 2,
      }

    }, {

      breakpoint: 768,
      settings: "unslick" // destroys slick
      // 여기서 풀어줘서~! 다시 브라우저 창이 resize 될때 닫시 slick을 선언해줘야한다.

    }]
  });

  // product
  $('.product-list').slick({
    infinite: true,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        swipeToSlide: true,
        arrows: false,
      }
    }]
  });

  // product
  // $('.magazine .slider').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [{
  //     breakpoint: 990,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   }, {
  //     breakpoint: 680,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   }, {
  //     breakpoint: 300,
  //     settings: "unslick" // destroys slick
  //   }]
  // });

  // 패밀리 사이트(.select-label)를 클릭을 하면
  // 회색박스 영역(.select-list)이 자연스럽게 올라오고
  // 패밀리사이트를 클릭하면 
  // 회색박스 영역이 자연스럽게 내려오고

  // 이벤트 = 함수 = 메소드
  // $('.select-label').click(function(e){
  //   console.log('---클릭');
  // });

  $('.select-list').hide();
  // (css => .select-list { display: none; } )
  // console.log('--hide');
  // css로 할수 있는건 js로 가능하다
  // css로 할 수 있는건 굳이 js로 할 필요 없다
  // js로 가능한걸 css로 다 가능한건 아니다

  $('.select-label').on('click', function(){
    console.log('000클릭');
    // 회색박스 영역(.select-list)이 자연스럽게 올라오고 내려오고

    $('.select-list').slideToggle('fast');
    console.log('--slideToggle');
  });

// 햄버거버튼이 클릭이 되면 - 메뉴가 나오고
// 햄버거버튼이 또클릭이 되면 - 메뉴가 사라지고
// 메뉴가 나타나고 사라지는 작업 -> css 판을 다 깔아뒀어요 (.mob-gnb에 active 클래스)
  $('.toggle-menu').click(function(){
    $(this).toggleClass("active");
    // 메뉴가 나타나고 사라지는 작업
    $('.mob-gnb').toggleClass('active');
  });


  // ▼ 부연설명.ver
  $('.gnb .dep1 > a').click(function(){
    console.log('클릭');
    console.log('this', this);
    console.log('.attr = ', $(this).attr('href'));
    // $(this).attr('href');
    // ▲ 현재 선택된 아이에서, 속성을 가져오는데, 'href'에 해당하는 속성의 값을 가져와줘~~
    console.log('test id = ', $(this).attr('id'));
    // $(this).attr('id');
    // ▲ 현재 선택된 아이에서, 속성을 가져오는데, 'id'에 해당하는 속성의 값을 가져와줘~~

    // $('#tmp1').offset().top
    // ▲ #tmp1의 좌표값 중에 top값을 구해줘~~
    // cf) #tmp1 == $(this).attr('href')
    console.log('this offset',  $($(this).attr('href')).offset().top );
    // console.log('tmp1 offset top = ', $('#tmp1').offset().top);
    // console.log('tmp2 offset top = ', $('#tmp2').offset().top);
    // console.log('tmp3 offset top = ', $('#tmp3').offset().top);

    var targetPos = $($(this).attr('href')).offset().top -80;
    // ▲ 구해진 좌표값을 변수 targetPos 에 대입 (hd 높이 만큼 빼줌)
    console.log('targetPos', targetPos);

    $('body, html').animate({'scrollTop': targetPos});
    // ▲문서전체의 스크롤을 이동~~
  });

  // ▼ 최종.ver
  // $('.gnb .dep1 > a').click(function(){
  //   var targetPos = $($(this).attr('href')).offset().top - 80;
  //   $('body, html').animate({'scrollTop': targetPos});
  // });

  $(window).resize(function () {
    console.log('resize');
    $('.promotion .slider').slick('resize');
    // $('.magazine .slider').slick('resize');
  });
});
