let currentIndex = 0;
let slides = document.querySelectorAll('.carousel-slide');
let totalSlides = slides.length;

function moveSlide(step) {
  currentIndex += step;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= totalSlides) {
    currentIndex = totalSlides - 1;
  }

  updateCarousel();
}

function moveToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  let carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  let dots = document.querySelectorAll('.carousel-nav li');
  dots.forEach((dot, idx) => {
    if (idx === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  let prevButton = document.querySelector('.prev');
  let nextButton = document.querySelector('.next');

  if (currentIndex === 0) {
    prevButton.setAttribute('disabled', 'true');
  } else {
    prevButton.removeAttribute('disabled');
  }

  if (currentIndex === totalSlides - 1) {
    nextButton.setAttribute('disabled', 'true');
  } else {
    nextButton.removeAttribute('disabled');
  }
}


document.addEventListener("DOMContentLoaded", updateCarousel);
let slidesPerPage = 3; 

function adjustSlidesPerPage() {
  if (window.innerWidth <= 800) {
    slidesPerPage = 1;
  } else {
    slidesPerPage = 3;
  }
}

function moveSlideT(step) {
  let slidesT = document.querySelectorAll('.slide');
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = slidesT.length - slidesPerPage;
  }
  if (currentIndex >= slidesT.length - slidesPerPage + 1) {
    currentIndex = 0;
  }

  updateSlider();
}

function updateSlider() {
  let slidesT = document.querySelectorAll('.slide');
  let sliderElement = document.querySelector('.slider');

  sliderElement.style.transform = `translateX(-${currentIndex * (100 / slidesPerPage)}%)`;

  let indicatorText = document.getElementById("indicator-text");
  let totalSlidesT = slidesT.length;
  indicatorText.textContent = `${currentIndex + 1} / ${totalSlidesT}`;

  let indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, i) => {
    if (i === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  adjustSlidesPerPage();
  updateSlider();
});

window.addEventListener('resize', () => {
  adjustSlidesPerPage();
  updateSlider();
});

setInterval(() => {
  moveSlideT(1);
}, 4000);
