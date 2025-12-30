import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wissensbasis: resolve(__dirname, 'wissensbasis.html'),
        'sfml-stats': resolve(__dirname, 'sfml-stats.html'),
        'grid-price-monitor': resolve(__dirname, 'grid-price-monitor.html')
      }
    }
  },
  server: {
    open: true
  }
})
