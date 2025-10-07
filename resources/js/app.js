import './bootstrap'

// Import main CSS
import '../css/main.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy-js'
import vuelidate from '@vuelidate/core'
import {Ziggy} from "@/ziggy.js";

createInertiaApp({
    title: (title) => title || import.meta.env.VITE_APP_NAME || 'Laravel',
    resolve: (name) =>
    {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin })
    {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(vuelidate)
            .mount(el)
    },
    progress: {
        color: '#4F46E5'
    }
})