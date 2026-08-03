# Workflow: Project MIKROPTIK

## Informasi Project

| Field | Value |
|---|---|
| Nama Project | MIKROPTIK |
| Organisasi | Himpunan Mahasiswa Pendidikan Teknik Informatika dan Komputer |
| Fakultas | FKIP, Universitas Sebelas Maret |
| Kabinet | Naya Vikrama |
| Framework | Astro |
| Status | Development |

---

## Urutan Kerja

### 1. Setup dan Foundation
Mulai dari inisialisasi project Astro, install dependencies, dan buat design system (CSS custom properties, typography, color palette). Semua file styling global harus selesai sebelum membangun komponen.

### 2. Layout dan Core Components
Buat layout dasar (`BaseLayout.astro`) yang akan digunakan semua halaman. Kemudian buat komponen inti: Navbar, Footer, Preloader. Komponen ini harus berfungsi dan ter-style sebelum lanjut ke halaman.

### 3. Reusable Components
Bangun komponen yang akan dipakai ulang di berbagai section: SectionHeading, StatCounter, ProgramCard, ScrollIndicator. Test masing-masing komponen secara independen.

### 4. Halaman dan Section
Rakit semua komponen menjadi halaman lengkap. Mulai dari hero section ke bawah secara berurutan. Gunakan placeholder untuk semua konten yang belum tersedia.

### 5. Animasi
Implementasikan animasi setelah semua section ter-layout dengan benar. Urutan: smooth scroll (Lenis) > preloader > navbar effects > scroll reveal > parallax > counter > interactive elements.

### 6. Responsive dan Polish
Terakhir, pastikan semua breakpoint berfungsi (mobile, tablet, desktop), animasi smooth, dan tidak ada layout shift.

---

## Konvensi Kode

### Penamaan File
- Komponen Astro: PascalCase (`Navbar.astro`, `SectionHeading.astro`)
- Script JS: kebab-case (`smooth-scroll.js`, `animations.js`)
- Style CSS: kebab-case (`global.css`, `sections.css`)
- Halaman: kebab-case (`index.astro`, `struktur-organisasi.astro`)

### CSS
- Gunakan CSS custom properties untuk semua design tokens
- Prefix custom properties dengan kategori: `--color-`, `--font-`, `--space-`, `--radius-`
- Jangan gunakan `!important` kecuali benar-benar diperlukan
- Gunakan `rem` untuk spacing dan font-size, `px` untuk border dan shadow
- Mobile-first approach: base styles untuk mobile, `@media` untuk tablet dan desktop

### JavaScript
- Gunakan ES modules (`import`/`export`)
- Semua animasi GSAP dikelompokkan di `src/scripts/animations.js`
- Lenis dan GSAP ScrollTrigger di-init di `src/scripts/smooth-scroll.js`
- Hindari inline scripts di komponen Astro, gunakan file script terpisah

### Astro Components
- Props didefinisikan dengan TypeScript interface di frontmatter
- Gunakan `<slot />` untuk konten dinamis
- Client-side scripts menggunakan `<script>` tag di akhir komponen (bukan `client:load` kecuali perlu)

---

## Aturan Konten

- Semua konten yang belum tersedia (visi misi, program kerja, prestasi, filosofi logo, tagline, social media, kontak) menggunakan **placeholder text** yang realistis
- Placeholder harus jelas ditandai agar mudah diganti nanti
- Gambar yang belum tersedia menggunakan placeholder (warna solid atau generated)
- Logo yang sudah tersedia di `Assets/`:
  - `Logo Himpunan.png`: Header dan footer
  - `Logo Kabinet.png`: Landing page (section filosofi logo), preloader
  - `Logo PTIK.png`: Footer

---

## Aturan Penulisan

- Jangan menggunakan em dashes
- Jangan menggunakan emoji
- Jangan menggunakan majas perbandingan

---

## Aturan Testing & Commit

- Setelah setiap penambahan fitur atau perubahan signifikan, jalankan testing sederhana dengan `npm run build` (atau perintah lain yang lebih cocok untuk konteks perubahan, misalnya `npm run dev` untuk verifikasi visual)
- Apabila build berhasil tanpa error, buat git commit dengan pesan yang deskriptif sesuai perubahan yang dilakukan
- Format commit message: `feat: [deskripsi singkat]` untuk fitur baru, `fix: [deskripsi]` untuk perbaikan, `style: [deskripsi]` untuk perubahan styling
---

## Aturan UI & Desain

- Selalu merujuk ke `.agents/DESIGN.md` sebelum dan selama membuat UI website untuk memastikan konsistensi warna, tipografi, spacing, komponen, dan pola desain
- DESIGN.md adalah sumber kebenaran tunggal (single source of truth) untuk semua keputusan visual

---

## Color Palette Reference

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-primary` | `#cc570e` | Aksen warm, CTA buttons |
| `--color-secondary` | `#e0b790` | Background aksen, card borders |
| `--color-cream` | `#ebe5d4` | Background sections terang, navbar |
| `--color-red-deep` | `#820907` | Primary brand color |
| `--color-red-dark` | `#691412` | Hover states, gradient endpoints |
| `--color-gold` | `#d4b354` | Highlights, badges, premium accents |
| `--color-dark` | `#1c1614` | Text, dark section backgrounds |
| `--color-white` | `#ffffff` | Text on dark, clean backgrounds |

---

## Typography Reference

| Font | Weight | Usage |
|---|---|---|
| Bebas Neue | 400 | Headings H1-H3, display text, section titles |
| Sanchez | 400, 400i | Body text, paragraf, deskripsi, navbar links |
| Beau Rivage | 400 | Tagline, quotes, aksen dekoratif pada headings |

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| astro | latest | Framework |
| gsap | ^3.12 | Animation library |
| lenis | latest | Smooth scroll |

---

## Halaman yang Direncanakan

| Halaman | File | Status | Prioritas |
|---|---|---|---|
| Landing Page | `src/pages/index.astro` | In progress | Tinggi |
| Struktur Organisasi | `src/pages/struktur-organisasi.astro` | Belum dimulai | Sedang |
| (Halaman lain menyusul) | | | |
