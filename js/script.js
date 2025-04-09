/*direction_slider*/
const slides1 = document.querySelector('.directions__cards');
const slideCount1 = document.querySelectorAll('.directions__cards_item').length;
const prevButton1 = document.querySelector('.directions__bck');
const nextButton1 = document.querySelector('.directions__frw');

let currentIndex1 = 0;

function goToSlide1(index) {
  if (index < 0) {
    index = slideCount1 - 1;
  } else if (index >= slideCount1) {
    index = 0;
  }
  currentIndex1 = index;
  slides1.style.transform = `translateX(calc(${-index * 100}vw + ${index * 52}px))`;
  console.log(currentIndex1);
}

prevButton1.addEventListener('click', () => {
  goToSlide1(currentIndex1 - 1);
});
nextButton1.addEventListener('click', () => {
  goToSlide1(currentIndex1 + 1);
});
/*blog_slider*/
const slides2 = document.querySelector('.blog__cards');
const slideCount2 = document.querySelectorAll('.blog__cards_item').length;
const prevButton2 = document.querySelector('.blog__bck');
const nextButton2 = document.querySelector('.blog__frw');

let currentIndex2 = 0;

function goToSlide2(index) {
  if (index < 0) {
    index = slideCount2 - 1;
  } else if (index >= slideCount2) {
    index = 0;
  }
  currentIndex2 = index;
  slides2.style.transform = `translateX(calc(${-index * 100}vw + ${index * 52}px))`;
  console.log(currentIndex2);
}

prevButton2.addEventListener('click', () => {
  goToSlide2(currentIndex2 - 1);
});
nextButton2.addEventListener('click', () => {
  goToSlide2(currentIndex2 + 1);
});
/*impression_slider*/
const slides3 = document.querySelector('.impressions__cards');
const slideCount3 = document.querySelectorAll('.impressions__cards_item').length;
const prevButton3 = document.querySelector('.impressions__bck');
const nextButton3 = document.querySelector('.impressions__frw');

let currentIndex3 = 0;

function goToSlide3(index) {
  if (index < 0) {
    index = slideCount3 - 1;
  } else if (index >= slideCount3) {
    index = 0;
  }
  currentIndex3 = index;
  slides3.style.transform = `translateX(calc(${-index * 100}vw + ${index * 52}px))`;
  console.log(currentIndex3);
}

prevButton3.addEventListener('click', () => {
  goToSlide3(currentIndex3 - 1);
});
nextButton3.addEventListener('click', () => {
  goToSlide3(currentIndex3 + 1);
});

/*menu_mobile*/
const menuMobile = document.querySelector('.nav__list');
const menuOn = document.getElementById('burger-mobile-on');
const menuOff = document.getElementById('burger-mobile-off');
const formOn = document.getElementById('form_mobile_on');
const formOff = document.getElementById('form_mobile_of')
const body= document.querySelector('body');

menuOn.addEventListener('click', () => {menuMobile.style.display = 'flex';});
menuOff.addEventListener('click', () => {menuMobile.style.display = 'none';});
formOn.addEventListener
