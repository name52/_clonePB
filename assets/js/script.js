$(document).ready(function () {
  // 초기화
  resizeSlickArrow();

  // kv-slide
  $('.kv .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 3, // 이거 문제내야지~! PB처럼 하려면 어떻게 바꿔야하는지~! 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // promotion-slide
  $('.promotion .slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth: true,
  });

  // product-slide
  $('.product .slider').slick({
    infinite: true,
    slidesToShow: 5,
    // slidesToScroll: 1,
    // variableWidth: true,
    // swipeToSlide: true,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  // https://github.com/kenwheeler/slick/issues/3282 [mobile first]
  $('.magazine .slider').slick({
    mobileFirst: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 980,
        settings: "unslick" // destroys slick
      }
    ]
  });

  $('.promotion .slider').on('setPosition', function (event, slick) {
    console.log('상태변경');
    resizeSlickArrow();
  });

  $('.product .slider').on('setPosition', function (event, slick) {
    console.log('상태변경');
    resizeSlickArrow();
  });
  // $('.slider .slick-arrow').css({'top': value});


  // $('.product .slider').slick('unslick');

  // toggle
  // 동적으로 처리된다 -> 무언가 이벤트가 발생하였을때 정보가 바뀐다
  // 기존에 마련되어있는 판에서 노는 것이 아닌, 새로 만들어진 정보에서 또 놀고 싶을때 -> 동적 이벤트를 바인딩 시켜야한다~! (on 메소드와 click 메소드)
  // $('.toggle-menu').on('click', '이벤트를 물려받을 아이', function(){});

  $('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('.hd .mob-gnb').toggleClass('active');
  });

  // Q. 만약 가상요소로 만든 배경을 선택하고 싶다면? -> jQuery는 js 는 가상요소를 선택하지 못한다.
  // A. 가상요소는 DOM 에 속해있지 않아 jQuery로 선택이 불가능하다, 고로 html 마크업을 바꿔주는 방법을 선택해야한다.
  // ex) 배경요소를 선택하면, 메뉴 부분 아이콘 active 토글되고, 모바일 gnb active 도 토글되게 구현

  // 일요일날 꼭 해야할 것들
  // resize 될때 img-area 높이 받아와서 화살표 top값 이동시켜 중앙에 위치할 수 있도록 처리
  // 반응형 처리 (스와이퍼가 없었는데 스와이퍼 만들기~!)

  // 스크롤 이동
  // [jQuery hash 예제](https://jjeongil.tistory.com/1054)
  // [location.hash](https://webroadcast.tistory.com/1)

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);
    // resize 할때 요소 높이 구하기

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - headerHeight
    }, 900, 'swing');

    /* (나중에 js 나갈때 왜 그런지 아직은 시기상조... 정말...) scrollIntoview 에러 설명해주기: https://stackoverflow.com/questions/20931368/scrollintoview-is-not-a-function-upon-page-load
      $(target).scrollIntoView({behavior: "smooth"}); (x)
      $(target)[0].scrollIntoView({behavior: "smooth"}); (0)
      scrollIntoview 는 dom elemnet 를 선택해야하는데, 지금 $() 이건 제이쿼리 객체를 반환한다... 어렵져???
      $()[0] 첫번째 있는 아이가 dom 엘리먼트 이므로 해당요소로 접근하면 될것이다.
      var target = this.hash;
      var $target = $(target);
      var targetElem = document.querySelector(target);
      a), b), c), d) 결과 보여주기
        a)console.log("click target this.hash = ", target, $(target));
        b)console.log("click target $(target) = ", $(target));
        c)console.log("click target $(target)[0] = ", $(target)[0]);
        d)console.log("click target documnet.queryS = ", targetElem);
    */
  });


  // resize 부하 (timeout으로 리사이즈 완료 됐을때만 실행하는 방법으로 수행)
  // [resize 한번만](https://java7.tistory.com/89)
  // [resize 한번만](https://code-study.tistory.com/46)
  var resizeDelay = 300;
  var resizeTimer = null;
  var headerHeight = null;

  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeDone, resizeDelay);

    // $('.magazine .slider').slick('resize');
  });

  function resizeDone() {
    // 리사이즈가 수행됐을때 해야하는 것 작성
    // console.log("리사이즈!!");
    // headerHeight = $('.hd').outerHeight();
    // console.log('nav 높이 = ', headerHeight);
    resizeElem();
    // resizeSlickArrow();
    $('.magazine .slider').slick('resize');

  }
  function resizeElem() {
    // 리사이즈가 수행됐을때 해야하는 것 작성
    console.log("리사이즈!!");
    headerHeight = $('.hd').outerHeight();
    console.log('nav 높이 = ', headerHeight);
  }

  var pdSlideHieght, pmSlideHeight;

  function resizeSlickArrow() {
    pdSlideHieght = $('.product .img-area').height();
    pmSlideHeight = $('.promotion .img-area').height();

    console.log('resize kv=', pdSlideHieght);
    console.log('resize kv=', pmSlideHeight);

    $('.product .slider .slick-arrow').css({ 'top': pdSlideHieght / 2 });
    $('.promotion .slider .slick-arrow').css({ 'top': pmSlideHeight / 2 });
  }
});