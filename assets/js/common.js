$(document).ready(function () {
  AOS.init();
  $(".all_search_input").hide();

  $(".header").mouseenter(function () {
    if ($(window).width() > 1000) {
      $(".lnb_bg").stop().animate({ height: "300px" }, 300);
      $(".depth2")
        .stop()
        .animate(
          { opacity: 1 },
          {
            duration: 500,
            step: function (now, fx) {
              if (fx.prop === "opacity" && now === 1) {
                $(this).css("pointer-events", "auto");
              }
            },
          }
        );
      $(".all_search_input").hide();
    }
  });

  $(".header").mouseleave(function () {
    $(".lnb_bg").stop().animate({ height: "0px" }, 300);
    $(".depth2")
      .stop()
      .animate(
        { opacity: 0 },
        {
          duration: 100,
          complete: function () {
            $(this).css("pointer-events", "none");
          },
        }
      );
    $(".all_search_input").hide();
  });

  let isOpen = false; // 현재 상태를 추적하는 변수

  $("#all_search").click(function (event) {
    event.preventDefault();

    if (!isOpen) {
      // 열기
      $(".lnb_bg").stop().animate({ height: "300px" }, 300);
      $(".depth2")
        .stop()
        .animate(
          { opacity: 0 },
          {
            duration: 100,
            complete: function () {
              $(this).css("pointer-events", "none");
            },
          }
        );
      $(".all_search_input").fadeIn(300);
      isOpen = true;
    } else {
      // 닫기
      $(".lnb_bg").stop().animate({ height: "0" }, 300);
      $(".depth2")
        .stop()
        .animate(
          { opacity: 0 },
          {
            duration: 100,
            complete: function () {
              $(this).css("pointer-events", "auto");
            },
          }
        );
      $(".all_search_input").fadeOut(100);
      isOpen = false;
    }
  });
  // mobile menu
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    if ($(window).width() < 1000) {
      $(".mo_menu").toggleClass("active");
    } else {
      $(".mo_menu").removeClass("active");
    }
  });

  $(".mo_list.depth1").click(function () {
    var $siblings = $(this).siblings();
    // 다른 depth1 요소에 있는 open 클래스를 제거합니다.
    $siblings.removeClass("open").find(".mo_snb").hide();
    // 클릭한 depth1 요소의 하위 요소인 mo_snb를 토글합니다.
    $(this).toggleClass("open").find(".mo_snb").toggle();
  });

  // swiper
  var swiper = new Swiper(".mainBanner", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 1000,
    },
    navigation: {
      nextEl: ".swiper-pagination-bullet",
    },
    loop: "true",
  });

  var new_items_swiper = new Swiper(".new-items_list", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: "true",

    navigation: {
      nextEl: ".new-items_nav_next",
      prevEl: ".new-items_nav_prev",
    },
  });
});

