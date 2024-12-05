import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // ou defina a URL base corretamente caso não esteja na raiz
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
