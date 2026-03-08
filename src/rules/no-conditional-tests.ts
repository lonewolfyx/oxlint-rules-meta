export default {
    name: 'no-conditional-tests',
    meta: {
        source: 'vitest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'disallow conditional tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-tests.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
