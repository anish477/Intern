const totalItems = document.querySelectorAll(".carousel-item").length;
let currentIndex = Math.floor(totalItems / 2);
const carousel = document.getElementById("carousel");

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  const middleIndex = Math.floor(totalItems / 2);
  const items = document.querySelectorAll(".carousel-item");
  const shift = middleIndex - currentIndex;

  items.forEach((item, index) => {
    const position = (index + shift + totalItems) % totalItems;
    const distance = Math.abs(position - middleIndex);

    const scale = 1 - 0.1 * distance;
    const opacity = 1 - 0.5 * distance;
    item.style.order = position;
    item.style.transform = `scale(${scale})`;
    item.style.opacity = opacity;
  });
}

// Event listeners for the next and previous buttons
document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("prevButton").addEventListener("click", prevSlide);

// Initial carousel update
updateCarousel();
