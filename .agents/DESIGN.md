---
name: MIKROPTIK - Kabinet Naya Vikrama
description: Landing page Himpunan Mahasiswa Pendidikan Teknik Informatika dan Komputer, FKIP UNS
vibe: Dark elegant, warm copper-gold accents, institutional premium, neumorphism touches
reference: bem.uns.ac.id (BEM UNS Kabinet Eskalasi 2026)
colors:
  primary: "#cc570e"
  secondary: "#e0b790"
  cream: "#ebe5d4"
  red-deep: "#820907"
  red-dark: "#691412"
  gold: "#d4b354"
  dark: "#1c1614"
  white: "#ffffff"
typography:
  h1: { fontFamily: "Bebas Neue", weight: 400 }
  h2: { fontFamily: "Bebas Neue", weight: 400 }
  h3: { fontFamily: "Bebas Neue", weight: 400 }
  accent: { fontFamily: "Beau Rivage", weight: 400 }
  body: { fontFamily: "Sanchez", weight: 400 }
  body-italic: { fontFamily: "Sanchez", weight: 400, style: "italic" }
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "4rem"
  xxl: "8rem"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
breakpoints:
  mobile: "< 768px"
  tablet: "768px - 1024px"
  desktop: "> 1024px"
---

# DESIGN.md - MIKROPTIK Landing Page

## Overview

Website landing page untuk Himpunan Mahasiswa Pendidikan Teknik Informatika dan Komputer (MIKROPTIK), Kabinet Naya Vikrama, FKIP Universitas Sebelas Maret. Desain mengusung tema **dark elegant** dengan aksen warm (copper, gold, deep red) yang memberikan kesan premium dan institutional. Terinspirasi dari website BEM UNS (bem.uns.ac.id) dengan penambahan animasi interaktif yang lebih kaya.

Target audiens: mahasiswa aktif PTIK, calon mahasiswa baru, dan mitra/sponsor potensial.

---

## Design Philosophy

- **Dark elegant background** dengan aksen merah tua dan emas untuk kesan premium
- **Mixed typography** pada heading: kombinasi sans-serif bold (Bebas Neue) dengan script decorative (Beau Rivage) dalam satu judul
- **Neumorphism** pada navbar: soft shadow, embossed effect di atas background krem (bukan glassmorphism)
- **Gradien subtle** dari dark ke merah pada transisi antar section
- **Card-based layouts** dengan hover effects dan border glowing
- **Animasi scroll-driven** yang kaya tapi tidak berlebihan

---

## Design Tokens & Reasoning

### Colors

| Token | Hex | Fungsi | Penggunaan |
|---|---|---|---|
| `--color-primary` | `#cc570e` | Aksi utama | CTA buttons, link hover, aksen warm |
| `--color-secondary` | `#e0b790` | Aksen pendukung | Background aksen, card borders, subtle highlights |
| `--color-cream` | `#ebe5d4` | Surface terang | Background sections terang, navbar background |
| `--color-red-deep` | `#820907` | Brand identity | Primary brand color, gradient endpoints, section backgrounds |
| `--color-red-dark` | `#691412` | Pendalaman | Hover states, gradient endpoints, overlay |
| `--color-gold` | `#d4b354` | Premium aksen | Highlights, badges, decorative borders, premium accents |
| `--color-dark` | `#1c1614` | Base gelap | Body text, dark section backgrounds, primary surface |
| `--color-white` | `#ffffff` | Kontras terang | Text on dark backgrounds, clean surfaces |

### Typography

| Role | Font | Weight | Penggunaan |
|---|---|---|---|
| Display/Heading | Bebas Neue | 400 | H1-H3, section titles, display text besar |
| Decorative Accent | Beau Rivage | 400 | Tagline, quotes, aksen italic dalam heading |
| Body | Sanchez | 400, 400i | Paragraf, deskripsi, navbar links, card content |

**Pola mixed typography** (terinspirasi BEM UNS):
- Heading menggunakan kombinasi dua font dalam satu kalimat
- Contoh: "TENTANG" (Bebas Neue) + "Kami" (Beau Rivage)
- Contoh: "PROGRAM" (Bebas Neue) + "Kerja" (Beau Rivage)

