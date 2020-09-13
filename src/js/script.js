'use strict';

const hamburgerEl = document.querySelector('.hamburger');
const menuEl = document.querySelector('.menu');
const closeMenuEl = document.querySelector('.menu__close');

hamburgerEl.addEventListener('click', () => {
  menuEl.classList.add('active');
});

closeMenuEl.addEventListener('click', () => {
  menuEl.classList.remove('active');
});

// ----------

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// ----------
