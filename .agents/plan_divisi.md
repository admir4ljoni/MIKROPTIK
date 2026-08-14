# Halaman Detail Divisi / Bidang HMP MIKROPTIK

Menambahkan 6 halaman baru, masing-masing untuk setiap divisi/bidang HMP MIKROPTIK Kabinet Naya Vikrama. Halaman ini dapat diakses dari section Tentang Kami di landing page (setiap stripe accordion menuju ke halaman divisi terkait).

---

## Konten & Aset yang Tersedia

### Data Pengurus per Divisi (dari DATA PENGURUS HMP.md)

| Divisi | Kepala | Jumlah Staff |
|---|---|---|
| Sekretaris Umum (SEKUM) | Yusuf Nurul Huda (KABID) | 5 staff |
| Bendahara Umum (BENDUM) | Salsabila Fitriasani (KABID) | 6 staff |
| PSDM | Khoirul Bagus Wicaksono (KADIV) | 10 staff |
| MIKAT | Ahmad Fathoni Nur Mahmudi (KADIV) | 10 staff |
| MEDINFO | Adinda Putri Utami (KADIV) | 10 staff |
| HUMAS | Eka Putra Noandheli (KADIV) | 9 staff |

### Program Kerja per Divisi (dari Program Kerja HMP MIKROPTIK 2026.md)

| Divisi | Jumlah Proker | Proker |
|---|---|---|
| SEKUM | 11 | Rapat Kerja, Pelatihan Sekben, Rapat Pleno, Rapat Harian Lengkap, Rapat Terbuka, Rapat Besar, Rekapitulasi Data, Tertib Administrasi, Dokumentasi, Pengelolaan Sekre, Sertifikat Pengurus |
| BENDUM | 5 | IWP, Pengadaan Inventaris Sekre, Disiplin Administrasi, Dana Usaha, MIKROPTIK Store |
| PSDM | 6 | PSDM Adventure, SAMARU, OSMARU, LDKM, Open Recruitment, Reorganisasi |
| MIKAT | 7 | Sebat, JPTK CUP, Festival MIKAT, Seminar PKM, Study Club, Pendataan Prestasi Mahasiswa, Pendataan Mikat Mahasiswa |
| HUMAS | 9 | Mikroptik Social Action + Sarasehan, JPTK Berbagi, Sambung Rasa, Studi Banding, Sambut Wisuda, Real Action, Advokasi, Delegasi, Media Partner |
| MEDINFO | 4 | Dokumentasi, PDD, Sosial Media, Podcast |

### Foto per Divisi (dari public/assets/Foto Kabinet/Foto Divisi/)

| Divisi | Foto Tersedia |
|---|---|
| SEKUM (folder: SEKRE) | FOTO BERSAMA.JPG, FOTO KADIV.JPG, FOTO STAFF AHLI.JPG, FOTO STAFF MUDA.JPG |
| BENDUM (folder: BEGUM) | FOTO BERSAMA.JPG, FOTO KADIV.JPG, FOTO STAFF 1.JPG, FOTO STAFF MUDA.JPG |
| PSDM | FOTO BERSAMA 1.JPG, FOTO KADIV.JPG, FOTO STAFF AHLI.JPG, FOTO STAFF MUDA 1.JPG, FOTO STAFF MUDA 2.JPG |
| MIKAT | FOTO BERSAMA.JPG, FOTO KADIV.JPG, FOTO STAFF AHLI.JPG, FOTO STAFF MUDA 1.JPG, FOTO STAFF MUDA 2.JPG |
| HUMAS | FOTO BERSAMA.JPG, FOTO KADIV.JPG, FOTO STAFF AHLI.JPG, FOTO STAFF MUDA.JPG |
| MEDINFO | FOTO BERSAMA.JPG, FOTO KADIV.JPG, FOTO STAFF AHLI.JPG, FOTO STAFF MUDA 1.JPG, FOTO STAFF MUDA 2.JPG |
| Kabinet (shared) | Foto Kabinet Naya Vikrama.JPG |

### Deskripsi per Divisi (dari DESKRIPSI TIAP DIVISI _ BIDANG.md)

Konten deskripsi lengkap tersedia untuk semua 6 divisi/bidang.

