// Get the carousel element and its inner container
const carousel = document.querySelector('#carousel');
const carouselInner = carousel.querySelector('#carousel-inner');

// Get the carousel items and calculate the total number of items
const carouselItems = carouselInner.querySelectorAll('#carousel-item');
const totalItems = carouselItems.length;

// Set the index of the currently active item
let currentIndex = 0;

// Function to show the next item
function showNextItem() {
  // Get the next item index
  const nextIndex = (currentIndex + 1) % totalItems;

  // Get the current and next items
  const currentItem = carouselItems[currentIndex];
  const nextItem = carouselItems[nextIndex];

  // Show the next item
  nextItem.style.display = 'block';

  // Wait for the next item to be visible before transitioning
  setTimeout(() => {
    // Move the current item to the left and the next item to the center
    currentItem.style.transform = 'translateX(-100%)';
    nextItem.style.transform = 'translateX(0)';
  }, 20);

  // Set the next item as the active item
  currentIndex = nextIndex;
}

// Set the initial state of the carousel
carouselItems[0].style.display = 'block';

// Set the interval for changing the active item
const interval = setInterval(showNextItem, 5000);
