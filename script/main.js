$(function () {
  $(".img").colorbox();
  AOS.init();


  // popup
  $('#visualthumb').click(function () {
    $('.visual-thumbox').show();
  });
  $('#webthumb').click(function () {
    $('.web-thumbox').show();
  });

  // web > ul:link
  $("#airbusanthumb").on({
    mouseenter: function () {
      $(this).find("#project-name").hide();
      $(this).find("#project-link").css("display", "flex");
    },
    mouseleave: function () {
      $(this).find("#project-name").show();
      $(this).find("#project-link").css("display", "none");
    },
  });
  $("#balenciagathumb").on({
    mouseenter: function () {
      $(this).find("#project-name").hide();
      $(this).find("#project-link").css("display", "flex");
    },
    mouseleave: function () {
      $(this).find("#project-name").show();
      $(this).find("#project-link").css("display", "none");
    },
  });

  $('#posterthumb').click(function () {
    $('#poster').show();
    $('.modal').show();
  });
  $('#brandingthumb').click(function () {
    $('#branding').show();
    $('.modal').show();
  });
  $('#uxuithumb').click(function () {
    $('#uxui').show();
    $('.modal').show();
  });
  $('#airbusanpro').click(function () {
    $('#airbusan').show();
    $('.modal').show();
  });
  $('#balenciagapro').click(function () {
    $('#balenciaga').show();
    $('.modal').show();
  });

  //back
  $('.modal').click(function () {
    $('.portfolio').hide();
    $('.modal').hide();
  });
  $('.back').click(function () {
    $('.visual-thumbox').hide();
  });
  $('.back2').click(function () {
    $('.web-thumbox').hide();
  });


// smoothmenumove
  var $menu = $('.menub ul li'),
  $contents = $('section');
  console.log($menu);
  console.log($contents);

  $menu.click(function (e) {
    e.preventDefault();

    var idx = $(this).index();
    console.log(idx);
    var section = $contents.eq(idx);
    console.log(section);
    var sectionDistance = section.offset().top;
    console.log(sectionDistance);

    $('html, body').stop().animate({ scrollTop: sectionDistance });

    $(window).scroll(function () {
      $contents.each(function () {
        if ($(this).offset().top <= $(window).scrollTop()) {
          var idx = $(this).index();
          $menu.removeClass('on');
          $menu.eq(idx).addClass('on');
        }
      });
    });

    $menu.eq(0).trigger('scroll');
  });
}); 

// popup

/*
  토글>>
  $(".header_b li:first-child, .nav_woman").on({
    mouseenter: function(){
      $(".nav_woman").stop(true).slideDown();
    },
    mouseleave: function(){
      $(".nav_woman").stop(true).slideUp();
    }
  });

  $(function () {
  $('.menu_header').on('click', function () {
    const $item = $(this).closest('.menu_item');
    const $submenu = $item.find('.submenu');

    // 다른 메뉴 닫기
    $('.menu_item').not($item).removeClass('active').find('.submenu').slideUp();
    $('.menu_item').not($item).find('.arrowdown img').removeClass('rotate');

    // 현재 메뉴 토글
    $item.toggleClass('active');
    $submenu.stop().slideToggle();

    // 화살표 회전
    $item.find('.arrowdown img').toggleClass('rotate');
  });
});

}); 
*/