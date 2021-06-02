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
