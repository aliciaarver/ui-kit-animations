import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/variables.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/web-components/index.ts'),
      name: 'XopaWebComponents',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: 'dist/web-components',
    emptyOutDir: true,
    rollupOptions: {},
  },
});
