$(function() {
  $(window).on('load', function() {
    var locUrl = location.href;
    var setHash = locUrl.split('#');
    //現在のページURLに#が含まれる場合はスクロール移動
    if (setHash[1]) {
      hashMove("#" + setHash[1]);
    }
    //#pagetop
    $('#pagetop a').on('click', function() {
      var href = $(this).attr("href");
      var clkUrl = href.split('#');
      hashMove("#" + clkUrl[1]);
      return false;
    });
    //#から始まるリンクはスクロール
    $('a[href^="#"]').on('click', function() {
      var href = $(this).attr("href");
      var clkUrl = href.split('#');
      hashMove("#" + clkUrl[1]);
    });
    //#を含むリンクは、リンク先と現在のページのURLを比較して判断
    $('a[href*="#"]').on('click', function() {
      var href = $(this).attr("href");
      var pageURL = location.pathname;
      reg = new RegExp(pageURL);
      //ページ名が同じならスクロール移動
      if (href.match(reg)) {
        var clkUrl = href.split('#');
        hashMove("#" + clkUrl[1]);
      }
    });

    function hashMove(trg) {
      var position = $(trg).offset().top;
      if ($('body').hasClass('admin-bar')) {
        position = position - 50;
      } else {
        position = position - 20;
      }
      if ($('body').width() <= 980) {
        position = position - 50; //見出しの文字が切れるのを防ぐ
      } else {
        position = position - 150; //見出しの文字が切れるのを防ぐ
      }
      $('body,html').animate({
        scrollTop: position
      }, '800', 'swing');
    }
  });

  // $("nav").hide();
  // $(".gnav-hamburger").click(function(){//メニューボタンをクリックしたとき
  //     $("nav").toggle(300);//0.3秒で表示したり非表示にしたりする
  //
  // });

  $('.gnav-hamburger').click(function() {
    $(".gnav").toggleClass('active');
    if ($(".gnav").hasClass('active')) {
      $('.gnav-list').addClass('active');
      $('.gnav-hamburger').addClass('active');
    } else {
      $('.gnav-list').removeClass('active');
      $('.gnav-hamburger').removeClass('active');
    }
  });

  $('.gnav-item').click(function() {
    $(".gnav").removeClass('active');
    $('.gnav-list').removeClass('active');
    $('.gnav-hamburger').removeClass('active');

  });

  $('.faq-acoordion').click(function() {

    if ($(this).children('.faq-answer').hasClass('open')) {
      $(this).children('.faq-answer').slideUp();
      $(this).children('.faq-answer').removeClass("open");
      $(this).find('span').html("+");
    } else {
      $(this).children('.faq-answer').slideDown();
      $(this).children('.faq-answer').toggleClass("open");
      $(this).find('span').html("-");
    }
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    speed: 100,
    accessibility: false,
    arrows: false,
    centerMode: true,
    // centerPadding:50px,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
    slidesToShow: 1,
    centerPadding: '100px', //両サイドの見えている部分のサイズ
    slide: ".slider-bg",
    responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '10px' //両サイドの見えている部分のサイズ
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '10px' //両サイドの見えている部分のサイズ
        }
      }
    ]
  });

  const menu = document.querySelector('.js-menu');
  menu.classList.toggle('menu--open');

  // // mordal
  // let btn = document.getElementsByClassName('works_video');
  // // btn[0].classList.toggle( "video_overray" ) ;
  // // btn[0].classList.remove( "open") ;
  // for (var i = 0, len = btn.length - 1 | 0; i < len; i = i + 1 | 0) {
  //   btn[i].addEventListener('click', function(event) {
  //     // let modal = document.getElementsByClassName('video_overray');
  //     // result += "\n  " + allOrangeJuiceQuery[i].textContent;
  //     // if (modal.style.display === 'block') {
  //     //   modal.style.display = 'none';
  //     // } else {
  //     //   modal.style.display = 'block';
  //     // }
  //     // btn[0].classList.toggle( "video_overray" ) ;
  //     let modal = event.firstElementChild;
  //     if (modal[0].classList.contains("open")) {
  //       modal[0].classList.remove("open");
  //     } else {
  //       modal[0].classList.add("open");
  //     }
  //   })
  //   // modal.style.display = 'block';
  // }

  var trigger = document.getElementsByClassName("works_video");
  var triggers = Array.from(trigger);

  triggers.forEach(function(target) {

    target.addEventListener('mouseenter', function() {
      target.firstElementChild.style.display = 'block';
    });

    target.addEventListener('mouseleave', function() {
      target.firstElementChild.style.display = 'none';
    });
  });

  // let closeBtn = document.getElementsByClassName('overray_close');
  //
  // for (var j = 0, len = closeBtn.length | 0; j < len; j = j + 1 | 0) {
  //   closeBtn[j].addEventListener('click', function() {
  //     // result += "\n  " + allOrangeJuiceQuery[i].textContent;
  //     modal[0].style.display = 'none';
  //   })
  // }
});

$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
