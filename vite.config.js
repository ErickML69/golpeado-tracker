import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, './'),
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.join(__dirname, 'public/index.html')
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true
  }
})