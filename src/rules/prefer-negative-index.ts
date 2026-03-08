export default {
    name: 'prefer-negative-index',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer negative index over `.length - index` when possible.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-negative-index.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
