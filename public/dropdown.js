// Get the dropdown menu element
const dropdownMenu = document.getElementById("dropdown-content");

// Show the dropdown menu when the user hovers over the button
document.getElementById("dropdown-button").addEventListener("mouseenter", function() {
  dropdownMenu.classList.add("show");
});

// Hide the dropdown menu when the user stops hovering over the button
document.getElementById("dropdown-button").addEventListener("mouseleave", function() {
  dropdownMenu.classList.remove("show");
});

// Hide the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches("#dropdown-button")) {
    dropdownMenu.classList.remove("show");
  }
});
