import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://johnengates.com',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  output: 'static',
  trailingSlash: 'always',
});
