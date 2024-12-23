import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  assetsInclude: ['**/*.JPG'], // Permite manejar archivos con extensión .JPG
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
