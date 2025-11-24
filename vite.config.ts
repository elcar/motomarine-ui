import { defineConfig } from 'vite';
import string from 'vite-plugin-string';
import postcss from './postcss.config.js';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Vite configuration
export default defineConfig({
  server: {
    open: true, // Automatically open the browser
    port: 3000, // Default development port
  },
  plugins: [string()],
  css: {
    postcss,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'IuavUI',
      fileName: (format) => `iuav-ui.${format}.js`,
    },
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    target: 'esnext', // Modern JavaScript for Lit
    rollupOptions: {
      external: [], // Don't bundle Lit itself
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@iuav-ui': resolve(__dirname, 'src/index.ts'),
    },
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
  },
});