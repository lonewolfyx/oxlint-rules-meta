export default {
    name: 'no-useless-spread',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow unnecessary spread.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html',
            category: 'correctness',
        },
        fixable: 'fixable_dangerous_fix',
        schema: [],
    },
}
