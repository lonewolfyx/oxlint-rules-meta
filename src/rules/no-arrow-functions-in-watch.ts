export default {
    name: 'no-arrow-functions-in-watch',
    meta: {
        source: 'vue',
        category: 'correctness',
        default: false,
        docs: {
            description: 'disallow using arrow functions to define watcher',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-arrow-functions-in-watch.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
