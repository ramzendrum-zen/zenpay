import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));


export default defineConfig(({ mode }) => {
    const isLoaderBuild = mode === 'loader';
    return {
        plugins: [
            react(),
            tailwindcss(),
        ],
        server: {
            port: 5174,
            host: '0.0.0.0',
            strictPort: true,
            // Allow embedding as iframe from any merchant origin in dev
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-Frame-Options': 'ALLOWALL',
            },
            cors: true,
        },
        build: isLoaderBuild
            // ─── LOADER BUILD ───────────────────────────────────────────────
            // Compiles src/loader.ts → dist/zenwallet.js  (IIFE, no React)
            // This is what merchants include via <script src="...">
            ? {
                lib: {
                    entry: path.resolve(__dirname, 'src/loader.ts'),
                    name: 'ZenWallet',
                    fileName: () => 'zenwallet.js',
                    formats: ['iife'],
                },
                outDir: 'dist/loader',
                emptyOutDir: true,
                minify: true,
            }
            // ─── WEBAPP BUILD ────────────────────────────────────────────────
            // Standard Vite React build of the hosted checkout UI (the iframe content)
            // Also builds demo.html as a standalone test page for merchants
            : {
                outDir: 'dist/app',
                emptyOutDir: true,
                rollupOptions: {
                    input: {
                        main: path.resolve(__dirname, 'index.html'),
                        demo: path.resolve(__dirname, 'demo.html'),
                    }
                }
            }
    }
})
