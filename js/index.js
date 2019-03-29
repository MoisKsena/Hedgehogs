document.addEventListener('DOMContentLoaded', function () {
  //swiper
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.popular__slider-btn--right',
      prevEl: '.popular__slider-btn--left',
    },
  });
});