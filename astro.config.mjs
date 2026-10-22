import { defineConfig } from 'astro/config';

// Standard: Livebetrieb auf netcup unter www.heidirast.com.
// Für die Vorschau auf GitHub Pages setzt der Workflow SITE_URL und BASE_PATH.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.heidirast.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  build: {
    // /angebote/index.html statt /angebote.html – passt zu Apache auf netcup
    format: 'directory',
  },
});