---

## Routing & File Structure

Menggunakan Astro file-based routing. Setiap divisi mendapat halaman sendiri di bawah `/divisi/`:

```
src/pages/
├── index.astro                  (landing page, sudah ada)
└── divisi/
    ├── sekretaris-umum.astro
    ├── bendahara-umum.astro
    ├── psdm.astro
    ├── mikat.astro
    ├── humas.astro
    └── medinfo.astro
```

**URL yang dihasilkan:**
- `/divisi/sekretaris-umum`
- `/divisi/bendahara-umum`
- `/divisi/psdm`
- `/divisi/mikat`
- `/divisi/humas`
- `/divisi/medinfo`

---

## Proposed Changes

### Layout & Reusable Components

#### [NEW] src/layouts/DivisiLayout.astro

Layout khusus untuk halaman divisi, extends dari BaseLayout:
- Menerima props: `divisiName`, `divisiTagline`, `heroImage` (path ke FOTO BERSAMA), `divisiSlug`
- Tidak menggunakan Preloader (hanya landing page yang menggunakan preloader)
- Tetap menggunakan Navbar dan Footer dari BaseLayout
- Menambahkan breadcrumb navigation: Beranda > Divisi > [Nama Divisi]
- Menambahkan navigasi antar divisi (prev/next) di bagian bawah sebelum footer

#### [NEW] src/components/DivisiHero.astro

Komponen hero section khusus halaman divisi:
- **Background**: FOTO BERSAMA divisi terkait, full-width, dengan overlay gradient dark
- **Tinggi**: 60vh (lebih pendek dari hero landing page yang 100vh)
- **Konten**:
  - Badge/label: "BIDANG" atau "DIVISI" sesuai jenis
  - Nama divisi besar (Bebas Neue)
  - Tagline divisi (Beau Rivage, italic)
  - Deskripsi singkat (1-2 kalimat pertama dari deskripsi lengkap)
- **Efek**: Parallax ringan pada background image, fade-in text on load

#### [NEW] src/components/DivisiPengurus.astro

Komponen grid anggota pengurus divisi:
- **Layout**: Grid responsif
  - Kepala Bidang/Divisi: Card besar di atas (featured, full-width atau 2-kolom)
  - Staff: Grid 3-4 kolom di bawah
- **Card Pengurus**:
  - Placeholder avatar (inisial nama, background gradient gold-to-copper)
  - Nama lengkap (Bebas Neue)
  - Jabatan: KABID/KADIV atau STAFF (Sanchez)
  - Border: `--color-gold` untuk kepala, `--color-secondary` untuk staff
  - Hover: scale up + glow effect sesuai DESIGN.md
- **Props**: menerima array `{ nama, jabatan, isKepala }` dari data pengurus

#### [NEW] src/components/DivisiProker.astro

Komponen daftar program kerja divisi:
- **Layout**: Card list vertikal atau grid 2 kolom
- **Card Proker**:
  - Nomor urut (styled badge, `--color-gold`)
  - Nama program kerja (Bebas Neue)
  - Background: `--color-dark` dengan border `--color-secondary`
  - Hover: border color transition ke `--color-gold`, subtle glow
- **Props**: menerima array `{ nama }` dari data proker

#### [NEW] src/components/DivisiFotoGaleri.astro

Komponen galeri foto divisi:
- **Layout**: Grid masonry atau bento-style (2-3 kolom)
- **Foto**: FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA (semua foto yang tersedia)
- **Efek**:
  - Default: grayscale ringan + brightness reduced
  - Hover: full color + scale 1.03 (konsisten dengan efek di section Tentang Kami)
  - Klik: lightbox fullscreen view (opsional)
- **Props**: menerima array path foto

---

### Halaman Divisi (6 halaman)

#### [NEW] src/pages/divisi/sekretaris-umum.astro

| Section | Konten |
|---|---|
| Hero | FOTO BERSAMA SEKRE, "SEKRETARIS UMUM", tagline "Selalu Siap, Selalu Ada" |
| Deskripsi | Teks lengkap dari DESKRIPSI TIAP DIVISI (paragraf) |
| Pengurus | Yusuf Nurul Huda (KABID) + 5 staff |
| Program Kerja | 11 proker (Rapat Kerja, Pelatihan Sekben, dst.) |
| Galeri Foto | FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA |

