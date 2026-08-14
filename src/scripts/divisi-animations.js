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

  // 3. Featured Kadiv Card & Pengurus Cards Stagger Entrance
  const featuredKadiv = document.querySelector('.pengurus-featured-card');
  if (featuredKadiv) {
    gsap.fromTo(
      featuredKadiv,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featuredKadiv,
          start: 'top 85%',
        },
      }
    );
  }

  const staffGrid = document.querySelector('.pengurus-staff-grid');
  if (staffGrid) {
    const staffCards = staffGrid.querySelectorAll('.pengurus-card');
    gsap.fromTo(
      staffCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: staffGrid,
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
});
