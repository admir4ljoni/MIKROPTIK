import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scrubbed Zoom-On-Scroll for Cards & Main Containers (Cinematic DOP-Works Style)
  const scrollZoomElements = document.querySelectorAll(
    '.bento-card, .stat-card, .filosofi-dark-card, .filosofi-visual-left, .calendar-grid-box, .calendar-detail-panel, .cta-container, .about-card, .visi-misi-card, .program-card, .honor-card'
  );

  scrollZoomElements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        scale: 1.18,
        opacity: 0.65,
      },
      {
        scale: 1.0,
        opacity: 1.0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom', // Mulai saat elemen masuk dari bawah layar
          end: 'top 30%',      // Selesai zoom saat elemen mencapai area atas viewport
          scrub: 1,            // Animasi zoom terhubung 1:1 langsung ke pergerakan scrollbar!
        },
      }
    );
  });

  // 2. Scrubbed Zoom-On-Scroll for Section Headings & Titles
  const sectionHeadings = document.querySelectorAll(
    '.section-heading-wrapper, .section-heading, .section-title, .cta-title'
  );

  sectionHeadings.forEach((heading) => {
    gsap.fromTo(
      heading,
      {
        scale: 1.15,
        opacity: 0.5,
        y: 35,
      },
      {
        scale: 1.0,
        opacity: 1.0,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heading,
          start: 'top bottom-=40',
          end: 'top 35%',
          scrub: 1,
        },
      }
    );
  });

  // 3. Counter Number Animation (Hitung Naik saat Terlihat di Screen)
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

  // 4. Hero Section Parallax Zoom Scrub
  const heroSection = document.getElementById('hero');
  const heroLogo = document.querySelector('.hero-logo');
  if (heroSection && heroLogo) {
    gsap.to(heroLogo, {
      scale: 1.15,
      y: 60,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // 5. Logo Filosofi Ambient Breathing Effect
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

  // 6. Marquee Acceleration on Scroll
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
