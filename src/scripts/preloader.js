import { gsap } from 'gsap';

function initPreloaderAndTransitions() {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('preloader-content');
  if (!preloader || !content) return;

  const isTransitioningFromPrevPage = sessionStorage.getItem('mikroptik_transitioning') === '1';

  // Helper pengunci & pembuka scroll
  const lockScroll = () => { document.body.style.overflow = 'hidden'; };
  const unlockScroll = () => { document.body.style.overflow = ''; };

  // Animasi Keluar (Phase 2):
  // 1. Logo & teks terangkat ke atas untuk menghilang
  // 2. Disusul background preloader terangkat ke atas keluar layar
  function playExitAnimation() {
    lockScroll();

    gsap.set(preloader, { yPercent: 0, display: 'flex' });
    gsap.set(content, { yPercent: 0, opacity: 1 });

    const tlOut = gsap.timeline({
      onComplete: () => {
        preloader.style.display = 'none';
        unlockScroll();
        sessionStorage.removeItem('mikroptik_transitioning');
      }
    });

    tlOut
      // Logo & teks terangkat ke atas untuk menghilang
      .to(content, {
        yPercent: -120,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.in'
      })
      // Disusul dengan background preloader
      .to(preloader, {
        yPercent: -100,
        duration: 0.55,
        ease: 'power3.inOut'
      }, '-=0.25');
  }

  // Animasi Lengkap (Initial Load / Direct Access):
  // 1. Background muncul menutup layar dari bawah ke atas
  // 2. Disusul logo kabinet & teks dari bawah ke atas
  // 3. Berhenti sepersekian detik
  // 4. Logo terangkat ke atas untuk menghilang
  // 5. Disusul background preloader terangkat ke atas
  function playFullSequence() {
    lockScroll();

    gsap.set(preloader, { yPercent: 100, display: 'flex' });
    gsap.set(content, { yPercent: 100, opacity: 0 });

    const tlFull = gsap.timeline({
      onComplete: () => {
        preloader.style.display = 'none';
        unlockScroll();
      }
    });

    tlFull
      // 1. Background muncul menutup layar dari bawah ke atas
      .to(preloader, {
        yPercent: 0,
        duration: 0.45,
        ease: 'power3.out'
      })
      // 2. Disusul logo & teks dari bawah ke atas
      .to(content, {
        yPercent: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out'
      }, '-=0.25')
      // 3. Berhenti sepersekian detik
      .to({}, { duration: 0.3 })
      // 4. Logo terangkat ke atas untuk menghilang
      .to(content, {
        yPercent: -120,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.in'
      })
      // 5. Disusul background preloader
      .to(preloader, {
        yPercent: -100,
        duration: 0.55,
        ease: 'power3.inOut'
      }, '-=0.25');
  }

  // Animasi Masuk (Phase 1 pada Link Click):
  // 1. Background muncul menutup layar dari bawah ke atas
  // 2. Disusul logo & teks dari bawah ke atas
  // 3. Berhenti sepersekian detik lalu pindah ke URL tujuan
  function triggerPageExit(targetHref) {
    lockScroll();

    gsap.set(preloader, { yPercent: 100, display: 'flex' });
    gsap.set(content, { yPercent: 100, opacity: 0 });

    const tlIn = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('mikroptik_transitioning', '1');
        window.location.href = targetHref;
      }
    });

    tlIn
      // 1. Background muncul menutup layar dari bawah ke atas
      .to(preloader, {
        yPercent: 0,
        duration: 0.4,
        ease: 'power3.out'
      })
      // 2. Disusul logo & teks dari bawah ke atas
      .to(content, {
        yPercent: 0,
        opacity: 1,
        duration: 0.35,
        ease: 'power3.out'
      }, '-=0.25')
      // 3. Berhenti sepersekian detik
      .to({}, { duration: 0.25 });
  }

  // Eksekusi animasi yang sesuai saat DOM siap
  if (isTransitioningFromPrevPage) {
    playExitAnimation();
  } else {
    playFullSequence();
  }

  // Event Interception untuk Link Internal (Pindah Halaman)
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;

    // Abaikan klik dengan tombol khusus (Ctrl, Shift, Meta, middle click)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    // Abaikan target="_blank"
    if (anchor.target && anchor.target !== '_self') return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // Abaikan link non-navigasi halaman (javascript, mailto, tel, anchor modal/hash murni, download)
    if (
      href.startsWith('javascript:') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      anchor.hasAttribute('download')
    ) {
      return;
    }

    try {
      const targetUrl = new URL(anchor.href, window.location.href);

      // Abaikan domain eksternal
      if (targetUrl.origin !== window.location.origin) return;

      // Abaikan navigasi ke anchor dalam halaman yang sama (contoh: /#about atau #hero dari halaman beranda)
      const currentUrl = new URL(window.location.href);
      if (
        targetUrl.pathname === currentUrl.pathname &&
        targetUrl.search === currentUrl.search &&
        targetUrl.hash
      ) {
        return;
      }

      // Abaikan jika mengklik link halaman yang persis sama tanpa hash
      if (
        targetUrl.pathname === currentUrl.pathname &&
        targetUrl.search === currentUrl.search &&
        !targetUrl.hash
      ) {
        return;
      }

      // Link internal valid -> jalankan animasi transisi!
      e.preventDefault();
      triggerPageExit(targetUrl.href);
    } catch (err) {
      // Fallback jika parsing URL gagal
    }
  });

  // Penanganan browser Back/Forward (bfcache)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      preloader.style.display = 'none';
      unlockScroll();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPreloaderAndTransitions);
} else {
  initPreloaderAndTransitions();
}
