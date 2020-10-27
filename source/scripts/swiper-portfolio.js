const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  speed: 400,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  
  navigation: {
    hiddenClass: 'swiper-button-hidden',
  },
  
  breakpoints: {
    570: {
      slidesPerView: 2,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      navigation: {
        hiddenClass: 'swiper-button-hidden',
      },
    },

    1170: {
      slidesPerView: 3,
      spaceBetween: 35,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    }
  }
});
