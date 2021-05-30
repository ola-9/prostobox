(function() {
  'use strict;'

  const nav = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    navToggle.classList.toggle('nav-toggle--opened');
    nav.classList.toggle('main-nav--opened');
  });

})();
