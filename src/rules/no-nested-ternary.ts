export default {
    name: 'no-nested-ternary',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow nested ternary expressions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
