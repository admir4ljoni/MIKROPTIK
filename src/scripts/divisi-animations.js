import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Background Parallax Effect
  const heroBg = document.querySelector('.divisi-hero-bg');
  const heroSection = document.querySelector('.divisi-hero-section');
  if (heroBg && heroSection) {
    gsap.to(heroBg, {
      y: 70,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // 2. Deskripsi Section Reveal
  const descBox = document.querySelector('.divisi-desc-box');
  if (descBox) {
    gsap.fromTo(
      descBox,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descBox,
          start: 'top 85%',
        },
      }
    );
  }

  // 3. Tree Structure Entrance Animation (Root -> Branch Line -> Children Stagger)
  const treeRoot = document.querySelector('.tree-card-root');
  if (treeRoot) {
    gsap.fromTo(
      treeRoot,
      { opacity: 0, y: 40, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: treeRoot,
          start: 'top 85%',
        },
      }
    );
  }

  const treeBranch = document.querySelector('.tree-branch-horizontal');
  if (treeBranch) {
    gsap.fromTo(
      treeBranch,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: treeBranch,
          start: 'top 85%',
        },
      }
    );
  }

  const treeGrid = document.querySelector('.tree-children-grid');
  if (treeGrid) {
    const childNodes = treeGrid.querySelectorAll('.tree-child-node');
    gsap.fromTo(
      childNodes,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: treeGrid,
          start: 'top 85%',
        },
      }
    );
  }

  // 4. Program Kerja Cards Stagger Entrance
  const prokerGrid = document.querySelector('.proker-list-grid');
  if (prokerGrid) {
    const prokerCards = prokerGrid.querySelectorAll('.proker-card-item');
    gsap.fromTo(
      prokerCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: prokerGrid,
          start: 'top 85%',
        },
      }
    );
  }

  // 5. Galeri Foto Bento Cards Stagger Reveal
  const galeriGrid = document.querySelector('.galeri-bento-grid');
  if (galeriGrid) {
    const galeriCards = galeriGrid.querySelectorAll('.galeri-card');
    gsap.fromTo(
      galeriCards,
      { opacity: 0, y: 45, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galeriGrid,
          start: 'top 85%',
        },
      }
    );
  }

  // 6. Interactive Lightbox Modal Controller (Tanpa Warna Outline)
  const modal = document.getElementById('galeriModal');
  const modalImg = document.getElementById('galeriModalImg');
  const modalTitle = document.getElementById('galeriModalTitle');
  const modalClose = document.getElementById('galeriModalClose');
  const modalOverlay = document.getElementById('galeriModalOverlay');

  function openModal(imgSrc, titleText) {
    if (!modal || !modalImg || !modalTitle) return;
    modalImg.src = imgSrc;
    modalImg.alt = titleText || 'Foto Divisi';
    modalTitle.textContent = titleText || 'Dokumentasi Divisi';
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Attach click listener ke seluruh card galeri foto
  const allGaleriCards = document.querySelectorAll('.galeri-card');
  allGaleriCards.forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.galeri-card-title');
      if (img) {
        openModal(img.src, title ? title.textContent : img.alt);
      }
    });
  });

  // Attach click listener ke seluruh foto split section 50/50
  const splitImages = document.querySelectorAll('.split-image-col img');
  splitImages.forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      openModal(img.src, img.alt || 'Dokumentasi Divisi');
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
});
