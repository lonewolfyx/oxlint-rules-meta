export default {
    name: 'no-obj-calls',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow calling global object properties as functions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
