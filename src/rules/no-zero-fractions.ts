export default {
    name: 'no-zero-fractions',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow number literals with zero fractions or dangling dots.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-zero-fractions.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
