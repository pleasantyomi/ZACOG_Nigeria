function toggleAccordion(event) {
  const header = event.target;
  const body = header.nextElementSibling;
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}
