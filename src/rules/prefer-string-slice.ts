export default {
    name: 'prefer-string-slice',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `String#slice()` over `String#substr()` and `String#substring()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
