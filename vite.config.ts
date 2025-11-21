import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Optimize dependencies for faster startup
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'clsx',
      'tailwind-merge',
    ],
  },

  server: {
    // Reduce file watching overhead
    watch: {
      // Don't watch node_modules and config files to prevent restart loops
      ignored: ['**/node_modules/**', '**/.git/**', '**/tsconfig*.json', '**/.env*'],
    },
    // Enable faster HMR
    hmr: {
      overlay: true,
    },
  },

  build: {
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
        },
      },
    },
  },
})
