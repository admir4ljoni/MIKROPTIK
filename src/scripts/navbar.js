document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  let lastScrollY = window.scrollY;

  // Shrink & Hide/Reveal on scroll
  const handleNavScroll = () => {
    const currentScrollY = window.scrollY;

    // 1. Shrink into floating bar when scrolled past top (40px)
    if (currentScrollY > 40) {
      navbar?.classList.add('shrunk');
    } else {
      navbar?.classList.remove('shrunk');
    }

    // 2. Hide (slide up) when scrolling down past 250px, reveal when scrolling up or near top
    if (currentScrollY > 250 && currentScrollY > lastScrollY) {
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
