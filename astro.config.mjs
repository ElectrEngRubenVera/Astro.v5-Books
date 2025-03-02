// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: { type: 'boolean', default: true, context: 'server', access: 'public' },
      SCORE_API_ENDPOINT: { type: 'string', context: 'server', access: 'public' },
    }
  },
  output: 'server',
  adapter: vercel(),
});