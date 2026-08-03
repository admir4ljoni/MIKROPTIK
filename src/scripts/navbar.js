document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  let lastScrollY = window.scrollY;
  let scrollDownDistance = 0;

  // Shrink & Hide/Reveal on scroll
  const handleNavScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    // 1. Shrink into floating bar when scrolled past top (40px)
    if (currentScrollY > 40) {
      navbar?.classList.add('shrunk');
    } else {
      navbar?.classList.remove('shrunk');
    }

    // Accumulate downward scroll distance
    if (scrollDelta > 0) {
      scrollDownDistance += scrollDelta;
    } else {
      scrollDownDistance = 0; // reset buffer on scroll up
    }

    // 2. Hide (slide up) ONLY after scrolling 4-5 times down (> 700px) and buffer > 100px
    if (currentScrollY > 700 && scrollDownDistance > 100) {
      navbar?.classList.add('hidden');
    } else {
      navbar?.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

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
