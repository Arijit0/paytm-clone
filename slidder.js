// Swiper js 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      1440: {
        slidesPerView: 4.5
      },
      // when window width is >= 480px
      1100: {
        slidesPerView: 3
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 3
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });