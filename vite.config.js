import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],




  server: {
    proxy: {
      '/api': {
        target: 'https://restaurantapi.ct.ws/api/get_meals.php?i=1',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  
}






})
