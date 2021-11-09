// Grab couple of things
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

const auto = true;
const setIntervalTime = 5000;
let slideInterval;

// Next slide
const nextSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");
  // Remove the current class
  current.classList.remove("current");
  // Check if next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Previous slide
const prevSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");
  // Remove the current class
  current.classList.remove("current");
  // Check if prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
nextBtn.addEventListener("click", (a) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, setIntervalTime);
  }
});

prevBtn.addEventListener("click", (a) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, setIntervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, setIntervalTime);
}
