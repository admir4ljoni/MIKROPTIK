# Task Checklist: Halaman Detail Divisi HMP MIKROPTIK

File ini berisi daftar tugas yang dipecah dari rencana `.agents/plan_divisi.md` untuk pembuatan 6 halaman detail divisi/bidang HMP MIKROPTIK Kabinet Naya Vikrama.

---

## Phase 1: Setup Layout & Styling Halaman Divisi

- [x] Buat `src/styles/divisi.css`
  - [x] Styling hero section divisi (60vh, parallax-ready)
  - [x] Styling breadcrumb navigation
  - [x] Styling section deskripsi & tagline
  - [x] Styling grid pengurus (featured card KABID/KADIV + staff grid)
  - [x] Styling card list program kerja
  - [x] Styling galeri foto (bento/masonry grid, hover full-color effect)
  - [x] Styling navigasi antar divisi (prev/next link cards)
  - [x] Breakpoints responsif (mobile < 768px, tablet 768-1024px, desktop > 1024px)
- [x] Buat `src/layouts/DivisiLayout.astro`
  - [x] Extends dari BaseLayout (reuse Navbar & Footer)
  - [x] Tanpa preloader (hanya landing page utama)
  - [x] Breadcrumb navigation (Beranda > Divisi > [Nama Divisi])
  - [x] Navigasi prev/next antar 6 divisi di atas footer
  - [x] Import `divisi.css` dan `divisi-animations.js`

---

## Phase 2: Komponen Reusable Divisi

- [x] Buat `src/components/DivisiHero.astro`
  - [x] Full-width background foto bersama divisi terkait + dark overlay gradient
  - [x] Badge jenis ("BIDANG SEKRETARIS UMUM", "DIVISI PSDM", dll.)
  - [x] Nama divisi besar (Bebas Neue)
  - [x] Tagline divisi (Beau Rivage, cursive/italic)
  - [x] Deskripsi singkat ringkasan
- [x] Buat `src/components/DivisiPengurus.astro`
  - [x] Featured card di atas untuk Kepala Bidang / Kepala Divisi (border gold, badge KABID/KADIV)
  - [x] Responsive grid 3-4 kolom di bawah untuk para staff
  - [x] Placeholder avatar inisial nama dengan gradien emas-ke-tembaga
  - [x] Card hover animation (scale up 1.03 + glow border)
- [x] Buat `src/components/DivisiProker.astro`
  - [x] List/grid card program kerja divisi
  - [x] Badge nomor urut berdesain khas (`--color-gold`)
  - [x] Card background `--color-dark` dengan border `--color-secondary`
  - [x] Hover effect border glow & color shift ke gold
- [x] Buat `src/components/DivisiFotoGaleri.astro`
  - [x] Grid foto divisi (FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA)
  - [x] Filter grayscale redup di mode default, full color + zoom saat di-hover

---

## Phase 3: Client-side JavaScript & Animations

- [x] Buat `src/scripts/divisi-animations.js`
  - [x] Parallax effect pada hero background divisi (scrub ScrollTrigger)
  - [x] Deskripsi section reveal (fade-in + translateY)
  - [x] Pengurus cards stagger entrance animation
  - [x] Program kerja cards stagger entrance animation
  - [x] Galeri foto reveal on scroll animation

---

## Phase 4: Pembuatan Halaman Detail 6 Divisi

- [x] Buat `src/pages/divisi/sekretaris-umum.astro`
  - [x] Integration data pengurus: Yusuf Nurul Huda (KABID) + 5 staff
  - [x] Integration proker: 11 proker SEKUM (Rapat Kerja, Pelatihan Sekben, dst.)
  - [x] Integration foto: FOTO BERSAMA SEKRE, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA
- [x] Buat `src/pages/divisi/bendahara-umum.astro`
  - [x] Integration data pengurus: Salsabila Fitriasani (KABID) + 6 staff
  - [x] Integration proker: 5 proker BENDUM (IWP, Pengadaan Inventaris, dst.)
  - [x] Integration foto: FOTO BERSAMA BEGUM, FOTO KADIV, FOTO STAFF 1, FOTO STAFF MUDA
- [x] Buat `src/pages/divisi/psdm.astro`
  - [x] Integration data pengurus: Khoirul Bagus Wicaksono (KADIV) + 10 staff
  - [x] Integration proker: 6 proker PSDM (PSDM Adventure, SAMARU, OSMARU, LDKM, Oprec, Reorganisasi)
  - [x] Integration foto: FOTO BERSAMA 1 PSDM, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1 & 2
- [x] Buat `src/pages/divisi/mikat.astro`
  - [x] Integration data pengurus: Ahmad Fathoni Nur Mahmudi (KADIV) + 10 staff
  - [x] Integration proker: 7 proker MIKAT (Sebat, JPTK CUP, Festival MIKAT, Seminar PKM, Study Club, dst.)
  - [x] Integration foto: FOTO BERSAMA MIKAT, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1 & 2
- [x] Buat `src/pages/divisi/humas.astro`
  - [x] Integration data pengurus: Eka Putra Noandheli (KADIV) + 9 staff
  - [x] Integration proker: 9 proker HUMAS (Mikroptik Social Action, JPTK Berbagi, Sambung Rasa, Studi Banding, dst.)
  - [x] Integration foto: FOTO BERSAMA HUMAS, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA
- [x] Buat `src/pages/divisi/medinfo.astro`
  - [x] Integration data pengurus: Adinda Putri Utami (KADIV) + 10 staff
  - [x] Integration proker: 4 proker MEDINFO (Dokumentasi, PDD, Sosial Media, Podcast)
  - [x] Integration foto: FOTO BERSAMA MEDINFO, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1 & 2

---

## Phase 5: Navigasi & Interlinking

- [ ] Modifikasi `src/pages/index.astro`
  - [ ] Tambahkan link tombol "Selengkapnya" pada tiap stripe accordion di section Tentang Kami menuju `/divisi/{slug}`
- [ ] Modifikasi `src/components/Navbar.astro`
  - [ ] Tambahkan dropdown / submenu "Divisi" pada navbar yang mengarah ke 6 halaman divisi

---

## Phase 6: Verifikasi & Polish

- [ ] Jalankan `npm run build` untuk menguji kompilasi bebas error
- [ ] Verifikasi navigasi antar halaman divisi (prev/next & breadcrumb)
- [ ] Verifikasi kecocokan data pengurus (DATA PENGURUS HMP.md) dan proker (Program Kerja HMP MIKROPTIK 2026.md)
- [ ] Pengujian visual responsif (Mobile, Tablet, Desktop)
- [ ] Git commit perubahan dengan pesan deskriptif
