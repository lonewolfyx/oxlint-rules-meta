export default {
    name: 'no-self-compare',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow comparisons where both sides are exactly the same',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