### Spacing

Menggunakan `rem` untuk konsistensi. Base: 1rem = 16px.

| Token | Value | Penggunaan |
|---|---|---|
| `--space-xs` | 0.25rem | Micro gaps, icon padding |
| `--space-sm` | 0.5rem | Inline spacing, small gaps |
| `--space-md` | 1rem | Component internal padding |
| `--space-lg` | 2rem | Section internal spacing |
| `--space-xl` | 4rem | Between sections |
| `--space-xxl` | 8rem | Major section separators |

---

## Components

### Navbar (Neumorphism)

- **Style:** Sticky, neumorphism pada background `--color-cream`
- **Shadow:** Soft outer shadow (`0 4px 6px rgba(0,0,0,0.07)`) + subtle inner highlight
- **Behavior:** Shrink on scroll (GSAP), height berkurang, shadow bertambah
- **Mobile:** Hamburger menu dengan fullscreen overlay animation
- **Content:** Logo Himpunan (kiri), menu links (kanan)
- **Links:** Beranda, Tentang, Program Kerja, Prestasi, Kontak

### Preloader

- **Style:** Fullscreen overlay, background `--color-dark`
- **Sequence:** Logo Kabinet scale-up > text "NAYA VIKRAMA" letter-by-letter > subtitle "MIKROPTIK 2025/2026" > overlay split ke atas/bawah
- **Durasi:** ~2.5 detik total
- **Library:** GSAP Timeline

### Cards

- **Style:** Border outline menggunakan `--color-secondary` atau `--color-gold`
- **Background:** Semi-transparent dark atau `--color-dark` solid
- **Hover:** Scale up (1.02-1.05), border glow effect, subtle box-shadow
- **Border radius:** `--radius-md` (8px)
- **Transition:** 0.3s ease untuk semua hover properties

### Buttons

- **Primary:** Solid fill `--color-primary`, text `--color-white`, hover darken
- **Secondary:** Outline style, border `--color-gold`, text `--color-gold`, hover fill
- **Border radius:** `--radius-full` (pill shape) atau `--radius-md`
- **Padding:** `--space-sm` vertical, `--space-lg` horizontal

### Section Heading (SectionHeading component)

- **Style:** Mixed typography (Bebas Neue + Beau Rivage)
- **Animation:** Fade in + translateY on scroll (GSAP ScrollTrigger)
- **Decorative:** Garis tipis atau aksen `--color-gold` di bawah heading

### Stat Counter (StatCounter component)

- **Style:** Angka besar (Bebas Neue), label kecil (Sanchez)
- **Animation:** Counting up dari 0 saat masuk viewport
- **Color:** Angka menggunakan `--color-gold` atau `--color-primary`

### Footer

- **Layout:** Multi-column (3 kolom): Navigasi, Sosial Media, Kontak
- **Logos:** Logo Himpunan dan Logo PTIK
- **Marquee:** Teks berjalan horizontal (CSS infinite animation), terinspirasi BEM UNS
- **Background:** `--color-dark`
- **Copyright:** Teks kecil di paling bawah

---

## Page Sections (Landing Page)

| No | Section | Background | Elemen Kunci |
|---|---|---|---|
| 1 | Preloader | `--color-dark` solid | Logo Kabinet, text reveal "NAYA VIKRAMA" |
| 2 | Hero (100vh) | Gradient `--color-red-dark` ke `--color-dark` | Heading besar, Logo Kabinet floating, parallax, scroll indicator |
| 3 | Tentang Kami | `--color-cream` | Split layout, counter animasi, deskripsi himpunan |
| 4 | Filosofi Logo | `--color-dark` | Logo Kabinet besar, interactive breakdown, hover/klik penjelasan |
| 5 | Visi & Misi | Gradient dark | Card-based misi, gold accent borders, parallax background |
| 6 | Program Kerja | `--color-cream` | Card grid, filter/tab kategori, stagger animation |
| 7 | Prestasi | `--color-dark` | Marquee ticker, achievement cards, counter |
| 8 | Tips Mahasiswa Baru | `--color-cream` | Icon cards, hover flip effect |
| 9 | CTA / Partnership | `--color-dark` + gold | Stats, button "Hubungi Kami", dark + gold accents |
| 10 | Footer | `--color-dark` | Multi-column, marquee text, logos |

