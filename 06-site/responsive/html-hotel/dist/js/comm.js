var swiper = new Swiper(".slide-intro", {
    slidesPerView: 1,
    // 슬라이드 몇 장씩 보여줄 건지
    spaceBetween: 30,
    // 슬라이드 간격
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });