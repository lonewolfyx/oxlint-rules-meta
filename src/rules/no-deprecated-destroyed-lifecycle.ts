export default {
    name: 'no-deprecated-destroyed-lifecycle',
    meta: {
        source: 'vue',
        category: 'correctness',
        default: false,
        docs: {
            description: 'disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+)',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-destroyed-lifecycle.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
