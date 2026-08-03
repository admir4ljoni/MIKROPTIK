# Landing Page MIKROPTIK (Kabinet Naya Vikrama)

Landing page untuk Himpunan Mahasiswa Pendidikan Teknik Informatika dan Komputer, Fakultas Keguruan dan Ilmu Pendidikan, Universitas Sebelas Maret.

Terinspirasi dari website BEM UNS (bem.uns.ac.id) dengan animasi interaktif yang kaya dan desain premium.

---

## Tech Stack

### Core Framework

| Technology | Purpose |
|---|---|
| **Astro** | Framework utama. Island architecture untuk performa optimal, routing berbasis file, dukungan SSG/SSR, dan integrasi dengan React/Vue jika dibutuhkan di masa depan |
| **Vanilla JS** (Astro scripts) | Logic dan animasi di sisi client |
| **Vanilla CSS** | Styling dengan CSS custom properties dan fitur modern |

Alasan memilih Astro:
- **Scalable**: Routing berbasis file, mudah menambah halaman baru (Struktur Organisasi, Galeri, Blog, dll)
- **Performa tinggi**: Mengirim zero JavaScript secara default, hanya mengirim JS saat dibutuhkan (island architecture)
- **SEO-friendly**: Static site generation bawaan, HTML-first approach
- **Fleksibel**: Bisa mengintegrasikan React, Vue, atau Svelte components di masa depan tanpa rewrite
- **Content Collections**: Fitur bawaan untuk mengelola konten (program kerja, prestasi, artikel) secara terstruktur

### Animation Libraries (via npm)

| Library | Purpose |
|---|---|
| **GSAP 3** (GreenSock) | Animasi utama: scroll-triggered, timeline, text reveals |
| **GSAP ScrollTrigger** | Animasi berbasis scroll (parallax, reveal on scroll, pin sections) |
| **Lenis** | Smooth scrolling dengan feel premium |

### Typography (Google Fonts)

| Font | Usage |
|---|---|
| **Bebas Neue** | Heading utama, display text, bold dan impactful |
| **Sanchez** | Body text, paragraf, readable slab-serif |
| **Beau Rivage** | Aksen dekoratif, quotes, tagline, cursive elegant |

---

## Design System

### Color Palette

```
--color-primary:       #cc570e   (Copper/Tembaga, aksen warm)
--color-secondary:     #e0b790   (Tan/Krem, background aksen)
--color-cream:         #ebe5d4   (Cream putih tulang, background sections)
--color-red-deep:      #820907   (Merah elegan deep, primary brand)
--color-red-dark:      #691412   (Merah gelap, hover/aksen)
--color-gold:          #d4b354   (Emas, highlights, badges, aksen premium)
--color-dark:          #1c1614   (Almost black, text, dark sections)
--color-white:         #ffffff   (Putih bersih)
```

### Design Principles

- **Dark elegant background** dengan aksen merah dan emas
- **Mixed typography**: serif italic + sans-serif bold pada heading (referensi gaya BEM UNS)
- **Neumorphism** pada navbar (soft shadow, embossed/debossed effect, bukan glassmorphism)
- **Gradien subtle** dari dark ke merah pada transisi antar section
- **Card-based layouts** dengan hover effects dan border glowing
- **Semua gambar/konten yang belum tersedia menggunakan placeholder**

---

## Proposed Changes

### Project Setup

#### [NEW] package.json
Astro project setup dengan dependencies: `astro`, `gsap`, `lenis`.

#### [NEW] astro.config.mjs
Konfigurasi Astro dengan output `static` (SSG).

#### [NEW] tsconfig.json
Konfigurasi TypeScript bawaan Astro (strict mode).

---

### Layout & Components (Reusable)

#### [NEW] src/layouts/BaseLayout.astro
Layout dasar yang dipakai semua halaman:
- HTML boilerplate dengan SEO meta tags
- Google Fonts preconnect & import
- Global CSS import
- Slot untuk konten halaman
- Navbar dan Footer components

