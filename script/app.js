/*
제이쿼리 플러그인(형태가 잡힌 내용물을 연결해 사용하는 방식)
ㄴ colorbox: 모달창이 나타나며 그룹화된 영역이 슬라이드 되는 방식
- colorbox css, js, images 연결 필요
- a 활용 > 나타낼 이미지 연결, rel 그룹연결, class 연결
- 선언
$(".선택자").colorbox();

---

AOS: 스크롤 시 애니메이션
- 원하는 태그에 원하는 효과 삽입
- AOS css, js cdn 연결
- 선언
AOS.init();
*/

$(function(){
  $(".contents .box").on({
    mouseover: function(){
      $(this).find("span, p").stop().fadeIn();
    },
    mouseout: function(){
      $(this).find("span, p").stop().fadeOut();
    },
  });

  $(".imgload").colorbox();
  AOS.init();
});