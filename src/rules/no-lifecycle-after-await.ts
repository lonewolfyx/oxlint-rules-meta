export default {
    name: 'no-lifecycle-after-await',
    meta: {
        source: 'vue',
        category: 'correctness',
        default: false,
        docs: {
            description: 'disallow asynchronously registered lifecycle hooks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-lifecycle-after-await.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
