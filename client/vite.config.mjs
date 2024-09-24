import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    host: '0.0.0.0',
    port: 5173,
  },
})