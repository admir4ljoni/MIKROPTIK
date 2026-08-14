document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.navbar-link');
  const dropdownParentLink = document.querySelector('.nav-dropdown > .navbar-link');
  const dropdownSubLinks = document.querySelectorAll('.dropdown-menu a, .mobile-submenu-links a');

  let lastScrollY = window.scrollY;

  const currentPath = window.location.pathname;
  const isDivisionPage = currentPath.includes('/divisi/');

  // Highlighting function for navbar links
  const updateActiveNavbarLink = () => {
    if (isDivisionPage) {
      // 1. Remove active from all top-level navbar links
      navLinks.forEach((link) => link.classList.remove('active'));

      // 2. Highlight Divisi dropdown parent link
      if (dropdownParentLink) {
        dropdownParentLink.classList.add('active');
      }

      // 3. Highlight specific division link inside dropdown & mobile submenu
      dropdownSubLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        try {
          const linkPath = new URL(href, window.location.origin).pathname.replace(/\/$/, '');
          const normalizedCurrentPath = currentPath.replace(/\/$/, '');

          if (linkPath === normalizedCurrentPath) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        } catch (err) {
          link.classList.remove('active');
        }
      });
      return;
    }

    // On home page: Active link highlighting based on section viewport position
    const sections = document.querySelectorAll('section[id], #hero[id]');
    let currentSectionId = '';
    const currentScrollY = window.scrollY;
    const scrollPosition = currentScrollY + 200; // Offset for navbar header height

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        if (href.endsWith(`#${currentSectionId}`) || href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    } else {
      // Default to Beranda when near top of home page
      navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        if (href.endsWith('#hero') || href.endsWith('/') || href.endsWith('/MIKROPTIK/')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  // Shrink & Hide/Reveal & Active Link Highlighting on scroll
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

    // 3. Update active link state
    updateActiveNavbarLink();
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Hamburger menu toggle
  hamburgerBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('active');
      hamburgerBtn?.classList.remove('open');
    });
  });
});
