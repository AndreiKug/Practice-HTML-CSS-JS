const burgerContainer = document.querySelector('.main-nav__burger');
const burgersArrows = document.getElementsByClassName('main-nav__burger-arrow');
const mainNavItems = document.getElementsByClassName('main-nav__item');
const mainNav = document.querySelector('.main-nav')

burgerContainer.addEventListener('click', function() {
    burgersArrows[0].classList.toggle('main-nav__burger-arrow-top');
    burgersArrows[1].classList.toggle('main-nav__burger-arrow--hidden');
    burgersArrows[2].classList.toggle('main-nav__burger-arrow-bottom');

    mainNav.classList.toggle('main-nav--hidden');
});