#### [NEW] src/pages/divisi/bendahara-umum.astro

| Section | Konten |
|---|---|
| Hero | FOTO BERSAMA BEGUM, "BENDAHARA UMUM", tagline "Transparansi & Akuntabilitas" |
| Deskripsi | Teks lengkap dari DESKRIPSI TIAP DIVISI |
| Pengurus | Salsabila Fitriasani (KABID) + 6 staff |
| Program Kerja | 5 proker (IWP, Pengadaan Inventaris, dst.) |
| Galeri Foto | FOTO KADIV, FOTO STAFF 1, FOTO STAFF MUDA |

#### [NEW] src/pages/divisi/psdm.astro

| Section | Konten |
|---|---|
| Hero | FOTO BERSAMA 1 PSDM, "PSDM", tagline "Pengembangan Potensi & Karakter" |
| Deskripsi | Teks lengkap dari DESKRIPSI TIAP DIVISI |
| Pengurus | Khoirul Bagus Wicaksono (KADIV) + 10 staff |
| Program Kerja | 6 proker (PSDM Adventure, SAMARU, dst.) |
| Galeri Foto | FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1, FOTO STAFF MUDA 2 |

#### [NEW] src/pages/divisi/mikat.astro

| Section | Konten |
|---|---|
| Hero | FOTO BERSAMA MIKAT, "MIKAT", tagline "Minat & Bakat Mahasiswa" |
| Deskripsi | Teks lengkap dari DESKRIPSI TIAP DIVISI |
| Pengurus | Ahmad Fathoni Nur Mahmudi (KADIV) + 10 staff |
| Program Kerja | 7 proker (Sebat, JPTK CUP, dst.) |
| Galeri Foto | FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1, FOTO STAFF MUDA 2 |

#### [NEW] src/pages/divisi/humas.astro

| Section | Konten |
|---|---|
| Hero | FOTO BERSAMA HUMAS, "HUMAS", tagline "Jalin Koneksi, Cipta Harmoni, High Quality" |
| Deskripsi | Teks lengkap dari DESKRIPSI TIAP DIVISI |
| Pengurus | Eka Putra Noandheli (KADIV) + 9 staff |
| Program Kerja | 9 proker (Mikroptik Social Action, dst.) |
| Galeri Foto | FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA |

#### [NEW] src/pages/divisi/medinfo.astro

| Section | Konten |
|---|---|
| Hero | FOTO BERSAMA MEDINFO, "MEDINFO", tagline "Media Informasi & Dokumentasi Digital" |
| Deskripsi | Teks lengkap dari DESKRIPSI TIAP DIVISI |
| Pengurus | Adinda Putri Utami (KADIV) + 10 staff |
| Program Kerja | 4 proker (Dokumentasi, PDD, dst.) |
| Galeri Foto | FOTO KADIV, FOTO STAFF AHLI, FOTO STAFF MUDA 1, FOTO STAFF MUDA 2 |

---

### Navigasi & Interlinking

#### [MODIFY] src/pages/index.astro

- Tambahkan link/tombol pada setiap stripe accordion di section Tentang Kami yang mengarah ke halaman divisi terkait
- Teks link: "Selengkapnya" atau ikon panah, muncul saat stripe di-hover/expand

#### [MODIFY] src/components/Navbar.astro

- Tambahkan dropdown/submenu pada menu "Tentang" yang berisi link ke 6 halaman divisi
- Atau: Tambahkan menu baru "Divisi" yang berisi submenu 6 divisi

---

### Styling

#### [NEW] src/styles/divisi.css

CSS khusus untuk halaman divisi:
- Hero section divisi (60vh, parallax)
- Breadcrumb navigation styling
- Deskripsi section layout
- Grid pengurus (featured card + staff grid)
- Program kerja card list
- Galeri foto grid + hover effects
- Navigasi antar divisi (prev/next)
- Responsive breakpoints (mengikuti DESIGN.md: mobile < 768px, tablet 768-1024px)

---

### Animasi (Client-side JavaScript)

