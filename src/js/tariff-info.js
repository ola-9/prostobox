(function() {
  'use strict';

  const tariffs = document.querySelectorAll('.js-tariff-item');
  const tariffsInfo = document.querySelectorAll('.js-tariff-info-item');

  if (tariffs.length === 0) return;

  let activeTariff = document.querySelector('.tariff--active');
  let activeTariffInfo = document.querySelector('.tariff-info__tariff--active');


  const tariffClickHandler = (tariff) => {
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
      tariffClickHandler(e.currentTarget);
    });
  }

})();
