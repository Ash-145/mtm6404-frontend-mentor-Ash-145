var navLinks = document.querySelectorAll('.navigation-links>.feature-section, .company-section');
var mobileButton = document.querySelector('.menu-icon');
var nav = document.querySelector('.navigation-links');
var width = window.screen.width;

if (width < 1200) {
  nav.classList.add('mobile-hidden');
}

navLinks.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.children[0].classList.remove('hidden');
    item.children[1].children[1].classList.add('rotate-icon');
  });
  item.addEventListener('mouseout', () => {
    item.children[0].classList.add('hidden');
    item.children[1].children[1].classList.remove('rotate-icon');
  });
});

mobileButton.addEventListener('touchstart', () => {
  nav.classList.toggle('mobile-hidden');
  navLinks.forEach(i => {
    i.addEventListener('click', () => {
      i.children[0].classList.toggle('hidden');
      i.children[1].children[1].classList.toggle('rotate-icon');
    });
  });
});
