export default {
    name: 'no-this-before-super',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow `this`/`super` before calling `super()` in constructors',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
