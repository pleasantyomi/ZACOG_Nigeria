function toggleDropdown(dropdownNum) {
  var dropdown = document.querySelector("#dropdown:nth-of-type(" + dropdownNum + ")");
  var dropdownMenu = dropdown.querySelector("#dropdown-menu");
  dropdownMenu.style.display = "block";
  dropdown.addEventListener("mouseleave", function() {
    dropdownMenu.style.display = "none";
  });
}
