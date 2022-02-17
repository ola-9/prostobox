(function() {
  'use strict';

  const btn = document.querySelector('.js-calc-sizes-btn');

  if (!btn) return;

  const fields = document.querySelectorAll('.calculator__field--sizes');

  btn.addEventListener('click', function(e) {
    e.preventDefault;
    e.currentTarget.classList.toggle('calculator__size-btn--opened');
    e.currentTarget.parentElement.classList.toggle('calculator__field--sizes-btn');

    for (let i=0; i < fields.length; i++) {
      fields[i].classList.toggle('calculator__field--hidden');
    }

  });


})();
