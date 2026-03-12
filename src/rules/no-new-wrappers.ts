export default {
    name: 'no-new-wrappers',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
