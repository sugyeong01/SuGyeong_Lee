$(function(){
    $(".img").colorbox();
    AOS.init();


    // popup
    $('#visualthumb').click(function(){
        $('.visual-thumbox').show();
    });
    $('#webthumb').click(function(){
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

    $('#posterthumb').click(function(){
        $('#poster').show();
        $('.modal').show();
    });
    $('#brandingthumb').click(function(){
        $('#branding').show();
        $('.modal').show();
    });
    $('#uxuithumb').click(function(){
        $('#uxui').show();
        $('.modal').show();
    });
    $('#airbusanpro').click(function(){
        $('#airbusan').show();
        $('.modal').show();
    });
    $('#balenciagapro').click(function(){
        $('#balenciaga').show();
        $('.modal').show();
    });

    //back
    $('.modal').click(function(){
        $('.portfolio').hide();
        $('.modal').hide();
    });
    $('.back').click(function(){
        $('.visual-thumbox').hide();
    });
    $('.back2').click(function(){
        $('.web-thumbox').hide();
    });
  });



//   document.querySelectorAll('.copy-item').forEach(function (item) {
//     item.addEventListener('click', function () {
//       const text = item.innerText;

//       // 클립보드 복사 시도
//       if (navigator.clipboard) {
//         navigator.clipboard.writeText(text).then(() => {
//           showCopyMessage('복사되었습니다!');
//         }).catch(err => {
//           console.error('복사 실패:', err);
//           alert('복사에 실패했습니다 😢');
//         });
//       } else {
//         // Fallback for old browsers
//         const textarea = document.createElement('textarea');
//         textarea.value = text;
//         document.body.appendChild(textarea);
//         textarea.select();
//         document.execCommand('copy');
//         document.body.removeChild(textarea);
//         showCopyMessage('복사되었습니다!');
//       }
//     });
//   });

//   // 복사 완료 메시지 보여주는 함수
//   function showCopyMessage(message) {
//     const notice = document.createElement('div');
//     notice.innerText = message;
//     notice.style.position = 'fixed';
//     notice.style.bottom = '30px';
//     notice.style.left = '50%';
//     notice.style.transform = 'translateX(-50%)';
//     notice.style.background = '#222';
//     notice.style.color = '#fff';
//     notice.style.padding = '10px 20px';
//     notice.style.borderRadius = '20px';
//     notice.style.fontSize = '14px';
//     notice.style.opacity = '0.9';
//     notice.style.zIndex = '9999';
//     document.body.appendChild(notice);

//     setTimeout(() => {
//       notice.remove();
//     }, 1500);
//   }



//   $(document).ready(function() {
//     $('.slide-in-text').animate({
//       left: '0',
//       opacity: 1
//     }, 800); // 800ms 동안 애니메이션
//   });


//   $(window).on('scroll', function() {
//     $('.slide-in-text').each(function() {
//       var elementTop = $(this).offset().top;
//       var windowBottom = $(window).scrollTop() + $(window).height();
      
//       if (windowBottom > elementTop + 50) { // 살짝 여유를 둬서 자연스럽게
//         $(this).addClass('active');
//       }
//     });
//   });


//   function isInViewport(element) {
//     const elementTop = $(element).offset().top;
//     const elementBottom = elementTop + $(element).outerHeight();

//     const viewportTop = $(window).scrollTop();
//     const viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
//   }

//   function triggerFooterAnimation() {
//     const footer = $('.contact');
//     const text = $('.slide-in-text');

//     if (isInViewport(footer) && !text.hasClass('active')) {
//       text.addClass('active');
//     }
//   }

//   $(window).on('scroll', triggerFooterAnimation);


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