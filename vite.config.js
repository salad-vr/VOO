import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        events: resolve(__dirname, 'events.html'),
        join: resolve(__dirname, 'join.html'),
        alumni: resolve(__dirname, 'alumni.html'),
        support: resolve(__dirname, 'support.html'),
        lodge: resolve(__dirname, 'lodge.html'),
        leadership: resolve(__dirname, 'leadership.html'),
        news: resolve(__dirname, 'news.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
