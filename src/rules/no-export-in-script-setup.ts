export default {
    name: 'no-export-in-script-setup',
    meta: {
        source: 'vue',
        category: 'correctness',
        default: false,
        docs: {
            description: 'disallow `export` in `<script setup>`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-export-in-script-setup.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
