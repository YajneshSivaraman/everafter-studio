// Import Vite's configuration helper.
import { defineConfig } from 'vite'

// Enable React support.
import react from '@vitejs/plugin-react'

// Enable Tailwind CSS through Vite.
import tailwindcss from '@tailwindcss/vite'

// Register both plugins.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})