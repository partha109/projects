
let currentSlide = 0;
const slides = document.querySelectorAll('.aboutus');
const slideContainer = document.getElementById('aboutus-slider');
const totalSlides = slides.length;

function showSlides() {
    slideContainer.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function moveSlide(n) {
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    showSlides();
}

// Add event listeners for arrow keys
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        moveSlide(-1);
    }
    if (event.key === 'ArrowRight') {
        moveSlide(1);
    }
});

// Initialize the slider with the first aboutus
showSlides();
