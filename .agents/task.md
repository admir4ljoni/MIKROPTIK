# Task Checklist: Landing Page MIKROPTIK

## Phase 1: Project Setup

- [x] Inisialisasi project Astro
- [x] Install dependencies (gsap, lenis)
- [x] Konfigurasi `astro.config.mjs`
- [x] Pindahkan assets ke `public/` atau setup path alias
- [x] Setup Google Fonts (Bebas Neue, Sanchez, Beau Rivage)

## Phase 2: Design System & Global Styles

- [ ] Buat `src/styles/global.css`
  - [ ] CSS custom properties (color palette, typography, spacing)
  - [ ] Reset dan base styles
  - [ ] Font imports
  - [ ] Responsive breakpoints
  - [ ] Utility classes
  - [ ] Animation keyframes (marquee, bounce, fade)
  - [ ] Custom scrollbar
- [ ] Buat `src/styles/sections.css`
  - [ ] Hero section styles
  - [ ] About section styles
  - [ ] Filosofi logo section styles
  - [ ] Visi misi section styles
  - [ ] Program kerja section styles
  - [ ] Prestasi section styles
  - [ ] Tips section styles
  - [ ] CTA section styles

## Phase 3: Layout & Core Components

- [ ] Buat `src/layouts/BaseLayout.astro`
  - [ ] HTML boilerplate, SEO meta tags
  - [ ] Font preconnect
  - [ ] Global CSS import
  - [ ] Slot untuk konten
- [ ] Buat `src/components/Navbar.astro`
  - [ ] Neumorphism styling
  - [ ] Logo Himpunan
  - [ ] Menu links
  - [ ] Mobile hamburger menu
- [ ] Buat `src/components/Footer.astro`
  - [ ] Multi-column layout
  - [ ] Logo Himpunan dan Logo PTIK
  - [ ] Marquee text
  - [ ] Copyright
- [ ] Buat `src/components/Preloader.astro`
  - [ ] Fullscreen overlay
  - [ ] Logo Kabinet animation
  - [ ] Text reveal "NAYA VIKRAMA"

## Phase 4: Reusable Components

- [ ] Buat `src/components/ScrollIndicator.astro`
- [ ] Buat `src/components/SectionHeading.astro`
- [ ] Buat `src/components/StatCounter.astro`
- [ ] Buat `src/components/ProgramCard.astro`

## Phase 5: Landing Page Sections

- [ ] Buat `src/pages/index.astro`
  - [ ] Section 1: Preloader (integrate component)
  - [ ] Section 2: Hero (100vh, parallax-ready)
  - [ ] Section 3: About / Tentang Kami
  - [ ] Section 4: Filosofi Logo Kabinet
  - [ ] Section 5: Visi & Misi
  - [ ] Section 6: Program Kerja / Rekam Jejak
  - [ ] Section 7: Prestasi & Mahasiswa Berprestasi
  - [ ] Section 8: Tips & Insight (Mahasiswa Baru)
  - [ ] Section 9: Partnership / CTA
  - [ ] Section 10: Footer (integrate component)

## Phase 6: Client-side JavaScript & Animations

- [ ] Buat `src/scripts/smooth-scroll.js`
  - [ ] Inisialisasi Lenis
  - [ ] Integrasi dengan GSAP ScrollTrigger ticker
- [ ] Buat `src/scripts/preloader.js`
  - [ ] GSAP Timeline: logo fade > text reveal > overlay split
- [ ] Buat `src/scripts/navbar.js`
  - [ ] Shrink on scroll
  - [ ] Mobile hamburger toggle
  - [ ] Active link highlighting
- [ ] Buat `src/scripts/animations.js`
  - [ ] Section headings reveal (fade + translateY)
  - [ ] Cards stagger in
  - [ ] Counter number animation
  - [ ] Hero parallax effect
  - [ ] Logo filosofi interactive animation
  - [ ] Marquee scroll speed variation

## Phase 7: Responsive Design & Polish

- [ ] Test dan fix layout mobile (< 768px)
- [ ] Test dan fix layout tablet (768-1024px)
- [ ] Verify semua animasi berjalan smooth (60fps)
- [ ] Verify semua fonts loaded
- [ ] Verify logo tampil benar
- [ ] Check SEO: meta tags, heading hierarchy, semantic HTML
- [ ] Verify preloader animation timing
- [ ] Test mobile hamburger menu

## Phase 8: Konten Update (Menyusul)

- [ ] Ganti placeholder visi & misi dengan konten asli
- [ ] Ganti placeholder program kerja dengan data asli
- [ ] Ganti placeholder prestasi dengan data asli
- [ ] Tambahkan link social media asli
- [ ] Tambahkan kontak resmi himpunan
- [ ] Ganti placeholder filosofi logo dengan penjelasan asli
- [ ] Ganti placeholder tagline dengan tagline resmi
