// Select the menu-toggle button and the nav ul
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

// Add click event listener to toggle the visibility of the navigation links
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});