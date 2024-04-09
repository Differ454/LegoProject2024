import vitePluginString from "vite-plugin-string";
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [vitePluginString.default()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          // Other manual chunks...
          gsap: ['gsap'], // GSAP animation library
          three: ['three'], // Three.js 3D library
          reactIcons: ['react-icons'], // React Icons library
          // Add more manual chunks as needed
        },
      },
    },
  },
});