---

## Animation Inventory

| Animation | Trigger | Library | Timing |
|---|---|---|---|
| Preloader reveal | Page load | GSAP Timeline | ~2.5s |
| Navbar shrink | Scroll > 100px | GSAP + ScrollTrigger | 0.3s |
| Hero parallax | Scroll position | GSAP ScrollTrigger | Continuous |
| Section headings reveal | Enter viewport | GSAP ScrollTrigger | 0.6s ease |
| Cards stagger in | Enter viewport | GSAP ScrollTrigger + stagger | 0.4s per card |
| Counter numbers | Enter viewport | GSAP ScrollTrigger | 1.5s |
| Logo filosofi highlight | Hover/click | GSAP | 0.3s |
| Card hover glow | Mouse hover | CSS transitions | 0.3s |
| Marquee text | Always running | CSS animation (infinite) | ~20s loop |
| Scroll indicator bounce | Always on hero | CSS animation | 1.5s loop |
| Mobile menu overlay | Click hamburger | GSAP Timeline | 0.5s |
| Tips card flip | Mouse hover | CSS 3D transform | 0.6s |

---

## Referensi Visual: BEM UNS

Poin-poin yang diadaptasi dari bem.uns.ac.id:

| Aspek | BEM UNS | MIKROPTIK (Adaptasi) |
|---|---|---|
| Theme | Full dark (maroon gelap) | Dark + cream alternating sections |
| Aksen warna | Magenta/pink | Copper + gold + red-deep |
| Typography | Mixed sans + serif italic | Bebas Neue + Beau Rivage (pola serupa) |
| Navbar | Transparent, non-sticky | Neumorphism, sticky, shrink on scroll |
| Preloader | Tidak ada | Logo Kabinet + text reveal |
| Smooth scroll | Tidak ada | Lenis |
| Scroll animations | Minimal | GSAP ScrollTrigger (extensive) |
| Card style | Outline/border | Glow border + hover scale |
| Marquee | Ya (footer) | Ya (footer, pola serupa) |
| Parallax | Tidak terlihat | Hero + background sections |
| Counter animation | Tidak ada | StatCounter component |

---

## Accessibility

- Semua teks harus memenuhi minimum contrast ratio 4.5:1
- `--color-white` di atas `--color-dark`: ratio ~15:1 (pass)
- `--color-cream` di atas `--color-dark`: ratio ~12:1 (pass)
- `--color-gold` di atas `--color-dark`: ratio ~7:1 (pass)
- Focus states visible pada semua interactive elements
- Alt text pada semua gambar
- Semantic HTML elements (nav, main, section, article, footer)

---

## Dos and Don'ts

### Do

- Gunakan CSS custom properties untuk semua design tokens
- Prefix custom properties dengan kategori: `--color-`, `--font-`, `--space-`, `--radius-`
- Gunakan `rem` untuk spacing dan font-size
- Gunakan `px` untuk border dan shadow
- Mobile-first approach: base styles untuk mobile, `@media` untuk breakpoints lebih besar
- Gunakan mixed typography (Bebas Neue + Beau Rivage) pada setiap section heading
- Gunakan placeholder text yang realistis untuk konten yang belum tersedia
- Tandai semua placeholder agar mudah diganti

### Don't

- Jangan gunakan `!important` kecuali benar-benar diperlukan
- Jangan gunakan warna di luar palette yang sudah ditentukan
- Jangan gunakan pure black (`#000000`) untuk teks; gunakan `--color-dark` (#1c1614)
- Jangan gunakan inline styles di komponen Astro
- Jangan gunakan glassmorphism pada navbar (gunakan neumorphism)
- Jangan buat animasi yang berdurasi lebih dari 1 detik untuk micro-interactions
- Jangan gunakan em dashes, emoji, atau majas perbandingan dalam konten
