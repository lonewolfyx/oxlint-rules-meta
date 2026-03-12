export default {
    name: 'consistent-empty-array-spread',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer consistent types when spreading a ternary in an array literal.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.html',
            category: 'pedantic',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
