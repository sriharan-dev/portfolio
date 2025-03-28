import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Keep this if you're testing on LAN or mobile devices
  },
  plugins: [react()],
});
