import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://letesdev.github.io',
  base: '/portfolio',
  redirects: {
    '/stats': {
      status: 302,
      destination: 'https://librecounter.org/letesdev.github.io/show', 
      permanent: true,
    },
  },
  // server: { host: true },
  integrations: [mdx(), tailwind()]
});