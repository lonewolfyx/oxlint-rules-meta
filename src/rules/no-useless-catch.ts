export default {
    name: 'no-useless-catch',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow unnecessary `catch` clauses',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-catch.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
