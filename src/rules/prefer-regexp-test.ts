export default {
    name: 'prefer-regexp-test',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
