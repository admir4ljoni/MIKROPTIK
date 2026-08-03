import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const tl = gsap.timeline({
    onComplete: () => {
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Lock scroll while preloader runs
  document.body.style.overflow = 'hidden';

  // GSAP animation sequence
  tl.fromTo(
    '#preloader-logo-img',
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
  )
  .fromTo(
    '#preloader-title-text .letter',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out' },
    '-=0.3'
  )
  .fromTo(
    '#preloader-subtitle-text',
    { opacity: 0 },
    { opacity: 1, duration: 0.4 },
    '-=0.2'
  )
  .to(preloader, {
    yPercent: -100,
    duration: 0.8,
    ease: 'power3.inOut',
    delay: 0.6
  });
});
