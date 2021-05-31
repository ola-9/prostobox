(function() {
  'use strict;'

  const swiperAdvantages = new Swiper(".swiper-advantages", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  const swiperPromoSLider = new Swiper(".swiper-promo-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        spaceBetween: 40
      },
      992: {
        spaceBetween: 82
      },
    },
    navigation: {
      disabledClass: "slider-nav__btn--disabled",
      nextEl: ".promo-slider .slider-nav__btn--next",
      prevEl: ".promo-slider .slider-nav__btn--prev",
    },
    pagination: {
      el: '.promo-slider__dots',
      type: 'bullets',
      bulletClass: 'nav-dots__btn',
      bulletActiveClass: 'nav-dots__btn--active',
      bulletElement: 'button',
      clickable: true
    },
  });

  const swiperTariffs = new Swiper(".swiper-tariffs", {
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1.295,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 20,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3.42,
        spaceBetween: 20
      },
      1240: {
        slidesPerView: 4.42,
        spaceBetween: 27,
      }
    },
    navigation: {
      disabledClass: "slider-nav__btn--disabled",
      nextEl: ".tariffs .slider-nav__btn--next",
      prevEl: ".tariffs .slider-nav__btn--prev",
    },
  });

  const swiperReviews = new Swiper(".swiper-reviews", {
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1240: {
        slidesPerView: 2.132,
        spaceBetween: 102,
        centeredSlides: false,
      },
    },
    navigation: {
      disabledClass: "slider-nav__btn--disabled",
      nextEl: ".reviews .slider-nav__btn--next",
      prevEl: ".reviews .slider-nav__btn--prev",
    },
    pagination: {
      el: '.reviews-slider__dots',
      type: 'bullets',
      bulletClass: 'nav-dots__btn',
      bulletActiveClass: 'nav-dots__btn--active',
      bulletElement: 'button',
      clickable: true
    },
  });

})();
