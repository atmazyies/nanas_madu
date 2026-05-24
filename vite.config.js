import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true,
  },
  build: {
    // Configure Rollup/Rolldown options for advanced chunk splitting and caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Keep framer-motion in its own chunk as it's only used for scroll/hover animations
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            // Group core React runtime dependencies together
            if (id.includes('react') || id.includes('scheduler') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            // Standard fallback vendor chunk for smaller packages
            return 'vendor-utils';
          }
        }
      }
    }
  }
})

