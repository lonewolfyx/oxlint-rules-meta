export default {
    name: 'guard-for-in',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require `for-in` loops to include an `if` statement',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/guard-for-in.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
