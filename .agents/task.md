# Task Checklist: Landing Page MIKROPTIK

## Phase 1: Project Setup

- [x] Inisialisasi project Astro
- [x] Install dependencies (gsap, lenis)
- [x] Konfigurasi `astro.config.mjs`
- [x] Pindahkan assets ke `public/` atau setup path alias
- [x] Setup Google Fonts (Bebas Neue, Sanchez, Beau Rivage)

## Phase 2: Design System & Global Styles

- [x] Buat `src/styles/global.css`
  - [x] CSS custom properties (color palette, typography, spacing)
  - [x] Reset dan base styles
  - [x] Font imports
  - [x] Responsive breakpoints
  - [x] Utility classes
  - [x] Animation keyframes (marquee, bounce, fade)
  - [x] Custom scrollbar
- [x] Buat `src/styles/sections.css`
  - [x] Hero section styles
  - [x] About section styles
  - [x] Filosofi logo section styles
  - [x] Visi misi section styles
  - [x] Program kerja section styles
  - [x] Prestasi section styles
  - [x] Tips section styles
  - [x] CTA section styles

## Phase 3: Layout & Core Components

- [x] Buat `src/layouts/BaseLayout.astro`
  - [x] HTML boilerplate, SEO meta tags
  - [x] Font preconnect
  - [x] Global CSS import
  - [x] Slot untuk konten
- [x] Buat `src/components/Navbar.astro`
  - [x] Neumorphism styling
  - [x] Logo Himpunan
  - [x] Menu links
  - [x] Mobile hamburger menu
- [x] Buat `src/components/Footer.astro`
  - [x] Multi-column layout
  - [x] Logo Himpunan dan Logo PTIK
  - [x] Marquee text
  - [x] Copyright
- [x] Buat `src/components/Preloader.astro`
  - [x] Fullscreen overlay
  - [x] Logo Kabinet animation
  - [x] Text reveal "NAYA VIKRAMA"

## Phase 4: Reusable Components

- [x] Buat `src/components/ScrollIndicator.astro`
- [x] Buat `src/components/SectionHeading.astro`
- [x] Buat `src/components/StatCounter.astro`
- [x] Buat `src/components/ProgramCard.astro`

## Phase 5: Landing Page Sections

- [x] Buat `src/pages/index.astro`
  - [x] Section 1: Preloader (integrate component)
  - [x] Section 2: Hero (100vh, parallax-ready)
  - [x] Section 3: About / Tentang Kami
  - [x] Section 4: Filosofi Logo Kabinet
  - [x] Section 5: Visi & Misi
  - [x] Section 6: Program Kerja / Rekam Jejak
  - [x] Section 7: Prestasi & Mahasiswa Berprestasi
  - [x] Section 8: Tips & Insight (Mahasiswa Baru)
  - [x] Section 9: Partnership / CTA
  - [x] Section 10: Footer (integrate component)

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
