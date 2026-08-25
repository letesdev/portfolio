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
  // The v0 preview runtime does not provide the app template metadata
  // expected by Astro's development toolbar.
  devToolbar: {
    enabled: false,
  },
  // server: { host: true },
  integrations: [mdx(), tailwind()]
});
