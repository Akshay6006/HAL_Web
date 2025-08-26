/* -------------------------------
   Hero Carousel
--------------------------------*/
let slides = document.querySelectorAll(".carousel .slides");
let currentIndex = 0;

if (slides.length > 0) {
  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === n) {
        slide.classList.add("active");
      }
    });
  }

  function plusSlides(n) {
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Auto slideshow
  setInterval(() => {
    plusSlides(1);
  }, 5000);

  // Show first slide initially
  showSlide(currentIndex);
}

/* -------------------------------
   Dark Mode Toggle
--------------------------------*/
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
}

/* -------------------------------
   Sidebar Dropdown Toggle
--------------------------------*/
const dropdownButtons = document.querySelectorAll(".dropdown-btn");
dropdownButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = btn.parentElement;

    // Close other dropdowns
    document.querySelectorAll(".dropdown").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("open");
      }
    });

    // Toggle current one
    parent.classList.toggle("open");
  });
});

/* -------------------------------
   3-Card Carousel
--------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".carousel-card");

  let index = 0;
  let direction = 1; // 1 = forward, -1 = backward
  const visibleCards = 3; // how many visible at once
  const intervalTime = 3000;

  function moveCarousel() {
    // move index forward or backward
    index += direction;

    // if we reach the end, reverse direction
    if (index > cards.length - visibleCards) {
      direction = -1;
      index = cards.length - visibleCards;
    } else if (index < 0) {
      direction = 1;
      index = 0;
    }

    // move track
    const cardWidth = cards[0].offsetWidth + 20; // 20px for gap
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    // highlight center card
    cards.forEach(c => c.classList.remove("active"));
    const centerIndex = index + Math.floor(visibleCards / 2);
    if (cards[centerIndex]) {
      cards[centerIndex].classList.add("active");
    }
  }

  // Auto move
  setInterval(moveCarousel, intervalTime);
});

