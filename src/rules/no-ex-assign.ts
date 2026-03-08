export default {
    name: 'no-ex-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow reassigning exceptions in `catch` clauses',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ex-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
