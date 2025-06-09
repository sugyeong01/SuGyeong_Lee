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