(function() {
  'use strict';

  const pricingOptions = document.querySelector('.pricing-options');
  const btnYes = document.querySelector('.js-pricing-options-yes');
  const btnNo = document.querySelector('.js-pricing-options-no');
  let btnCurrent = document.querySelector('.js-pricing-options-current');

  const optionYes = document.querySelector('.delivery-options--yes');
  const optionNo= document.querySelector('.delivery-options--no');

  const deliveryOptions = document.querySelector('.delivery-options--no');

  const btnFast = document.querySelector('.js-delivery-btn-fast');
  const btnSimple = document.querySelector('.js-delivery-btn-simple');
  let btnOptCurrent = document.querySelector('.js-delivery-btn-current');

  const deliveryOptionsFast = document.querySelectorAll('.delivery-options__item--fast');
  const deliveryOptionsSimple = document.querySelectorAll('.delivery-options__item--simple');

  const showFastOptions = () => {
    for (let i = 0; i < deliveryOptionsFast.length; i++) {
      deliveryOptionsFast[i].style.display = 'block';
    }

    for (let i = 0; i < deliveryOptionsSimple.length; i++) {
      deliveryOptionsSimple[i].style.display = 'none';
    }
  }

  const showSimpleOptions = () => {
    for (let i = 0; i < deliveryOptionsFast.length; i++) {
      deliveryOptionsSimple[i].style.display = 'block';
    }

    for (let i = 0; i < deliveryOptionsSimple.length; i++) {
      deliveryOptionsFast[i].style.display = 'none';
    }
  }

  if (pricingOptions) {
    pricingOptions.addEventListener('click', (e)=> {
      e.preventDefault();
      if (e.target === btnCurrent) return;

      if (e.target === btnYes) {
        btnCurrent = btnYes;
        pricingOptions.classList.remove('pricing-options--no');
        pricingOptions.classList.add('pricing-options--yes');
        btnYes.classList.remove('button--white');
        btnNo.classList.add('button--white');
        optionYes.style.display = 'block';
        optionNo.style.display = 'none';
      }

      if (e.target === btnNo) {
        btnCurrent = btnNo;
        pricingOptions.classList.remove('pricing-options--yes');
        pricingOptions.classList.add('pricing-options--no');
        btnNo.classList.remove('button--white');
        btnYes.classList.add('button--white');
        optionYes.style.display = 'none';
        optionNo.style.display = 'block';
      }

    });
  }

  if (deliveryOptions) {
    deliveryOptions.addEventListener('click', (e)=> {
      e.preventDefault();

      if (e.target === btnOptCurrent) return;

      if (e.target === btnFast) {

        btnOptCurrent = btnFast;
        btnFast.classList.remove('button--white');
        btnSimple.classList.add('button--white');
        showFastOptions();
      }

      if (e.target === btnSimple) {
        btnOptCurrent = btnSimple;
        btnSimple.classList.remove('button--white');
        btnFast.classList.add('button--white');
        showSimpleOptions();
      }
    });
  }

})();

(function() {
  'use strict';

  const nav = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    navToggle.classList.toggle('nav-toggle--opened');
    nav.classList.toggle('main-nav--opened');
  });

})();

(function() {
  'use strict';

  const reviews = document.querySelectorAll('.review');

  if (reviews.length === 0) return;

  const setBtnDisabled = (btn) => {
    btn.classList.add('review__gallery-btn--disabled');
  }

  const setBtnEnabled = (btn) => {
    btn.classList.remove('review__gallery-btn--disabled');
  }

  const addCurrentSlideClass = (currentSlide) => {
    currentSlide.classList.add('review__gallery-slide--current');
  }

  const removeCurrentSlideClass = (currentSlide) => {
    currentSlide.classList.remove('review__gallery-slide--current');
  }

  const initReviewSlider = (review) => {
    const nav = review.querySelector('.review__gallery-nav');

    if (!nav) return;

    const prev = review.querySelector('.review__gallery-btn--prev');
    const next = review.querySelector('.review__gallery-btn--next');
    const slides = review.querySelectorAll('.review__gallery-slide');

    if (!slides) return;

    if (slides.length === 1) {
      nav.classList.add('review__gallery-nav--hidden');
      return;
    }

    let currentSlide = review.querySelector('.review__gallery-slide--current');

    if (!currentSlide) {
      currentSlide = slides[0];
      addCurrentSlideClass(currentSlide);
    }

    if (currentSlide === slides[0]) {
      setBtnDisabled(prev);
    }

    if (currentSlide === slides[slides.length - 1]) {
      setBtnDisabled(next);
    }

    prev.addEventListener('click', (e) => {
      e.preventDefault();

      if (currentSlide === slides[0]) return;

      setBtnEnabled(next);

      removeCurrentSlideClass(currentSlide);
      addCurrentSlideClass(currentSlide.previousElementSibling);
      currentSlide = review.querySelector('.review__gallery-slide--current');

      if (currentSlide === slides[0]) {
        setBtnDisabled(prev);
      }
    });

    next.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentSlide === slides[slides.length - 1]) return;

      setBtnEnabled(prev);

      removeCurrentSlideClass(currentSlide);
      addCurrentSlideClass(currentSlide.nextElementSibling);
      currentSlide = review.querySelector('.review__gallery-slide--current');

      if (currentSlide === slides[slides.length - 1]) {
        setBtnDisabled(next);
      }
    });
  }

  for (let i = 0; i < reviews.length; i++) {
    initReviewSlider(reviews[i]);
  }

})();

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
