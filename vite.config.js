import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) =>
{
    const env = loadEnv(mode, process.cwd(), '');
    const isDev = command === 'serve';

    return {
        plugins: [
            laravel({
                input: ['resources/css/main.css', 'resources/js/app.js'],
                refresh: true
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            })
        ],
        resolve: {
            alias: {
                '@': '/resources/js'
            }
        },
        build: {
            manifest: true,
            outDir: 'public/build/',
            assetsDir: '',
        },
        server: isDev ? {
            host: '0.0.0.0',
            port: 5173,
            strictPort: true,
            origin: 'https://laravel-vue-inertia-boilerplate.ddev.site:5173',
            cors: {
                origin: ['https://laravel-vue-inertia-boilerplate.ddev.site', 'https://laravel-vue-inertia-boilerplate.ddev.site:33000'],
                credentials: true
            },
            hmr: {
                port: 5173,
                host: 'laravel-vue-inertia-boilerplate.ddev.site'
            }
        } : {}
    };
});
