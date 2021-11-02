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
