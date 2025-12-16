import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Корневая папка проекта (по умолчанию - текущая директория)
  root: '.',
  // Папка для статических файлов
  publicDir: 'public',
  // Настройки сборки
  build: {
    // Выходная папка
    outDir: 'dist',
    // Имена файлов при сборке
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  //Сервер разработки
  server: {
    host: '0.0.0.0',
    open: true  // автоматически открывать браузер
  }
  
})