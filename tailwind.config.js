import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/js/**/*.js',
        './node_modules/@nuxt/ui/dist/**/*.{js,vue,ts,mjs}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Buvera', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
            },
        },
    },

    plugins: [forms],
};
