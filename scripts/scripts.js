'use strict'

function toggleActive(element) {
    const link = document.querySelectorAll('.menu__link');
    console.log(link);

    link.forEach(link => link.classList.remove('active'));

    element.classList.add('active');
}

function addActiv(element) {

    const advLink = document.querySelectorAll('.advantages__link');
    console.log(advLink);

    advLink.forEach(link => {
        const advItem = link.parentElement;
        if (parent) {
            advItem.classList.remove('active')
        } else {
            console.error('element not found');
        }
    })

    const advItem = element.parentElement;
    if (advItem) {
        advItem.classList.add('active')
        console.log(advItem);
    } else {
        console.error('element not found');
    }
}

const butNum = document.querySelectorAll('.calc__button.number');
const displayCurrent = document.getElementById('current_operation');
var value, operator;
console.log(butNum);
console.log(displayCurrent);
butNum.forEach(button => {
    button.addEventListener('click', () => {
        console.log('pic');
        value = button.value;
        displayCurrent.textContent += (value);
    });
});

const butFunc = document.querySelectorAll('.calc__button.function');
console.log(butFunc);
butFunc.forEach(button => {
    button.addEventListener('click', () => {
        console.log('fpic');
        operator = button.value;
        displayCurrent.textContent += (operator);
    });
});




