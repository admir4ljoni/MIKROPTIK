# Task Checklist: Halaman Detail Divisi HMP MIKROPTIK

File ini berisi daftar tugas yang dipecah dari rencana `.agents/plan_divisi.md` untuk pembuatan 6 halaman detail divisi/bidang HMP MIKROPTIK Kabinet Naya Vikrama.

---

## Phase 1: Setup Layout & Styling Halaman Divisi

- [ ] Buat `src/styles/divisi.css`
  - [ ] Styling hero section divisi (60vh, parallax-ready)
  - [ ] Styling breadcrumb navigation
  - [ ] Styling section deskripsi & tagline
  - [ ] Styling grid pengurus (featured card KABID/KADIV + staff grid)
  - [ ] Styling card list program kerja
  - [ ] Styling galeri foto (bento/masonry grid, hover full-color effect)
  - [ ] Styling navigasi antar divisi (prev/next link cards)
  - [ ] Breakpoints responsif (mobile < 768px, tablet 768-1024px, desktop > 1024px)
- [ ] Buat `src/layouts/DivisiLayout.astro`
  - [ ] Extends dari BaseLayout (reuse Navbar & Footer)
  - [ ] Tanpa preloader (hanya landing page utama)
  - [ ] Breadcrumb navigation (Beranda > Divisi > [Nama Divisi])
  - [ ] Navigasi prev/next antar 6 divisi di atas footer
  - [ ] Import `divisi.css` dan `divisi-animations.js`

---

## Phase 2: Komponen Reusable Divisi

- [ ] Buat `src/components/DivisiHero.astro`
  - [ ] Full-width background foto bersama divisi terkait + dark overlay gradient
  - [ ] Badge jenis ("BIDANG SEKRETARIS UMUM", "DIVISI PSDM", dll.)
  - [ ] Nama divisi besar (Bebas Neue)
  - [ ] Tagline divisi (Beau Rivage, cursive/italic)
  - [ ] Deskripsi singkat ringkasan
- [ ] Buat `src/components/DivisiPengurus.astro`
  - [ ] Featured card di atas untuk Kepala Bidang / Kepala Divisi (border gold, badge KABID/KADIV)
  - [ ] Responsive grid 3-4 kolom di bawah untuk para staff
  - [ ] Placeholder avatar inisial nama dengan gradien emas-ke-tembaga
  - [ ] Card hover animation (scale up 1.03 + glow border)
- [ ] Buat `src/components/DivisiProker.astro`
  - [ ] List/grid card program kerja divisi
  - [ ] Badge nomor urut berdesain khas (`--color-gold`)
  - [ ] Card background `--color-dark` dengan border `--color-secondary`
  - [ ] Hover effect border glow & color shift ke gold
- [ ] Buat `src/components/DivisiFotoGaleri.astro`
  - [ ] Grid foto divisi (FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA)
  - [ ] Filter grayscale redup di mode default, full color + zoom saat di-hover

---

## Phase 3: Client-side JavaScript & Animations

- [ ] Buat `src/scripts/divisi-animations.js`
  - [ ] Parallax effect pada hero background divisi (scrub ScrollTrigger)
  - [ ] Deskripsi section reveal (fade-in + translateY)
  - [ ] Pengurus cards stagger entrance animation
  - [ ] Program kerja cards stagger entrance animation
  - [ ] Galeri foto reveal on scroll animation

---

## Phase 4: Pembuatan Halaman Detail 6 Divisi

- [ ] Buat `src/pages/divisi/sekretaris-umum.astro`
  - [ ] Integration data pengurus: Yusuf Nurul Huda (KABID) + 5 staff
  - [ ] Integration proker: 11 proker SEKUM (Rapat Kerja, Pelatihan Sekben, dst.)
  - [ ] Integration foto: FOTO BERSAMA SEKRE, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA
- [ ] Buat `src/pages/divisi/bendahara-umum.astro`
  - [ ] Integration data pengurus: Salsabila Fitriasani (KABID) + 6 staff
  - [ ] Integration proker: 5 proker BENDUM (IWP, Pengadaan Inventaris, dst.)
  - [ ] Integration foto: FOTO BERSAMA BEGUM, FOTO KADIV, FOTO STAFF 1, FOTO STAFF MUDA
- [ ] Buat `src/pages/divisi/psdm.astro`
  - [ ] Integration data pengurus: Khoirul Bagus Wicaksono (KADIV) + 10 staff
  - [ ] Integration proker: 6 proker PSDM (PSDM Adventure, SAMARU, OSMARU, LDKM, Oprec, Reorganisasi)
  - [ ] Integration foto: FOTO BERSAMA 1 PSDM, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1 & 2
- [ ] Buat `src/pages/divisi/mikat.astro`
  - [ ] Integration data pengurus: Ahmad Fathoni Nur Mahmudi (KADIV) + 10 staff
  - [ ] Integration proker: 7 proker MIKAT (Sebat, JPTK CUP, Festival MIKAT, Seminar PKM, Study Club, dst.)
  - [ ] Integration foto: FOTO BERSAMA MIKAT, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1 & 2
- [ ] Buat `src/pages/divisi/humas.astro`
  - [ ] Integration data pengurus: Eka Putra Noandheli (KADIV) + 9 staff
  - [ ] Integration proker: 9 proker HUMAS (Mikroptik Social Action, JPTK Berbagi, Sambung Rasa, Studi Banding, dst.)
  - [ ] Integration foto: FOTO BERSAMA HUMAS, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA
- [ ] Buat `src/pages/divisi/medinfo.astro`
  - [ ] Integration data pengurus: Adinda Putri Utami (KADIV) + 10 staff
  - [ ] Integration proker: 4 proker MEDINFO (Dokumentasi, PDD, Sosial Media, Podcast)
  - [ ] Integration foto: FOTO BERSAMA MEDINFO, FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1 & 2

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
