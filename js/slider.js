const sliderContainer = document.querySelectorAll('.slider-container');
const slides = document.getElementsByClassName('slide');
const sliderDots = document.getElementsByClassName('slider-dot');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let sliderIndex = 1;

showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    if (sliderIndex < 1) {
        sliderIndex = slides.length;
    }

    if (sliderIndex > slides.length) {
        sliderIndex = 1;
    }

    slides[sliderIndex-1].style.display = 'block';

    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].classList.remove('slider-dot-active');
    }

    sliderDots[sliderIndex-1].classList.toggle('slider-dot-active');
}

arrowLeft.addEventListener('click', function() {
    sliderIndex -= 1;
    showSlides();
});

arrowRight.addEventListener('click', function() {
    sliderIndex += 1;
    showSlides();
});