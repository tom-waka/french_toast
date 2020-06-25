'use strict';

{
  const carouselModule = (() => {
    return {
      configure: () => {
        const mySwiper = new Swiper('.swiper-container', {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 10,
          speed: 1000,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            895: {
              slidesPerView: 2,
              spaceBetween: 0,
              autoplay: {
                delay: 3000,
              },
            },
            415: {
              slidesPerView: 1,
              spaceBetween: 0,
              autoplay: {
                delay: 3000,
              },
            }
          }
        });
      },
    }
  })();

  carouselModule.configure()
}