export default {
    name: 'no-with',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow `with` statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
