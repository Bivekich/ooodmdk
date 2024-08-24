import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: 'hngg8xd3',
      dataset: 'production',
    }),
    react(),
  ],
});
