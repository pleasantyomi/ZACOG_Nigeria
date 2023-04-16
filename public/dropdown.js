let timeoutId;

function showDropdown() {
  const dropdown = document.querySelector('#dropdown-menu');
  dropdown.classList.add('show');
  clearTimeout(timeoutId);
}

function hideDropdown() {
  timeoutId = setTimeout(() => {
    const dropdown = document.querySelector('#dropdown-menu');
    dropdown.classList.remove('show');
  }, 500);
}
