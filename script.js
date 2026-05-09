// Гамбургер-меню
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const body = document.body;

// Функция для переключения иконки
function toggleHamburgerIcon(isOpen) {
    if (isOpen) {
        hamburger.src = "images/icon-close.svg";
    } else {
        hamburger.src = "images/icon-hamburger.svg";
    }
}

hamburger.addEventListener('click', () => {
    const isMenuOpen = menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    toggleHamburgerIcon(isMenuOpen);
});

// Закрытие меню при клике на пункт
document.querySelectorAll('.menu span').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        body.classList.remove('no-scroll');
        toggleHamburgerIcon(false);
    });
});

// Блокировка скролла при открытом меню
const style = document.createElement('style');
style.textContent = `
    body.no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(style);