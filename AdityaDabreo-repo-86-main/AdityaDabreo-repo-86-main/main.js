let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.carousel-button.left').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.carousel-button.right').addEventListener('click', () => {
    changeSlide(1);
});

