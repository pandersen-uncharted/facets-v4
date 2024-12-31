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
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        }
    }
});
