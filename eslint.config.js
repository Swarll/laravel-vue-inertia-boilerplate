import pluginVue from 'eslint-plugin-vue'

export default [
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['resources/js/**/*.{js,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                // Vue 3 Composition API globals
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                withDefaults: 'readonly',
            }
        },
        rules: {
            // Vue-specific rules
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'warn',
            'vue/require-default-prop': 'off',
            'vue/require-prop-types': 'warn',
            'vue/max-attributes-per-line': ['warn', {
                singleline: 3,
                multiline: 1
            }],
            'vue/html-indent': ['warn', 4],
            'vue/component-tags-order': ['warn', {
                order: ['template', 'script', 'style']
            }],

            // JavaScript best practices
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'prefer-const': 'warn',
            'no-var': 'error',

            // Code quality
            'eqeqeq': ['warn', 'always'],
            'curly': ['warn', 'all'],
            'semi': ['warn', 'never'],
            'quotes': ['warn', 'single'],
            'comma-dangle': ['warn', 'only-multiline'],
            'arrow-spacing': 'warn',
            'object-curly-spacing': ['warn', 'always'],
        }
    },
    {
        ignores: [
            'node_modules/**',
            'vendor/**',
            'public/**',
            'storage/**',
            'bootstrap/cache/**',
        ]
    }
]
