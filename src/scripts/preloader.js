import { gsap } from 'gsap';

function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  let isDismissed = false;

  const dismissPreloader = () => {
    if (isDismissed) return;
    isDismissed = true;
    
    gsap.to(preloader, {
      yPercent: -100,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.inOut',
      onComplete: () => {
        preloader.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  };

  // Lock scroll initially
  document.body.style.overflow = 'hidden';

  // Safety fallback timeout after 2.2 seconds max so user is NEVER stuck
  const fallbackTimer = setTimeout(dismissPreloader, 2200);

  // GSAP animation sequence
  try {
    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(fallbackTimer);
        dismissPreloader();
      }
    });

    tl.fromTo(
      '#preloader-logo-img',
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }
    )
    .fromTo(
      '#preloader-title-text .letter',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.03, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo(
      '#preloader-subtitle-text',
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      '-=0.2'
    )
    .to(preloader, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power3.inOut',
      delay: 0.3
    });
  } catch (err) {
    console.error('Preloader animation error, falling back:', err);
    dismissPreloader();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPreloader);
} else {
  initPreloader();
}
