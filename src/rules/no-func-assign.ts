export default {
    name: 'no-func-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow reassigning `function` declarations',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
