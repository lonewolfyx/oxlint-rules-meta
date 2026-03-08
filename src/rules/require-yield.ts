export default {
    name: 'require-yield',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require generator functions to contain `yield`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-yield.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
