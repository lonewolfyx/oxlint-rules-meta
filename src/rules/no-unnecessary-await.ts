export default {
    name: 'no-unnecessary-await',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow awaiting non-promise values.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
