export default {
    name: 'constructor-super',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require `super()` calls in constructors',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
