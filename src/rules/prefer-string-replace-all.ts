export default {
    name: 'prefer-string-replace-all',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `String#replaceAll()` over regex searches with the global flag.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
