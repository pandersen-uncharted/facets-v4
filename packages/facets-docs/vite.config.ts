import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    assetsInclude: ['**/*.html'],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: '[name].[extname]'
            }
        },
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'facetsdocs',
            formats: ['iife'],
            fileName: () => `iife/index.js`
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        }
    }
});
