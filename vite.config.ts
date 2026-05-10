import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: '/ui-kit-animations/',
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
  ...(mode === 'web-components' && {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/shared/ui/web-components/index.ts'),
        name: 'XopaWebComponents',
        fileName: 'index',
        formats: ['es'],
      },
      outDir: 'dist/web-components',
      rollupOptions: {
        external: ['react', 'react-dom'],
      },
    },
  }),
}));
