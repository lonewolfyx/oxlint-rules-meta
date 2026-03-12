export default {
    name: 'prefer-bigint-literals',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `BigInt` literals over the constructor.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-bigint-literals.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
