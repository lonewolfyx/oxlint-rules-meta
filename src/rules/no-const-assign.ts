export default {
    name: 'no-const-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow reassigning `const`, `using`, and `await using` variables',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
