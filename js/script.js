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
  slides1.style.transform = `translateX(calc(${-index * 100}vw + ${index * 24}px))`;
  console.log(currentIndex1);
}

prevButton1.addEventListener('click', () => {
  goToSlide1(currentIndex1 - 1);
});
nextButton1.addEventListener('click', () => {
  goToSlide1(currentIndex1 + 1);
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
  slides3.style.transform = `translateX(calc(${-index * 100}vw + ${index * 16}px))`;
  console.log(currentIndex3);
}

prevButton3.addEventListener('click', () => {
  goToSlide3(currentIndex3 - 1);
});
nextButton3.addEventListener('click', () => {
  goToSlide3(currentIndex3 + 1);
});
