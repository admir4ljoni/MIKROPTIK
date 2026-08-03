document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Shrink on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar?.classList.add('shrunk');
    } else {
      navbar?.classList.remove('shrunk');
    }
  });

  // Hamburger menu toggle
  hamburgerBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('active');
      hamburgerBtn?.classList.remove('open');
    });
  });
});
