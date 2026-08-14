// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://mikroptik.ptik.uns.ac.id',
  // Atur base path secara otomatis jika berada di lingkungan GitHub Actions (GitHub Pages subpath /MIKROPTIK/)
  base: process.env.GITHUB_ACTIONS ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'MIKROPTIK'}/` : '/',
  integrations: [sitemap()],
});
