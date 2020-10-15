const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 35,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },

});