#### [NEW] src/components/Navbar.astro
Komponen navbar fixed:
- **Neumorphism styling**: soft outer/inner shadow, subtle raised effect pada background `--color-cream`
- Logo Himpunan (`Logo Himpunan.png`) di kiri
- Menu links: Beranda, Tentang, Program Kerja, Prestasi, Kontak
- Shrink on scroll effect (GSAP)
- Mobile hamburger menu dengan fullscreen overlay animation

#### [NEW] src/components/Footer.astro
Komponen footer:
- Multi-column layout: Navigasi, Sosial Media, Kontak
- Logo Himpunan dan Logo PTIK
- Marquee text berjalan di bawah (CSS infinite animation)
- Copyright text

#### [NEW] src/components/Preloader.astro
Komponen preloader/opening animation:
- Fullscreen overlay dengan background `--color-dark`
- Logo Kabinet muncul dengan scale-up animation
- Teks "NAYA VIKRAMA" muncul dengan letter-by-letter reveal
- Subtitle "MIKROPTIK 2025/2026"
- Setelah ~2.5 detik, overlay split dan slide ke atas/bawah, reveal halaman

#### [NEW] src/components/ScrollIndicator.astro
Animated chevron/arrow di bawah hero section.

#### [NEW] src/components/SectionHeading.astro
Reusable heading component dengan mixed typography styling dan scroll reveal animation.

#### [NEW] src/components/StatCounter.astro
Komponen counter angka dengan animasi counting saat masuk viewport.

#### [NEW] src/components/ProgramCard.astro
Card component untuk program kerja dengan hover effect (scale, glow).

---

### Landing Page Sections

#### [NEW] src/pages/index.astro
Halaman landing page utama dengan 10 section:

**1. Preloader / Opening Animation**
- Komponen `Preloader.astro`
- GSAP Timeline: logo fade-in > text reveal > overlay split

**2. Hero Section (100vh)**
- Background: pattern/tekstur dengan overlay gradient `--color-red-dark` ke `--color-dark`
- Heading besar: "HIMPUNAN MAHASISWA" (Bebas Neue) + "Pendidikan Teknik Informatika & Komputer" (Beau Rivage)
- Subtitle: "FKIP Universitas Sebelas Maret"
- Logo Kabinet floating dengan subtle rotation
- Parallax effect pada background
- Scroll indicator di bawah

**3. About Section: "Tentang Kami"**
- Split layout: teks kiri, visual placeholder kanan
- Heading dengan mixed typography
- Deskripsi singkat himpunan (placeholder)
- Counter animasi: jumlah anggota, program kerja, prestasi (placeholder angka)
- On-scroll reveal animations (fade-in + translateY)

**4. Filosofi Logo Kabinet**
- Menampilkan `Logo Kabinet.png` besar di tengah
- Breakdown bagian-bagian logo dengan penjelasan filosofi (placeholder text)
- Interaktif: hover/klik pada bagian logo untuk melihat penjelasan
- GSAP animation untuk highlight setiap bagian

**5. Visi & Misi Section**
- Dark background section dengan gradient
- Card-based layout untuk misi (placeholder content)
- Gold accent borders dan decorative elements
- Parallax background pattern

**6. Program Kerja / Rekam Jejak Section**
- Card grid layout
- Setiap proker dalam `ProgramCard.astro` component (placeholder data)
- Filter/tab untuk kategori proker
- On-scroll stagger animation

**7. Prestasi & Mahasiswa Berprestasi Section**
- Marquee/ticker horizontal
- Card grid untuk mahasiswa berprestasi (placeholder)
- Achievement counter dengan animasi counting

**8. Untuk Mahasiswa Baru: "Tips & Insight"**
- Card grid berisi tips perkuliahan (placeholder)
- Icon-based cards dengan hover flip effect
- Link bantuan akademis

**9. Partnership / CTA Section**
- Untuk korporat/sponsor: ajakan kerjasama
- Stats yang impressive (jumlah event, peserta, dll, placeholder angka)
- Button "Hubungi Kami" dan "Lihat Proposal"
- Dark section dengan gold accents

**10. Footer**
- Komponen `Footer.astro`

---

### Styling

