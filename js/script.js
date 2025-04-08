    // Находим контейнер со слайдами
    const slides = document.querySelector('.impressions__cards');

    // Определяем количество слайдов
    const slideCount = document.querySelectorAll('.impressions__cards_item').length;

    // Находим кнопки «Назад» и «Вперёд»
    const prevButton = document.querySelector('.impressions__bck');
    const nextButton = document.querySelector('.impressions__frw');

    let currentIndex = 0; // Переменная для хранения текущего слайда

    // Функция смены слайдов
    function goToSlide(index) {
    if (index < 0) {
    index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
} else if (index >= slideCount) {
    index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
}

    currentIndex = index; // Запоминаем текущий слайд
    slides.style.transform = `translateX(calc(${-index * 100}vw + ${index * 16}px))`; // Сдвигаем контейнер со слайдами
    console.log(currentIndex);
}

    // Добавляем обработчик клика для кнопки «Назад»
    prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

    // Добавляем обработчик клика для кнопки «Вперёд»
    nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

    // Устанавливаем первый активный слайд при загрузке страницы
