(function() {
  'use strict';

  const advantages = document.querySelector('.advantages');
  if (advantages) {
    const swiperAdvantages = new Swiper(".swiper-advantages", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }

  const promoSLider = document.querySelector('.promo-slider');

  if (promoSLider) {
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
  }

  const tariffs = document.querySelectorAll('.js-tariff-item');

  if (tariffs.length) {
    const swiperTariffs = new Swiper(".swiper-tariffs", {
      roundLengths: true,
      slideToClickedSlide: true,
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

    swiperTariffs.on('activeIndexChange', () => {
      changeActiveTariff(tariffs[swiperTariffs.activeIndex]);
    });

    let activeTariff = document.querySelector('.tariff--active');
    let activeTariffInfo = document.querySelector('.tariff-info__tariff--active');

    const changeActiveTariff = (tariff) => {
      if (tariff === activeTariff) return;
      const id = tariff.dataset.tariffId;

      activeTariff.classList.remove('tariff--active');
      tariff.classList.add('tariff--active');
      activeTariff = tariff;

      let newActiveTariffInfo = document.getElementById(`tariff-info-${id}`);

      if (newActiveTariffInfo) {
        activeTariffInfo.classList.remove('tariff-info__tariff--active');
        activeTariffInfo = newActiveTariffInfo;
        activeTariffInfo.classList.add('tariff-info__tariff--active');
      }
    };

    for (let i = 0; i < tariffs.length; i++) {
      tariffs[i].addEventListener('click', (e) => {
        e.preventDefault();
        changeActiveTariff(e.currentTarget);
      });
    }
  }

  const reviews = document.querySelector('.swiper-reviews');

  if (reviews) {
    const reviewsWrapper = document.querySelector('.reviews__wrapper');
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
        el: '.reviews__slider-dots',
        type: 'bullets',
        bulletClass: 'nav-dots__btn',
        bulletActiveClass: 'nav-dots__btn--active',
        bulletElement: 'button',
        clickable: true
      },

      on: {
        slidePrevTransitionStart: function () {
          reviewsWrapper.classList.remove('reviews__wrapper--end');
        },
        slideNextTransitionStart: function () {
          reviewsWrapper.classList.remove('reviews__wrapper--start');
        },
        reachBeginning: function () {
          reviewsWrapper.classList.add('reviews__wrapper--start');
        },
        reachEnd: function () {
          reviewsWrapper.classList.add('reviews__wrapper--end');
        },
      }
    });
  }

})();
