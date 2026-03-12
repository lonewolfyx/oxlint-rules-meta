export default {
    name: 'no-this-in-before-route-enter',
    meta: {
        source: 'vue',
        category: 'correctness',
        default: false,
        docs: {
            description: 'disallow `this` usage in a `beforeRouteEnter` method',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-this-in-before-route-enter.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
