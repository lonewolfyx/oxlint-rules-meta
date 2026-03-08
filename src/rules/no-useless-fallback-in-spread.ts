export default {
    name: 'no-useless-fallback-in-spread',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow useless fallback when spreading in object literals.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
