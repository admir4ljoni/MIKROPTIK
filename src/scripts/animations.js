import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Section Headings Reveal (Fade In + TranslateY)
  const sectionHeadings = document.querySelectorAll('.section-heading-wrapper, .section-heading, .section-title');
  sectionHeadings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // 2. Bento & Feature Cards Stagger In
  const bentoGrid = document.querySelector('.proker-bento-grid');
  if (bentoGrid) {
    const cards = bentoGrid.querySelectorAll('.bento-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 45 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bentoGrid,
          start: 'top 80%',
        },
      }
    );
  }

  // 3. Counter Number Animation (StatCounters)
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

  // 4. Hero Parallax Scroll Effect
  const heroSection = document.getElementById('hero');
  const heroLogo = document.querySelector('.hero-logo');
  if (heroSection && heroLogo) {
    gsap.to(heroLogo, {
      y: 60,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // 5. Logo Filosofi Floating / Breathing Effect
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
