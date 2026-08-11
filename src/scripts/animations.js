import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll-Driven Zoom Reveal for Section Headings
  const sectionHeadings = document.querySelectorAll(
    '.section-heading-wrapper, .section-heading, .section-title, .cta-title'
  );
  sectionHeadings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, scale: 0.88, y: 35 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // 2. Scroll Zoom Reveal for Cards & Containers across all sections
  const zoomContainers = document.querySelectorAll(
    '.stat-card, .filosofi-dark-card, .filosofi-visual-left, .calendar-grid-box, .calendar-detail-panel, .cta-container, .about-card, .visi-misi-card, .program-card, .honor-card'
  );

  zoomContainers.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.92, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.85,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // 3. Staggered Zoom Reveal for Bento Cards in Program Kerja Section
  const bentoGrid = document.querySelector('.proker-bento-grid');
  if (bentoGrid) {
    const cards = bentoGrid.querySelectorAll('.bento-card');
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.85, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'back.out(1.3)',
        scrollTrigger: {
          trigger: bentoGrid,
          start: 'top 82%',
        },
      }
    );
  }

  // 4. Counter Number Animation (StatCounters)
  const counterElements = document.querySelectorAll('.counter-number, [data-target-count]');
  counterElements.forEach((counter) => {
    const targetVal = parseInt(counter.getAttribute('data-target-count') || counter.textContent || '0', 10);
    if (!isNaN(targetVal) && targetVal > 0) {
      const obj = { count: 0 };
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(obj, {
            count: targetVal,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              counter.textContent = Math.floor(obj.count).toString();
            },
          });
        },
        once: true,
      });
    }
  });

  // 5. Hero Parallax & Zoom Scroll Effect
  const heroSection = document.getElementById('hero');
  const heroLogo = document.querySelector('.hero-logo');
  if (heroSection && heroLogo) {
    gsap.to(heroLogo, {
      y: 60,
      scale: 1.08,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // 6. Logo Filosofi Floating / Breathing Effect
  const filosofiLogoBox = document.getElementById('logo-stack-box');
  if (filosofiLogoBox) {
    gsap.to(filosofiLogoBox, {
      y: -12,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  // 7. Marquee Acceleration on Scroll
  const marqueeTracks = document.querySelectorAll('.marquee-track');
  marqueeTracks.forEach((track) => {
    ScrollTrigger.create({
      trigger: track,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const speed = Math.min(2.5, 1 + velocity / 600);
        gsap.to(track, { timeScale: speed, duration: 0.25 });
      },
    });
  });
});
