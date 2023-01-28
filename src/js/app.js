// import * as flsFunctions from "./modules/functions.js"
// import { Modal } from '../js/libs/modal.js'
// import { Accordion } from '../js/libs/accordion.js'
// import * as noUiSlider from 'nouislider'
// import fslightbox from "fslightbox";
// import { animOnScroll } from "./libs/animOnScroll.js"
import { headerFixed } from "./libs/fixed-header.js";
// import { simpleBar } from "simplebar"; => data-simplebar должен быть у обьекта
// import { select } from './libs/select.js';
// import { lazyLoading } from './libs/lazy-loading.js';
import { getHeaderHeight } from './libs/header-height.js';
// import { mobileCheck } from './libs/mobile-check.js';
// import { backgroundImageWebp } from './libs/backgroundImageWebp.js'
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
// import AOS from 'aos'

// AOS.init()

// flsFunctions.isWebP()
// animOnScroll()
headerFixed();
// Accordion()
// select();
// lazyLoading();
getHeaderHeight();
// mobileCheck();
// backgroundImageWebp()

// Слайдер

const partners = new Swiper('.partners__slider', {
  loop: true,
  autoplay: true,
  speed: 1000,
  spaceBetween: 15,
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    }
  }
});

const suppliers = new Swiper('.suppliers__slider', {
  loop: true,
  autoplay: true,
  speed: 1000,
  spaceBetween: 15,
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    }
  }
})

// Слайдер

// Бургер меню

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle('burger--active');
  navbar.classList.toggle('navbar--active');
  body.classList.toggle('is-lock')
});

window.addEventListener("click", (event) => {
  if (event.target === navbar) {
    burger.classList.remove('burger--active');
    navbar.classList.remove('navbar--active');
    body.classList.remove('is-lock')
  }
})

// Бургер меню

// Показать еще

const showMore = document.querySelector('.products__more-btn');
const productsLength = document.querySelectorAll('.products__col').length;

let items = 8;

if (productsLength <= 8) {
  showMore.style.display = "none"
}

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.products__grid').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length === productsLength) {
    showMore.style.display = "none";
  };
});

// Показать еще