#### [NEW] src/styles/global.css
CSS global dengan:
- CSS custom properties (design tokens dari color palette)
- Reset dan base styles
- Google Fonts import (Bebas Neue, Sanchez, Beau Rivage)
- Responsive breakpoints (mobile < 768px, tablet 768-1024px, desktop > 1024px)
- Utility classes
- Animation keyframes (marquee, bounce, fade variants)
- Neumorphism navbar styles
- Card hover effects (scale, glow, border-color transition)
- Custom scrollbar
- Marquee infinite animation

#### [NEW] src/styles/sections.css
CSS khusus untuk setiap section landing page:
- Hero section (fullscreen, parallax-ready)
- About section (split layout)
- Logo filosofi section (interactive regions)
- Visi misi cards
- Program kerja grid
- Prestasi marquee
- Tips cards (flip effect)
- CTA section

---

### JavaScript (Client-side)

#### [NEW] src/scripts/preloader.js
GSAP Timeline untuk animasi preloader:
- Logo scale dan fade
- Text letter reveal
- Overlay split dan exit

#### [NEW] src/scripts/animations.js
Semua animasi GSAP ScrollTrigger:
- Section headings reveal (fade + translateY)
- Cards stagger in
- Counter number animation
- Parallax effect pada hero dan background images
- Logo filosofi interactive animation
- Marquee scroll speed variation

#### [NEW] src/scripts/navbar.js
Logic navbar:
- Shrink on scroll
- Mobile hamburger toggle dengan GSAP timeline
- Active link highlighting

#### [NEW] src/scripts/smooth-scroll.js
Inisialisasi Lenis smooth scroll dan integrasi dengan GSAP ScrollTrigger ticker.

---

## Animation Breakdown

| Animation | Trigger | Library |
|---|---|---|
| Preloader reveal | Page load | GSAP Timeline |
| Navbar shrink | Scroll > 100px | GSAP + ScrollTrigger |
| Hero parallax | Scroll position | GSAP ScrollTrigger |
| Section headings reveal | Enter viewport | GSAP ScrollTrigger |
| Cards stagger in | Enter viewport | GSAP ScrollTrigger + stagger |
| Counter numbers | Enter viewport | GSAP ScrollTrigger |
| Logo filosofi highlight | Hover/click | GSAP |
| Hover card glow | Mouse hover | CSS transitions |
| Marquee text | Always running | CSS animation (infinite) |
| Scroll indicator bounce | Always on hero | CSS animation |
| Mobile menu overlay | Click hamburger | GSAP Timeline |
| Tips card flip | Mouse hover | CSS 3D transform |

---

## File Structure

```
MIKROPTIK/
├── .agents/
│   ├── plan.md
│   ├── task.md
│   └── workflow.md
├── Assets/
│   ├── Logo Himpunan.png
│   ├── Logo Kabinet.png
│   └── Logo PTIK.png
├── public/
│   └── (static assets, favicon, dll)
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Preloader.astro
│   │   ├── ScrollIndicator.astro
│   │   ├── SectionHeading.astro
│   │   ├── StatCounter.astro
│   │   └── ProgramCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro          (landing page)
│   ├── scripts/
│   │   ├── preloader.js
│   │   ├── animations.js
│   │   ├── navbar.js
│   │   └── smooth-scroll.js
│   └── styles/
│       ├── global.css
│       └── sections.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Struktur ini dirancang untuk scalability. Menambah halaman baru (misalnya Struktur Organisasi) cukup dengan membuat file baru di `src/pages/`. Komponen yang sudah dibuat (Navbar, Footer, SectionHeading, dll) bisa digunakan ulang di semua halaman.

---

## Verification Plan

### Manual Verification
- Jalankan `npm run dev` dan inspect di browser
- Test semua animasi: preloader, scroll animations, hover effects
- Test responsive design di mobile viewport (< 768px) dan tablet (768-1024px)
- Verify smooth scrolling dengan Lenis
- Test navbar shrink on scroll dan neumorphism styling
- Test mobile hamburger menu
- Verify semua fonts loaded (Bebas Neue, Sanchez, Beau Rivage)
- Check performance: no layout shifts, animasi berjalan di 60fps
- Verify logo-logo tampil dengan benar (Himpunan di navbar/footer, Kabinet di filosofi section)
- Test SEO: meta tags, heading hierarchy, semantic HTML
