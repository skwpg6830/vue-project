import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/你的倉庫名稱/' : '/', // 替換為你的 GitHub 倉庫名稱
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: 'http://localhost:4000/api', // 替換為你的遠端伺服器地址和端口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
