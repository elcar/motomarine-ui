import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import fg from 'fast-glob';

const htmlFiles = fg.sync('sandbox/**/*.html', { absolute: true }); // Find all HTML files

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  root: './sandbox', // Root directory for the test files
  base: './', // Ensure relative paths for assets in production
  publicDir: resolve(__dirname, 'public'), // Ensure /public/ is still served
  resolve: {
    alias: {
      '@mtm-ui': resolve(__dirname, 'src/index.ts'),
    },
    extensions: ['.ts', '.js'],
  },
  build: {
    outDir: resolve(__dirname, 'demo'), // Output test build in `dist/test`
    emptyOutDir: true, // Clean old files before building
    rollupOptions: {
      input: htmlFiles, // Entry point for test build
      output: {
        entryFileNames: 'assets/mtm-ui.js',
        chunkFileNames: 'assets/mtm-ui.js',
        assetFileNames: 'assets/mtm-ui.[ext]',
      }
    },
  },
});