#### [NEW] src/scripts/divisi-animations.js

Animasi GSAP ScrollTrigger untuk halaman divisi:
- Hero parallax (background image subtle movement)
- Deskripsi fade-in on scroll
- Pengurus cards stagger reveal
- Program kerja cards stagger reveal
- Galeri foto reveal on scroll

---

## Design Principles (Konsistensi dengan DESIGN.md)

- **Color Palette**: Menggunakan seluruh token dari DESIGN.md tanpa warna tambahan
- **Typography**: Mixed typography (Bebas Neue + Beau Rivage) pada section headings
- **Card Style**: Border `--color-secondary` atau `--color-gold`, hover scale + glow
- **Background**: Alternating dark dan cream sections sesuai landing page
- **Animasi**: GSAP ScrollTrigger, durasi < 1 detik untuk micro-interactions
- **Neumorphism**: Navbar tetap konsisten dengan landing page
- **Responsive**: Mobile-first, breakpoints mengikuti DESIGN.md

---

## Section Layout per Halaman Divisi

| No | Section | Background | Komponen |
|---|---|---|---|
| 1 | Hero Divisi | Foto BERSAMA + overlay gradient dark | `DivisiHero.astro` |
| 2 | Deskripsi | `--color-cream` | Paragraf teks + SectionHeading |
| 3 | Pengurus | `--color-dark` | `DivisiPengurus.astro` + SectionHeading |
| 4 | Program Kerja | `--color-cream` | `DivisiProker.astro` + SectionHeading |
| 5 | Galeri Foto | `--color-dark` | `DivisiFotoGaleri.astro` + SectionHeading |
| 6 | Navigasi Divisi Lain | `--color-cream` | Link card prev/next divisi |
| 7 | Footer | `--color-dark` | Footer.astro (reuse) |

---

## Verification Plan

### Build Verification
- `npm run build` harus sukses tanpa error setelah setiap halaman divisi ditambahkan

### Manual Verification
- Navigasi dari landing page (section Tentang Kami) ke setiap halaman divisi
- Navigasi antar divisi (prev/next)
- Breadcrumb navigation berfungsi
- Semua foto tampil benar (tidak 404)
- Semua data pengurus sesuai DATA PENGURUS HMP.md
- Semua proker sesuai Program Kerja HMP MIKROPTIK 2026.md
- Responsive layout: mobile, tablet, desktop
- Animasi berjalan smooth (GSAP ScrollTrigger)
- SEO: meta title/description unik per halaman divisi
- Navbar active state menunjukkan halaman divisi yang aktif

---

## Open Questions

> [!IMPORTANT]
> 1. **Navigasi ke divisi dari landing page**: Apakah ingin ditambahkan tombol "Selengkapnya" di setiap stripe accordion di section Tentang Kami? Atau cukup seluruh stripe yang dapat diklik untuk navigasi ke halaman divisi?
> 2. **Navbar**: Apakah perlu menambah menu "Divisi" baru di navbar, atau cukup sebagai submenu dari "Tentang"?
> 3. **Foto pengurus individu**: Saat ini hanya tersedia foto grup (bersama, staff ahli, staff muda). Apakah card pengurus cukup menggunakan placeholder avatar (inisial nama)?
> 4. **Halaman Kahim & Wakahim**: Apakah perlu halaman tersendiri untuk Kahim (Muhammad Ridwan Auliansyach) dan Wakahim (Ade Amanah Putri) beserta proker mereka (Monitoring Bulanan, Upgrading, Bytesfest)?

---

## Execution Order

1. Buat `src/styles/divisi.css` (styling halaman divisi)
2. Buat `src/layouts/DivisiLayout.astro` (layout khusus divisi)
3. Buat komponen reusable: `DivisiHero.astro`, `DivisiPengurus.astro`, `DivisiProker.astro`, `DivisiFotoGaleri.astro`
4. Buat 6 halaman divisi di `src/pages/divisi/`
5. Buat `src/scripts/divisi-animations.js`
6. Modifikasi `src/pages/index.astro` (tambah link ke halaman divisi)
7. Modifikasi `src/components/Navbar.astro` (tambah menu divisi)
8. Build & verify
9. Git commit
