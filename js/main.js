const video = document.getElementById('featureVideo');
const playButton = document.getElementById('playButton');

// Show play icon when video is paused
video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

// Hide play icon when video is playing
video.addEventListener('play', () => {
    playButton.style.display = 'none';
});

// Toggle play/pause when video is clicked
video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
});

// Play video when play icon is clicked
playButton.addEventListener('click', () => {
    video.play();
});
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dots .dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetAutoSlide();
    });
});

function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

let slideInterval = setInterval(autoSlide, 5000);

function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 5000);
}
// Contact form modal logic
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-button");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (form.checkValidity()) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // disable scroll
            form.reset();
        }
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = ""; // enable scroll
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
});
