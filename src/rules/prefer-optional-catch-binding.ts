export default {
    name: 'prefer-optional-catch-binding',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer omitting the `catch` binding parameter.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
