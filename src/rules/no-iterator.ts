export default {
    name: 'no-iterator',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow the use of the `__iterator__` property',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
