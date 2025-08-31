import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Get the base URL from an environment variable, with a fallback to '/'
const base = process.env.VITE_APP_BASE_URL || '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: base,
});