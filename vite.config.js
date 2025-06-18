import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {
      VITE_TMDB_API_KEY: JSON.stringify(process.env.VITE_TMDB_API_KEY),
    },
  }
})
